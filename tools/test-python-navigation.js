const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const nav = JSON.parse(fs.readFileSync(path.join(root, 'content/python/navigation.json'), 'utf8'));
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
  console.log(`Python sidebar renders ${expected} ordered lesson links and marks the current lesson.`);
});
