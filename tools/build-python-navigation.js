// Mechanical index for the course sidebar. Lesson JSON remains the source of truth.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const content = path.join(root, 'content', 'python');
const manifest = JSON.parse(fs.readFileSync(path.join(content, 'manifest.json'), 'utf8'));
const topicLines = fs.readFileSync(path.join(content, 'MASTER_TOPICS.md'), 'utf8')
  .split(/\r?\n/).filter(line => /^- \[[ x~]\] /.test(line));
const normalize = value => value.replaceAll('`', '').replace(/\s+/g, ' ').trim();
const topicOrder = new Map(topicLines.map((line, index) => [normalize(line.replace(/^- \[[ x~]\] /, '')), index]));
const levelNames = {
  foundations: 'Foundations', core: 'Core programming', intermediate: 'Intermediate engineering',
  advanced: 'Advanced Python', production: 'Production Python', expert: 'Expert and internals',
  'real-world': 'Real-world projects', certification: 'Certification preparation',
};
const foundationOrder = [
  'environment-execution-project-setup', 'identify-python-runtime-and-version',
  'browser-python-versus-installed-python', 'first-program-comments-names-and-operators',
  'statements-expressions-and-keywords', 'variables-assignment-and-identity',
  'names-bindings-identity-and-equality', 'input-output-conversion-and-fstrings',
  'data-types-and-type-conversion', 'text-bytes-complex-and-missing-values',
  'operators-expressions-and-precedence', 'division-remainder-powers-and-rounding',
  'floating-point-decimal-and-numerical-reasoning', 'chained-comparisons-and-boolean-values',
  'truthiness-short-circuiting-and-safe-conditions', 'conditional-statements-and-decision-tables',
  'structural-pattern-matching-and-guards', 'loops-range-and-repetition',
  'loop-exit-and-search-else', 'strings-slicing-and-text-methods',
  'unicode-string-boundaries-and-escapes', 'lists-mutation-copying-and-nested-data',
  'dictionaries-sets-and-tuples', 'functions-results-and-documentation',
  'values-expressions-control-flow', 'repl-script-and-module-execution',
  'cli-arguments-main-and-exit-code', 'script-path-and-utf8-file-boundary',
  'venv-interpreter-isolation-check', 'check-package-environment-before-installing',
  'syntax-style-and-behavior-checks', 'read-traceback-and-reproduce-bug',
  'git-workflow-for-python-projects',
];
const groups = Object.entries(levelNames).map(([level, title]) => ({level, title, lessons: []}));
const seen = new Set();
for (const [index, entry] of manifest.modules.entries()) {
  if (seen.has(entry.id)) throw new Error(`Duplicate Python module ID: ${entry.id}`);
  seen.add(entry.id);
  const lesson = JSON.parse(fs.readFileSync(path.join(content, entry.path), 'utf8'));
  if (lesson.id !== entry.id || lesson.level !== entry.level) throw new Error(`Manifest/lesson mismatch: ${entry.id}`);
  const group = groups.find(item => item.level === entry.level);
  if (!group) throw new Error(`Unknown Python level: ${entry.level}`);
  const firstTopic = Math.min(...entry.masterChecklist.map(item => topicOrder.get(normalize(item)) ?? Number.MAX_SAFE_INTEGER));
  group.lessons.push({id: entry.id, title: lesson.title, topicOrder: firstTopic, manifestOrder: index});
}
for (const group of groups) {
  group.lessons.sort((a, b) => {
    if (group.level === 'foundations') {
      const aOrder = foundationOrder.indexOf(a.id), bOrder = foundationOrder.indexOf(b.id);
      if (aOrder >= 0 || bOrder >= 0) return (aOrder < 0 ? Number.MAX_SAFE_INTEGER : aOrder) - (bOrder < 0 ? Number.MAX_SAFE_INTEGER : bOrder);
    }
    return a.topicOrder - b.topicOrder || a.manifestOrder - b.manifestOrder;
  });
  group.lessons = group.lessons.map(({id, title}) => ({id, title}));
}
const output = JSON.stringify({schemaVersion: 1, groups: groups.filter(group => group.lessons.length)}, null, 2) + '\n';
const target = path.join(content, 'navigation.json');
if (process.argv.includes('--check')) {
  if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== output) {
    console.error('Python navigation index is missing or stale. Run node tools/build-python-navigation.js.');
    process.exit(1);
  }
  console.log(`Validated Python navigation index for ${seen.size} lessons.`);
} else {
  fs.writeFileSync(target, output, 'utf8');
  console.log(`Built Python navigation index for ${seen.size} lessons.`);
}
