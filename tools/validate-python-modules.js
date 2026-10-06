const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'content', 'python', 'manifest.json');
const masterTopicsPath = path.join(root, 'content', 'python', 'MASTER_TOPICS.md');
const legacyLabExplanationPath = path.join(root, 'content', 'python', 'legacy-lab-explanations.json');
const legacyProjectConnectionPath = path.join(root, 'content', 'python', 'legacy-project-connections.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const legacyLabExplanations = JSON.parse(fs.readFileSync(legacyLabExplanationPath, 'utf8'));
const legacyProjectConnections = JSON.parse(fs.readFileSync(legacyProjectConnectionPath, 'utf8'));
const required = ['id', 'title', 'track', 'level', 'status', 'lastReviewed', 'sources', 'masterChecklist', 'whyItMatters', 'simpleExplanation', 'mentalModel', 'outcomes', 'realWorldExample', 'workedExample', 'procedure', 'commonMistakes', 'lab', 'projectConnection', 'assessment'];
let failures = 0;
let legacyQualityWarnings = 0;
const normalizeChecklist = value => value.replaceAll('`', '').replace(/\s+/g, ' ').trim();
const masterTopics = fs.readFileSync(masterTopicsPath, 'utf8')
  .split(/\r?\n/)
  .filter(line => /^- \[[ x~]\] /.test(line))
  .map(line => normalizeChecklist(line.replace(/^- \[[ x~]\] /, '')));
const mappedTopics = new Set();
const validLevels = new Set(['foundations', 'core', 'intermediate', 'advanced', 'production', 'expert', 'real-world', 'certification']);
const reviewDate = /^\d{4}-\d{2}-\d{2}$/;

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function requireText(lesson, key, label = key) {
  if (!hasText(lesson[key])) {
    console.error(`${lesson.id}: ${label} needs learner-facing text`);
    failures++;
  }
}

function warnMissingText(owner, key, label = key) {
  if (!hasText(owner?.[key])) {
    console.warn(`${owner?.id || 'legacy lesson'}: legacy quality gap — add ${label} before final Python release`);
    legacyQualityWarnings++;
  }
}

for (const entry of manifest.modules) {
  const file = path.join(path.dirname(manifestPath), entry.path);
  let lesson;
  try { lesson = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (error) { console.error(`Cannot read ${entry.id}: ${error.message}`); failures++; continue; }
  for (const key of required) if (lesson[key] === undefined || lesson[key] === null || lesson[key].length === 0) { console.error(`${entry.id}: missing ${key}`); failures++; }
  if (lesson.status !== 'complete') { console.error(`${entry.id}: status must be complete before manifest marks it complete`); failures++; }
  if (lesson.track !== 'python') { console.error(`${entry.id}: track must be python`); failures++; }
  if (!validLevels.has(lesson.level) || lesson.level !== entry.level) { console.error(`${entry.id}: level is invalid or differs from manifest`); failures++; }
  if (!reviewDate.test(lesson.lastReviewed) || Number.isNaN(Date.parse(`${lesson.lastReviewed}T00:00:00Z`))) { console.error(`${entry.id}: lastReviewed must be a valid YYYY-MM-DD date`); failures++; }
  if (!lesson.sources.every(hasText)) { console.error(`${entry.id}: every source note needs text`); failures++; }
  ['whyItMatters', 'simpleExplanation', 'mentalModel'].forEach(key => requireText(lesson, key));
  if (!lesson.outcomes.every(hasText) || lesson.outcomes.length < 3) { console.error(`${entry.id}: needs at least three written outcomes`); failures++; }
  for (const key of ['scenario', 'riskWithoutSetup', 'professionalApproach']) requireText(lesson.realWorldExample || {}, key, `realWorldExample.${key}`);
  for (const key of ['filename', 'code', 'expectedOutput', 'safeExperiment']) requireText(lesson.workedExample || {}, key, `workedExample.${key}`);
  if (!lesson.workedExample.code || !lesson.workedExample.expectedOutput || !lesson.workedExample.explanation?.length) { console.error(`${entry.id}: worked example is incomplete`); failures++; }
  if (!lesson.workedExample.explanation.every(hasText)) { console.error(`${entry.id}: worked example explanation needs text`); failures++; }
  for (const key of ['title', 'safety', 'starterCode', 'solution']) requireText(lesson.lab || {}, key, `lab.${key}`);
  if (!hasText(lesson.lab?.solutionExplanation) && !hasText(legacyLabExplanations[entry.id])) {
    console.warn(`${entry.id}: legacy quality gap — add lab.solutionExplanation before final Python release`);
    legacyQualityWarnings++;
  }
  if (!lesson.lab.starterCode || !lesson.lab.guidedSteps?.length || !lesson.lab.checks?.length || !lesson.lab.hints?.length || !lesson.lab.solution) { console.error(`${entry.id}: lab is incomplete`); failures++; }
  if (lesson.lab.testCode !== undefined && !hasText(lesson.lab.testCode)) { console.error(`${entry.id}: optional lab.testCode must contain executable checks`); failures++; }
  if (lesson.lab.testStdin !== undefined && (!hasText(lesson.lab.testStdin) || !hasText(lesson.lab.testCode))) { console.error(`${entry.id}: lab.testStdin requires executable testCode and nonempty sample input`); failures++; }
  if (lesson.lab.simulation) {
    const simulation = lesson.lab.simulation;
    if (!hasText(simulation.prompt) || !hasText(simulation.explanation) || !Array.isArray(simulation.choices) || simulation.choices.length < 2 || !simulation.choices.every(hasText) || !Number.isInteger(simulation.correctIndex) || simulation.correctIndex < 0 || simulation.correctIndex >= simulation.choices.length) {
      console.error(`${entry.id}: lab.simulation needs a prompt, choices, valid answer index and explanation`);
      failures++;
    }
  }
  for (const key of ['guidedSteps', 'checks', 'hints']) if (!lesson.lab[key]?.every(hasText)) { console.error(`${entry.id}: lab.${key} needs written entries`); failures++; }
  if (lesson.commonMistakes.length < 3) { console.error(`${entry.id}: needs at least three common mistakes`); failures++; }
  for (const mistake of lesson.commonMistakes) for (const key of ['mistake', 'why', 'avoid']) requireText(mistake, key, `commonMistakes.${key}`);
  const assessment = Array.isArray(lesson.assessment) ? lesson.assessment : (lesson.assessment?.questions || []);
  if (assessment.length < 3) { console.error(`${entry.id}: needs at least three assessment questions`); failures++; }
  for (const question of assessment) {
    requireText(question, 'question', 'assessment.question');
    if (!(hasText(question.answer) || (typeof question.answer === 'number' && Array.isArray(question.choices)))) {
      console.error(`${entry.id}: assessment.answer needs learner-facing text or a valid choice index`);
      failures++;
    }
    requireText(question, 'explanation', 'assessment.explanation');
  }
  const projectConnection = typeof lesson.projectConnection === 'string' ? legacyProjectConnections[entry.id] : lesson.projectConnection;
  for (const key of ['project', 'milestone', 'definitionOfDone']) warnMissingText(projectConnection, key, `projectConnection.${key}`);
  if (!lesson.masterChecklist.every(item => entry.masterChecklist.includes(item))) { console.error(`${entry.id}: manifest/checklist mapping differs`); failures++; }
  if (lesson.masterChecklist.length !== entry.masterChecklist.length) { console.error(`${entry.id}: lesson and manifest checklist counts differ`); failures++; }
  for (const item of entry.masterChecklist) mappedTopics.add(normalizeChecklist(item));
}

for (const topic of masterTopics) {
  if (!mappedTopics.has(topic)) {
    console.error(`Unmapped master topic: ${topic}`);
    failures++;
  }
}

if (failures) process.exit(1);
console.log(`Validated ${manifest.modules.length} complete Python module(s) and ${masterTopics.length} mapped master topic(s).`);
if (legacyQualityWarnings) console.log(`Quality-release note: ${legacyQualityWarnings} legacy lesson-quality gap(s) remain before the full Python release can be called complete.`);
