import { uploadFile } from '@whop/sdk/lib/upload-file';
import { File } from 'node:buffer';

type MockClient = {
  files: {
    create: jest.Mock;
    retrieve: jest.Mock;
  };
};

function makeClient(): MockClient {
  return {
    files: {
      create: jest.fn(),
      retrieve: jest.fn(),
    },
  };
}

async function advance(ms: number): Promise<void> {
  const anyJest = jest as any;
  if (typeof anyJest.advanceTimersByTimeAsync === 'function') {
    await anyJest.advanceTimersByTimeAsync(ms);
    return;
  }

  // Fallback for older Jest versions / configs.
  jest.advanceTimersByTime(ms);
  await Promise.resolve();
  await Promise.resolve();
}

async function flushMicrotasks(times: number = 5): Promise<void> {
  for (let i = 0; i < times; i++) await Promise.resolve();
}

describe('uploadFile', () => {
  beforeAll(() => {
    // Ensure `File` exists as a global for runtimes that don't define it.
    // Node 20+ defines File globally, but this keeps tests robust.
    if (typeof (globalThis as any).File === 'undefined') {
      (globalThis as any).File = File;
    }
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('uploads then polls until ready', async () => {
    jest.useFakeTimers();

    const client = makeClient();
    const presignedFetch = jest.fn((_url: string | URL | Request, _init: RequestInit = {}) => {
      return new Response(null, { status: 200 });
    });
    (client as any).fetch = presignedFetch;

    client.files.create.mockReturnValue({
      id: 'file_123',
      content_type: 'text/plain',
      filename: 'hello.txt',
      size: '2',
      upload_headers: { 'x-test-header': 'abc' },
      upload_status: 'pending',
      upload_url: 'https://example.com/upload',
      url: null,
    });

    client.files.retrieve
      .mockReturnValueOnce({
        id: 'file_123',
        content_type: 'text/plain',
        filename: 'hello.txt',
        size: '2',
        upload_status: 'processing',
        url: null,
      })
      .mockReturnValueOnce({
        id: 'file_123',
        content_type: 'text/plain',
        filename: 'hello.txt',
        size: '2',
        upload_status: 'ready',
        url: 'https://cdn.whop.com/file_123',
      });

    const input = new File(['hi'], 'hello.txt', { type: 'text/plain' });

    const promise = uploadFile(client as any, input, {
      pollIntervalMs: 1000,
      pollTimeoutMs: 60_000,
    });

    // `uploadFile()` immediately awaits `toFile()` and other await points; give it a few microtasks
    // to progress through create + upload before asserting call counts.
    await flushMicrotasks();

    expect(client.files.create).toHaveBeenCalledWith({ filename: 'hello.txt' }, undefined);
    expect(presignedFetch).toHaveBeenCalledTimes(1);

    const [uploadUrl, uploadInit] = presignedFetch.mock.calls[0]!;
    expect(uploadInit).toBeDefined();
    const init = uploadInit!;
    expect(uploadUrl).toBe('https://example.com/upload');
    expect(init.method).toBe('PUT');
    expect(init.body).toBe(input);
    expect(init.headers).toEqual({ 'x-test-header': 'abc' });

    expect(client.files.retrieve).toHaveBeenCalledTimes(1);

    await advance(1000);
    const result = await promise;

    expect(client.files.retrieve).toHaveBeenCalledTimes(2);
    expect(result.upload_status).toBe('ready');
    expect(result.url).toBe('https://cdn.whop.com/file_123');
  });

  test('throws if presigned upload fails', async () => {
    const client = makeClient();
    const presignedFetch = jest.fn((_url: string | URL | Request, _init: RequestInit = {}) => {
      return new Response(null, { status: 500, statusText: 'nope' });
    });
    (client as any).fetch = presignedFetch;

    client.files.create.mockReturnValue({
      id: 'file_123',
      content_type: null,
      filename: 'hello.txt',
      size: null,
      upload_headers: null,
      upload_status: 'pending',
      upload_url: 'https://example.com/upload',
      url: null,
    });

    await expect(uploadFile(client as any, new File(['hi'], 'hello.txt'))).rejects.toThrow(
      'uploadFile: upload failed (status 500 nope).',
    );

    expect(client.files.retrieve).not.toHaveBeenCalled();
  });

  test('throws if processing fails', async () => {
    const client = makeClient();
    const presignedFetch = jest.fn((_url: string | URL | Request, _init: RequestInit = {}) => {
      return new Response(null, { status: 200 });
    });
    (client as any).fetch = presignedFetch;

    client.files.create.mockReturnValue({
      id: 'file_123',
      content_type: null,
      filename: 'hello.txt',
      size: null,
      upload_headers: null,
      upload_status: 'pending',
      upload_url: 'https://example.com/upload',
      url: null,
    });

    client.files.retrieve.mockReturnValueOnce({
      id: 'file_123',
      content_type: null,
      filename: 'hello.txt',
      size: null,
      upload_status: 'failed',
      url: null,
    });

    await expect(uploadFile(client as any, new File(['hi'], 'hello.txt'))).rejects.toThrow(
      'uploadFile: processing failed (id: file_123).',
    );
  });

  test('throws on timeout', async () => {
    const client = makeClient();
    const presignedFetch = jest.fn((_url: string | URL | Request, _init: RequestInit = {}) => {
      return new Response(null, { status: 200 });
    });
    (client as any).fetch = presignedFetch;

    client.files.create.mockReturnValue({
      id: 'file_123',
      content_type: null,
      filename: 'hello.txt',
      size: null,
      upload_headers: null,
      upload_status: 'pending',
      upload_url: 'https://example.com/upload',
      url: null,
    });

    client.files.retrieve.mockReturnValueOnce({
      id: 'file_123',
      content_type: null,
      filename: 'hello.txt',
      size: null,
      upload_status: 'processing',
      url: null,
    });

    await expect(
      uploadFile(client as any, new File(['hi'], 'hello.txt'), {
        pollTimeoutMs: 0,
      }),
    ).rejects.toThrow('uploadFile: timed out waiting for file to become ready (id: file_123).');
  });
});
