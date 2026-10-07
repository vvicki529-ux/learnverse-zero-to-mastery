const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const nav = JSON.parse(fs.readFileSync(path.join(root, 'content/python/navigation.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'content/python/manifest.json'), 'utf8'));
const lessonIds = nav.groups.flatMap(group => group.lessons.map(lesson => lesson.id));
assert.equal(lessonIds.length, manifest.modules.length);
assert.equal(new Set(lessonIds).size, lessonIds.length);
assert.deepEqual(new Set(lessonIds), new Set(manifest.modules.map(module => module.id)));
const foundations = nav.groups.find(group => group.level === 'foundations').lessons.map(lesson => lesson.id);
assert.deepEqual(foundations.slice(0, 4), [
  'environment-execution-project-setup',
  'browser-python-versus-installed-python',
  'install-python-and-verify-selected-runtime',
  'identify-python-runtime-and-version',
]);
const realWorld = nav.groups.find(group => group.level === 'real-world').lessons.map(lesson => lesson.id);
assert.deepEqual(realWorld.filter(id => /^project-(one|two|three|four|five)-/.test(id)), [
  'project-one-study-summary-cli',
  'project-two-validated-study-csv',
  'project-three-local-api-client-boundary',
  'project-four-tested-progress-service',
  'project-five-study-progress-capstone',
]);
assert.equal(realWorld.at(-1), 'capstone-release-evidence-and-handover');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'content/catalog.json'), 'utf8'));
for (const track of catalog.tracks) {
  assert.deepEqual(track.levels.map(level => level.id),
    ['foundations', 'core', 'intermediate', 'advanced', 'expert-internals', 'real-world']);
}
const holder = {dataset: {track: 'python'}, innerHTML: ''};
const context = {
  location: {hash: '#python-module/variables-assignment-and-identity'},
  fetch: async () => ({ok: true, json: async () => nav}),
  esc: value => String(value).replace(/[&<>"']/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character])),
};
vm.runInNewContext(fs.readFileSync(path.join(root, 'python-navigation.js'), 'utf8'), context);
context.renderPythonCourseOutline(holder, 'Python');
setImmediate(() => {
  const expected = nav.groups.reduce((count, group) => count + group.lessons.length, 0);
  assert.equal(holder.innerHTML.split('class="outline-lesson"').length - 1, expected);
  assert.match(holder.innerHTML, /aria-current="page"/);
  assert.match(holder.innerHTML, /Foundations/);
  assert.match(holder.innerHTML, /Expert and internals/);
  const styles = fs.readFileSync(path.join(root, 'header-navigation.css'), 'utf8');
  assert.match(styles, /\.course-outline-group\[open\] summary \.outline-count\s*\{transform:none\}/);
  assert.match(styles, /body\.dark \.site-header\{background:#111f34/);
  assert.match(fs.readFileSync(path.join(root, 'index.html'), 'utf8'), /header-navigation\.css\?v=dark-header01/);
  console.log(`Python sidebar renders ${expected} ordered lesson links and marks the current lesson.`);
});
