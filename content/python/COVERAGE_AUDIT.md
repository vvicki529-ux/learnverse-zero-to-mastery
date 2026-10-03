# Python coverage evidence audit

Reviewed: 2026-10-02

## What this audit measures

`MASTER_TOPICS.md` contains high-level topic statements. Each statement is wired to one or more modular lessons through `content/python/manifest.json`. This audit is deliberately stricter than the structural validator: a mapped topic is not automatically considered deep coverage just because its name appears in a lesson.

## Current structural evidence

- 101 modular Python lessons are in the manifest.
- 196 distinct master-checklist statements appear in the lesson mappings. The master checklist itself groups many statements under 136 visible checklist rows, so the two totals are not interchangeable.
- 90 distinct statements are supported by two or more modules.
- 106 distinct statements currently have only one mapped module. A single module can still be good coverage, but it must be manually reviewed before the Python track can be called complete.

## Manual-review queue: broad or high-risk single-module coverage

The following subjects are currently represented by one broad module or one focused module and require direct depth review before release. They are **not** proof of completion merely because they are mapped.

1. Interpreter internals and extensions: tokenization/AST/bytecode/import machinery; CPython object model; C API; buffer protocol; embedding; stable ABI; alternative implementations.
2. Scientific/data workflows: NumPy/pandas concepts, plotting, numerical reproducibility, binary/array interoperability, high-performance boundaries.
3. Delivery and operations: cloud/serverless, CI/CD, SLO/SLI, supply chain, project documentation, compatibility/version upgrades, team practices.
4. Specialist pathways: backend, data engineering, ML integration, QA, automation, GUI, embedded/IoT.
5. Computer-science breadth: discrete math, algorithm engineering, advanced sorting/searching, trees/tries/union-find, randomized algorithms.
6. Framework-specific depth: one current module maps Flask/FastAPI/Django concepts but does not yet establish a verified versioned deep path.
7. Certification mock/exam coverage: it remains in the separate certification area and is deliberately not changed by this Python-track batch.

## Review rule for each remaining statement

A statement may move from this queue only after a lesson or a clearly bounded lesson set provides all of the following:

- beginner-friendly explanation and why-it-matters context;
- correct, version-appropriate worked example;
- guided in-site practice with hints, checks, and solution;
- common mistakes and a three-question check;
- source text and review date;
- an aligned project milestone.

## Next release-audit action

Audit the Expert/internals modules first, then scientific/data modules, then delivery/operations and specialist-pathway breadth. Add dedicated lessons where a broad module cannot meet the review rule. Do not publish the current local batch until this queue has evidence-based closure.
