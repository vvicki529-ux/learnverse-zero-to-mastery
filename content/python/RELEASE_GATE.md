# Python local-release gate

This file prevents a structural pass from being described as full mastery coverage.

## Publication exception — 2026-10-03

The user explicitly requested publication of the current work and testing on the live GitHub Pages site before the full Python completion gate is met. Publishing this snapshot is **not** evidence that Python is 100% complete or that the labs execute Python in-browser. The completion blockers below remain open and must be resolved before a full-release claim.

## Current local evidence — 2026-10-03

- Modular learner-facing lessons wired in the manifest: **286**.
- Master-topic statements mapped by at least one lesson: **136** in the validator's master-topic inventory.
- Distinct lesson checklist statements: **205** in the depth-audit inventory.
- Statements with only one lesson mapping: **43**. These are a review queue, not proof that a learner has multiple explanations or enough depth.
- `node tools/validate-python-modules.js`: pass.
- `node tools/audit-python-depth.js`: pass; reports the depth-review queue.
- `node tools/check-python-code-syntax.js <python>`: pass for **568** Python snippets; checks syntax only. The pytest two-file example remains unexecuted locally; the built-in unittest companion ran successfully.
- `node tools/verify-python-runtime-examples.js <python>`: pass for **84** explicitly reviewed, local-only snippets from **42** lessons; this is an opt-in runtime smoke set, not coverage of the full curriculum.
- Master checklist status: **57** individually evidenced `[x]`, **79** mapped/pending-review `[~]`; this is an honest review state, not a claim that every lesson is shallow. Individual evidence is recorded in `content/python/DEPTH_EVIDENCE.md`.
- `node --check python-module-viewer.js`: pass.
- `git diff --check`: pass.
- Preservation check on 2026-10-02: the complete local `git status --short` change set was searched for certification, cert-prep, mock, and exam paths; no certification-area change was found.

## Release blockers

Do **not** call the Python track deep-complete merely because the checks above pass. The user-authorized snapshot publication is separate from full-release readiness. Before a full-completion claim:

1. Review and deepen the remaining single-mapped topic statements, prioritizing broad specialist/framework, computer-science, and production-operation statements.
2. Open representative lessons from every level in the browser and confirm navigation, theory, lab, answer, project, and quick-check rendering.
   - On 2026-10-03, the browser tool explicitly denied access to the local preview URL. Do not retry through another browser or route without renewed user authorization. Static route checks pass, but visual rendering remains unverified.
   - Required representative route set: one Foundations, Core, Intermediate, Advanced, Production, Expert, and Real-world module route.
   - Confirm the module manifest path resolves, the module viewer displays the source/review/project sections, and the guided-lab solution toggle renders without a JavaScript error.
3. Re-run all checks after the final content batch.
4. Confirm no certification-section file was changed by the Python batch.
5. Review the full published diff again before claiming final completion; do not treat the user-authorized snapshot commit as proof of mastery coverage.

## Explicit lab limitation

The current in-site labs are guided local practice with starter code, hints, checks, and solutions. They are **not** a bundled Python execution runtime. Do not present them as executable code runners until a real isolated runtime and tests are implemented and validated.
The process-pool lesson has an in-site answer-checking concept simulation, but this does not execute Python or spawn a process. It must not be counted as satisfying the code-runner requirement.

## Preview smoke-check attempt — 2026-10-02

- Local static preview HTTP checks passed for `/` and `/content/python/manifest.json` (both returned HTTP 200).
- Interactive browser smoke checks remain pending: the app-browser integration could not initialize on this host. This is recorded as pending evidence, not as a rendering pass.
