const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content', 'python', 'manifest.json'), 'utf8'));
const viewer = fs.readFileSync(path.join(root, 'python-module-viewer.js'), 'utf8');
const errors = [];

if (!viewer.includes('#python-module/')) errors.push('Module viewer has no #python-module/ route handler marker.');
for (const entry of manifest.modules) {
  const lessonPath = path.join(root, 'content', 'python', entry.path);
  if (!fs.existsSync(lessonPath)) errors.push(`Missing module path: ${entry.path}`);
  if (!entry.id || !entry.path.endsWith('/lesson.json')) errors.push(`Invalid module route entry: ${JSON.stringify(entry)}`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Validated ${manifest.modules.length} Python manifest paths and module-viewer route marker.`);
