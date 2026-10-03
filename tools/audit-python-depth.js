/*
 * Reports master-topic statements that have only one module mapping.
 * One mapping can still be a good lesson; it is intentionally reported as a
 * human depth-review queue rather than claimed as proof of broad coverage.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'content', 'python', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const coverage = new Map();
const problems = [];

for (const moduleEntry of manifest.modules) {
  const lessonPath = path.join(root, 'content', 'python', moduleEntry.path);
  if (!fs.existsSync(lessonPath)) {
    problems.push(`Missing lesson file: ${moduleEntry.path}`);
    continue;
  }
  const lesson = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
  for (const topic of lesson.masterChecklist || []) {
    if (!coverage.has(topic)) coverage.set(topic, []);
    coverage.get(topic).push(lesson.id);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

const singleMapped = [...coverage.entries()]
  .filter(([, lessonIds]) => lessonIds.length === 1)
  .sort(([left], [right]) => left.localeCompare(right));

console.log(`Depth-audit inventory: ${manifest.modules.length} modules, ${coverage.size} mapped topic statements.`);
console.log(`Topic statements with one lesson mapping (manual depth-review queue): ${singleMapped.length}`);
for (const [topic, lessonIds] of singleMapped) {
  console.log(`- ${topic}\n  Evidence: ${lessonIds[0]}`);
}
