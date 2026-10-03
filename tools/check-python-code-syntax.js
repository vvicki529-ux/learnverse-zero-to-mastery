// Parse learner-facing Python code without executing it.
// Usage: node tools/check-python-code-syntax.js <path-to-python-executable>
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content/python/manifest.json'), 'utf8'));
const python = process.argv[2];
if (!python) {
  console.error('Provide a Python executable path.');
  process.exit(2);
}

const snippets = [];
for (const entry of manifest.modules) {
  const file = path.join(root, 'content/python', entry.path);
  const lesson = JSON.parse(fs.readFileSync(file, 'utf8'));
  // Some Python-course lessons deliberately show TOML or a Dockerfile.
  const filename = lesson.workedExample?.filename || '';
  if (filename.endsWith('.py')) {
    snippets.push({ label: entry.id + ' worked example', code: lesson.workedExample.code });
  }
  const solution = lesson.lab?.solution;
  if (typeof solution === 'string' && solution.trim() && !filename.endsWith('.toml')) {
    snippets.push({ label: entry.id + ' lab solution', code: solution });
  }
}

const parser = [
  'import ast, json, sys',
  'items = json.load(sys.stdin)',
  'failures = []',
  'for item in items:',
  '    try:',
  '        ast.parse(item["code"], filename=item["label"])',
  '    except SyntaxError as error:',
  '        failures.append(item["label"] + ": line " + str(error.lineno) + ": " + error.msg)',
  'print("\\n".join(failures))',
  'sys.exit(1 if failures else 0)',
].join('\n');
const result = spawnSync(python, ['-c', parser], {
  input: JSON.stringify(snippets),
  encoding: 'utf8',
  timeout: 30000,
  maxBuffer: 512 * 1024,
});
if (result.error || result.status === null) {
  console.error(result.error?.message || 'Python parser did not finish.');
  process.exit(1);
}
if (result.stdout.trim()) console.log(result.stdout.trim());
if (result.stderr.trim()) console.error(result.stderr.trim());
console.log('Parsed ' + snippets.length + ' learner-facing Python snippets; parser exit ' + result.status + '.');
process.exit(result.status);
