const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'content/catalog.json'), 'utf8'));
const topicMap = JSON.parse(fs.readFileSync(path.join(root, 'content/topic-map.json'), 'utf8'));
const topicExpansion = JSON.parse(fs.readFileSync(path.join(root, 'content/topic-expansion.json'), 'utf8'));
for (const track of catalog.tracks) {
  for (const level of track.levels) {
    level.topics = [...level.topics,
      ...(topicMap[track.id]?.[level.id] || []),
      ...(topicExpansion[track.id]?.[level.id] || [])];
  }
}
const navigation = JSON.parse(fs.readFileSync(path.join(root, 'content/python/navigation.json'), 'utf8'));
const countNode = {isConnected: true, textContent: ''};
const out = {innerHTML: '', querySelector: selector => selector === '[data-python-count]' ? countNode : null};
const context = {
  catalog,
  current: null,
  out,
  progress: () => [],
  nextLesson: () => 'Python: begin with setup.',
  esc: value => String(value).replace(/[&<>"']/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character])),
  document: {querySelectorAll: () => []},
  location: {hash: ''},
  fetch: async url => {
    assert.match(url, /^content\/python\/navigation\.json\?v=/);
    return {ok: true, json: async () => navigation};
  },
};
vm.runInNewContext(fs.readFileSync(path.join(root, 'professional-ui.js'), 'utf8'), context);
context.home();
setImmediate(() => {
  const expected = navigation.groups.reduce((sum, group) => sum + group.lessons.length, 0);
  assert.equal(countNode.textContent, `${expected} guided lessons · theory, labs, projects`);
  assert.match(out.innerHTML, /6<\/strong><br><small>learning tracks<\/small>/);
  assert.doesNotMatch(out.innerHTML, /43 concepts|253.*ordered concepts/);
  assert.match(out.innerHTML, /42 mapped topics/);
  console.log(`Homepage shows ${expected} Python lessons from the course index and ${catalog.tracks.length} tracks.`);
});
