# Python verification boundary

The Python track's 136 master-topic entries are mapped to 19 modular lessons. Each lesson is structurally validated for its source record, review date, explanation, worked example, common mistakes, guided in-site lab, project connection, and assessment.

## What is verified in this repository

- `node tools/validate-python-modules.js` verifies every required lesson field and that every master-topic entry maps to a module.
- The published static site renders the modular lesson route, including its editable guided-lab surface, progressive hints, self-check, and solution.
- JSON parsing and internal manifest paths are verified by the validator and browser fetch path.

## What must not be overstated

This static project does **not** bundle a Python interpreter/runtime. The current lab editor is a guided practice surface; it does not execute arbitrary Python or run hidden tests. The workstation used for this pass also has no accessible `python`/`py` executable, so runtime execution of every code block could not be independently performed here.

Before describing this track as containing executable Python labs, add an intentionally selected, offline-capable local Python runtime and a sandbox/timeout design, then extend the validator to run each worked example and lab solution. Until then, the lessons remain self-contained instructional and guided-practice content, not a runtime-verified execution environment.
