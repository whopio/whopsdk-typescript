// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { Whop } from '@whop/sdk';

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { Whop } from "@whop/sdk";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: Whop)`
    : `const run: (${functionSource.client}: Whop) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: tsLine } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    // We add two lines in the beginning, for the client import and the function declaration.
    // So the actual (zero-based) line number is tsLine - 2.
    const lineNumber = tsLine - 2;
    const line = code.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    at line ${lineNumber + 1}\n      ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.apps.create',
    'client.apps.list',
    'client.apps.retrieve',
    'client.apps.update',
    'client.invoices.create',
    'client.invoices.list',
    'client.invoices.retrieve',
    'client.invoices.void',
    'client.courseLessonInteractions.list',
    'client.courseLessonInteractions.retrieve',
    'client.products.create',
    'client.products.delete',
    'client.products.list',
    'client.products.retrieve',
    'client.products.update',
    'client.companies.create',
    'client.companies.list',
    'client.companies.retrieve',
    'client.companies.update',
    'client.webhooks.unwrap',
    'client.plans.create',
    'client.plans.delete',
    'client.plans.list',
    'client.plans.retrieve',
    'client.plans.update',
    'client.entries.approve',
    'client.entries.deny',
    'client.entries.list',
    'client.entries.retrieve',
    'client.forumPosts.create',
    'client.forumPosts.list',
    'client.forumPosts.retrieve',
    'client.forumPosts.update',
    'client.transfers.create',
    'client.transfers.list',
    'client.transfers.retrieve',
    'client.ledgerAccounts.retrieve',
    'client.memberships.cancel',
    'client.memberships.list',
    'client.memberships.pause',
    'client.memberships.resume',
    'client.memberships.retrieve',
    'client.memberships.update',
    'client.authorizedUsers.list',
    'client.authorizedUsers.retrieve',
    'client.appBuilds.create',
    'client.appBuilds.list',
    'client.appBuilds.promote',
    'client.appBuilds.retrieve',
    'client.shipments.create',
    'client.shipments.list',
    'client.shipments.retrieve',
    'client.checkoutConfigurations.create',
    'client.checkoutConfigurations.list',
    'client.checkoutConfigurations.retrieve',
    'client.messages.create',
    'client.messages.list',
    'client.messages.retrieve',
    'client.messages.update',
    'client.chatChannels.list',
    'client.chatChannels.retrieve',
    'client.chatChannels.update',
    'client.users.checkAccess',
    'client.users.retrieve',
    'client.payments.create',
    'client.payments.list',
    'client.payments.refund',
    'client.payments.retrieve',
    'client.payments.retry',
    'client.payments.void',
    'client.supportChannels.create',
    'client.supportChannels.list',
    'client.supportChannels.retrieve',
    'client.experiences.attach',
    'client.experiences.create',
    'client.experiences.delete',
    'client.experiences.detach',
    'client.experiences.duplicate',
    'client.experiences.list',
    'client.experiences.retrieve',
    'client.experiences.update',
    'client.reactions.create',
    'client.reactions.list',
    'client.reactions.retrieve',
    'client.members.list',
    'client.members.retrieve',
    'client.forums.list',
    'client.forums.retrieve',
    'client.forums.update',
    'client.promoCodes.create',
    'client.promoCodes.delete',
    'client.promoCodes.list',
    'client.promoCodes.retrieve',
    'client.courses.create',
    'client.courses.delete',
    'client.courses.list',
    'client.courses.retrieve',
    'client.courses.update',
    'client.courseChapters.create',
    'client.courseChapters.delete',
    'client.courseChapters.list',
    'client.courseChapters.retrieve',
    'client.courseChapters.update',
    'client.courseLessons.create',
    'client.courseLessons.delete',
    'client.courseLessons.list',
    'client.courseLessons.markAsCompleted',
    'client.courseLessons.retrieve',
    'client.courseLessons.start',
    'client.courseLessons.submitAssessment',
    'client.courseLessons.update',
    'client.reviews.list',
    'client.reviews.retrieve',
    'client.courseStudents.list',
    'client.courseStudents.retrieve',
    'client.accessTokens.create',
    'client.notifications.create',
    'client.disputes.list',
    'client.disputes.retrieve',
    'client.disputes.submitEvidence',
    'client.disputes.updateEvidence',
    'client.refunds.list',
    'client.refunds.retrieve',
    'client.withdrawals.list',
    'client.withdrawals.retrieve',
    'client.accountLinks.create',
    'client.setupIntents.list',
    'client.setupIntents.retrieve',
    'client.paymentMethods.list',
    'client.paymentMethods.retrieve',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        message: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        message: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Whop({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
        logLines,
        errLines,
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
