# Python module completion schema

Each lesson JSON must include all of the following before its master-checklist items can be set to `covered well`:

1. `lastReviewed` and `sources`
2. `whyItMatters`, `simpleExplanation`, a mental model, and observable outcomes
3. A verified `workedExample` with expected output and a safe experiment
4. A real-world scenario and professional approach
5. A guided `lab` with starter code/procedure, checks, hints, and solution
6. At least three `commonMistakes`
7. A `projectConnection`
8. An assessed understanding check

The front-end must load the JSON directly; do not duplicate the lesson body into one monolithic script. A validation tool must reject modules missing these fields.
