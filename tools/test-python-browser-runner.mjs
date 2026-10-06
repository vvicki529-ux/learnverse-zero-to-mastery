import assert from 'node:assert/strict';

const messages = [];
globalThis.self = {postMessage(message) { messages.push(message); }};
await import('../python-runner-worker.mjs');
assert.equal(messages.shift()?.type, 'ready', 'self-hosted Pyodide runtime must initialize');

async function run(code, stdin = '') {
  await self.onmessage({data: {type: 'run', code, stdin}});
  const result = messages.shift();
  assert.equal(result?.type, 'result');
  return result;
}

const hello = await run('print("Hello, learner!")');
assert.equal(hello.exitCode, 0);
assert.equal(hello.stdout, 'Hello, learner!\n');
assert.equal(hello.stderr, '');

const input = await run('print(input().upper())', 'snowflake\n');
assert.equal(input.exitCode, 0);
assert.equal(input.stdout, 'SNOWFLAKE\n');

const failure = await run('raise ValueError("expected failure")');
assert.equal(failure.exitCode, 1);
assert.match(failure.stderr, /ValueError: expected failure/);

const isolated = await run('print("fresh scope")');
assert.equal(isolated.exitCode, 0);
assert.equal(isolated.stdout, 'fresh scope\n');

const asynchronous = await run('import asyncio\nasync def answer():\n    await asyncio.sleep(0)\n    return 42\nprint(await answer())');
assert.equal(asynchronous.exitCode, 0);
assert.equal(asynchronous.stdout, '42\n');
console.log('Self-hosted Python runner: output, input, errors, repeat runs, and top-level await passed.');
