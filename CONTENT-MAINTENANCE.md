# Content maintenance

Every lesson should live as a focused JSON or Markdown record below `content/<track>/<level>/<topic>/` as the curriculum is expanded. Keep a `lastReviewed` date, original explanation, runnable/simulated exercise, safety notes where relevant, and a source-version note in the track coverage file.

To add a lesson: create its topic file, add its title to the relevant topic map, include a stable ID, then map it in `content/certification-map.json` when it covers a certification objective. Use `// VERIFY` for an uncertain factual statement rather than guessing.

The legacy certification application outside this folder is intentionally separate. Do not edit it while updating the mastery curriculum.
