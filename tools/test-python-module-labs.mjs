// Run authored lesson checks against their own solutions in the bundled browser Python worker.
// Invoke from the mastery root: node tools/test-python-module-labs.mjs [level]
import fs from 'node:fs';

const level = process.argv[2];
const checkStarters = process.argv.includes('--check-starters');
const manifest = JSON.parse(fs.readFileSync('content/python/manifest.json', 'utf8'));
const entries = manifest.modules.filter(entry => !level || entry.level === level);
const messages = [];
globalThis.self = { postMessage: message => messages.push(message) };
await import('../python-runner-worker.mjs');

let checked = 0;
let failed = 0;
let withoutTests = 0;
let startersThatPassed = 0;
for (const entry of entries) {
  const lesson = JSON.parse(fs.readFileSync(`content/python/${entry.path}`, 'utf8'));
  if (!lesson.lab?.testCode) {
    withoutTests++;
    continue;
  }
  checked++;
  await self.onmessage({
    data: {
      type: 'run',
      code: `${lesson.lab.solution}\n${lesson.lab.testCode}`,
      stdin: lesson.lab.testStdin || '',
    },
  });
  const result = messages.at(-1);
  if (!result || result.type !== 'result' || result.exitCode !== 0) {
    failed++;
    console.error(`${entry.id}: ${result?.stderr || 'no browser runner result'}`);
  }
  if (checkStarters) {
    await self.onmessage({
      data: {
        type: 'run',
        code: `${lesson.lab.starterCode}\n${lesson.lab.testCode}`,
        stdin: lesson.lab.testStdin || '',
      },
    });
    const starterResult = messages.at(-1);
    if (starterResult?.type === 'result' && starterResult.exitCode === 0) {
      startersThatPassed++;
      console.error(`${entry.id}: unfinished starter passed all checks`);
    }
  }
}

console.log(`Browser lesson labs${level ? ` (${level})` : ''}: ${checked} checked, ${withoutTests} without executable checks, ${failed} failed${checkStarters ? `, ${startersThatPassed} unfinished starters passed` : ''}.`);
if (failed || startersThatPassed) process.exitCode = 1;
