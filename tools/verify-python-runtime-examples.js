// Run only explicitly reviewed, local-only Python examples and solutions.
// Usage: node tools/verify-python-runtime-examples.js <path-to-python-executable>
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const python = process.argv[2];
if (!python) {
  console.error('Provide a Python executable path.');
  process.exit(2);
}
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content/python/manifest.json'), 'utf8'));
const selected = JSON.parse(fs.readFileSync(path.join(__dirname, 'runtime-smoke-python.json'), 'utf8')).lessonIds;
if (new Set(selected).size !== selected.length) throw new Error('Duplicate runtime-smoke lesson ID');
const byId = new Map(manifest.modules.map(entry => [entry.id, entry]));
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'learnverse-python-smoke-'));
const safeParent = fs.realpathSync(os.tmpdir());
if (fs.realpathSync(path.dirname(work)) !== safeParent) throw new Error('Temporary directory is outside the intended parent');
let failures = 0;
let runs = 0;
try {
  for (const id of selected) {
    const entry = byId.get(id);
    if (!entry) { console.error(`${id}: not in Python manifest`); failures++; continue; }
    const lesson = JSON.parse(fs.readFileSync(path.join(root, 'content/python', entry.path), 'utf8'));
    for (const [label, code, expected] of [
      ['worked example', lesson.workedExample.code, lesson.workedExample.expectedOutput],
      ['lab solution', lesson.lab.solution, null],
    ]) {
      const result = spawnSync(python, ['-I', '-c', 'import sys; exec(sys.stdin.read())'], {
        cwd: work, input: code, encoding: 'utf8', timeout: 15000, maxBuffer: 32 * 1024,
        env: { ...process.env, PYTHONDONTWRITEBYTECODE: '1', PYTHONIOENCODING: 'utf-8' },
      });
      runs++;
      if (result.error || result.status !== 0) {
        console.error(`${id} ${label}: ${result.error?.message || `exit ${result.status}`}\n${result.stderr || ''}`);
        failures++;
      } else if (expected !== null && result.stdout.replace(/\r\n/g, '\n').trim() !== expected.replace(/\r\n/g, '\n').trim()) {
        console.error(`${id} ${label}: output differed. Expected ${JSON.stringify(expected.trim())}; got ${JSON.stringify(result.stdout.trim())}`);
        failures++;
      }
    }
  }
} finally {
  // Delete only this freshly created and parent-verified temporary directory.
  if (fs.realpathSync(path.dirname(work)) !== safeParent) throw new Error('Refusing unsafe temporary cleanup');
  fs.rmSync(work, { recursive: true, force: false });
}
console.log(`Runtime smoke: ${runs} reviewed Python snippet(s), ${failures} failure(s).`);
process.exit(failures ? 1 : 0);
