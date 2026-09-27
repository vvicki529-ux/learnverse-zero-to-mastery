const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'content', 'python', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const required = ['id', 'title', 'track', 'level', 'status', 'lastReviewed', 'sources', 'masterChecklist', 'whyItMatters', 'simpleExplanation', 'mentalModel', 'outcomes', 'realWorldExample', 'workedExample', 'procedure', 'commonMistakes', 'lab', 'projectConnection', 'assessment'];
let failures = 0;

for (const entry of manifest.modules) {
  const file = path.join(path.dirname(manifestPath), entry.path);
  let lesson;
  try { lesson = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (error) { console.error(`Cannot read ${entry.id}: ${error.message}`); failures++; continue; }
  for (const key of required) if (lesson[key] === undefined || lesson[key] === null || lesson[key].length === 0) { console.error(`${entry.id}: missing ${key}`); failures++; }
  if (lesson.status !== 'complete') { console.error(`${entry.id}: status must be complete before manifest marks it complete`); failures++; }
  if (!lesson.workedExample.code || !lesson.workedExample.expectedOutput || !lesson.workedExample.explanation?.length) { console.error(`${entry.id}: worked example is incomplete`); failures++; }
  if (!lesson.lab.starterCode || !lesson.lab.guidedSteps?.length || !lesson.lab.checks?.length || !lesson.lab.hints?.length || !lesson.lab.solution) { console.error(`${entry.id}: lab is incomplete`); failures++; }
  if (lesson.commonMistakes.length < 3) { console.error(`${entry.id}: needs at least three common mistakes`); failures++; }
  if (lesson.assessment.length < 3) { console.error(`${entry.id}: needs at least three assessment questions`); failures++; }
  if (!lesson.masterChecklist.every(item => entry.masterChecklist.includes(item))) { console.error(`${entry.id}: manifest/checklist mapping differs`); failures++; }
}

if (failures) process.exit(1);
console.log(`Validated ${manifest.modules.length} complete Python module(s).`);
