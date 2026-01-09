#!/usr/bin/env -S npm run tsn -T
/* eslint-disable no-console */

/**
 * Real upload example (create -> presigned PUT -> poll until ready).
 *
 * Usage:
 *   WHOP_API_KEY=... pnpm tsn -T examples/upload-file.ts ./path/to/file.png
 *
 * Optional:
 *   WHOP_BASE_URL=https://api.whop.com/api/v1
 */

import fs from 'node:fs';
import path from 'node:path';
import { File as NodeFile } from 'node:buffer';
import Whop from '@whop/sdk';

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error(
      'Missing file path.\n\nUsage:\n  WHOP_API_KEY=... pnpm tsn -T examples/upload-file.ts ./path/to/file',
    );
    process.exit(1);
  }

  // `toFile()` / uploads require a global File. Node 20+ has it, but this keeps the example usable elsewhere.
  if (typeof (globalThis as any).File === 'undefined') {
    (globalThis as any).File = NodeFile;
  }

  const apiKey = process.env['WHOP_API_KEY'];
  if (!apiKey) {
    console.error('Missing WHOP_API_KEY env var.');
    process.exit(1);
  }

  const client = new Whop({
    apiKey,
    baseURL: process.env['WHOP_BASE_URL'] ?? undefined,
  });

  const absPath = path.resolve(process.cwd(), filePath);
  const filename = path.basename(absPath);
  const bytes = fs.readFileSync(absPath);

  // Content-Type is optional. If you know it, set it.
  const file = new NodeFile([bytes], filename, { type: 'application/octet-stream' });

  console.log(`Uploading ${filename} (${bytes.byteLength} bytes)...`);
  const result = await client.files.upload(file, { filename });

  console.log('Upload complete:');
  console.log(JSON.stringify(result, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
