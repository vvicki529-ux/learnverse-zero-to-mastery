# Full curriculum expansion progress

### Production failure-path tests — 2026-10-04

- Added two focused learner-facing Python lessons: **Test a failed save without hiding the failure** and **Test bounded retries without waiting**. They teach injected dependencies, controlled mock failures, preserved exception causes, finite retry limits, and no-wait tests. Each has beginner theory, a worked example, guided practice with hints/checks/solution, common mistakes, three explained questions, official source text, review date, and aligned project milestone.
- Both are wired into the Python manifest. Local checks pass for **288** complete modules and routes, **572** parseable snippets, and **88** reviewed runtime-smoke snippets with zero failures. This does not establish 100% Python mastery or in-browser Python execution.
- Exact next batch: review remaining Production test boundaries (integration versus unit contracts and unexpected exception paths), then continue pending Advanced/Expert depth items and the offline in-browser runner. The 2026-10-03 snapshot was committed locally as `83d0f1a`; remote publication had failed because GitHub network/write access was unavailable. This batch is local until a successful push.

### User-authorized GitHub snapshot — 2026-10-03

- The user requested publication of all current local course work now and live testing on GitHub Pages. This supersedes the earlier no-push instruction for this snapshot only; it does not change the active full Python completion goal or the explicit offline-runner/visual/depth limitations.
- Local pre-publication checks pass for 286 Python modules, 568 parseable snippets, 84 opt-in runtime snippets, six-track coverage structure, JavaScript syntax and diff whitespace. The live site still needs deployment and browser verification after push. Python is not being described as 100% complete.

### Production testing isolation batch — 2026-10-03

- Added two focused Production lessons: **Test file output without touching real user files** teaches an injected output path, `TemporaryDirectory`, exact-content assertions and cleanup; **Make time-based behavior testable with an injected clock** teaches fixed aware-UTC instants and before/equal/after deadline checks. Both include original beginner theory, worked examples, guided in-site labs with hints/checks/solutions, common mistakes, three explained questions, official source text, review dates and aligned project milestones.
- Cross-checked Python 3.14 `tempfile`, `pathlib` and `datetime` documentation. Module/route checks pass for **286** lessons, syntax parsing for **568** snippets, and opt-in runtime smoke for **84** snippets with zero failures. The depth audit remains at **205** distinct mapped topic statements with **43** single-mapped review items; the broad production-testing topics remain `[~]` until their whole scope is manually checked.
- Exact next batch: continue Production test isolation and failure-path coverage, then resume other pending master items. A bundled offline in-site Python runtime and browser visual QA remain release gates. No certification edit, push or publication.

### Python lab editor usability across all modules — 2026-10-03

- Upgraded the shared Python lesson editor for all 284 modules: line numbers now follow the actual starter/draft/solution line count and scrolling; Tab inserts four spaces; drafts save locally where browser storage permits; a reset control restores starter code; and the UI explicitly says the editor does **not** execute Python yet. This improves guided in-site practice without misrepresenting a self-check as a runner.
- JavaScript syntax, Python module and route validators, and `git diff --check` pass. The previous 564-snippet syntax and 80-snippet runtime smoke results remain the most recent Python-code checks; no lesson content changed in this editor pass. Browser visual verification remains pending because preview access was previously denied. No certification edit, push or publication.
- Next: obtain or build a real offline Python runtime rather than treating this editor upgrade as a runner, then continue pending curriculum-depth reviews.

### Amortized list growth and FIFO choice — 2026-10-03

- Added **Explain amortized list growth and choose a queue**, a focused Advanced lesson that distinguishes a single costly CPython list resize from long-sequence amortized behavior and chooses `collections.deque` for repeated FIFO removal. It includes original beginner theory, a study-event workflow, verified worked code, guided in-site lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and aligned project milestone.
- Cross-checked CPython's `list_resize` source and Python's `collections.deque` and data-structure documentation. Module and route checks pass for **284** lessons, syntax parsing for **564** snippets, and opt-in runtime smoke for **80** snippets with zero failures. This focused addition does not by itself prove the broad complexity checklist complete.
- Next: continue pending-review master items, especially specialist and production depth, while pursuing the offline in-site Python runner. Browser visual QA remains pending. No certification edit, push or publication.

### Equivalence classes and partitions — 2026-10-03

- Added **Group values by an equivalence rule**, a focused Advanced lesson on reflexive, symmetric and transitive rules, stable grouping keys, finite partitions, and Python modulo for negative integers. It has original beginner theory, a review-lane use case, verified worked code, guided in-site lab with hints/checks/solution, common mistakes, three explained questions, source text, review date, and aligned project milestone.
- Cross-checked MIT discrete-math equivalence-relation material and Python modulo/dictionary behavior. Module and route checks pass for **283** lessons, syntax parsing for **562** Python snippets, and opt-in runtime smoke for **78** snippets with zero failures. The 43 single-mapped topic statements remain a manual review queue; adding this lesson does not by itself promote broad discrete math to `[x]`.
- Next: continue the remaining pending-review master topics and the offline in-browser Python runner. Browser visual verification remains pending. No certification edit, push or publication.

### Set reconciliation and subset reasoning — 2026-10-03

- Added **Reconcile two inventories with set operations**, a focused Advanced lesson that teaches directional difference, intersection, subset versus equality, deterministic display, and why duplicate input must be checked before set conversion. It includes original beginner theory, a study-import example, verified code, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and aligned project milestone.
- Cross-checked Python's official set-operation documentation and MIT discrete-math set material. Module/route checks pass for **282** lessons, syntax parsing for **560** snippets, and opt-in runtime smoke for **76** snippets with no failures. The broad discrete-math item remains `[~]`; one more lesson does not prove complete depth.
- Next: audit remaining discrete-math subtopics, then continue the pending-review master items. Offline in-browser Python execution and representative visual QA remain release gates. No certification change, push or publication.

### Boolean product rules and De Morgan's law — 2026-10-03

- Added **Translate a product rule with Boolean logic**, a focused Advanced lesson about positive/negative conditions, all four truth-table cases, De Morgan's law, and Python's operand-returning short-circuit operators. It includes original beginner theory, a practical release-gate example, verified code, guided lab with hints/checks/solution, mistakes, three explained questions, source text, review date, and aligned project milestone.
- Cross-checked Python's official Boolean-operation documentation and MIT OpenCourseWare propositional-logic notes. Module/route validation passes for **281** lessons, syntax parsing for **558** snippets, and opt-in runtime smoke for **74** snippets with zero failures. The depth-audit queue still contains **43** singly mapped topic statements; this new lesson adds logic depth but does not prove the broad discrete-math checklist fully complete.
- Next: review remaining set/function/proof subtopics and the wider master checklist. Offline in-browser Python execution and representative visual QA remain release gates. No certification change, push or publication.

### Induction for pair-count growth — 2026-10-03

- Added **Use induction to explain why pair counts grow**, a focused Advanced lesson that starts with the zero-learner base case, proves the next-size step, and then checks the formula against Python's `math.comb`. It includes a practical peer-review-planning example, guided in-site lab with hints/checks/solution, common mistakes, three explained questions, source text, review date, and aligned project milestone.
- Local module and route validation passes for **280** lessons, syntax parsing for **556** learner-facing Python snippets, and the opt-in runtime smoke set for **72** snippets across **36** reviewed lessons. JavaScript syntax and `git diff --check` pass. The depth audit still has **43** single-mapped topic statements requiring manual review; the broad discrete-math checklist remains `[~]`.
- Exact next batch: audit remaining discrete-math subtopics and deepen the next broad Python master items. A real offline in-site Python runner and browser visual checks remain release gates. No certification edit, push, or publication.

### Relations, function contracts and quantifier edge cases — 2026-10-03

- Added two focused Advanced lessons. **Tell a many-to-many relation from a one-value function** models learner/lesson pairs separately from a total current-lesson mapping and rejects conflicting, missing or unknown-domain values. **Use all and any without accepting an empty batch by accident** explains universal/existential tests, `all([]) == True`, `any([]) == False`, nonempty product rules, short-circuiting and strict integer checks. Both include original beginner theory, real study-platform use, worked examples, guided labs with hints/checks/solutions, common mistakes, three explained questions, source text, review dates and project milestones.
- Cross-checked MIT OpenCourseWare relations notes and Python 3.14 built-in `all`, `any`, and truth-value behavior. Local module/route checks pass for **279** lessons, syntax parsing for **554** snippets, and runtime smoke for **70** snippets across **35** reviewed lessons. The broad discrete-math item remains `[~]` pending a full subtopic-by-subtopic audit (including sets and induction). No certification edit, push or publication.
- Next: finish the discrete-math audit and continue other shallow master items; a bundled offline Python runner and browser visual checks remain release gates.

### Exact finite-sampling probability — 2026-10-03

- Added **Calculate a sampling probability from counted outcomes**, an Advanced lesson that defines the equal-likelihood/no-replacement assumptions, uses complementary-event counting with `math.comb`, and keeps 7/10 exact with `fractions.Fraction`. It warns that the result is not a guarantee and changes under weighted or with-replacement selection. The lesson includes original beginner theory, practical study-topic example, worked code, guided lab with hints/checks/solution, mistakes, three explained questions, official source text, review date and project milestone.
- Corrected a draft mistake before validation: impossible draw sizes lead to a zero `comb(total, draws)` denominator, not `comb(0, 0)`. Cross-checked Python 3.14 `random.sample`, `math.comb` and `Fraction` documentation. Module/route checks pass for **277** lessons, syntax parsing for **550** snippets, and local runtime smoke for **66** snippets across **33** reviewed lessons. The broad discrete-math checklist item remains `[~]`, with logic/relations still thin. No certification edit, push or publication.
- Next: logic, relations and function-mapping subtopics, followed by other broad checklist gaps and the offline in-browser runner/visual release gates.

### Discrete-math essentials applied in Python — 2026-10-03

- Added two focused Advanced lessons to deepen the previously broad discrete-math module: **Use modulo to wrap a position around a cycle** and **Count possible review pairs before generating them**. They teach positive-modulus wrapping including negative steps and empty-cycle validation, then distinguish unordered combinations from ordered permutations and count output before materialization. Each has original beginner theory, a practical study-platform scenario, verified worked example, guided lab with hints/checks/solution, mistakes, three explained questions, official source text, review date and aligned project milestone.
- Cross-checked Python 3.14 language-reference modulo semantics and standard-library `math.comb`, `math.perm`, and `itertools.combinations`. Module/route checks pass for **276** lessons, syntax parsing for **548** snippets, and local runtime smoke for **64** snippets across **32** reviewed lessons. The broad discrete-math checklist item remains `[~]`: logic, relations and probability still need individual depth. No certification edit, push or publication.
- Next: continue the remaining discrete-math subtopics and other broad checklist gaps, then solve the offline in-browser runner and visual-verification release gates.

### Binary-search boundary proof — 2026-10-03

- Added **Derive a leftmost binary-search boundary**, a focused Advanced companion to the existing bisect lesson. It teaches the sorted-input precondition, half-open unknown region, left/right partition invariant, both branch updates, termination, and the distinction between insertion point and membership. The worked example and guided lab cover duplicates, empty input, before-first and after-last cases, with hints/checks/solution, mistakes, three explained questions, official source text, review date and timeline-project milestone.
- Cross-checked Python 3.14 `bisect_left`'s partition contract and Cornell's loop-invariant material. During authoring, corrected a misleading description of the initial interval: `[0, n)` holds elements still needing comparison, while the final insertion position can be `n`. Module/route checks pass for **274** lessons, syntax parsing for **544** snippets, and runtime smoke for **60** snippets across **30** reviewed lessons.
- No certification edit, push or publication. Next: continue correctness/specification depth and eventually the offline Python runner and browser rendering evidence.

### Loop-invariant reasoning for real data-cleaning code — 2026-10-03

- Added **Reason through a loop invariant before trusting a data-cleaning loop**, an Advanced lesson that turns a deduplication example into explicit precondition, postcondition, initialization, preservation and termination reasoning. It includes an important counterexample: the executable `seen == set(result)` assertion alone would not catch duplicate output, so the full invariant must include uniqueness and first-seen order. The lesson has a guided lab, hints/checks/solution, common mistakes, three explained questions, source text, review date and study-progress importer milestone.
- Inspected existing Core zip/order lessons before adding content; those concepts were already repeated, so this batch targeted a distinct reasoning gap rather than another order or iterator summary. Cross-checked Cornell University loop-invariant course material and Python set/list behavior. Module/route checks pass for **273** lessons, syntax parsing for **542** snippets, and local runtime smoke for **58** snippets across **29** reviewed lessons.
- No certification change, push or publication. Next: continue advanced correctness/specification topics and address the offline browser-runner gap. Browser rendering remains unverified.

### Strict pairing of one-pass data streams — 2026-10-03

- Added **Pair two streams without silently losing a row** in Core. It deepens an existing broad zip/unpacking lesson with the Python 3.10+ `strict=True` boundary, lazy error timing, one-pass iterator exhaustion, unequal-data policy and a two-direction mismatch lab. It includes original beginner theory, worked code, guided practice with hints/checks/solution, mistakes, three explained questions, official source text, review date and study-progress importer milestone.
- The repository has no bundled Pyodide/WASM Python runtime or existing Python lab runner. The current module viewer has a text editor, hints, self-check prompts and answer loading only. This inspection confirms the in-site execution gap remains; do not imply the guided lab executes Python. Building a safe real runtime remains separate substantial work.
- Official Python 3.14 built-in `zip` and `itertools.zip_longest` documentation was checked. Module/route validation passes for **272** lessons, syntax parsing for **540** snippets, and local runtime smoke for **56** snippets across **28** reviewed lessons. No certification edit, push or publication.
- Next: continue individual depth of the broad collections/iteration item, including ordering and one-pass behavior, while separately planning the offline runtime solution; browser rendering remains unverified.

### SBOM relationship and completeness reasoning — 2026-10-03

- Added **Read an SBOM dependency map without hiding unknowns**, a focused Production lesson about component relationships, direct/transitive paths, and the important difference between an explicitly empty dependency list and missing relationship data. It includes original beginner theory, worked fictional map, guided offline practice with hints/checks/solution, mistakes, three explained questions, source text, review date and study-service release milestone. It explicitly does not claim to generate or validate a full CycloneDX SBOM.
- Cross-checked the OWASP CycloneDX Authoritative Guide to SBOM (Third Edition) for dependency and completeness semantics. Module/route checks pass for **271** Python lessons, syntax parsing for **538** snippets, and local runtime smoke for **54** reviewed snippets across **27** lessons. No certification change, push or publication.
- Next: move to other broad `[~]` master-checklist items and continue deepening their individual lessons. The offline in-browser Python runner and browser visual verification remain release gaps.

### Tested dependency-set comparison — 2026-10-03

- Added **Compare a tested dependency set with the current environment**, a focused Production lesson that detects missing, extra and version-drifted fictional distributions. It distinguishes requirements, a target-specific resolved set and a current inventory, and explicitly says that name/version equality does not prove artifact integrity or advisory safety. It contains original theory, a real release scenario, worked code, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and project milestone.
- Cross-checked the PyPA `pylock.toml` specification and Python `importlib.metadata` documentation. Local module and route checks pass for **270** lessons, syntax parsing for **536** snippets, and runtime smoke for **52** reviewed snippets. No certification edit, push or publication.
- Next: finish SBOM relationship/completeness concepts and other shallow Python checklist items. The offline in-site Python runner and browser visual verification still prevent a complete-release claim.

### Dependency license and advisory evidence gate — 2026-10-03

- Added **Hold a dependency release when review evidence is missing**, a Production lesson about separate artifact, license, current-advisory and test gates. Its fictional offline decision function fails closed for absent and `'pending'` fields. The lesson includes original beginner theory, practical release context, worked code, guided lab with hints/checks/solution, common mistakes, three explained questions, official source text, review date, and a project milestone. It explicitly does not claim to perform a live audit or legal review.
- Cross-checked PyPA core-metadata license fields and PyPA `pip-audit`'s known-vulnerability scope. Local module and route validation passes for **269** lessons; **534** Python snippets parse; **50** reviewed snippets pass runtime checks. No certification edit, push, or publication.
- Exact next batch: deepen full resolved-set/lock and SBOM practice without confusing an inventory with a dependency graph, then continue other shallow Python master topics. Offline in-site Python execution and browser visual validation remain open release requirements.

### Offline installed-distribution inventory — 2026-10-03

- Added **Inventory installed Python distributions offline**, a Production lesson that distinguishes distribution names from import names and builds a sorted name/version snapshot with `importlib.metadata`. It includes original theory, a real release example, a local guided lab with hints/checks/solution, mistakes, three explained questions, source text, review date and study-service project milestone. It explicitly says an inventory is neither a lockfile nor an advisory or provenance check.
- Verified against Python 3.14 `importlib.metadata` documentation. Module validation passes for **268** lessons, syntax parsing for **532** snippets, and the local runtime smoke set for **48** snippets across **24** reviewed lessons. No installation, network request, certification change, push or publication.
- Exact next work: close the remaining dependency-lifecycle depth with a separately reviewed license/advisory decision workflow and full resolved-set practice; then continue the wider master checklist. An offline in-browser Python runner and visual validation remain release gaps.

### Local dependency artifact integrity and upgrade-plan verification — 2026-10-03

- Added **Check a local package artifact against a recorded hash**, a focused Production lesson using fictional in-memory bytes. It teaches the difference between byte integrity and package provenance/security, with a worked SHA-256 example, guided lab, hints, checks, solution, three explained questions, common mistakes, source text, review date, and a study-service release milestone. It is wired into the Python manifest. The example and solution were executed locally.
- Deepened the existing dependency-upgrade lesson by correcting its expected output to the actual printed list, updating its official pip source note and review date, and adding it to the opt-in runtime smoke set. No package installation or network call was performed. Python now has **267** validated lessons, **530** parseable snippets, and **46** passing runtime snippets across **23** reviewed lessons.
- Remaining limitation: a matching hash requires an independently trusted expected digest and does not prove publisher identity, absence of vulnerabilities, or safe behavior. The broad dependency/security checklist items remain `[~]`; the site still lacks an offline in-browser Python runner and browser visual verification. No certification change, push or publication.
- Exact next batch: audit the remaining dependency lifecycle gaps (full resolved-set records, advisory/metadata review, license and SBOM concepts) and deepen them with verifiable offline exercises; then continue other Python master-topic gaps.

### Defensive Python import-data and token handling — 2026-10-03

- Added two focused Production lessons: **Validate JSON data without loading untrusted pickle** and **Generate a demo token without exposing it**. The first separates data parsing from strict type/range validation and explicitly refuses untrusted pickle; the second uses an in-memory `secrets` token, never displays its value, and explains that comparison alone is not a production credential system. Each has original beginner theory, practical context, verified worked example, guided exercise with hints/checks/solution, mistakes, three explained questions, source text, review date and aligned study-service milestone.
- Cross-checked Python 3.14 official pickle, JSON and secrets documentation. Bundled Python ran both examples and lab solutions; module/route checks pass for **266** lessons, syntax parsing for **528** snippets, and the opt-in runtime smoke set passes **42 snippets across 21 reviewed lessons**. The broad security checklist item remains `[~]` because dependency provenance and other subareas still need individual evidence. Browser execution and visual validation remain unresolved. No certification change, push or publication.
- Exact next work: dependency provenance and safe update workflows, then continue wider master-topic depth; a genuine offline in-site Python runner remains a release requirement.

### Defensive Python file and subprocess boundaries — 2026-10-03

- Added two focused Production lessons, **Keep a requested file inside an allowed folder** and **Pass subprocess arguments as data, not shell commands**. They explain why path text-prefix checks are insufficient, use resolved path relationships in a disposable folder, distinguish containment from authorization and race safety, and pass user-influenced text as one argument to a fixed local child interpreter without a shell. Each includes original beginner theory, real-world example, guided lab with hints/checks/solution, three explained questions, mistakes, source text, review date and aligned study-report project milestone.
- Verified API behavior against Python 3.14 pathlib, subprocess and tempfile documentation plus OWASP's defensive path-traversal concept. Bundled Python ran both worked examples and solutions. Module/route checks pass for **264** lessons, syntax parsing for **524** snippets, and the opt-in local runtime smoke set now passes **38 snippets across 19 lessons**. The security master statement remains `[~]` because these lessons cover two subareas, not its entire breadth. Browser execution and visual validation are still unavailable/unverified; no certification change, push or publication.
- Exact next work: deepen the other security subareas (untrusted deserialization, secrets and dependency provenance), continue the master checklist review, and resolve the offline in-site runner before any consolidated push.

### Expanded Python runtime checks across Foundations — 2026-10-03

- Added eight reviewed Foundations lessons to the opt-in local runtime smoke set: CLI arguments, script-relative UTF-8 paths, temporary virtual environments, REPL/script/module execution, traceback diagnosis, isolated Git workflow, interpreter identity and read-only package checks.
- The first expanded run caught a real verification-harness issue: passing non-ASCII Python source through a Windows command-line argument changed `café` into a replacement character. The harness now passes source over UTF-8 standard input to isolated Python and compares normalized output. The full expanded run passes **34 snippets across 17 reviewed lessons with 0 failures**. This validates the selected local examples/solutions, not all **262** lessons and not browser execution. Module, route and syntax checks remain passing. No certification change, push or publication.
- Exact next work: expand reviewed runtime coverage where examples are local and safe, repair any content errors found, deepen remaining master topics, and implement/verify genuine offline in-site Python lab execution before final release.

### Opt-in local runtime verification gate — 2026-10-03

- Added a bounded, opt-in Python runtime smoke check for reviewed standard-library-only lessons. It runs each selected worked example and lab solution in a freshly created temporary directory, with isolated Python startup, a per-snippet timeout and output limit, compares worked-example output, and removes only its parent-verified temporary directory. The explicit selection file prevents accidental execution of network/server/third-party lessons.
- The first run exposed a Windows CRLF-versus-LF output comparison issue; fixed the checker to normalize line endings. The rerun passed **18 snippets across 9 reviewed lessons with 0 failures**. This is stronger evidence than syntax parsing for those nine lessons, but it deliberately does not claim all **262** lessons or **520** parseable snippets have been runtime-verified. Module/route/syntax checks continue to pass. No certification change, push or publication.
- Exact next work: review additional self-contained lessons for safe opt-in runtime verification, repair any mismatched outputs, and continue the master-topic depth and offline browser-runner requirements.

### Executable standard-library testing companion — 2026-10-03

- Added **Run normal and error-boundary tests with unittest**, a focused Production lesson that pairs with the explicitly two-file optional pytest lesson. It teaches `TestCase`, `assertEqual`, `assertRaises`, suite loading, actual execution and `testsRun` verification. The beginner explanation, worked example, guided lab, hints/checks/solution, mistakes, three questions, source text, review date and study-utility milestone are all in the lesson itself.
- Verified semantics against Python 3.14 official unittest documentation. Bundled Python executed the worked example (2 tests) and lab solution (3 tests) with expected results. Module and route validation passes for **262** lessons; syntax parsing for **520** snippets; depth audit reports **205** mapped statements and **46** single-mapped review items. The pytest-specific example remains unexecuted because pytest is not bundled; browser Python execution and visual rendering remain unverified. No certification change, push or publication.
- Exact next work: continue remaining master-topic depth review and the offline in-site code-execution requirement. Do not use structural checks alone to claim the whole Python track is ready.

### Runnable test examples across three existing lessons — 2026-10-03

- Audited all manifest-listed Python worked examples and lab solutions for `test_` functions that are defined but not called in standalone code. Corrected three existing lessons: **Contract testing and compatible change design**, **QA automation, useful test reports, and flaky-test control**, and **Fixtures, test doubles, and interaction boundaries**. Their direct-run examples now actually execute assertions. The QA lab solution now invokes its checks; the fake-notifier lab solution additionally tests invalid input and proves no notification was sent.
- Bundled Python executed all three repaired examples and solutions; module/route validators still pass for **261** lessons. The remaining pytest special case was clarified in **Testing: prove behaviour before changing code**: its example and solution are explicitly two separate files, and the page no longer implies that the browser ran the expected `2 passed` output. The bundled Python has no pytest installation, so this pytest run remains unverified and is **not** counted as a locally executed example. Syntax parsing now passes for **518** snippets. No certification change, push or publication.
- Exact next work: provide a directly runnable standard-library companion to the pytest lesson without misrepresenting pytest execution; then continue deeper testing and other master-topic gaps. Browser Python execution remains unavailable.

### Testing lesson execution correction — 2026-10-03

- Corrected two existing Production testing lessons, **Test design: boundaries, doubles, and properties** and **Property-based thinking, invariants, and test data**. Their worked examples previously defined named test functions without calling them, so a learner running the shown file directly would see no assertion run. Both examples now invoke their tests and print an explicit success line; both guided solutions also execute their checks. The content now explains direct invocation versus test-runner discovery and states the browser-runner limitation plainly.
- Verified Python 3.14 random and unittest behavior against official documentation. Bundled Python executed both corrected worked examples and lab solutions with the expected output. Module validation still passes for **261** lessons and the syntax checker parses **519** snippets. These checks prove the corrected local examples run; they do not prove the whole Python curriculum or browser labs are complete. No certification change, push or publication.
- Exact next work: audit other worked examples for defined-but-never-invoked checks, strengthen failure-path tests, and continue the remaining master-topic depth review. A real offline in-browser Python runner and browser rendering validation remain release blockers.

### Searchable Python lesson navigation — 2026-10-03

- Reworked the Python focused-lesson index from a very large always-visible card list into collapsible level sections with lesson counts and a client-side search over lesson names and mapped skills. The ordered main learning path remains intact, and its stage count now comes from the roadmap data instead of a hard-coded number. Search filters only the focused lessons and shows an explicit empty-result message.
- `node --check python-module-viewer.js`, Python route validation for **261** manifest paths, and `git diff --check` pass. This is source-level verification only: the local browser preview remains unavailable after the earlier explicit denial, so visual behavior and keyboard usability must still be checked before release. This navigation change does **not** make Python code execute inside the browser. No certification content, GitHub push or publication was changed.
- Exact next work: continue actual lesson depth, then obtain an authorized browser validation path and a real offline in-site Python runner before treating the guided code labs as executable. Preserve the one consolidated push gate.

### Test doubles and real SQLite boundary — 2026-10-03

- Added **Patch the name your Python code actually uses** and **Test a real SQLite boundary after a mocked unit test** to Production. Together they teach imported-reference lookup, temporary patch scope, interaction assertions, what mocks cannot prove, parameterized SQL and an isolated integration test. Both learner-facing lessons include original beginner explanation, executed worked examples, guided labs with hints/checks/solutions, three explained questions, mistakes, source text, review date and study-service milestones.
- Verified the namespace rule against Python 3.14 `unittest.mock` documentation and SQLite behavior against Python 3.14 `sqlite3` documentation. Bundled Python ran both examples and lab solutions successfully. Module and route validators pass for **261** lessons; syntax parsing passes for **519** snippets; depth audit reports **205** mapped statements and **46** single-mapped review items. In-browser Python execution remains unavailable, so the guided labs are not yet executable browser labs. No certification changes, push or publication.
- Exact next batch: continue Production test depth with failure-path, property/contract and end-to-end boundaries, then individually review the mapped testing checklist statements rather than promoting them merely for having a title match.

### Interpreter identity and package-environment diagnostics — 2026-10-03

- Added two Foundations lessons: **Know which Python implementation and version runs your code** and **Check a package environment before installing anything**. They distinguish CPython from a Python version, show how to compare the actual interpreter selected by an editor and terminal, and inspect module/distribution availability without changing the environment. Each includes beginner theory, real-world scenario, runnable worked example, guided exercise with hints/checks/solution, mistakes, three explained questions, source text, review date and project milestone.
- Cross-checked Python 3.14 Windows/runtime/venv documentation and the Python Packaging User Guide. Bundled Python ran both worked examples and solutions. Module/route validators pass for **259** lessons; syntax parser accepts **515** snippets; depth audit reports **205** mapped statements with **46** single-mapped review items. This does not establish browser execution or full depth for all topics. No certification changes, push or publication.
- Exact next batch: review Foundation checklist evidence for implementation selection, editor workflow and Git, then add focused Core/packaging lessons where a broad mapped item still lacks in-depth treatment. Keep the Python batch local until every item and the in-site practice experience are validated.

### Beginner Python quality checks and safe Git workflow — 2026-10-03

- Added **Check Python syntax, style, and behavior as separate steps** and **Save and review a Python project with Git**. The first distinguishes parsing, formatting, linting and actual behavior tests; the second teaches working tree, staging, ignore patterns, staged diff review, a local commit and a branch in an isolated temporary repository. Both have beginner explanations, worked examples, guided practice with hints/checks/solutions, mistakes, three explained questions, source text, review dates and aligned study-utility milestones.
- Checked the relevant Python 3.14, Ruff and official Git documentation. Bundled Python ran both worked examples and solutions; the optional Ruff commands were verified against official documentation but not executed because Ruff is not installed. Module/route validation passes for **257** lessons; syntax parsing passes for **511** snippets; depth audit reports **204** mapped statements and **45** single-mapped review items. The master checklist remains **57** `[x]` and **79** `[~]`: these new lesson files do not automatically prove whole broad checklist statements deep-complete.
- Exact next batch: review remaining Foundations statements individually, especially CPython implementation/version selection and how package installation relates to venv; add missing focused lessons and evidence, then move through Core pending statements. In-browser Python/Git execution and visual rendering are still unverified/unavailable. No certification changes, push or publication.

### Python prompt/package entry points and first debugging workflow — 2026-10-03

- Added **Choose the Python prompt, a script, or `python -m`** and **Read a traceback, reproduce the bug, and check the fix**. The first distinguishes the system terminal from Python's `>>>` prompt, uses an actual child interpreter to run `-c`, creates a temporary package with `__main__.py` and a relative import, and verifies `python -m studytool`. The second identifies the exception and failing frame, then guides an empty-score bug fix with normal and regression assertions. Both include original beginner explanation, worked example, guided in-site practice with hints/checks/solution, common mistakes, three explained questions, source text, review date and aligned CLI project step.
- Checked Python 3.14 interpreter tutorial, `__main__`, command-line, `traceback`, `pdb`, and Errors and Exceptions documentation. Bundled Python ran both new worked examples and solutions successfully. The interpreter/REPL master item was individually reviewed and promoted to `[x]` with evidence in `DEPTH_EVIDENCE.md`. Module/route validation passes for **255** lessons; syntax parsing passes for **507** snippets; depth audit reports **204** mapped statements, **46** single-mapped. Master status: **57** `[x]`, **79** `[~]`. The editor/formatter/linter/debugger workflow item remains `[~]` because the new lesson covers only the traceback/debugging part. In-site Python execution and browser rendering remain unavailable/unverified.
- Exact next batch: complete the beginner tooling workflow with formatter/linter/debugger usage and reproducible terminal checks, then continue the remaining Foundation pending items. No certification change, push or publish.

### Beginner Python execution and environment reliability — 2026-10-03

- Added three focused Foundations lessons: **Read command-line arguments and return an honest exit code**, **Find project files from a script and choose a text encoding**, and **Create a virtual environment and prove which Python is running**. The first separates user arguments from `sys.argv[0]`, normal success from usage error, and testable `main` logic from process exit. The second anchors files to a simulated script location, uses platform-aware `Path`, explicit UTF-8 and LF newlines, and checks bytes. The third creates and cleans up a real temporary venv without pip or network, invokes its Python and verifies `sys.prefix != sys.base_prefix`. Each has original beginner theory, practical context, worked example, guided in-site practice with hints/checks/solution, mistakes, three questions, source text, review date and aligned CLI project step.
- Checked Python 3.14 `__main__`, `sys`, `pathlib`, `io` and `venv` documentation. Bundled Python ran all three worked examples and lab solutions successfully. Module/route checks pass for **253** lessons, syntax parsing for **503** snippets; depth audit reports **204** mapped statements and **46** single-mapped. Individually reviewed master items: **56** `[x]`, **80** `[~]`. Path/encoding and venv topics were promoted to `[x]` with evidence recorded in `DEPTH_EVIDENCE.md`; the broader interpreter/REPL item stays `[~]` until separately reviewed. Browser Python execution and visual rendering remain unverified/absent.
- Exact next batch: deepen interpreter/REPL and editor/debugger workflow, then continue other Foundation pending items. No certification change, push or publish.

### Flask development-versus-production serving boundary — 2026-10-03

- Added **Know where Flask's development server stops and deployment begins**. It distinguishes in-process test clients, a guarded/explicitly opted-in local development server, and a dedicated production WSGI serving path. The lesson includes beginner theory, a worked example, guided in-site exercise, hints/checks/solution, mistakes, three questions, official-source text, review date and release project milestone. The example requires `--local-preview` before a direct run can start its development server, so an ordinary code check will not open a listening port.
- Verified the concepts against Flask 3.1 Development Server and Deploying to Production documentation and PEP 3333. Module/route checks pass for **250** local Python lessons; syntax parsing passes for **497** snippets. The depth audit reports **204** mapped statements, **47** single-mapped. Flask runtime behavior is still unexecuted locally because Flask is not bundled/installed; in-site Python execution and browser rendering remain absent/unverified. The framework master item stays `[~]` and no deployed-service claim is made.
- Exact next batch: Flask error-handling and request-resource integration tests, then continue wider Python depth review; resolve the offline Flask runtime gap before release. No certification change, push or publish.

### Flask request-scoped database connection lifecycle — 2026-10-03

- Added **Open a database connection for a Flask request and close it afterward**. It explains `g`, lazy connection reuse, teardown cleanup, why `g` is not durable storage, and why closing a connection is not a transaction policy. It includes original beginner theory, a worked test-client example, guided in-site lab with hints/checks/solution, common mistakes, three questions, official-source text, review date and aligned project milestone.
- Checked Flask 3.1 Application Context and database tutorial plus Python `sqlite3` documentation. Module/route validation passes for **249** Python lessons, syntax parsing for **495** snippets, and the depth-audit inventory reports **204** mapped topic statements with **48** single-mapped items. **The Flask worked example and solution were not runtime-executed** because Flask is not available in the local Python runtime or bundled into the static site. Browser rendering also remains unverified after the earlier explicit preview denial. The broad framework topic remains `[~]` pending executable integration, deployment and remaining framework-survey work.
- Exact next batch: add Flask deployment and error-lifecycle boundaries, then obtain an in-scope runtime path for actually running framework tests; continue the wider Python depth checklist. No certification change, push or publish.

### Flask 3.1 route, template and app-factory learning section — 2026-10-03

- Added three connected production lessons: **Build and test one Flask route without starting a server**, **Render learner text safely in a Flask HTML template**, and **Create separate Flask app instances for separate tests**. They teach a route converter/404 contract, in-process test-client assertions, developer-owned template source with autoescaped text variables, and app-factory configuration isolation. Each lesson has beginner explanation, practical scenario, worked example, guided in-site exercise with hints/checks/solution, mistakes, three questions, source text, review date and aligned study-service milestone.
- Checked Flask 3.1 official Quickstart, Testing, Templates, API, Application Factories and Application Context documentation. **Runtime execution of these Flask examples remains unverified:** Flask is not installed in the available local Python runtime and is not bundled into the static site. Syntax parsing passed, but syntax is not a substitute for a Flask runtime test. Module/route validators pass for **248** local Python lessons, and syntax parsing passes for **493** learner-facing snippets. The broad framework master item remains `[~]` pending verified runtime integration, request lifecycle/resource teardown, deployment boundaries, FastAPI/Django survey and browser lab execution. No browser workaround attempted after prior denial.
- Exact next batch: add the Flask request-context/resource-lifetime lesson, then secure an authorized local Flask runtime or bundled runner for actual tests; continue broader Python depth review. No certification change, push or publish.

### Worker lease and stale-completion boundary — 2026-10-03

- Added **Recover an expired job without trusting an old worker**. The lesson teaches lease deadlines, per-claim tokens and a conditional completion UPDATE that rejects a stale worker after a new claim. It includes beginner theory, a real-world export scenario, executed worked example, guided in-site lab with hints/checks/solution, common mistakes, three questions, source text, review date and aligned project milestone. Both worked example and solution ran; stale token returned false, current token true, repeated completion false. The lesson clearly states that stored-state fencing cannot undo external side effects or prove exactly-once execution.
- Checked SQLite UPDATE/WHERE and isolation documentation plus Python `sqlite3` transaction behavior. Module/route checks pass for **245** local Python lessons; syntax parsing passes for **487** learner-facing snippets. The job sequence now covers accepted status, one-worker state changes, SQLite claim transactions and stale-completion fencing, but production retry budgets, renewal, task idempotency and real concurrent/deployed testing remain. Browser rendering and in-site Python execution are still unavailable/unverified; no browser workaround attempted after prior denial.
- Exact next batch: verified Flask 3.1 route/test-client/template lessons and project integration, then a realistic worker retry/idempotency boundary. No certification change, push or publish.

### SQLite atomic job-claim boundary — 2026-10-03

- Added **Claim a queued SQLite job before another worker can take it**. It teaches the read-then-write race, a short `BEGIN IMMEDIATE` claim transaction, commit-before-slow-work, and why this does not solve crash recovery or task idempotency. The beginner lesson includes an executed worked example and guided two-connection lab, hints/checks/solution, mistakes, three questions, source text, review date and project milestone. Both code paths ran with expected outputs: first connection claimed job 1, second found none in the one-job case; two connections claimed distinct jobs in the two-job lab.
- Checked SQLite isolation/transaction documentation and Python 3.14 `sqlite3` behavior. Module and route validators pass for **244** local Python lessons; syntax parsing passes for **485** snippets. This is a SQLite-specific local pattern, not a proof of distributed-worker safety or crash recovery. Web-framework and worker breadth remains `[~]`; actual framework integration, lease/recovery, browser rendering and in-site Python execution remain outstanding. No browser workaround attempted after prior denial.
- Exact next batch: one verified framework route/test-client/template learning sequence, then worker lease and crash-recovery policy. No certification change, push or publish.

### Queued-job worker state transitions — 2026-10-03

- Added **Run one queued job and record success or failure**. It extends the prior 202 Accepted lesson into a bounded local worker step: queued → running → done/failed, with a status read from SQLite. Beginner explanation, worked example, guided in-site exercise, hints/checks/solution, common mistakes, three questions, source text, review date and study-service milestone are present. The worked example and lab solution executed with expected success, failure and no-job outcomes. The lesson explicitly says the SELECT-then-UPDATE claim is not safe for competing workers and that crash recovery/retries remain production work.
- Checked Python 3.14 `sqlite3` and `contextlib.closing` documentation. Module and route validators pass for **243** local Python lessons; syntax parsing passes for **483** learner-facing snippets. The broad web-framework item remains `[~]` because a verified framework integration, concurrent worker claim/recovery and deployed behavior remain to be taught and tested. Browser rendering and in-site Python execution remain pending/absent; no browser workaround was attempted after prior denial.
- Exact next batch: verify one real framework's route/test-client/template interface using its official documentation, add guided lessons and project integration, then address atomic worker claim/crash-recovery design. No certification change, push or publish.

### Middleware order and pre-header failure handling — 2026-10-03

- Added **Put web middleware in the right order and handle errors honestly**: beginner explanation, exact request/response-order trace, worked local WSGI example, guided failure-path lab with hints/checks/solution, common mistakes, three questions, source text, review date and study-service milestone. Verified against PEP 3333. Both worked example and lab solution executed with expected output. The lesson explicitly limits its catch example to failures before response headers, not streaming or deployed production behavior.
- Module and route validators pass for **242** local Python lessons; syntax parsing passes for **481** learner-facing snippets. The broad web-framework checklist remains `[~]` until framework-specific APIs and deployed integration are taught and checked. Browser visual rendering and in-site Python execution remain unverified/absent, respectively; no browser workaround was attempted after prior denial.
- Exact next batch: choose an official framework interface and add request/response, template and lifecycle integration lessons, then examine background worker execution. No certification change, push or publish.

### HTML text escaping and accepted-job status boundaries — 2026-10-03

- Added two connected production lessons: **Escape learner text before placing it in HTML** and **Report queued work as accepted, not completed**. Both include beginner explanation, a worked example, guided in-site practice with hints/checks/solution, common mistakes, three questions, source text, review date and project connection. Their worked examples and lab solutions ran locally with expected output.
- Verified the teaching boundaries against Python 3.14 `html.escape`, the OWASP XSS Prevention Cheat Sheet, and RFC 9110's 202 Accepted definition. The HTML lesson explicitly covers text-node escaping only, not attributes, scripts or URLs. The job lesson persists a queued record before reporting acceptance and does not claim that a worker ran.
- Module and route validators pass for **241** local Python lessons; syntax parsing passes for **479** learner-facing snippets. The broad web-framework topic remains `[~]`: middleware ordering/error behavior, a real framework's APIs and deployment, and executing jobs still need work. Browser visual confirmation remains unavailable after explicit preview denial; the in-site Python runner is still absent. Next batch: middleware error/order behavior and framework integration boundaries. No certification change, push or publish.

### WSGI routing and middleware foundation — 2026-10-03

- Added two connected lessons: **Trace a Python web request from route to response** and **Wrap a web handler with one reusable middleware rule**. They teach method/path routing, 200/405/404 response choices, status/headers/body bytes, and a wrapper that adds one shared header without altering the handler. Each has beginner theory, practical context, worked example, guided in-site exercise, hints, common mistakes, three questions, source text, review date and project milestone. Both worked examples and lab solutions ran in process with expected outputs; no server, browser request or third-party service was used.
- Verified the interface against PEP 3333 and Python 3.14 `wsgiref` documentation. Module/route checks pass for **239** local Python lessons and syntax parsing for **475** snippets. The broad web-framework item remains `[~]`: templates, background work, a chosen framework's actual API, and deployed integration still need depth. Browser visual confirmation is still pending after explicit preview denial; no browser workaround was attempted.
- Exact next batch: template escaping and middleware order/error handling, then framework-specific concepts and background-work boundaries. No certification change, push or publish.

### API response-version compatibility — 2026-10-03

- Added **Add a new API response without breaking an older client**. It keeps V1's `done` boolean intact, introduces an explicit V2 `status` field, and rejects an unsupported version instead of guessing. The worked example and guided solution ran with expected V1/V2/error results. It includes beginner theory, realistic client-compatibility context, hints, mistakes, three questions, source text, review date and project milestone. It distinguishes runtime API version selection from OpenAPI document-version metadata, checked against the OpenAPI 3.1.1 specification and RFC 9110 representation concepts.
- Module/route checks pass for **237** local Python lessons and syntax parsing for **471** snippets. The API master item remains `[~]` pending a complete service-level integration review; browser visual confirmation was previously denied and in-site Python code execution remains absent.
- Exact next batch: web-framework request/response, routing, middleware and background-work concepts, using local standard-library fixtures where possible. No certification change, push or publish.

### Ordered cursor-pagination contract — 2026-10-03

- Added **Return ordered API pages with a bounded next cursor**. It teaches unique ordering, a strictly-after cursor, size validation, one-row look-ahead, a verified-owner scope on every page and the difference between live-data pages and a snapshot. The worked SQLite example and guided solution ran with expected two-page results and no cross-owner row. It includes beginner explanation, practical API context, hints, mistakes, three questions, source text, review date and project milestone. Checked PostgreSQL 18 official ordering/LIMIT guidance and Python `sqlite3` binding behavior.
- Module/route checks pass for **236** local Python lessons; syntax parsing passes for **469** snippets. The API master item remains `[~]` because versioning and broader deployed-service behavior need further depth. Visual browser confirmation remains unavailable due the earlier explicit local-preview denial, and the site still has no browser Python runner.
- Exact next batch: teach a concrete, backward-compatible API version/change contract with tests, then continue web-framework request/response and middleware topics. No certification change, push or publish.

### API validation before record-level authorization — 2026-10-03

- Added **Validate an API request and check the exact record it may change**. It separates request-shape/value checks from a trusted-identity, record-specific authorization decision. The worked example and guided solution ran; an extra test confirmed a list-valued status is safely rejected instead of crashing. It includes beginner explanation, realistic service context, hints, mistakes, three questions, source text, review date and project milestone. Checked against OWASP API1:2023 object-level authorization and NIST digital-identity guidance.
- Corrected the earlier authentication/authorization lesson's expected-output text to match its actual printed dictionaries. Module/route checks pass for **235** local Python lessons and syntax parsing for **467** snippets. The browser tool's local-preview denial remains in force; no alternate browser path was used. Static checks do not prove visual rendering or in-browser Python execution.
- Exact next batch: pagination/versioning contract depth, then remaining API and framework checklist items. No certification change, push or publish.

### Idempotency-key conflict boundary — 2026-10-03

- Added **Reject an idempotency key reused for a different request**. It distinguishes an exact retry from changed content under the same key, returning the saved result only for the former and a documented 409-style conflict for the latter. The worked example and guided lab solution ran with expected 201/201/409-style results and one side effect. Beginner explanation, practical service context, hints, common mistakes, three questions, source text, review date and project milestone are included. RFC 9110 was checked for 201 and 409 semantics.
- Module/route checks pass for **234** local Python lessons; syntax parsing passes for **465** snippets. The site-side browser preview was attempted but the browser tool explicitly denied local preview access; no alternate browser or route was attempted. Static route validation is not visual rendering proof. In-browser Python execution remains absent, and the master API item remains `[~]` for broader auth/versioning/pagination depth.
- Exact next batch: deepen API validation and pagination/versioning in curriculum order, continue local code/route validation, and leave browser visual confirmation pending renewed access. No certification change, push or publish.

### Failed SQLite migration and rollback proof — 2026-10-03

- Added **Prove a failed schema upgrade leaves the old database usable**. An explicit transaction adds a column and sets `user_version`, then a deliberately missing table forces an error. The lab rolls back and checks the old columns, version 0 and preserved learner row. Worked example and guided solution both ran with expected output. The lesson includes beginner theory, real-world context, hints, common mistakes, three questions, source text, review date and project milestone.
- Verified the transaction, `table_info` and version behavior against official SQLite and Python `sqlite3` documentation. Module/route checks pass for **233** local Python lessons; syntax parsing passes for **463** snippets. The exercise proves only this disposable SQLite failure path, not a production backup or a PostgreSQL migration. The ORM/migration/performance master item remains `[~]`; browser Python execution remains absent.
- Exact next batch: deepen ORM session identity/change tracking and relationship loading with accurately scoped practice, then validate representative lesson rendering in the browser. No certification change, push or publish.

### Database row mapping versus ORM behavior — 2026-10-03

- Added **Turn database rows into Python records without hiding SQL**. It teaches `sqlite3.Row` named access, validation into a dataclass, explicit query boundaries, and the difference between manual mapping and a full ORM's session/change tracking and lazy relationship loading. Worked example and guided solution both ran with the expected `Progress` records. The lesson includes a beginner explanation, real-world service use, hints, common mistakes, three questions, source text, review date and aligned project milestone.
- Verified the row behavior against Python 3.14 `sqlite3` documentation and the ORM distinctions against SQLAlchemy 2.0 official Quick Start, Session Basics and relationship-loading documentation. Module/route checks pass for **232** local Python lessons and syntax parsing for **461** snippets. A real ORM library is not bundled, so this is deliberately **not** claimed as executable SQLAlchemy practice; the ORM/migration/performance master item remains `[~]`. The site still lacks browser Python execution.
- Exact next batch: exercise a migration failure/rollback path, deepen ORM session/identity-map/loading concepts without mislabeling simulations as framework execution, then test representative browser lesson routes. No certification change, push or publish.

### Versioned SQLite schema-upgrade batch — 2026-10-03

- Added **Upgrade a SQLite schema without losing existing rows**. It teaches the application-owned `PRAGMA user_version`, a one-time `ALTER TABLE ADD COLUMN` with a safe default for old rows, an explicit transaction for the schema/version step, repeat-run behavior and future-version refusal. The worked example and guided solution ran with expected preserved rows and version 1. Beginner explanation, practical use, hints, common mistakes, three questions, source text, review date and a study-progress project milestone are included.
- Checked SQLite's official `user_version` and `ALTER TABLE` documentation plus Python `sqlite3` transaction guidance. Module/route validation passes for **231** local Python lessons and syntax parsing for **459** snippets. The ORM/migration/query-performance master item remains `[~]`: ORM-specific behavior and production migration deployment/rollback practice still need depth. Guided labs do not yet execute Python in the browser.
- Exact next batch: deepen ORM mapping and query-loading behavior with an honest local runnable model, then test a representative migration failure/rollback path and inspect browser routes. No certification change, push or publish.

### Measured N+1 query batch — 2026-10-03

- Added **Measure an N+1 query pattern before changing it**, using SQLite's documented trace callback to record two per-item SELECTs versus one parameterized batch SELECT on the same two-row fixture. The worked example and guided solution both ran with expected counts and results. It includes beginner explanation, realistic dashboard context, hints, common mistakes, three questions, source text, review date and project milestone; the site still does not execute Python in its browser lab.
- Corrected the existing batched-read lesson's empty-list explanation after checking SQLite's SQL expression documentation: SQLite allows `IN ()`, while many other SQL engines do not. The guard remains useful for an explicit no-query result and portability. Module/route checks pass for **230** local Python lessons and syntax parsing for **457** snippets.
- Exact next batch: deepen ORM concepts and migration safety, then inspect representative query plans and test the release routes. The master ORM/migration/performance item remains `[~]`; no certification change, push or publish.

### SQLite versus PostgreSQL portability boundary — 2026-10-03

- Added **Know what carries from SQLite to PostgreSQL**. It distinguishes SQLite's embedded library from a PostgreSQL server, explains the shared transaction idea without claiming identical driver APIs, and teaches why parameter styles and connection semantics must be verified for the selected driver. Its SQLite worked example and guided lab both ran with expected output; the lesson explicitly says this is not a PostgreSQL integration test. Source text, review date, beginner explanation, mistakes, a three-question check and project milestone are included.
- Verified the conceptual boundaries against Python 3.14 `sqlite3`, PEP 249 and PostgreSQL 18 transaction documentation. Module/route checks pass for **229** local Python lessons and syntax parsing passes for **455** snippets. The SQL master item remains `[~]` pending a broader hands-on database-portability and connection-lifecycle review; a real PostgreSQL driver/server is not bundled. The site still lacks an in-browser Python execution runtime.
- Exact next batch: review existing connection lifecycle and ORM/migration/query-performance lessons against official sources, deepen the weakest subtopics, and continue the master checklist in order. No certification change, push or publish.

### Two-write rollback and duplicate-event batch — 2026-10-03

- Added **Keep two related database writes together**. The lesson shows a real two-table, one-transaction SQLite update: a duplicate event ID triggers a UNIQUE-constraint error, and the earlier completion insert rolls back. It includes beginner theory, a worked example, guided lab, progressive hints, solution, concept simulation, three questions, source text, review date, common mistakes and a project milestone.
- The worked example and lab solution both ran and printed `duplicate event rejected` followed by `0`. Module/route checks pass for **228** local Python lessons, and syntax parsing passes for **453** snippets. The master SQL item remains `[~]`: PostgreSQL driver concepts and broader database portability still need focused explanation; guided in-site labs still do not execute Python.
- Exact next batch: add an explicit SQLite-versus-PostgreSQL concepts lesson with a locally runnable SQLite practice boundary, then review database connection lifecycle and ORM/migration/query-performance depth. No certification change, push or publish.

### SQL value-versus-identifier safety batch — 2026-10-03

- Added **Keep SQL values separate and allow-list dynamic column names** with beginner theory, a realistic study-progress search/sort example, guided lab, hints, solution, three-question check, source text, review date, and project milestone. Its worked example and solution ran with expected rows, including a title containing an apostrophe. The in-site concept simulation is not a Python runtime.
- Corrected the earlier SQLite parameter/transaction lesson: `with connection:` manages transaction commit/rollback but does **not** close the connection, so the example and solution now use `contextlib.closing` around it. Both scripts ran successfully. Official Python `sqlite3` documentation and PEP 249 were used to verify the boundary.
- Local checks pass for **227** modules/routes and **451** parsed Python snippets. The SQL fundamentals master item remains `[~]`: PostgreSQL driver-specific differences and a broader connection-lifecycle/transaction exercise still need focused coverage. Python execution in the browser remains absent. Exact next batch: SQLite rollback and connection ownership, then a clearly labeled SQLite-versus-PostgreSQL concepts lesson; continue with ORM/migration/query-performance depth thereafter. No certification change, push or publish.

### Event-driven webhook and worker batch — 2026-10-03

- Added three focused lessons: **Accept a webhook only after checking its signature and delivery ID**, **Record a delivery before a background worker processes it**, and **Keep failed event jobs visible after bounded retries**. They cover raw-body HMAC verification, duplicate/full-queue ordering, a transactional SQLite inbox with unique delivery IDs, single-worker completion, bounded retry and dead-letter state. Each has beginner explanation, practical context, worked example, guided lab, in-site concept check, mistakes, three questions, source text, review date and aligned project milestone.
- Checked official GitHub webhook guidance and Python 3.14 `hmac`, `collections`, `queue` and `sqlite3` documentation. Bundled Python ran all new examples/solutions and the SQLite companion; module/route checks pass for **226** lessons and syntax parsing for **449** snippets. The depth audit reports **49** single-mapped topic statements. Promoted the webhook/message-queue/event-worker master item to `[x]` with explicit limitations in the evidence log.
- Current local state: **226** modules, **54 of 136** individually evidenced, **82** pending. The site still lacks in-browser Python execution; the SQLite demo is in-memory/single-worker and the deque demo is not a durable retry scheduler. Exact next batch: SQL fundamentals from Python—parameterized queries, transactions, connection lifecycle and safe SQLite/PostgreSQL distinctions. No certification change, push or publish.

### HTTP client and retry-safety batch — 2026-10-03

- Added **Read a real HTTP response and collect every page safely**. Its saved offline loopback fixture makes real urllib requests to 127.0.0.1 and verifies response content type, body-size limit, page shape and cursor limit. The pure guided lab tests complete two-page collection and a missing-page failure; both ran with expected results.
- Added **Retry an HTTP request only when its effect is safe**. It models bounded GET retries for 429/503, numeric Retry-After validation, an explicit stop for unsupported dates, and refusal to blindly repeat a POST. Example and lab solution ran. Both new lessons include beginner explanations, practical examples, guided practice, in-site concept checks, mistakes, three questions, source text, review dates and project milestones.
- Checked Python 3.14 standard-library docs and RFC 9110/6585/9293; corrected older HTTP/socket source notes. Module/route checks pass for **223** lessons and syntax parsing for **443** snippets. Promoted the HTTP/socket/retry/pagination master item to `[x]` with evidence, without implying the browser editor can execute Python.
- Current local state: **223** modules, **53 of 136** individually evidenced, **83** pending. The browser Python runtime remains a release blocker. Exact next batch: webhook/message-queue/event-driven worker patterns, then SQL/database boundaries, in curriculum order. No certification change, push or publish.

### Process measurement and async failure-policy batch — 2026-10-03

- Added **Measure a process pool and keep worker failures visible** with full-path sequential/pool timing, correctness comparison, per-Future errors and workload-specific interpretation. Both saved scripts ran on Windows with equal answers and expected validation failure. The tiny test was slower in the pool, and the lesson explicitly explains why this is not a universal result.
- Added **Know what happens to sibling async tasks when one fails** with Event-coordinated TaskGroup cancellation, finally cleanup and grouped error handling. The worked example and lab solution ran with expected traces. Both lessons have original beginner theory, practical context, guided practice, mistakes, three questions, source text, review dates and project milestones; both include an in-site concept check where appropriate.
- Checked current official Python `concurrent.futures`, `time` and asyncio TaskGroup documentation. Module/route validation passes for **221** lessons and syntax parsing for **439** snippets. Promoted the broader asyncio syntax/task/timeout/resource master item to `[x]` based on these and existing focused lessons; browser Python execution is **not** implied.
- Current local state: **221** modules, **52 of 136** master topics individually evidenced, **84** pending. The process item remains `[~]` because local-script-only labs do not meet the in-site execution target and abrupt-worker recovery is not safely exercised. Exact next batch: HTTP/socket boundaries, retry/idempotency/pagination/rate-limit practice. No certification change, push or publish.

### Process-pool correctness, timing and visible failures — 2026-10-03

- Added **Measure a process pool and keep worker failures visible** with a correct sequential baseline, full-path `perf_counter` measurements, guarded two-worker spawn pool, explicit Future result/error collection, and an in-site concept choice about why tiny workloads can be slower. It includes original beginner theory, real-world use, worked example, guided practice, mistakes, three questions, source text, review date and project milestone.
- Both saved scripts ran on Windows (exit 0; equal answers, expected worker `ValueError`, nonnegative durations). One observed tiny-batch run was about 0.04 seconds sequential versus 0.26 seconds pooled; the lesson correctly treats that as workload-specific and never promises a fixed speedup. Module/route checks pass for **220** lessons and syntax parsing for **437** snippets.
- The process master item remains `[~]`: browser code execution is absent, so the process lab's Python portion requires a local script, and abrupt-worker failure/recovery is explained but not executed in a safe guided test. Current local state: **220** modules, **51 of 136** evidenced, **85** pending. Next: continue Section 9 in curriculum order with asyncio TaskGroup/gather failure behavior and HTTP/network boundaries while retaining the explicit runtime release blocker. No certification change, push or publish.

### IPC message ownership and runtime feasibility — 2026-10-03

- Added **Send a result between processes without sharing a variable** with one-way Pipe endpoint ownership, bounded receive wait, child join/exit-status check, practical analytics scenario, guided lab, in-site concept answer check, mistakes, three questions, source text, review date and project milestone. Both saved companion scripts ran on Windows with expected result records; module/route validation passes for **219** lessons and syntax parsing for **435** snippets.
- Checked official Python 3.14 multiprocessing Pipe/Connection documentation and Pyodide's current deployment documentation. No Pyodide/WASM runtime exists in the repo or local cache; direct shell retrieval from official release/CDN endpoints failed TLS connection in this environment. Do not substitute a CDN dependency for the required self-hosted runtime or claim the current site executes Python.
- The process master item stays `[~]`: the actual process scripts require local Python, and process failure/recovery plus representative CPU benchmarking still need depth. Current local state: **219** modules, **51 of 136** individually evidenced, **85** pending. Next: strengthen process failure/retry and measurement, and pursue a self-hosted browser Python runtime when a verified package source is accessible. No certification change, push or publish.

### In-site process concept simulation — 2026-10-03

- Inspected the actual Python lesson viewer. It renders editable starter text, hints, self-check text and solutions but has no Python execution runtime or bundled Pyodide/other WASM interpreter. This confirms the existing in-site lab limitation is real, not merely a documentation omission.
- Added a reusable optional `lab.simulation` interaction to the modular lesson viewer. The process-pool lesson now lets learners answer a concrete Windows-spawn/import question inside the site and receive immediate explanatory feedback. The simulation schema is validated, and the control uses DOM text nodes rather than injecting learner text as HTML. Added matching mobile-friendly styling.
- JavaScript syntax, module/route, Python snippet and diff checks pass. **This is an in-site concept check, not Python code execution or an OS-process simulation**, and browser click/render verification remains pending. Current state stays **218** modules, **51 of 136** evidenced, **85** pending; no certification change, push or publish.
- Exact next step: decide and implement a genuinely local browser Python runtime for supported code labs (or clearly scoped backend with safe execution), verify representative lessons in a browser, then revisit process IPC and failure-recovery depth. Do not promote the broad process item or claim the runtime requirement met before those checks.

### Real script process-pool lab — 2026-10-03

- Added **Run a process pool from a real script and collect results**, with a top-level worker, explicit spawn context, main guard, bounded two-worker pool, Future result/error handling, a worked example and guided lab. Added two executable companion `.py` scripts alongside the lesson so Windows-spawn behavior can be verified as a real file rather than misleadingly running snippets in `python -c`.
- Both companion scripts ran locally on Windows (exit 0; expected successes and visible `ValueError`), and content/route validators pass for **218** lessons with **433** parsed snippets. The lesson includes beginner explanation, practical use, mistakes, three questions, source text, review date and project milestone.
- The process master item remains `[~]`: IPC design, process-failure recovery and representative CPU benchmarking need further depth. Most importantly, an OS process pool cannot run in the site's current browser-only guided lab; the lesson explicitly labels its local-script requirement. This is a release limitation, not a claim that all labs run in the site. Current local state: **218** modules, **51 of 136** evidenced, **85** pending. No certification change, push or publish.
- Exact next batch: deepen process IPC/failure behavior and benchmark trade-offs, then assess an honest browser-compatible simulation versus optional local execution for the lab experience.

### Process payload and serialization boundary — 2026-10-03

- Added **Design data that can cross a process boundary**, teaching separate process memory, importable top-level workers, small serialized job records, Windows-safe main guards, result/error collection and the unsafe-untrusted-pickle boundary. Its local worked example and guided lab test only a trusted serialization round trip; the lesson explicitly says this does not prove a pool can run in the browser or REPL.
- Checked Python 3.14 official `multiprocessing`, `concurrent.futures.ProcessPoolExecutor` and `pickle` documentation. Bundled Python ran the example and lab solution (exit 0, expected records); module/route checks pass for **217** lessons and syntax parsing for **431** snippets.
- The broad process item remains `[~]`: actual script-based process-pool startup, IPC, exception handling and measured CPU trade-offs still need a focused runnable lesson. Current local state: **217** modules, **51 of 136** evidenced, **85** pending. Exact next step: add a guarded real-script pool example and lab, run it on Windows, then reassess the item. No certification change, push or publish.

### Thread queue handoff and full item review — 2026-10-03

- Added **Hand off thread work and collect failures safely** with a bounded synchronized Queue, per-item outcome channel, sentinel shutdown, task_done/join pairing and worker join. A malformed job appears as a visible error instead of silent success. It includes beginner explanation, worked example, guided lab, mistakes, three questions, source text, review date and import-assistant project milestone.
- Checked Python 3.14 queue, threading and concurrent.futures docs. Bundled Python ran the example and lab solution with expected success/error results; module/route checks pass for **216** lessons and syntax parsing for **429** snippets. Together with the lock-order/GIL lessons, this promotes the broad threads item to `[x]` with bounded evidence.
- Current local state: **216** Python modules; **51 of 136** master topics individually evidenced, **85** pending. Exact next batch: processes, multiprocessing/pickling constraints, pools and IPC in curriculum order. No certification change, push or publish.

### Thread lock-order lesson — 2026-10-03

- Added **Prevent thread races and lock-order deadlocks** with distinct-object/unique-name and non-negative-amount guards, stable two-lock acquisition order, a conserved-total test and a clear production database-transaction boundary. The lesson includes beginner theory, practical context, worked code, guided lab, mistakes, three questions, source text, review date and project milestone.
- Checked official Python 3.14 `threading` Lock and synchronized `queue` documentation. Bundled Python ran the example and lab solution (both printed 200); module/route validation passes for **215** lessons and syntax parsing for **427** snippets.
- The broad thread item remains `[~]`: synchronized queue handoff and I/O-bound worker exception collection need a focused runnable exercise before individual depth promotion. Current local state: **215** modules, **50 of 136** evidenced, **86** pending. Next: add queue-based producer/consumer lesson, then process/pickling/IPC. No certification change, push or publish.

### Event-loop lifecycle and async item review — 2026-10-03

- Added **Trace an event loop task from start to cancellation** with a deterministic Event-coordinated lifecycle trace. It teaches coroutine creation versus scheduling, cooperative awaiting, cancellation delivery, finally cleanup, and awaiting task termination; includes a guided lab, mistakes, three questions, source text, review date and dashboard project milestone.
- Checked Python 3.14 official asyncio task/event-loop documentation. Bundled Python ran the example and solution with predicted traces; module/route checks pass for **214** lessons and syntax parsing for **425** snippets. Together with the bounded-queue and existing timeout/async-iterator lessons, this provides individual evidence for the async-internals master item, now `[x]`.
- Current local state: **214** Python modules, **50 of 136** master topics individually evidenced, **86** pending. Exact next batch: Section 9 thread races/deadlocks, process/pickling/IPC, and structured concurrency failure behavior, in curriculum order. No certification change, push or publish.

### Async bounded-queue practice — 2026-10-03

- Added **Bound an async work queue and finish jobs cleanly**. The learner-facing lesson explains cooperative awaits, finite queue capacity, producer backpressure, successful-get/task_done pairing, join, and deliberate worker cancellation with a practical export scenario, guided lab, common mistakes, three questions, source text, review date and project milestone.
- Checked the Python 3.14 official asyncio queue and task/cancellation documentation. Bundled Python ran the worked example and lab solution (both exit 0; two jobs each); module/route validation passes for **213** lessons and syntax parsing for **423** snippets.
- The broad async-internals item remains `[~]` until a focused event-loop scheduling/cancellation trace and failure/retry boundary are reviewed. Current local state: **213** lessons, **49 of 136** individually evidenced, **87** pending. Next: add an event-loop task-order and cancellation-cleanup trace, then reassess async depth. No certification change, push or publish.

### GIL accuracy and portability review — 2026-10-03

- Corrected the older combined internals lesson's blanket GIL statement and its stale `// VERIFY` source note. The new focused GIL lesson and existing portability lesson now agree that optional free-threaded CPython builds differ from conventional GIL-enabled builds, while application state still needs explicit synchronization.
- Checked the Python 3.14 free-threading HOWTO and threading/sys/sysconfig documentation; the focused example and lab ran on bundled CPython 3.12. Promoted the GIL/portability master statement to `[x]` with evidence and a clear limit: the local runtime cannot execute the free-threaded branch.
- Current local state: **212** Python modules; **49 of 136** master topics individually evidenced, **87** pending. The next batch is async internals: event-loop scheduling, cancellation and bounded-queue backpressure. No certification change, push or publish.

### GIL build and thread-safety lesson — 2026-10-03

- Added **Understand the GIL without assuming threads are safe** as a focused expert lesson. It distinguishes the Python language from CPython behavior, free-threaded build capability from actual GIL state, and application-level locking from incidental interpreter behavior. The guided two-worker counter lab has hints, checks, solution, mistakes, three questions, source text, review date and project milestone.
- Checked the official Python 3.14 free-threading HOWTO and threading/sys documentation. The bundled Python 3.12 runtime ran the worked example and lab solution (exit 0; CPython, no free-threaded build, runtime probe unavailable, counter 200). Module/route checks pass for **212** lessons and syntax parsing for **421** snippets.
- The broad GIL/portability master item remains `[~]`: the older combined internals lesson still has an overbroad GIL sentence that needs correction, and implementation-specific extension/build portability deserves a focused review. Current local state: **212** modules, **48 of 136** individually evidenced, **88** pending. No certification change, push or publish.
- Exact next batch: correct the older internals lesson's blanket GIL claim, compare both lessons against current portability/build documentation, then decide whether the master item merits `[x]`. After that, cover async internals.

### Complexity and profiler workflow batch — 2026-10-03

- Added **Connect complexity, a fair benchmark, and a profiler** with a runnable list/set lookup comparison, correctness check, `cProfile` function evidence and repeated `timeit` measurements. It teaches growth reasoning, setup/profiler overhead and set-build/memory/order trade-offs, with a guided lab, mistakes, three questions, source text, review date and importer project milestone.
- Checked Python 3.14 official `timeit`, `profile` and set documentation. Bundled Python ran the example and lab solution (exit 0, expected qualitative output); module/route checks pass for **211** lessons and syntax parsing for **419** snippets. Promoted the complexity/profiling master item to `[x]` with limits on microbenchmark conclusions.
- Current local state: **211** Python modules; **48 of 136** master topics individually evidenced, **88** pending review. No certification change, push or publish.
- Exact next batch: inspect CPython GIL and implementation-portability teaching against current Python documentation, especially current/free-threaded-build nuance; add focused verified learner practice. Then cover async internals.

### Compilation and execution-frame batch — 2026-10-03

- Added **From source to code objects and .pyc cache files** and **Read the call stack without confusing local and global names**. They explain compilation versus execution, disposable cache creation, import-side effects, frame summaries, enclosed/local/global namespaces and safe diagnostics with runnable examples, guided labs, mistakes, three questions, source text, review dates and project milestones.
- Checked Python 3.14 official `py_compile`, `dis`, import-system, traceback and scope documentation. Bundled Python ran both examples and both lab solutions (all exit 0, expected output); module/route checks pass for **210** lessons and syntax parsing for **417** snippets. Promoted the bytecode/import/frame master item to `[x]` with CPython bytecode limits explicit.
- Current local state: **210** Python modules; **47 of 136** master topics individually evidenced, **89** pending review. No certification change, push or publish.
- Exact next batch: Section 8 algorithmic complexity, `timeit`, `cProfile` and evidence-based performance trade-offs. Review older performance lessons, add a focused profile-and-complexity exercise, then revisit CPython GIL claims.

### Copy ownership and memory-tracing batch — 2026-10-03

- Added **Choose binding, shallow copy, or deep copy deliberately** and **Measure Python allocations before blaming a memory leak** as two expert lessons. They teach nested-copy ownership, identity versus equality/interning caveats, traced Python allocations, snapshot differences and measurement limits with practical progress-editor/export scenarios. Both have original beginner-friendly explanations, runnable examples, guided labs, mistakes, three questions, source text, review dates and project milestones.
- Checked Python 3.14 official `copy`, `tracemalloc`, `sys.intern` and data-model docs. Bundled Python ran both examples and both lab solutions (all exit 0, expected output). Module/route checks pass for **208** lessons and syntax parsing for **413** snippets. Promoted the copy/memory master item to `[x]` with bounded evidence.
- Current local state: **208** Python modules; **46 of 136** master topics individually evidenced, **90** pending review. No certification change, push or publish.
- Exact next batch: Section 8 bytecode, compilation, `.pyc`, import execution, frames, call stack and namespaces. Review existing execution-memory lessons and add focused executable gaps without claiming bytecode stability across versions.

### Reachability and weak ownership batch — 2026-10-03

- Added **Names, cycles, collection, and weak ownership** as an expert lesson with a concrete alias/cycle/weakref example, guided lab, practical cache ownership scenario, common mistakes, three questions, source text, review date and project milestone. It explicitly rejects relying on finalization timing for files and locks.
- Checked official Python 3.14 data-model, `gc` and `weakref` documentation. Bundled Python ran the new and older weakref examples and labs (all exit 0, expected output). Module/route checks pass for **206** lessons and syntax parsing for **409** snippets. Promoted the names/references/lifetime master item to `[x]` with CPython-specific collection behavior labelled.
- Current local state: **206** Python modules; **45 of 136** master topics individually evidenced, **91** pending review. No certification change, push or publish.
- Exact next batch: Section 8 mutability, interning/caching caveats, copy semantics and memory profiling; inspect existing memory/copy lessons for actual executable depth before adding focused gaps.

### Descriptor precedence and metaclass trace batch — 2026-10-03

- Added **Why some descriptors override instance values and others do not** and **See when a metaclass builds a class**. They teach ordinary data/non-data descriptor precedence, validated assignment, custom metaclass creation order, decorator application, and instance initialization with executable examples and guided labs. Both include beginner theory, practical use, mistakes, three questions, source text, review date and project milestones.
- Cross-checked Python 3.14 Descriptor HOWTO and data-model reference; ran both examples and both lab solutions (all exit 0, expected output). Module/route checks pass for **205** lessons and syntax parsing for **407** snippets. Promoted the descriptors/decorators/metaclasses master item to `[x]` with bounded evidence.
- Current local state: **205** Python modules; **44 of 136** master topics individually evidenced, **92** pending review. No certification change, push or publish.
- Exact next batch: Section 8 names, bindings, references, object lifetime, garbage collection, cycles and weak references; audit existing expert lessons for accuracy and hands-on execution before adding focused gaps.

### Class-creation mechanisms and accuracy repair — 2026-10-03

- Corrected the older broad dataclass/enum lesson so it validates its enum field at runtime; the example and lab now visibly reject raw strings. Repaired the older descriptor lab so it creates a Lesson and checks valid normalization, blank-title rejection and class-level descriptor access instead of only defining a class.
- Added **Choose a class decorator, subclass hook, or metaclass** with an executable decorator/`__init_subclass__` example, guided lab, beginner explanation, practical report-catalog context, mistakes, three questions, source text, review date and project milestone. It explicitly explains why a custom metaclass is unnecessary for this use case.
- Checked Python 3.14 official class-creation and descriptor documentation. Ran all new/updated examples and labs with bundled Python (exit 0, expected output). Module/route checks pass for **203** lessons and syntax parsing for **403** snippets.
- The descriptors/decorators/metaclasses master item remains `[~]`: the current lessons explain metaclasses but do not yet give a verified custom-metaclass lab or cover descriptor precedence in sufficient depth. Current local state: **203** Python modules; **43 of 136** master topics individually evidenced, **93** pending review. No certification change, push or publish.
- Exact next batch: add a narrow custom-metaclass example and data-versus-non-data descriptor lookup exercise, compare with the simpler hooks, then decide whether the item earns individual `[x]` evidence. After that move into Section 8 execution model and memory.

### Dataclass, enum and capability-contract batch — 2026-10-03

- Added **Use dataclasses and enums without skipping validation** and **Choose an abstract base class, a protocol, or composition** as focused advanced lessons. They cover generated methods versus runtime checks, independent mutable defaults, enum text boundaries, ABC enforcement, structural typing and collaborator injection. Each contains beginner theory, a practical scenario, a runnable example, guided lab, common mistakes, three questions, source text, review date and project milestone.
- Checked Python 3.14 official standard-library documentation and ran both examples and lab solutions (all exit 0, expected output). Module/route checks pass for **202** lessons and syntax parsing for **401** snippets. Promoted the named master item to `[x]` with explicit limits: static Protocol checker behavior was not locally tested.
- Current local state: **202** Python modules; **43 of 136** master topics individually evidenced, **93** pending review. No certification change, push or publish.
- Exact next batch: correct the older broad dataclass/enum lesson's oversimplified validation wording, then deepen descriptors, decorators, metaclasses and class-creation hooks with safe, executable, focused examples.

### Python special-method protocols batch — 2026-10-03

- Added **Special methods for readable, comparable, addable values** and **Make an object work with len, indexing, for, and with** as two focused advanced lessons. They cover safe representation, value comparison, arithmetic/NotImplemented, hash constraints, repeatable container iteration, and cleanup that preserves errors. Each has original beginner theory, practical use, executable example, guided lab, mistakes, three questions, source text, review date and project milestone.
- Verified against Python 3.14 official data-model documentation. Bundled Python ran both examples and both lab solutions (all exit 0, expected output); module and route checks pass for **200** lessons and syntax parsing passes for **397** snippets. Promoted the special-method master item to `[x]` with bounded evidence.
- Current local state: **200** Python modules; **42 of 136** master topics individually evidenced, **94** pending review. No certification change, push or publish.
- Exact next batch: Section 7 dataclasses, enums, abstract base classes and protocols, with design trade-offs and executable labs; then review descriptors/decorators/metaclasses/class hooks.

### Property accuracy and cooperative-inheritance batch — 2026-10-03

- Repaired the older **The Python data model: properties, invariants, and special methods** example/lab: exact-int validation now rejects `True`, and the lab solution actually exercises 0, 100, -1, 101 and `True` with visible results.
- Added **Inheritance, mixins, polymorphism, and cooperative super** as a focused lesson with explicit MRO, a runnable `super()` chain, beginner explanation, real-world design choice, guided lab, mistakes, three questions, source text, review date and project milestone. Existing composition teaching remains in place.
- Checked official Python 3.14 docs; ran updated property example/lab and new inheritance example/lab under bundled Python (all exit 0, expected output). Module/route checks pass for **198** lessons and syntax parsing for **393** snippets. Promoted the inheritance master item to `[x]` with bounded evidence.
- Current local state: **198** Python modules; **41 of 136** master topics individually evidenced, **95** pending review. No certification change, push or publish.
- Exact next batch: Section 7 Python data-model special methods—representation, comparison, arithmetic, container, context-manager and iterator protocols—in focused executable lessons and checks. Then review dataclasses/enums/ABCs/protocols and descriptors.

### Property and introspection batch — 2026-10-03

- Added **Properties, naming conventions, and inspecting object state** with an executable example and guided lab for range validation, preserving old state on rejection, narrow introspection, name-mangling limits, and the `bool`-as-`int` trap. It includes beginner theory, practical dashboard context, common mistakes, hints/checks/solution, three questions, source text, review date and project connection.
- Checked official Python 3.14 documentation and ran the example and lab solution with bundled Python (exit 0, expected output). Module/route checks pass for **197** lessons and syntax parsing for **391** snippets. Promoted the encapsulation/introspection master item to `[x]` with bounded evidence. The older broad property lesson still accepts booleans via `isinstance(value, int)`; that content should be corrected as a separate accuracy repair rather than ignored.
- Current local state: **197** Python modules; **40 of 136** master topics individually evidenced, **96** pending review. No certification change, push or publish.
- Exact next batch: repair the older percentage property's bool contract, then review inheritance, composition, mixins, multiple inheritance, MRO, `super` and polymorphism with focused executable lessons.

### Class construction and attribute ownership batch — 2026-10-03

- Added **Create objects and understand bound methods** and **Class attributes, instance attributes, and shadowing** as separate advanced lessons. They explain per-instance construction, method binding, shared defaults, shadowing and the mutable-class-list trap in beginner language, with worked examples, guided labs, mistakes, checks and aligned progress-dashboard milestones.
- Cross-checked against Python 3.14 official class and data-model documentation. Bundled Python ran both examples and both lab solutions (exit 0, expected output). Module/route validators pass for **196** lessons and syntax parsing passes for **389** snippets. Promoted the class-basics master item to `[x]` with bounded evidence; deeper object-model topics remain pending.
- Current local state: **196** Python modules; **39 of 136** master topics individually evidenced, **97** pending review. No certification change, push or publish.
- Exact next batch: Section 7 encapsulation conventions, properties, name mangling, `__dict__` and introspection, using focused examples rather than one broad OOP overview. Then inheritance/composition/MRO.

### Debugging and minimal-reproduction batch — 2026-10-03

- Added **Debug with a small reproduction, traceback, and breakpoint**, a learner-facing lesson on isolating an empty-list failure, reading the failing traceback frame, using pdb only in a local interactive terminal, and retaining empty/normal regression checks. Its guided lab has hints, checks, solution, common mistakes, source text, review date and a study-progress project milestone.
- Ran the worked example and lab solution with bundled Python (both exit 0, expected outputs); module, route and 385-snippet syntax validators pass. Promoted the debugging checklist item to `[x]` with bounded evidence. No live debugger or browser code execution was claimed.
- Current local state: **194** Python modules; **38 of 136** master topics individually evidenced, **98** pending review. No certification change, push or publish.
- Exact next batch: Section 7 OOP/data-model topics in checklist order, starting class/instance state, constructors, method binding and attribute lookup. Review/deepen existing lessons before creating overlapping ones.

### Contextual and privacy-safe logging batch — 2026-10-03

- Added **Useful logs: levels, handlers, context, and privacy** with deterministic in-memory logs, safe job context, no token leakage, a guided lab and three-question review.
- Repaired an older logging lesson whose displayed output interleaved stdout prints with stderr logs even though the streams have no guaranteed shared order. Its example/lab now use one owned stdout handler and clean it up. Ran new/updated snippets locally and promoted the logging master item to `[x]` with evidence and explicit limits.
- Current local state: **193** Python modules; **37 of 136** master topics individually evidenced, **99** pending review. No certification change, push or publish.
- Exact next batch: debugging with breakpoints, pdb, traceback interpretation and minimal reproductions; then move into Section 7 OOP/data-model topics in checklist order.

### Serialization shape and trust-boundary batch — 2026-10-03

- Added **Choose JSON, CSV, or pickle by data shape and trust**, including CSV-to-JSON conversion, explicit validation and a warning never to load untrusted pickle data. Its example and lab ran locally with expected values.
- Repaired an older JSON file lesson that wrote directly to the current directory; its example and lab now use disposable temporary folders. Executed four related serialization lessons' examples/labs (eight snippets, exit 0). Promoted the serialization master item to `[x]` with evidence.
- Current local state: **192** Python modules; **36 of 136** master topics individually evidenced, **100** pending review. No push/publish or certification change.
- Exact next batch: review logging levels, contextual data, handlers/formatters and log privacy; then debugging with pdb/breakpoints and minimal reproductions. Repair any examples whose expected output mixes stderr and stdout without explanation.

### Class and generator context-manager batch — 2026-10-03

- Reworked the existing class-based context-manager lab so learners see cleanup after both normal completion and a deliberately raised ValueError; returning False preserves the outer error handler. Added **Create a focused context manager with contextlib**, teaching a one-yield `@contextmanager`, `try/finally`, and accidental exception suppression.
- Ran both lessons' examples and labs locally; all exited 0 with the expected active/cleared states and visible error handling. Promoted the context-manager master item to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **191** Python modules; **35 of 136** master topics individually evidenced, **101** pending review. Module/route and 379-snippet syntax checks pass. No push/publish or certification change.
- Exact next batch: review JSON/CSV serialization and untrusted-data validation, especially pickle risks, then logging/debugging and remaining Section 6 items.

### Syntax-versus-runtime and exception-flow batch — 2026-10-03

- Added **Syntax errors versus runtime exceptions** and **Exception flow: except, else, finally, and assertions**. Both are modular, beginner-facing lessons with checked examples, guided labs, common mistakes, three-question reviews, source text, review dates and project milestones.
- Executed five related existing examples/labs, including the deliberately failing traceback demo (exit 1 with the expected `IndexError`). Repaired an older exception-design lab that previously defined a function but never exercised it; it now prints distinct outcomes for valid, invalid-text and negative inputs. Promoted two error/exception master items to `[x]` with evidence.
- Current local state: **190** Python modules; **34 of 136** master topics individually evidenced, **102** pending review. No certification change, push or publish.
- Exact next batch: deepen context managers and resource ownership (the old advanced lab repeats its example), then serialization safety and logging; test intentional failures rather than treating them as unexplained validator passes.

### Text/binary file I/O and replacement-write batch — 2026-10-03

- Added **Text versus binary files: modes, encoding, and cleanup** with a disposable UTF-8 text/binary example and lab. Repaired the older atomic-write example to use a disposable folder and cleanup in `finally`; replaced its path-only lab with a guided same-directory replacement-write exercise.
- Ran both examples and both labs locally. A simulated `os.replace` failure preserved the old file and left no extra temporary file. Promoted the file-I/O master item to `[x]` with evidence and the explicit power-loss durability limitation in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **188** Python modules; **32 of 136** master topics individually evidenced, **104** pending review. Module/route and 373-snippet syntax checks pass. No push/publish or certification change.
- Exact next batch: review syntax errors versus exceptions, exception control flow and context managers; test old examples including deliberate failures, repair weak labs, then continue serialization and logging.

### Configuration-layering and secret-boundary batch — 2026-10-03

- Added **Layered configuration: INI, environment, and command-line options**, a focused intermediate lesson with deterministic CLI > environment > file precedence, `configparser` typed conversion, post-resolution validation, and a secret-handling boundary. Its example and guided solution ran with the expected values.
- Executed related existing configuration lessons in a disposable working directory with fictional settings. Corrected an older secure-config example to use the current interpreter via `sys.executable` rather than an ambiguous `python` on PATH. Promoted configuration management to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **187** Python modules; **31 of 136** master topics individually evidenced, **105** pending review. No certification change, push, or publish.
- Exact next batch: review filesystem paths and file I/O, exceptions/logging, and serialization boundaries in master-checklist order; repair examples that still describe rather than demonstrate output.

### Offline sdist and clean-install packaging verification — 2026-10-03

- In a disposable copy of the package fixture, built an sdist and wheel offline with the installed setuptools backend; installed the wheel into a clean target without index/dependencies and imported its `greeting` function (`Hello, Learner!`). The first sdist build exposed a missing README warning; added README.md to the fixture, rebuilt, and confirmed README.md plus package source were present in the archive.
- Compared the learner-facing dependency and packaging lessons with official pip/PyPA documentation and local runnable examples. Promoted those two master items to individually evidenced `[x]`; detailed scope and limitations are in `content/python/DEPTH_EVIDENCE.md`. There was no package-index upload or website push.
- Current local state: **186** Python modules; **30 of 136** master topics individually evidenced, **106** pending review. Module/route and 369-snippet syntax checks passed in the preceding batch; rerun after final edits. Certification remains untouched.
- Exact next batch: review configuration management (`os.environ`, `argparse`, `configparser`, secret boundaries), execute existing examples/labs, deepen thin areas and only then promote the checklist item.

### Wheel/source-distribution release-boundary batch — 2026-10-03

- Added **Wheels, source distributions, and release boundaries**, including original explanation, safe offline artifact-name practice, a three-question check, mistakes and a cross-track reporting release milestone. Its example and lab ran locally with exact output.
- Added a minimal package fixture under `tools/fixtures/python-package-demo/` and verified an actual wheel build with the locally installed setuptools backend using `python -m pip wheel --no-index --no-deps --no-build-isolation`. The command produced `learnverse_package_demo-0.1.0-py3-none-any.whl` without publication or network. Generated build/egg-info artifacts from the fixture were removed afterward; the original source fixture remains.
- Current local state: **186** Python modules; **28 of 136** master topics individually evidenced, **108** pending review. Module/route checks and 369-snippet syntax check pass. Wheel/sdist/versioning checklist remains pending because only a wheel build was verified; sdist and clean-install evidence are still missing.
- Exact next batch: run an offline sdist build and clean wheel install in a disposable environment, inspect artifacts, then deepen and promote the packaging checklist item only if the learner-facing material and evidence are genuinely sufficient.

### Dependency workflow and safe-upgrade lesson — 2026-10-03

- Added **Requirements, constraints, locks, and safe upgrades** as a production lesson. It explains interpreter-bound pip, direct requirements versus version-only constraints, lock scope, and why repeatability does not equal security. The offline worked example and guided lab ran with exact expected outputs. It is a simplified teaching model, explicitly not a pip resolver.
- Current local state: **185** Python modules; **28 of 136** master items evidenced, **108** pending review. Module/route validation and 367 Python snippet syntax checks pass. The dependency and packaging master items remain pending until artifact and upgrade workflows are more fully evidenced.
- Exact next batch: inspect and deepen wheels/sdists, build backend, versioning and publishing concepts; validate a real local build where available without network or publication, and keep the release workflow separate from the learner's offline lab.

### Standard-library evidence and packaging preflight batch — 2026-10-03

- Executed and reviewed five standard-library lessons covering the master item's `math`, `random`, `statistics`, `datetime`, `pathlib`, `os`, `sys`, `collections`, `itertools`, and `functools` starter uses. All five worked examples matched stored output and all five guided solutions ran locally; the item is now individually evidenced `[x]` with scope/limitations recorded in `content/python/DEPTH_EVIDENCE.md`.
- Added **Inspect pyproject.toml before building a package**, a production-level lesson with an offline `tomllib` example and lab. Both ran in local Python; the lesson explicitly separates metadata parsing from real builds, installs, and publishing. This does not yet promote the two broad dependency/packaging checklist items.
- Current local state: **184** Python modules; **28 of 136** master topics evidenced, **108** pending review. Module/route validators and 365-snippet syntax check pass. All changes remain local; certification untouched.
- Exact next batch: deepen and test dependency management, pip requirements/constraints, lock and vulnerability review, then wheels/sdists and build workflow using accurate offline practice; continue the next master item only after checking its real examples and labs.

### Portable file and process-context lesson — 2026-10-03

- Added **Portable paths, process settings, and runtime checks** to the intermediate Python route. It uses `pathlib`, `os.environ`, `sys.version_info`, and `TemporaryDirectory` in a working report example and a disposable guided lab. The local Python runner executed both successfully; the release gate remains local-only.
- Current local state: **183** Python modules; **27 of 136** master items individually evidenced, **109** pending deeper review. The broad standard-library item is deliberately still pending until the existing `itertools`/`functools` evidence is checked and its subtopics are adequate.
- Exact next batch: execute and review the `itertools` and `functools` examples/labs, then inspect dependency/packaging examples and deepen any gaps. No push/publish until the entire Python track is genuinely ready.

### Standard-library practical metrics and dates batch — 2026-10-03

- Added **Build report metrics with math, statistics, random, and collections** and **Dates and deadlines with datetime** as complete, modular learner-facing lessons. Both explain where the code applies, include checked local examples and guided solutions, mistakes, three-question reviews and cross-track project milestones. Official Python 3.14 standard-library pages were checked before authoring.
- Current local state: **182** Python modules; master checklist remains **27 of 136** individually evidenced and **109** mapped/pending review. This batch deepens the broad standard-library item but does not promote it: `pathlib`, `os`, `sys`, `itertools`, and `functools` still need cohesive reviewed evidence across existing or new lessons.
- Exact next batch: inspect and deepen those remaining standard-library module examples, then review dependency/packaging fundamentals and repair any non-executable example. Keep all changes local; no certification edits, push, or publish.

### Imports and package-boundary repair batch — 2026-10-03

- Added **Imports in action: search path, cache, and side effects** using a temporary real module; added **Packages: sibling imports, public APIs, and namespace layouts** using a temporary real package and relative re-export.
- Found two older pseudo-multifile lessons whose examples or labs failed when run as a single Python snippet: one raised ModuleNotFoundError and one raised a relative-import ImportError. Repaired both examples and labs to create real temporary files/packages, run them locally, and clean up. Corrected another import lesson's expectedOutput from prose to actual output.
- After repair, six relevant worked examples and six lab solutions ran with bundled Python, exit 0 and matching stored worked-example outputs. Promoted imports and user packages master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **180** Python modules; **27 of 136** master topics individually evidenced, **109** mapped/pending review. Module, route and 357-snippet syntax validators pass. No push or publish; certification untouched. Browser Python execution remains unmet.
- Exact next batch: review standard-library modules and dependency/packaging fundamentals, checking official behavior and whether every worked example is truly executable rather than comment-separated pseudofiles.

### Generators and type-contract depth batch — 2026-10-03

- Added **Generators: yield, yield from, and one-pass data** with a weekly lesson stream and fresh-pass lab. Added **Type hints as contracts: TypedDict, Protocol, and runtime checks** with a valid/invalid imported record, exact bool-versus-int boundary, generic helper and dataclass explanation.
- Corrected an older generic lesson whose expected-output field described behavior in prose while its worked example printed nothing; it now prints two concrete results and the output matches.
- Reviewed the related existing generator, iterator, dataclass and generic lessons. Six worked examples and six lab solutions ran in bundled Python with exit 0 and matching stored worked outputs. An older generic lab uses assertions without printed output; evidence is limited to its asserted sample cases.
- Promoted generators and typing-contract master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **178** Python modules; **25 of 136** master topics individually evidenced, **111** mapped/pending review. Module, route and 353-snippet syntax validators pass. No push or publish; certification untouched. Browser-based Python execution remains unmet.
- Exact next batch: review imports, modules/packages and standard-library fundamentals, including import-time effects and package boundaries, in checklist order.

### Recursion and first-class-function depth batch — 2026-10-03

- Added **Recursion: base cases, call depth, and an iterative alternative**, connecting a small tree traversal to explicit-stack processing and warning about depth/cycle policies. Added **Functions as values: lambda, map, filter, and partial**, showing lazy iterators, equivalent comprehensions, configured callables and callback readability.
- Reviewed each new lesson with the existing recursion/DP and decorator lessons. Four worked examples and four lab solutions ran in bundled Python, exit 0 with matching stored worked-example outputs. Promoted the two corresponding master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **176** Python modules; **23 of 136** master topics individually evidenced, **113** mapped/pending review. Module, route and 349-snippet syntax validators pass. No push or publish; certification untouched. Browser Python execution remains unmet.
- Exact next batch: review generators, yield/yield from and iterator exhaustion, then type annotations/protocols and module/import topics in checklist order.

### Function signatures and scope depth batch — 2026-10-03

- Added **Function calls: positional-only, keyword-only, defaults, and unpacking** and **Scope and closures: where names come from and when callbacks read them**. The first clarifies definition-side gathering versus call-side unpacking, signature markers and mutable-default safety. The second contrasts late-bound loop callbacks with a factory repair, and explains LEGB, nonlocal/global and shadowing.
- Reviewed the relevant existing lessons. Five worked examples and five lab solutions ran in bundled Python with exit 0 and matching stored worked-example outputs. The earlier typed-interface lab only defines a function, so its no-output execution is not proof of its return behavior.
- Promoted parameter kinds and LEGB/scope master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **174** Python modules; **21 of 136** master topics individually evidenced, **115** mapped/pending review. Module, route and 345-snippet syntax validators pass. No push or publish; certification untouched. Browser-based Python execution remains unmet.
- Exact next batch: review recursion/base cases/stack limits and first-class functions/decorators, then generators/iterators in checklist order; deepen and execute before promotion.

### Regex and structured-data boundary batch — 2026-10-03

- Added **Regular expressions: search, match, fullmatch, and replace** to distinguish substring/prefix search from complete ID validation, named groups and narrow substitutions. Added **JSON and CSV: parse first, validate second** with quoted CSV, top-level shape checks, exact integer counts and malformed-input handling.
- Reviewed the related earlier regex/schema/JSON/CSV lessons. Six worked examples and six lab solutions ran with bundled Python, exit 0 and matching stored worked-example outputs. An older schema lab is only a function definition, so its no-output execution is not treated as proof of its return behavior.
- Promoted regex and JSON/CSV structured-data master items to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **172** Python modules; **19 of 136** master topics individually evidenced, **117** mapped/pending review. Module, route and 341-snippet syntax validators pass. No push or publish; certification untouched. In-browser Python execution remains unmet.
- Exact next batch: review more functions/scope items in checklist order, including parameter kinds, defaults, closures and recursion; deepen before promotion.

### Sequence and copy-semantics depth batch — 2026-10-03

- Added **Sequence tools: enumerate, strict zip, sorted, and reversed** to make pairing/truncation, sorting without mutation, reverse iterators and starred unpacking concrete for beginners.
- Reviewed related sequence, iterator, hashability, copy and mutable-default lessons. Seven worked examples and seven lab solutions ran in the bundled Python runtime with exit 0 and matching stored worked outputs. One older strict-zip lab and one aliasing lab use assertions without printed output, so their evidence is limited to the asserted cases. Prior deep-copy/list-ownership executions were also considered with this review.
- Promoted sequence operations and hashability/mutability/copy semantics master items to `[x]` with detailed evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **170** Python modules; **17 of 136** master topics individually evidenced, **119** mapped/pending review. Module, route and 337-snippet syntax validators pass. No push or publish; certification untouched. Browser Python execution remains unmet.
- Exact next batch: review regex and JSON/CSV topic items, deepen boundary validation and safe parsing where needed, and run examples/lab solutions before promotion.

### Sets and dictionaries depth batch — 2026-10-03

- Added **Sets and frozensets: unique membership and set algebra** with operations, hashability, empty-set syntax and deterministic display. Added **Dictionaries in practice: keys, views, defaults, and nested records** with live views, insertion order, strict/optional lookup, merge precedence and nested-update boundaries.
- Reviewed related existing lessons and ran five worked examples plus five guided-lab solutions in bundled Python. Every run exited 0; all stored worked-example outputs matched. Promoted sets/frozensets and dictionaries master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **169** Python modules; **15 of 136** master topics individually evidenced, **121** mapped/pending review. Module, route and 335-snippet Python-syntax validators pass. No push or publish; certification untouched. In-browser Python execution remains unmet.
- Exact next batch: review sequence operations and hashability/mutability/copy semantics, then regex and JSON/CSV topics. Add focused depth and execute examples/labs before promotion.

### List and tuple depth batch — 2026-10-03

- Added **Lists in practice: methods, nested copies, stacks, and queues**, including shallow-copy ownership, append versus extend, deque FIFO, and a two-level independent snapshot lab. Added **Tuples: fixed records, unpacking, and named fields**, including the one-item comma, namedtuple, starred unpacking, and the nested-mutability caveat.
- Reviewed the new lessons alongside the existing list and tuple lessons. Five worked examples and five lab solutions ran with bundled Python, exit 0 and matching stored worked-example output. Promoted the lists and tuples master topics to `[x]` with concrete evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **167** Python modules; **13 of 136** master topics individually evidenced, **123** mapped/pending review. Module, route and 331-snippet syntax validators pass. No push or publish; certification untouched. In-browser Python execution remains unimplemented/unverified.
- Exact next batch: review sets/frozensets and dictionaries, including hashability, set algebra, key lookup, views, ordering, merging, defaults and nested structures; deepen before promoting.

### Comprehensions and Unicode-text depth batch — 2026-10-03

- Added **Comprehensions and generator expressions, step by step** with filtering, one-pass aggregation, equivalent nested-loop order, generator exhaustion and readability trade-offs. Added **Python text: Unicode, slices, escapes, and bytes** with code-point indexing, stop-exclusive slices, immutability, escape inspection and UTF-8 boundary handling.
- Reviewed each with the related existing lessons. Six stored worked examples and six lab solutions ran in bundled Python with exit 0; all worked-example outputs matched. The older structured-data lab only defines a function and makes no assertion, so that narrow execution result is not treated as proof of its contract. Promoted comprehension and string master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **165** Python modules, **11 of 136** master topics individually evidenced, **125** mapped/pending review. Module validator, route validator, and 327-snippet syntax parser pass. No push or publish; certification untouched. Guided labs still do not execute Python inside the browser.
- Exact next batch: review lists, then tuples, sets/frozensets, and dictionaries. Deepen methods, copying/aliasing, nesting, hashability and iteration/view behavior before promoting checklist items.

### Foundations loops and function-contract depth batch — 2026-10-03

- Added **Loop exits: break, continue, pass, and else**, closing the no-break/empty-input loop-else gap and adding a bounded while demonstration. Added **Functions: inputs, results, and a clear contract**, bridging beginner learners from parameter/argument vocabulary to return versus print, implicit None and docstrings.
- Reviewed each new lesson with its existing loop/function lesson, then ran four worked examples and four guided-lab solutions in bundled Python. All exited 0; every stored worked-example output matched. Promoted the iteration and basic-functions master topics to `[x]` with evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **163** Python modules; **9 of 136** master topics individually evidenced, **127** mapped/pending review. Module validator, route validator and 323-snippet syntax parser pass. No push or publish; certification untouched. Guided labs are still not an in-browser Python runner.
- Exact next batch: review comprehensions/generator expressions, then collections/text topics in checklist order; deepen any shallow topic and execute examples/lab solutions before promotion.

### Foundations arithmetic and Boolean-logic depth batch — 2026-10-03

- Added **Division, remainders, powers, and rounding rules**, covering /, //, %, **, precedence, negative floor-division caveats, `round()` ties-to-even, float approximation and explicit `Decimal.quantize` policy. Added **Comparison chains and Boolean expressions**, covering inclusive boundaries, short-circuit return values, `is None` versus `==`, and the `bool`-subclasses-`int` validation trap.
- Reviewed each new lesson with the related earlier arithmetic/float and truthiness/identity lessons. Ran six worked examples and six lab solutions in the bundled Python runtime; all exited 0 and all stored worked-example outputs matched. Promoted the numeric and comparison master topics to `[x]` with exact evidence in `content/python/DEPTH_EVIDENCE.md`.
- Current local state: **161** Python modules; **7 of 136** master topics individually evidenced, **129** still mapped/pending review. Module validator, route validator, 319-snippet syntax parser, depth-audit inventory, and diff whitespace check pass. No push or publish; certification untouched. Browser Python execution remains a separate unmet release gate.
- Exact next batch: continue Foundations with loops (`for`, `while`, `range`, `break`, `continue`, `pass`, loop `else`) and functions, adding focused lessons for gaps before promoting checklist items.

### Foundations syntax and decision-flow depth batch — 2026-10-03

- Added **Read Python syntax: expressions, statements, and keywords**, a focused beginner lesson that explains literals, names, comments, reserved words, assignment, expressions, and indentation through a study-milestone decision. Its example and guided lab solution ran in the bundled Python interpreter.
- Reviewed the earlier first-program and values/flow lessons alongside it. The three worked examples and three lab solutions all exited 0; stored example outputs matched. Promoted the statements/expressions checklist item to `[x]` and logged the specific evidence in `content/python/DEPTH_EVIDENCE.md`.
- Reviewed ordinary `if`/`elif`/`else` and `match`/`case`/guard lessons together, executed both examples and both lab solutions, and promoted the combined conditional-flow checklist item to `[x]` with evidence.
- Current local state: **159** Python modules, **5 of 136** master topics individually depth-reviewed, **131** still mapped but awaiting individual review. Module validator, route validator, 315-snippet Python syntax parser, and `git diff --check` pass. These checks do not prove in-browser Python execution; that remains a release gate. No push or publish; certification untouched.
- Exact next batch: review numeric operations and comparisons/truthiness in Foundations; add focused depth where rounding/precedence/chained comparisons are thin, execute examples and lab solutions, then proceed through loops and functions in checklist order.

### Foundations value-model depth batch — 2026-10-03

- Reviewed name binding/rebinding and identity/equality against Python 3.14 official reference, executed two examples and two lab solutions, and recorded evidence before promoting the checklist item to `[x]`.
- Added **Text, bytes, complex numbers, and missing values**, closing the complex/bytes gap in the beginner scalar-type lesson. Executed its example and lab solution with the bundled Python runtime. On Windows, non-ASCII stdout was checked with UTF-8 output encoding to avoid console replacement.
- Reviewed the two scalar-type lessons together and promoted that checklist item to `[x]` with evidence. The Python manifest now has **158** modules; **3 of 136** master topics are individually evidenced as covered well, while **133** remain mapped but not individually depth-reviewed. Content, routes and Python-syntax validators pass (313 parsed snippets).
- No push or publish. Certification content untouched. Guided labs remain non-executing browser exercises pending runner work; passing local snippets do not imply an in-site Python runner.
- Exact next batch: continue Foundations in checklist order, starting with statements/expressions/indentation and numeric operations, checking official behavior, example output, and lab solutions before promoting any item. Preserve `[~]` for anything still thin.

### Automation and duplicate-safe jobs addition — 2026-10-02

- Added **Automation, scheduling, and idempotent jobs** as a focused real-world Python lesson. It covers scheduler-versus-job boundaries, repeat-safe business keys, durable-production limitations, safe retries, timezone caveats, local guided practice, three checks, and the reminder-service project milestone.
- Wired the lesson into `content/python/manifest.json`.
- Added **QA automation, useful test reports, and flaky-test control**. It covers deterministic fixtures, useful assertion evidence, test-level selection, boundary testing, flaky-test investigation, an in-site lab, three checks, and the tested-service project milestone.
- Added **Batch data pipelines: validation, recovery, and trustworthy reports**. It covers staged batch design, normalized records, reject reporting, run identity, duplicate-safe loading decisions, a guided in-site lab, three checks, and the progress-import project milestone.
- Added **Reproducible experiments and honest data visualization**. It covers hypotheses, controlled pseudo-random simulations, experiment records, denominator context, chart selection, misleading-chart pitfalls, a guided in-site lab, three checks, and the learning-analytics project milestone.
- Added **Embedded Python: sensor events and resource limits**. It covers hardware-adapter boundaries, simulated noisy events, debouncing, startup/restart safety, resource-aware design, a device-free guided lab, three checks, and a safe prototype milestone.
- Added **Domain boundaries, dependency inversion, and testable services**. It covers business-versus-infrastructure concerns, narrow store boundaries, local fakes, modular-monolith trade-offs, a guided in-site lab, three checks, and the tested-service project milestone.
- Added **Trees, tries, and union-find: choosing a structure for relationships**. It covers hierarchy/prefix/connectivity choices, root invariants, path compression concepts, a guided in-site lab, three checks, and the prerequisite-planner project milestone.
- Added **Recursion, memoization, and dynamic programming**. It covers base cases, decreasing inputs, overlapping subproblems, safe caching, iterative trade-offs, a guided in-site lab, three checks, and the prerequisite-planner project milestone.
- Added **Profiling memory and optimizing from evidence**. It covers representative workloads, timeit/cProfile/tracemalloc concepts, fair comparisons, caching trade-offs, a guided in-site lab, three checks, and the export-performance project milestone.
- Added **Authentication, authorization, and session boundaries**. It covers identity versus permission, ownership checks, safe refusal responses, secret/log safety, a guided in-site lab, three checks, and the tested-service project milestone.
- Added **Accessible, private, and user-safe application design**. It covers recovery-oriented errors, accessibility and internationalization concerns, privacy-aware logging, data minimization, a guided in-site lab, three checks, and the professional-release project milestone.
- Added **Code quality: formatting, linting, and reviewable change**. It covers tool roles, readable contracts, type-boundary limits, focused review units, a guided in-site lab, three checks, and the professional-release project milestone.
- Added **Versioning, deprecation, and safe migrations**. It covers compatibility classification, actionable warnings, release notes, data migration/recovery considerations, a guided in-site lab, three checks, and the release-plan project milestone.
- Added **Queues, worker jobs, and backpressure**. It covers request/job boundaries, bounded capacity, idempotency, delivery uncertainty, overload policy, a guided in-site lab, three checks, and the asynchronous-export project milestone.
- Added **Generics, protocols, and runtime validation boundaries**. It covers typed contracts, capability-oriented design, static-versus-runtime checking, boundary validation, a guided in-site lab, three checks, and the typed-service project milestone.
- Added **Task groups, exception groups, and structured concurrency**. It covers TaskGroup ownership, failure/cancellation boundaries, exception-group concepts, bounded async work, a guided in-site lab, three checks, and the concurrent-dashboard project milestone.
- Added **Property-based thinking, invariants, and test data**. It covers property formulation, idempotence, generated reproducible samples, invariant reasoning, regression preservation, a guided in-site lab, three checks, and the reliable-import project milestone.
- Added **Fixtures, test doubles, and interaction boundaries**. It covers deterministic fixtures, fakes/stubs/mocks, unit-versus-integration evidence, interaction contracts, a guided in-site lab, three checks, and the notification-service project milestone.
- Added **Reading codebases and planning safe changes**. It covers entry-point tracing, acceptance criteria, output-consumer impact, tracebacks, safe change plans, a guided in-site lab, three checks, and the professional-change project milestone.
- Validated after integration: **129** modular Python lessons and **136** mapped master-checklist topics. The content validator, JavaScript parse check, and whitespace diff check pass.

### Evidence-based depth-audit upgrade — 2026-10-02

- Added `tools/audit-python-depth.js`, which identifies checklist statements with only one lesson mapping. It deliberately treats single mapping as a manual depth-review queue, not as proof of complete learning coverage.
- Current evidence: **129** modules, **202** mapped checklist statements, and **87** statements needing manual single-mapping depth review. This is a more honest release gate than the prior topic-presence count.
- The validator, depth-audit script, JavaScript parse check, and whitespace diff check pass. Current changes remain local and certification content remains untouched.
- Exact next batch: split the highest-value single-map breadth groups, beginning with CPU/I/O concurrency and data/science/ML integration, into focused learner-facing lessons; then re-run the depth audit.

### CPU and I/O concurrency depth addition — 2026-10-02

- Added **CPU-bound, I/O-bound, and choosing Python concurrency**. It covers workload classification, bounded threads/async work, process-boundary constraints, CPython GIL context, measurement, a local guided lab, three checks, and a responsive-dashboard project milestone.
- Validated after integration: **130** modular Python lessons and **136** mapped master-checklist topics. The depth audit now reports **84** single-mapped topic statements, down from 87 after the focused three-statement addition.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. All current work remains local; certification content remains unchanged.
- Exact next batch: split data/ML integration and cloud/serverless/deployment breadth from the remaining single-map audit queue.

### Model integration depth addition — 2026-10-02

- Added **Model integration, evaluation, and monitoring boundaries**. It covers validated features/output contracts, held-out evaluation, version/data context, safe aggregate monitoring, fallbacks, a guided in-site lab, three checks, and a responsible-recommendation project milestone.
- Validated after integration: **131** modular Python lessons and **136** mapped master-checklist topics. The depth audit now reports **83** single-mapped topic statements, down from 84.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current work remains local and certification content remains unchanged.
- Exact next batch: split cloud/serverless/deployment and remaining reliability/specialist breadth from the audit queue.

### Cloud and deployment depth addition — 2026-10-02

- Added **Cloud, serverless, configuration, and deployment boundaries**. It covers external configuration, durable-state assumptions, identity/secrets, retries/idempotency, timeout/rollback planning, a guided in-site lab, three checks, and a deployable-service project milestone.
- Validated after integration: **132** modular Python lessons and **136** mapped master-checklist topics. The depth audit reports **82** single-mapped topic statements, down from 83; the new deployment checklist statement is also now explicitly tracked.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current changes remain local and certification content remains unchanged.
- Exact next batch: continue the evidence queue with secure supply-chain/dependency lifecycle and remaining specialist breadth.

### Dependency lifecycle depth addition — 2026-10-02

- Added **Dependency provenance, lockfiles, and safe upgrades**. It covers isolated environments, resolved versions, provenance/advisory/license review, transitive dependencies, upgrade/rollback evidence, a guided in-site lab, three checks, and the maintained-service project milestone.
- Validated after integration: **133** modular Python lessons and **136** mapped master-checklist topics. The depth audit reports **80** single-mapped topic statements, down from 82.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current changes remain local and certification content remains unchanged.
- Exact next batch: continue the remaining evidence queue with framework/specialist and algorithm/CS breadth items.

### Discrete-reasoning depth addition — 2026-10-02

- Added **Discrete math, probability, and algorithm reasoning**. It covers logic/set/count/probability concepts, loop invariants, duplicate reasoning, a guided in-site lab, three checks, and the reliable-import project milestone.
- Repaired one manifest JSON separator error introduced while wiring this lesson, then re-ran all checks.
- Validated after integration: **134** modular Python lessons and **136** mapped master-checklist topics. The depth audit reports **77** single-mapped topic statements, down from 80.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current changes remain local and certification content remains unchanged.
- Exact next batch: continue remaining framework/specialist and algorithm/CS evidence-queue items.

### Release-evidence gate addition — 2026-10-02

- Added `content/python/RELEASE_GATE.md` to document the exact local evidence, the remaining **77** single-mapped depth-review statements, required pre-push checks, and the honest limitation that current labs are guided practice rather than executable Python runners.
- Re-ran validator, depth audit, JavaScript parse check, and whitespace diff check: all pass. Certification content remains unchanged and all Python changes remain local.
- Exact next batch: continue remaining framework/specialist and algorithm/CS evidence-queue items; do not claim deep completion or push until the release gate is substantively satisfied.

### Web-handler depth addition — 2026-10-02

- Added **Web routing, request validation, and handler boundaries**, then repaired its quality-gate issue by adding the required third common-mistake case.
- Validated after integration: **135** modular Python lessons and **136** mapped master-checklist topics. The depth audit reports **74** single-mapped topic statements.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current work remains local; certification content remains unchanged.

### Next evidence queue — 2026-10-02

- The next audited single-map depth items, in priority order, are: algorithmic-complexity reasoning; alternative Python implementations/portability; broader async workflow lifecycle; C/C++ extension and buffer-protocol boundaries; collection/iteration edge cases; context-manager lifetime; CSV/JSON schema depth; database transaction/query safety; and advanced OOP design trade-offs.
- These are queued for focused learner-facing lessons; none is being marked deep-complete based solely on its existing one-module mapping.

### Context-manager depth addition — 2026-10-02

- Added **Context managers, lifetime, and resource ownership** with an explicit `with`/`__enter__`/`__exit__` worked example, guided lab, mistakes, checks, and project connection.
- Validated after integration: **136** modular Python lessons and **136** mapped master-checklist topics. The depth audit reports **71** single-mapped topic statements, down from 74.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current work remains local; certification content remains unchanged.

### Portability depth addition — 2026-10-02

- Added **Python portability and implementation boundaries** with portability constraints, pathlib practice, common mistakes, assessment, and a portable-CLI project connection.
- Validated after integration: **137** modular Python lessons and **136** mapped master-checklist topics. The depth audit reports **68** single-mapped topic statements, down from 71.
- Validator, depth audit, JavaScript parse check, and whitespace diff check pass. Current work remains local; certification content remains unchanged.
- The lesson deliberately does not claim that the in-site lab executes code or that an in-memory set is production-safe; both limitations are explained to learners.
- Exact next batch: continue the specialist-pathway audit for backend/data/ML/GUI/embedded breadth, splitting only items whose existing coverage is still broad. Keep all current Python changes local and do not modify certification content.

## Restore point

- Tag: `session-full-curriculum-start-20260928`
- Commit: `ce7be74`
- Status: pushed to the GitHub remote before this requested full-curriculum session.

## Completed learner-facing lessons before this session

### Python (3)
- Your first Python program: comments, names, and operators
- Specialized containers: Counter, defaultdict, deque, heapq, and array
- Desktop GUI and event-driven apps

### Snowflake (2)
- Databases, schemas, and tables
- Stages and file formats

### Databricks (1)
- Unity Catalog, tables, and privileges

### Ethical Hacking, Cyber Security, AI & ML
- No new learner-facing lessons have yet been added beyond their existing seed content.

### Cyber Security (1 added this session)
- Cybersecurity risk and the NIST CSF lifecycle

## Research and source coverage completed

- Python: official Python 3.14 tutorial plus prior official language and standard-library review.
- Snowflake: official learning tutorials and product documentation topic map; TutorialsPoint only as a non-authoritative gap-discovery reference.
- Databricks: official AWS getting-started tutorial and official Lakeflow ETL tutorial.
- Ethical Hacking: topic map reviewed; remaining detailed material must use official EC-Council, OWASP, MITRE ATT&CK, NIST, or vendor documentation only. All labs must be sandbox-only.
- Cyber Security: topic map reviewed; detailed content must use NIST, OWASP, MITRE ATT&CK, and current certification/standards sources.
- AI & ML: topic maps reviewed; detailed technical facts must be checked against official NumPy, pandas, scikit-learn, PyTorch/TensorFlow, and relevant standards documentation.

## Remaining work by track

- Python: perform an item-by-item comparison against the full Python tutorial and standard-library inventory; replace all broad-module-only coverage with specific lessons where necessary.
- Snowflake: add dedicated lessons for SQL objects/types/views; COPY loading validation; JSON/Parquet; Snowpipe; streams/tasks/dynamic tables; Snowpark; RBAC/auth/policies/sharing; performance/cost/recovery; production capstone.
- Databricks: add Spark/PySpark, Delta Lake, Auto Loader/streaming, Lakeflow/jobs, quality expectations, Unity Catalog operations, tuning, MLflow/MLOps, and capstone lessons.
- Ethical Hacking: add legal methodology, networking/Linux, passive recon concepts, sandboxed simulated enumeration/validation, web/API security, reporting/remediation, and safe projects.
- Cyber Security: add networking, system/cloud hardening, IAM, cryptography, SOC/log analysis, IR, risk/compliance, and defensive capstone lessons.
- AI & ML: add math/data preparation, classical ML, evaluation, deep learning, NLP/LLMs, responsible AI, MLOps, and end-to-end capstone lessons.

## Exact next step

Python local-release batch: 54 validated manifest lessons are wired, including the newly added service resilience, safe file/JSON handling, and thread/process coordination lessons. The batch is intentionally unpushed until the full Python scope has a stronger topic-by-topic completion audit.

Next Python topic: add a focused lesson on extension modules, the buffer protocol, embedding, and portability; then continue with algorithm design/data structures and real-world capstone delivery. Do not treat the 136 checklist mappings as proof that every mapped subject is deep enough.

## Current Python quality-gate result

- The modular manifest currently contains 75 learner-facing lessons. The expanded validator now checks track/level consistency, review-date format, learner-facing source/outcome/example text, lab starter/hints/checks/solution, mistakes, questions, and project connections in addition to structural checklist mapping.
- The validator deliberately reports 28 legacy quality gaps before final release: legacy broad lessons without `lab.solutionExplanation`, plus three legacy project-connection structures that need normalization. These are evidence of remaining work, not completion. The next substantial batch is **legacy-lesson completion**: normalize those project connections and add direct solution explanations to the legacy broad lessons, then continue the item-by-item depth audit.
- No current Python-batch file has been pushed or published.

### Legacy Foundations/Core completion batch (in progress)

- Added learner-facing lab solution explanations to the legacy Environment, Values/Control Flow, Collections, and Functions broad lessons.
- Updated the Python lesson viewer so the learner now sees the authored solution explanation immediately after selecting **Show the answer**; lessons still awaiting an authored legacy explanation show a clearly worded temporary comparison prompt instead of an unexplained code dump.
- Added `content/python/legacy-lab-explanations.json` and wired it into the lesson viewer. Fifteen additional legacy broad lessons now display a self-contained explanation after a learner loads the solution. The validator confirms that the remaining nine legacy quality gaps are project-connection normalization records, not absent solution explanations.
- Added `content/python/legacy-project-connections.json` and normalized the three older string-only project connections at render time. The validator now reports zero legacy structural-quality gaps. This confirms all 75 current modules have the required learner-facing fields or a self-contained compatibility supplement; it does **not** prove the 136 mapped topics have all reached full expert-depth coverage.
- Next exact batch: carry out the item-by-item depth audit beginning with Python environment/tools, core syntax, and collections. Split any checklist item that is still only represented by a broad legacy lesson into a dedicated focused lesson before considering final Python release.

### Focused depth-pass lessons added after the structural-quality gate

- Foundations: names/bindings/identity/equality; truthiness/short-circuiting; structural pattern matching and guards.
- Core: unpacking/enumerate/zip/starred expressions; sets/hashability/key design; function defaults, `*args`, `**kwargs`, and mutable-default safety.
- Advanced: composition/inheritance/MRO; custom context managers and resource ownership.
- Exact next depth-pass batch: Core function scope/closures and recursion; then Intermediate imports/files/exceptions must be audited against the focused lessons before moving to additional Advanced/Production gaps.
- Current local validation evidence: 83 Python modules and 136 mapped checklist topics. This is structural and field-completeness evidence only; it is not a claim that every full subject area is expert-depth complete.
- The enhanced validator now reports 24 remaining legacy solution-explanation gaps. The next exact batch is the remaining Core/Intermediate legacy modules: Modules/Packages, Errors/Files/Logging, and Comprehensions/Iterators/Regex/Structured Data; then normalize the three remaining legacy project-connection structures.

### Core-programming depth batch — 2026-09-28

- Added **Scope, closures, and the late-binding surprise**. It teaches LEGB lookup, `nonlocal`, callback factories, safe loop callback binding, a guided reminder-callback lab, three checks, and the Study-plan reminder engine milestone.
- Added **Regular expressions: patterns, validation, and safe text rules**. It teaches raw-string patterns, `fullmatch` versus `search`, named groups, substitution, boundary validation, a guided course-code lab, three checks, and the Study export validator milestone.
- Repaired a legacy rendering compatibility defect: lessons whose quiz uses the old `{ questions: [...] }` format are normalized before the common lesson template renders, so their quick-check section is visible.
- Local validation after this batch: **85** complete modular Python lessons and **136** mapped master-checklist topics. This is a structural/content-field gate, not evidence that the complete Python subject is already deep-complete.
- **Exact next batch:** add focused lessons for decorators/HOF design and import execution/module cache boundaries, then audit the remaining intermediate files/exceptions material for still-broad coverage.

### Core and intermediate boundary batch — 2026-09-28

- Added **Higher-order functions and decorators without hidden magic**: function values, decorator transformation, `functools.wraps`, argument forwarding, a guided call-tracer lab, three checks, and an aligned Study-report service milestone.
- Added **Imports, the module cache, and avoiding startup surprises**: first-import execution, `sys.modules` concepts, `__name__ == '__main__'`, import-safe module design, a guided report-helper lab, three checks, and an aligned Study-report command-line-tool milestone.
- Re-ran the static JavaScript parse check and the Python module validator after wiring the modules. Current evidence: **87** modular Python lessons and **136** mapped checklist topics pass the structural quality gate.
- **Exact next batch:** intermediate exception boundaries and custom exceptions; file encodings/paths/atomic writes; then a direct audit of remaining broad legacy coverage for data serialization, logging, and debugging.

### Intermediate reliability batch — 2026-09-28

- Added **Exception boundaries, custom errors, and reliable cleanup**: narrow `try` blocks, `except`/`else`/`finally`, custom domain errors, chaining with `raise ... from ...`, a guided settings-validation lab, three checks, and the Study-plan settings importer milestone.
- Added **Paths, encodings, and safer file writes**: `pathlib`, UTF-8 contracts, `with`, same-directory temporary-file replacement patterns, a guided portable-note-path lab, three checks, and the Local study-progress store milestone.
- Static JavaScript parsing, manifest wiring, and the Python module validator pass with **89** modular Python lessons and **136** mapped master-checklist topics.
- **Exact next batch:** structured data schema validation/serialization safety and logging/debugging observability, followed by a focused audit of broad legacy material before more Advanced/Production expansion.

### Additional roadmap cross-check — 2026-10-02

- Added roadmap.sh's Python developer roadmap and its beginner-to-advanced project catalogue as a **secondary gap-discovery source**. It is not used as a substitute for primary language documentation or as learner-facing external content.
- The cross-check highlighted a need for more directly teachable algorithm/search and portfolio-project milestones alongside the existing broad algorithms and data-structure lessons. The next focused lesson is **binary search, `bisect`, sorted-data contracts, and duplicate handling**, verified against the Python standard library.

### Algorithm depth addition from roadmap cross-check — 2026-10-02

- Added **Binary search, `bisect`, and the sorted-data contract**: sorted-order preconditions, duplicate ranges, membership checks, `bisect_left`/`bisect_right`, representation trade-offs, a guided score-range lab, three checks, and the Learning-activity timeline project milestone.
- Validated after integration: **91** modular Python lessons and **136** mapped checklist topics. The JavaScript syntax check, content validator, and diff whitespace check complete without errors.
- **Exact next batch:** add a dedicated logging/context/redaction lesson, then improve the broad debugging lesson with a concrete traceback-to-minimal-reproduction workflow. Continue to keep all current changes local until the complete Python release audit supports a consolidated push.

### Intermediate observability addition — 2026-10-02

- Added **Logging with context, levels, and safe diagnostics**: `DEBUG`/`INFO`/`WARNING`/`ERROR`, module loggers, parameterized messages, `logger.exception`, privacy-aware context, a guided safe-import-summary lab, three checks, and the Local progress importer milestone.
- Validated after integration: **92** modular Python lessons and **136** mapped master-checklist topics. No certification content was changed and no current Python work was pushed.
- **Exact next batch:** add a dedicated traceback-to-minimal-reproduction/debugging lesson, then continue the legacy-depth audit for broad intermediate modules before expanding remaining production and expert gaps.

### Intermediate debugging addition — 2026-10-02

- Added **Tracebacks, debugging, and minimal reproductions**: bottom-up traceback reading, syntax versus runtime failures, small safe reproduction cases, `breakpoint()`/`pdb` concepts, a guided empty-progress repair lab, three checks, and a Local progress importer regression-test milestone.
- Validated after integration: **93** modular Python lessons and **136** mapped master-checklist topics. Current changes remain deliberately local; certification content remains unchanged.
- **Exact next batch:** audit the older broad Intermediate modules for still-unsplit items, then add focused lessons for package public APIs/relative imports and CSV data-quality/normalization edge cases.

### Intermediate package and data-quality batch — 2026-10-02

- Added **Packages, relative imports, and clear public APIs**: module/package boundaries, `__init__.py`, intentional relative imports, import-safe design, `python -m` context, a guided public-API lab, three checks, and the Study-report command-line-tool milestone.
- Added **CSV normalization and data-quality checks**: `csv.DictReader`, headers, whitespace normalization, required-column validation, quoted-value safety, row-level quality decisions, a guided CSV lesson-ID lab, three checks, and the Local progress CSV importer milestone.
- Validated after integration: **95** modular Python lessons and **136** mapped master-checklist topics. The certification area remains untouched and all new work remains local.
- **Exact next batch:** review the older Intermediate broad lessons for missing individual instruction on iterators/generators and standard-library workflows, then deepen remaining Advanced algorithm/data-structure gaps.

### Intermediate iterable workflow addition — 2026-10-02

- Added **Iterators, itertools, and one-pass data**: iterable versus iterator, lazy `yield` production, exhaustion, bounded `itertools.islice`, ownership/consumption contracts, a guided activity-preview lab, three checks, and the Learning-activity timeline milestone.
- Validated after integration: **96** modular Python lessons and **136** mapped master-checklist topics. All current Python changes remain local, and the certification section remains unchanged.
- **Exact next batch:** deepen Advanced data structures with a dedicated hash-table/dictionary-performance lesson, then audit the existing graphs/sorting modules for equally focused learner-facing coverage.

### Advanced lookup design addition — 2026-10-02

- Added **Dictionaries, hash tables, and lookup trade-offs**: stable hashable keys, absent versus false values, direct lookup versus ordered/range operations, dictionary/set semantics, a guided progress-index lab, three checks, and the Learning-activity timeline milestone.
- Validated after integration: **97** modular Python lessons and **136** mapped master-checklist topics. The certification area remains untouched; all current changes remain local.
- **Exact next batch:** add a dedicated graph traversal/pathfinding lesson, then perform an honest module-by-module audit of Advanced and Production lessons for topics still represented only by broad overviews.

### Advanced graph reasoning addition — 2026-10-02

- Added **Graph traversal and shortest-path reasoning**: graph representation, BFS queues, visited invariants, parent links, cycles, unreachable targets, and the equal-cost assumption; includes a guided lesson-route lab, three checks, and the Prerequisite learning-path planner milestone.
- Validated after integration: **98** modular Python lessons and **136** mapped master-checklist topics. The separate certification content remains untouched; all current Python work remains local.
- **Exact next batch:** audit the existing Advanced and Production modules for remaining broad-only content, beginning with web/API contracts, ORM/migrations, and framework boundaries, and split any uncovered single topic into dedicated lessons.

### Production API-contract addition — 2026-10-02

- Added **API contracts, validation, status semantics, and idempotency**: request/response agreements, boundary validation, client-correctable errors, retry ambiguity, idempotency identities, and safe local service limits; includes a guided retry-safe completion lab, three checks, and the Tested study-progress service milestone.
- Validated after integration: **99** modular Python lessons and **136** mapped master-checklist topics. No certification content was changed and the current local Python batch has not been pushed.
- **Exact next batch:** add focused production lessons for database migration/ORM/N+1 trade-offs and framework-independent request lifecycle boundaries, then continue the evidence-based release audit.

### Production database-design addition — 2026-10-02

- Added **Database migrations, query shape, and the N+1 trap**: repeatable schema changes, parameter binding, transaction/connection boundaries, N+1 detection, batching, ORM limits, a guided query-count lab, three checks, and the Tested study-progress service milestone.
- Validated after integration: **100** modular Python lessons and **136** mapped master-checklist topics. Certification remains untouched, and all current Python changes remain local for the eventual single consolidated release.
- **Exact next batch:** add a framework-independent request lifecycle / middleware / background-work lesson, then use an evidence-based audit to identify any remaining master-checklist topics that only have broad coverage.

### Production request-lifecycle addition — 2026-10-02

- Added **Request lifecycle, middleware, and background-work boundaries**: request-to-response responsibilities, correlation context, boundary validation, handler separation, queued job contracts, and durable-worker limits; includes a guided export-queue lab, three checks, and the Tested study-progress service milestone.
- Validated after integration: **101** modular Python lessons and **136** mapped master-checklist topics. Certification content remains untouched and all current Python work remains local.
- **Exact next step:** begin the evidence-based release audit by listing each master-checklist line with its dedicated lesson evidence and flagging remaining broad-only coverage before deciding whether further topics need splitting.

### Evidence-based release audit started — 2026-10-02

- Added `content/python/COVERAGE_AUDIT.md`. Manifest evidence shows 101 modules, 196 distinct mapped checklist statements, 90 statements with two-or-more lesson mappings, and 106 statements with only one mapping.
- The audit explicitly identifies the single-mapping queue as **manual depth-review work**, not completed coverage. Major remaining review areas are interpreter/extension internals, scientific/data workflows, delivery/operations, specialist paths, CS breadth, and framework-specific depth.
- **Exact next batch:** begin the Expert/internals depth review with a dedicated import-machinery/bytecode/AST lesson, then continue through remaining single-mapping Expert topics before any release claim or push.

### Expert internals depth addition — 2026-10-02

- Added **ASTs, bytecode, and implementation boundaries**: source parsing, AST inspection without execution, code objects, exploratory `dis`, CPython-versus-language guarantees, a guided no-execution AST lab, three checks, and the Safe course-snippet checker milestone.
- Validated after integration: **102** modular Python lessons and **136** mapped master-checklist topics. The source record explicitly marks bytecode as implementation-specific; certification content remains untouched and all current work stays local.
- **Exact next batch:** continue the Expert audit with CPython object lifetime/weak references and extension/embedding boundary review, then split only the topics whose existing modules cannot meet the evidence rule.

### Expert object-lifetime addition — 2026-10-02

- Added **Object lifetime, garbage collection, and weak references**: bindings versus objects, strong/weak ownership, cycles, CPython reference-counting caveats, explicit cleanup, a guided weak-reference lab, three checks, and the Learning dashboard UI cache milestone.
- Validated after integration: **103** modular Python lessons and **136** mapped master-checklist topics. The lesson explicitly avoids claiming deterministic collection timing across Python implementations. Certification remains untouched and current work remains local.
- **Exact next batch:** review extension/embedding and stable-ABI subjects, then continue the manual depth queue for scientific/data workflows.

### Expert native-boundary addition — 2026-10-02

- Added **Extensions, embedding, and portability decisions**: extension versus embedding direction of control, narrow boundary design, validation/ownership/error translation, lifecycle, support matrices, stable/limited ABI trade-offs, a guided adapter-contract lab, three checks, and the Optional native scoring adapter milestone.
- Validated after integration: **104** modular Python lessons and **136** mapped master-checklist topics. The lesson intentionally does not pretend native code can run in the current static practice editor. Certification remains untouched and local work is not pushed.
- **Exact next batch:** begin scientific/data workflow depth review with NumPy array views/copies/dtypes/vectorization, then proceed to tabular-data joins/missingness and reproducible analysis.

### Scientific-computing depth addition — 2026-10-02

- Added **NumPy arrays: views, dtypes, and reproducible experiments**: ndarray metadata, vectorization, basic-slice views versus advanced-index copies, dtype trade-offs, local seeded `default_rng`, reproducibility records, a guided static NumPy lab, three checks, and the Reproducible study-data analysis milestone.
- Validated after integration: **105** modular Python lessons and **136** mapped master-checklist topics. The lab explicitly states that NumPy is not executable in the current static editor, so it does not falsely promise a runtime. Certification remains untouched and work remains local.
- **Exact next batch:** add focused tabular-data joins/missingness/data-quality coverage, then continue the manual audit queue.

### Tabular-data depth addition — 2026-10-02

- Added **Tabular joins, missing data, and data-quality checks**: join grain/cardinality, duplicate-key row multiplication, join-type decisions, missingness semantics, post-join checks, a guided static data-quality lab, three checks, and the Reproducible study-data analysis milestone.
- Validated after integration: **106** modular Python lessons and **136** mapped master-checklist topics. The lesson clearly states pandas is not executable in the current static editor. Certification remains untouched and all current work remains local.
- **Exact next batch:** continue the scientific/data audit with group-by/time-series/visual-communication concepts, then return to remaining delivery/operations single-mapping review.

### Scientific workflow research checkpoint — 2026-10-02

- Verified the current pandas group-by and time-series guides as the primary source basis for the next lesson. The next lesson must cover split-apply-combine, aggregation versus transformation/filtering, group-key missingness, time-zone-aware records, and measurement/visualisation caveats without claiming pandas execution in the current static editor.

### Grouped-analysis and time-series depth addition — 2026-10-02

- Added **Grouped analysis, time series, and measurement caveats**: split-apply-combine, aggregation/transformation/filtering, group-key missingness, time zones, group-size evidence, and chart interpretation; includes a guided static weekly-summary lab, three checks, and the Reproducible study-data analysis milestone.
- Validated after integration: **107** modular Python lessons and **136** mapped master-checklist topics. Certification remains untouched and all current work remains local.
- **Exact next batch:** continue delivery/operations manual depth review, beginning with SLO/SLI, incident learning, and supply-chain/dependency lifecycle topics.

### Reliability and dependency-lifecycle depth addition — 2026-10-02

- Added **Reliability objectives, incident learning, and dependency lifecycle**: SLI/SLO definitions, no-data handling, alert quality, post-incident learning, dependency inventory/advisory/update/rollback practices, a guided static reliability lab, three checks, and the Production-style study-progress capstone milestone.
- Validated after integration: **108** modular Python lessons and **136** mapped master-checklist topics. Certification remains untouched and all current work stays local.
- **Exact next batch:** continue the release audit through specialist pathways and remaining CS breadth, beginning with accessible project architecture and maintainable team-workflow evidence.

### Architecture and change-review depth addition — 2026-10-02

- Added **Project architecture, requirements, and change review**: user stories, acceptance criteria, domain/service/adapter boundaries, cohesion/coupling, dependency direction, review evidence, and compatibility/rollback thinking; includes a guided static requirements lab, three checks, and the Production-style study-progress capstone milestone.
- Validated after integration: **109** modular Python lessons and **136** mapped master-checklist topics. Certification remains untouched and all current work stays local.
- **Exact next batch:** continue specialist-pathway audit with automation/scheduling and QA-contract-test evidence, then update the audit queue with the remaining breadth gaps.

The previous cross-track note remains: all six inventories exist under `inventory/`; the non-Python modular renderer and learner-facing lessons are separate future work after the Python release batch.

## Validation limitation

The static project currently has guided practice editors, not bundled runtimes for Python, Snowflake, Databricks, or security simulations. Do not claim labs execute code until runners and tests are actually bundled and validated.

### Advanced contracts and async-safety batch — 2026-10-03

- Added **Iteration order, zip safety, and uneven inputs**: iterable contracts, `enumerate`, normal versus strict `zip`, sorting mutation, a guided aligned-import lab, three checks, and the Study-progress importer milestone.
- Added **Dataclasses, enums, abstract base classes, and protocols**: value records, controlled state vocabularies, nominal versus structural contracts, a guided project-state lab, three checks, and the Study-progress service milestone.
- Added **Async iterators, timeouts, and cancellation cleanup**: cooperative scheduling, deadlines, cancellation-safe cleanup, async context boundaries, a guided status-retrieval lab, three checks, and the Study-progress worker dashboard milestone.
- Validated after integration: **141** modular Python lessons, **136** mapped master-checklist topics, route-marker validation, JavaScript syntax, and whitespace checks. The manual depth-review queue is now **63** topic statements; it is a review queue rather than a completion claim. Certification content remains untouched and all Python changes remain local-only.
- **Exact next batch:** deepen the collection/data-structure queue with hashability/copy semantics and algorithmic data-structure choices, then continue the remaining advanced/production evidence queue.

### Collection ownership, work queues, and async streams — 2026-10-03

- Added **Aliasing, shallow copies, and nested mutation**: references versus copies, deliberate nested ownership, a guided draft-record lab, three checks, and the Study-progress review milestone.
- Added **Choose a deque or heap from the operation you need**: FIFO versus priority removal, equal-priority tie-breaking, a guided reminder-queue lab, three checks, and the Study-support work-queue milestone.
- Added **Async streams and resource lifetime**: `async for`, async generators, `async with` cleanup, a guided local stream lab, three checks, and the worker-dashboard milestone. This supplies the async-iterator worked example missing from the earlier timeout-focused lesson.
- Official Python 3.14 documentation was checked for copy behavior, object identity, deque, heapq, async iteration, and async context managers before authoring. The three new lessons are locally wired. Validator passes at **144** modules and **136** mapped master topics; route marker passes at **144** paths; the manual single-mapping review queue is **61** statements. The labs remain guided static practice, and Python execution could not be verified on this host because the available python.exe is only the Windows app alias.
- **Exact next batch:** expand the production evidence queue beginning with database transaction/query safety and schema-normalization boundaries, then continue the remaining specialist and capstone review items. No GitHub push or certification change was made.

### Database and import-boundary corrections — 2026-10-03

- Corrected the existing CSV normalization worked example so normalized headers actually select the corresponding original `DictReader` keys. It now detects short and blank rows with a safe row number instead of silently dropping them.
- Corrected the existing SQLite worked example and lab: a SQLite connection context commits or rolls back an open transaction but does **not** close the connection. The revised examples use `contextlib.closing` for ownership and handle a missing SELECT result.
- Added **Make a progress update atomic with SQLite** and **Validate JSON shapes at the boundary**. Both include original explanation, verified worked code, local guided lab with solution, common mistakes, three questions, source text, review date, and a study-progress project milestone.
- Bundled Python executed all four affected worked examples with expected output and both new lab solutions successfully. The module validator passes at **146** lessons and **136** mapped master topics; route validation passes at **146** paths; the depth audit reports **57** single-mapped statements. These checks do not prove full mastery or an executable browser runner.
- **Exact next batch:** deepen remaining production/specialist items beginning with migrations, query shape, and N+1 data access, then review capstone quality gates. All changes remain local; certification files were untouched.

### Production database evolution and query-shape batch — 2026-10-03

- Added **Version a SQLite schema and test its upgrade**: application-managed schema version, guarded `ALTER TABLE`, old-row preservation, a guided in-memory migration lab, three checks, and the tested study-progress service milestone.
- Added **Measure query count and batch related reads**: concrete N+1 diagnosis, bound placeholders, empty-input handling, a guided in-memory batched-query lab, three checks, and the same service milestone.
- Verified the examples against official SQLite and Python documentation. Bundled Python executed both new worked examples with their stated output and both lab solutions successfully. The Python module validator passes at **148** lessons with **136** mapped master topics; route validation passes at **148** paths. The depth audit now reports **56** single-mapped statements; this remains a manual review queue, not evidence of deep completion.
- **Exact next batch:** review and deepen the real-world capstone release gate and production observability/reliability topics, then continue the remaining specialist and language-internals queue. Do not publish until the entire Python track and browser experience are validated.

### Python snippet syntax evidence — 2026-10-03

- Added `tools/check-python-code-syntax.js`, which parses learner-facing `.py` worked examples and Python lab solutions using the bundled Python interpreter without executing their side effects. It skips the intentionally non-Python TOML and Dockerfile examples.
- Current run: **293 snippets parsed with zero syntax errors**. This proves parseability, not runtime behavior, output correctness, package availability, or browser lab execution. The next quality gate must exercise representative examples/labs and inspect rendered pages.

### Capstone handover and safe diagnostics batch — 2026-10-03

- Added **Prove a capstone is ready to hand over**: release evidence, fresh-install and failure-path checks, a guided gate-check lab, three questions, and an explicit second-person handover milestone.
- Added **Log a background job without exposing learner data**: named loggers, safe job IDs/counts, incident triage, a guided privacy-aware summary lab, three questions, and a production capstone milestone.
- Checked Python logging, argparse, unittest, packaging, and NIST guidance before writing. Both new worked examples produced their stated output, and both lab solutions ran successfully with bundled Python.
- Current local validation: **150** manifest lessons, **136** mapped master topics, **150** route paths, and **297** Python snippets parsed with zero syntax errors. The manual single-mapping review queue is **53** statements. Certification content remains unchanged; this batch is local-only.
- **Exact next batch:** deepen the remaining capstone and specialist pathways, beginning with the progressive project sequence and accessible/private application design; then return to language internals and the manual depth queue. Browser rendering and true in-site Python execution remain unverified.

### Aligned project staircase, first two projects — 2026-10-03

- Added **Project 1: build a small study-summary command**: a pure `total_minutes` rule, argparse boundary, negative-input behavior, guided lab, three checks, and a tested CLI milestone.
- Added **Project 2: import validated study sessions from CSV**: `DictReader`, header and row validation, row-level errors, reuse of Project 1's total rule, guided lab, three checks, and a CSV report milestone. The Project 2 example visibly carries the tested rule forward so the lesson does not leave that connection abstract.
- Bundled Python executed both worked examples with exact expected output and both lab solutions successfully. Current checks pass at **152** lessons, **136** mapped master topics, **152** route paths, and **301** parseable Python snippets. The manual single-mapping review queue is **52** statements.
- **Exact next batch:** build Project 3 (an authorized local/stub API client with timeout and retry boundaries), Project 4 (a tested service contract), and Project 5 (a capstone with setup, safe logs, and release evidence); then review accessibility/privacy and remaining internals. All changes remain local and certification content is unchanged.

### Aligned project staircase, Projects 3–5 — 2026-10-03

- Added **Project 3: design an API client with a local stand-in**, including response-shape and lesson-identity validation, a timeout contract, local guided lab, three checks, and a clear note that the stand-in does not test real HTTP.
- Added **Project 4: give progress a tested service contract**, including input validation, idempotent completion, local storage injection, guided lab, three checks, and a clear note that authentication and HTTP remain server-adapter responsibilities.
- Added **Project 5: assemble and release the study-progress capstone**, including the connected CSV/total core, guided coordinator lab, three checks, release procedure, and a handover milestone. It describes an offline core demonstration; the full packaged application and browser-executable labs are not yet delivered.
- Verified against Python urllib, HTTP server, unittest, csv, and packaging documentation. Bundled Python executed all three new worked examples with matching output after line-ending normalization and all three lab solutions successfully.
- Validation now passes at **155** manifest lessons, **136** mapped master topics, **155** route paths, and **307** parseable Python snippets. The manual single-mapping review queue is **51** statements. No certification change or GitHub push occurred.
- **Exact next batch:** deepen accessible/private application practice, then remaining language-internals and specialist evidence; inspect representative pages in a browser and verify guided-lab rendering before any release claim.

### Honest master-status correction and accessible/private practice — 2026-10-03

- Corrected `content/python/MASTER_TOPICS.md`: all **136** topics are now marked `[~]` (mapped, pending individual depth review). Previously all were `[x]` although the validator only proved a destination lesson existed. The legend now reserves `[x]` for an individually evidenced topic-level review. This prevents an inaccurate 100% coverage claim.
- Added **Give learners clear, accessible recovery messages**: stable error code versus visible guidance, safe row-level repair, web UI semantics caveat, guided local lab, three checks, W3C WCAG 2.2 source text, and a project milestone.
- Added **Minimize event data and apply a retention rule**: minimal event shape, aware UTC cutoff, persistent-deletion boundary, guided local lab, three checks, NIST/Python source text, and a capstone milestone.
- Bundled Python ran both new worked examples with matching output and both lab solutions successfully. Validators pass at **157** lessons, **136** mapped master topics, **157** paths, and **311** parseable Python snippets. The single-mapping queue remains **51**, but it is only a prioritization signal; all 136 topic statements still need individual evidence review before any `[x]` claim.
- **Exact next batch:** begin explicit topic-level reviews of Foundations/Core items and mark `[x]` only after checking explanations, syntax, worked results, lab, mistakes, source, date, and project connection; continue deepening the internals/specialist gaps found in that review. Browser rendering and executable in-site Python remain unverified. Certification files and GitHub remain untouched.

### First topic-level depth review — 2026-10-03

- Individually reviewed **Input/output, `print()`, `input()`, conversion, formatting, f-strings** against Python 3.14 primary documentation and the full lesson evidence rule. Bundled Python ran the worked example with input `2` and lab solution with input `3`; both succeeded with the expected calculations and formatting.
- Marked that one master topic `[x]` and recorded the evidence and browser limitation in `content/python/DEPTH_EVIDENCE.md`. Checklist state is now **1 reviewed `[x]` / 135 mapped-pending `[~]`**. The 51 single-mapped statements are only a prioritization queue and do not reduce the 135-item review requirement.
- **Exact next batch:** review the remaining Foundations topics in order, correcting any thin or inaccurate lesson before marking it `[x]`; continue to Core, Intermediate, Advanced, Production, Expert, and Real-world, then validate the browser experience and complete the consolidated release audit.
# Python local-completion batch — 2026-09-28

**GitHub publishing rule:** Do not push the current Python expansion until the user approves the complete Python batch. The working tree intentionally contains local-only lesson additions.

## Added locally in this batch

- `operators-expressions-and-precedence` — arithmetic, comparisons, Boolean logic, precedence, floating-point caution, discount-calculator lab, and Budget Splitter milestone.
- `data-types-and-type-conversion` — scalar types, conversion, `None`, type meaning, learner-profile lab, and Student Profile Formatter milestone.
- `conditional-statements-and-decision-tables` — ordered decisions, boundary tests, indentation, study-status lab, and Budget Splitter milestone.
- `loops-range-and-repetition` — `for`, `while`, `range`, `break`, `continue`, counter reasoning, weekly-practice lab, and Expense Tracker milestone.

## Exact next Python lessons

1. Strings: indexing, slicing, methods, and Unicode basics.
2. Lists: mutation, copying, and nested data.
3. Dictionaries, sets, and tuple unpacking.
4. Functions: parameters, returns, scope, and type hints.
5. Files, exceptions, modules, tests, and the remaining intermediate-to-expert Python sequence.

## Validation status

Run `node tools/validate-python-modules.js` before any final Python publication. The current batch must remain local until all planned Python lesson work is complete.

## Honest status snapshot — 2026-09-28

- Python: 34 modular lessons exist, including 10 focused local additions awaiting the final Python batch. The 136-item master checklist is structurally mapped, but many items remain grouped inside broad modules and still need topic-level expansion before this track can be called complete.
- Snowflake, Databricks, Ethical Hacking, Cyber Security, and AI/ML: existing broad seed content and coverage notes exist, but they do not yet have a modular lesson manifest or a trustworthy item-by-item inventory. Do not count their seed cards as complete zero-to-mastery lessons.
- Lab limitation: current practice areas are guided static editors with hints and solutions. They are not verified executable runners yet.

## Local batch checkpoint

The focused Foundations expansion now contains setup, first program, variables, input/output, expressions, data types, conditionals, loops, strings, lists, and dictionaries/sets/tuples. It is locally wired through `content/python/manifest.json` and passes `tools/validate-python-modules.js`. The next major batch is Core/Intermediate Engineering: expanded function techniques, comprehensions/iterators/regex/structured data, files/resources/logging, package configuration, testing, and object-oriented design.
