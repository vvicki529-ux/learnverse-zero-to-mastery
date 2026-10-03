# Python master-topic depth evidence

This is a manual evidence log for items promoted from `[~]` to `[x]` in `MASTER_TOPICS.md`. A mapping or a passing JSON validator does not promote a topic. This log records what was checked, and it does not claim browser execution for guided labs.

## Interpreter modes, package entry points and command exits — reviewed 2026-10-03

- Lessons: `foundations/repl-script-and-module-execution/lesson.json`, `foundations/cli-arguments-main-and-exit-code/lesson.json`, `foundations/environment-execution-project-setup/lesson.json`, and `real-world/project-one-study-summary-cli/lesson.json`.
- Checked Python 3.14's Using the Interpreter tutorial, `__main__` documentation, command-line `-c`/`-m` semantics, and `sys.argv`/`sys.exit` behavior. The focused execution-modes lesson distinguishes the Python `>>>` prompt from the system shell, one-off `-c` from repeatable scripts, and package `-m` execution with `__main__.py` and a relative helper import. The CLI lesson separates `sys.argv[0]` from user arguments, tests success and usage-failure statuses, and explains a guarded process exit. Existing setup and CLI-project lessons supply the surrounding project workflow.
- Bundled Python ran both new worked examples and both lab solutions (exit 0), including a real temporary package invoked through `python -m`, output `__main__ ready`, and tested status tuples. The site still has no browser Python runner; the guided lab is a learning exercise rather than in-browser execution. Each focused lesson includes original beginner explanation, practical use, hints/checks/solution, common mistakes, three explained questions, source text, review date and an aligned CLI project milestone.

## Portable paths, UTF-8 text and recreatable virtual environments — reviewed 2026-10-03

- Lessons: `foundations/script-path-and-utf8-file-boundary/lesson.json`, `foundations/venv-interpreter-isolation-check/lesson.json`, `foundations/environment-execution-project-setup/lesson.json`, and `production/packaging-pyproject-and-dependencies/lesson.json`.
- Checked Python 3.14 `pathlib`, `io`, `venv`, `sys`, and `platform` documentation. The focused path lesson distinguishes the process working directory from a script-anchored path, uses platform-aware `Path` joins, explicit UTF-8 and LF output, and checks raw newline bytes. The venv lesson creates a temporary environment without pip/network, invokes its actual interpreter, and verifies `sys.prefix != sys.base_prefix`; it explains optional activation and environment recreation. Existing setup/packaging lessons connect these behaviors to declared project dependencies.
- Bundled Python ran both focused worked examples and both lab solutions (exit 0), including creation and cleanup of a temporary venv. Console display of the accented sample word is host-encoding-dependent; the file itself was written/read as UTF-8. These are local Python validations, not browser code execution, a full installer test on every operating system, or proof that all third-party dependencies are reproducible. Each focused lesson has an original beginner explanation, practical scenario, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and project milestone.

## Webhook intake, transactional inbox and worker failure states — reviewed 2026-10-03

- Lessons: `advanced/webhook-signature-dedupe-and-queue/lesson.json`, `advanced/webhook-inbox-transaction-and-worker/lesson.json`, `advanced/worker-retries-and-dead-letter-records/lesson.json`, `production/queues-workers-and-backpressure/lesson.json`, and `production/request-lifecycle-middleware-and-background-work/lesson.json`.
- Checked GitHub official webhook signature/delivery best practices and Python 3.14 `hmac`, `collections`, `queue` and `sqlite3` documentation. The new focused lessons verify exact raw bytes before JSON, reject duplicates, avoid recording a full-queue job as accepted, model committed intake in an SQLite table, and keep a failed worker job visible after bounded retries. Existing production lessons cover bounded background work and request lifecycle.
- Bundled Python ran all three new worked examples and lab solutions plus the SQLite companion (exit 0, expected accepted/duplicate/completed/dead-letter states). The SQLite exercise uses `:memory:` and a single worker, so it does not prove persistence or an atomic multi-worker claim; a production implementation needs durable storage, idempotent side effects, recovery/lease and replay policy. The deque exercise has no real scheduler/backoff. The browser editor still does not execute Python; the in-site answer checks are conceptual only.
- Each focused lesson includes original beginner explanation, practical scenario, runnable example, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and project milestone. This evidence supports curriculum depth for the named master topic, not release readiness.

## Socket framing, HTTP boundaries, pagination and retry safety — reviewed 2026-10-03

- Lessons: `advanced/sockets-protocols-timeouts-and-framing/lesson.json`, `advanced/local-http-client-and-paged-responses/lesson.json`, `advanced/http-retry-safety-and-rate-limits/lesson.json`, and `production/http-api-retries-timeouts-and-pagination/lesson.json`.
- Checked Python 3.14 `socket`, `urllib.request`, `http.server` and JSON documentation plus IETF RFC 9293 TCP, RFC 9110 HTTP semantics/Retry-After and RFC 6585 status 429. The socket lesson explains byte-stream framing and partial chunks. The new HTTP lesson provides a real offline 127.0.0.1 server/client companion with timeout, content-type, byte-size and page limits; its pure in-site guided exercise validates page shapes and terminal cursor. The retry lesson models bounded GET retries, numeric Retry-After, 429/503 and conservative write/idempotency decisions without external I/O. Older source notes were updated after verification.
- Bundled Python ran both new worked examples and lab solutions plus the local loopback HTTP companion (exit 0, expected two-page list and retry policy output). The local HTTP fixture is not a production server or a browser-executable Python lab. The retry model does not parse legal HTTP-date Retry-After values; it stops safely instead. Actual network failures, TLS, and service-specific contracts require separate integration testing.
- Both new lessons include original beginner explanation, practical use, runnable examples, guided labs with hints/checks/solutions, common mistakes, three explained questions, source text, review dates and aligned project milestones. The in-site concept answer checks do not satisfy the separate code-runner release requirement.

## asyncio coroutines, groups, timeouts and resource cleanup — reviewed 2026-10-03

- Lessons: `advanced/asyncio-tasks-timeouts-and-cancellation/lesson.json`, `advanced/event-loop-task-trace-and-cancellation/lesson.json`, `advanced/taskgroup-failure-and-sibling-cleanup/lesson.json`, `advanced/async-iterators-timeouts-and-cancellation-cleanup/lesson.json`, and `advanced/async-streams-and-resource-lifetime/lesson.json`.
- Checked Python 3.14 official asyncio task/gather/TaskGroup and cancellation documentation. The focused TaskGroup lesson uses an Event-coordinated failure so a waiting sibling is definitely active; it demonstrates group cancellation, finally cleanup and `except* ValueError`. The earlier lessons cover coroutine creation, await/task scheduling, gather, deadlines, async iteration and async resource management. The separate bounded-queue lesson addresses backpressure.
- Bundled Python ran the new TaskGroup example and lab solution (exit 0, expected cleanup-before-error traces). This does not prove a browser Python runtime or complete behavior of every third-party async library. The in-site answer check is conceptual; code execution remains a release blocker.
- The new lesson has original beginner explanation, real-world scenario, worked example, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and project milestone.

## Thread races, lock ordering, queue handoff and visible outcomes — reviewed 2026-10-03

- Lessons: `advanced/thread-lock-order-and-safe-transfer/lesson.json`, `advanced/thread-queue-results-and-worker-failures/lesson.json`, `expert/gil-builds-and-portable-thread-safety/lesson.json`, and `advanced/threads-processes-and-coordination/lesson.json`.
- Checked Python 3.14 official `threading` Lock/Thread, synchronized `queue.Queue`, and `concurrent.futures` docs. The lock-order lesson protects a two-budget invariant and rejects invalid same-object/same-name/negative transfers. The queue lesson bounds pending work, pairs every successful get with task_done, sends a sentinel, joins work and worker, and reports a validation failure as an explicit result. The earlier lessons explain I/O-bound versus CPU-bound choice and why the GIL is not a substitute for application locking.
- Bundled Python ran both new examples and both lab solutions (exit 0, expected totals and outcomes). The no-deadlock argument comes from reviewing the stable lock order, not from one passing run. Queue examples use one worker for deterministic result order; multiple workers need order-independent checks. None of these in-memory primitives guarantee durable, cross-process storage or browser code execution.
- Both focused lessons include original beginner explanation, practical scenario, runnable example, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and project milestone.

## Async scheduling, cancellation and bounded backpressure — reviewed 2026-10-03

- Lessons: `advanced/event-loop-task-trace-and-cancellation/lesson.json`, `advanced/async-queue-backpressure-and-clean-shutdown/lesson.json`, `advanced/asyncio-tasks-timeouts-and-cancellation/lesson.json`, and `advanced/async-iterators-timeouts-and-cancellation-cleanup/lesson.json`.
- Checked Python 3.14 official asyncio task/Event and queue documentation. The focused trace distinguishes coroutine creation, task scheduling, cooperative waiting, explicit start signaling and cancellation cleanup; the bounded queue shows maxsize, producer wait, get/task_done pairing, join and idle-worker shutdown. Existing lessons add timeouts and async iterators/context managers.
- Bundled CPython 3.12 ran both new examples and both lab solutions (exit 0, expected trace and job lists). The lesson does not promise a scheduler's incidental order or claim CPU parallelism, durable queuing, browser execution, or complete failure-retry design.
- Both focused lessons include original beginner explanation, practical scenario, runnable example, guided lab with hints/checks/solution, common mistakes, three explained questions, source text, review date and project milestone.

## CPython GIL builds, synchronization and portability — reviewed 2026-10-03

- Lessons: `expert/gil-builds-and-portable-thread-safety/lesson.json`, `expert/python-portability-and-implementation-boundaries/lesson.json`, and the corrected `expert/memory-bytecode-and-gil/lesson.json`.
- Checked the Python 3.14 free-threading HOWTO, `threading`, `sys` and `sysconfig` documentation. The new lesson distinguishes normal GIL-enabled CPython from optional free-threaded builds, build capability from runtime state, and CPython details from language guarantees. The older blanket GIL claim was corrected rather than left to contradict it.
- Bundled CPython 3.12 ran the example and guided lab solution (exit 0; diagnostic fallback used because this runtime does not expose `sys._is_gil_enabled`; locked two-worker count was 200). This is a correctness demonstration, not proof of throughput or of the free-threaded branch on the bundled runtime.
- The new lesson provides original explanation, practical progress-counter example, checks, hints, solution, mistakes, three explained questions, source text, review date and project milestone. The existing portability lesson covers paths, wheels and platform/test constraints. Browser Python execution is not claimed.

## Complexity, repeated timing, profiling and trade-offs — reviewed 2026-10-03

- Lessons: `expert/complexity-timeit-cprofile-workflow/lesson.json`, `expert/profiling-memory-and-evidence-based-optimization/lesson.json`, and `advanced/profiling-complexity-and-performance/lesson.json`.
- Checked Python 3.14 `timeit` and `profile`/`cProfile` docs plus official set behavior. The new focused lesson compares equivalent list/set membership counts on prepared inputs, profiles a function with `cProfile.Profile`/`pstats.Stats`, and obtains repeated `timeit` measurements. It explains growth reasoning, profiling overhead, set-build cost, memory/order requirements and why exact speedups cannot be promised.
- Bundled Python ran the new example and lab solution (both exit 0, predicted qualitative output). The result deliberately prints equality, profiler function presence and timing-result shape rather than unstable seconds. The existing performance lessons provide further timing and structure-choice scenarios, but a microbenchmark is not end-to-end production proof.
- The new lesson includes original beginner explanation, practical importer scenario, mistakes, guided lab with starter/checks/hints/solution, three explained questions, source text, review date and project milestone. It does not claim universal set superiority or browser code execution.

## Compilation, bytecode cache, imports, frames and namespaces — reviewed 2026-10-03

- Lessons: `expert/source-compile-bytecode-and-pyc-cache/lesson.json`, `expert/frames-call-stack-and-namespaces/lesson.json`, `expert/ast-bytecode-and-implementation-boundaries/lesson.json`, and `intermediate/import-cache-path-and-side-effect-lab/lesson.json`.
- Checked Python 3.14 `py_compile`, `dis`, `traceback`, tutorial scopes/namespaces and import-system documentation. The compile lesson distinguishes code-object creation, disposable `.pyc` generation, first-import top-level execution and `sys.modules` reuse. The frame lesson captures call-stack summaries and separates an enclosed name from a module global without printing full locals. The existing AST/dis lesson explicitly labels opcode details CPython-specific; the import lesson includes a side-effect and cache lab.
- Bundled Python ran both new worked examples and both lab solutions (four snippets, exit 0, expected outputs). The temporary import probe cleans its path/cache entries; compiled cache remains inside a disposable temporary directory. Stack-summary names matched direct script execution. These checks do not prove bytecode format stability or browser execution.
- Both new lessons include original beginner explanation, practical CLI/diagnostic scenarios, mistakes, guided labs with starter/checks/hints/solution, three explained questions, source text, review dates and project milestones. Live frame retention and production logging of full locals are discouraged.

## Mutability, copies, interning caveats and traced memory — reviewed 2026-10-03

- Lessons: `expert/copy-depth-identity-and-interning-caveats/lesson.json`, `expert/tracemalloc-snapshots-and-memory-ownership/lesson.json`, the core aliasing/copy lesson, and the existing expert profiling lesson.
- Checked Python 3.14 `copy`, `tracemalloc`, `sys.intern`, and data-model documentation. The copy lesson contrasts binding, shallow and deep copies on nested pure data, and warns that interning/caching observations do not justify `is` for string or number equality. The tracing lesson brackets a retained workload with snapshots, reads current/peak traced memory, and explicitly distinguishes Python allocation traces from full process/native memory and ordinary retention from a leak.
- Bundled Python ran both new examples and both lab solutions (four snippets, exit 0, expected outputs). The copy example visibly mutates the original nested list through a shallow copy but not a deep copy. The tracing example emits stable qualitative booleans rather than hard-coded byte counts. Local results are not a benchmark across interpreters and do not prove browser execution.
- Both lessons have original beginner explanation, practical dashboard/export cases, mistakes, guided labs with starter/checks/hints/solution, three explained questions, source text, review date and project milestones. `tracemalloc` is not presented as native allocation or RSS coverage.

## Names, reachability, cycles and weak ownership — reviewed 2026-10-03

- Lessons: `expert/reachability-cycles-and-weak-ownership/lesson.json`, `expert/object-lifetime-garbage-collection-and-weak-references/lesson.json`, and the earlier foundations names/identity lesson.
- Checked Python 3.14 data model, `gc`, and `weakref` documentation. The new focused lesson contrasts alias removal with object destruction, draws a two-node strong-reference cycle, uses `weakref.ref` for non-owning observation, and explicitly distinguishes bundled CPython's `gc.collect()` classroom result from any portable timing guarantee. It directs resource cleanup to `with`/explicit close.
- Bundled Python ran both new and existing weak-reference examples/lab solutions (four snippets, all exit 0). The new example/lab printed `True` for the surviving alias and `True` for the collected unreachable cycle after explicit collection. The older example's immediate weakref disappearance is labelled as a simple CPython demonstration, not a cross-implementation guarantee.
- The new lesson has original beginner explanation, practical preview-cache ownership case, mistakes, guided lab with starter/checks/hints/solution, three explained questions, source text, review date and project milestone. Local collection output does not prove timing on other interpreters or browser code execution.

## Descriptor precedence, decorators, subclass hooks and metaclasses — reviewed 2026-10-03

- Lessons: `expert/descriptors-and-class-creation-hooks/lesson.json`, `expert/data-versus-nondata-descriptor-lookup/lesson.json`, `expert/class-decorators-init-subclass-and-metaclass-boundaries/lesson.json`, and `expert/metaclass-new-and-class-creation-order/lesson.json`.
- Checked Python 3.14 Descriptor HOWTO and data-model class-creation sections. The focused descriptor lesson compares data and non-data precedence against an instance dictionary entry; it explicitly labels direct dictionary injection a diagnostic bypass, not an application update path. The metaclass lesson traces a small `type` subclass's `__new__`, later class-decorator application, and still-later instance `__init__`. The prior class-hook lesson demonstrates a simpler decorator/`__init_subclass__` alternative.
- Bundled Python ran the two new examples and two lab solutions (all exit 0, exact predicted output), plus the repaired earlier descriptor lab (exit 0, normalization/rejection/introspection output). Examples are isolated, in memory and intentionally do not load plugins or execute untrusted class definitions.
- Each new lesson includes original beginner explanation, realistic framework/report context, common mistakes, guided lab with starter/checks/hints/solution, three explained questions, source text, review date and project milestone. This supports the named broad advanced-internals item but does not claim every metaclass hook or third-party framework behavior is covered, nor in-browser execution.

## Dataclasses, enums, ABCs, Protocols and design choices — reviewed 2026-10-03

- Lessons: `advanced/dataclass-records-and-enum-boundaries/lesson.json`, `advanced/abc-protocol-and-composition-contracts/lesson.json`, and the existing broad `advanced/dataclasses-enums-abcs-and-protocol-design/lesson.json`.
- Checked Python 3.14 `dataclasses`, `enum`, `abc`, and `typing.Protocol` documentation. The focused data-model lesson shows `field(default_factory=list)`, `__post_init__` validation and enum parsing at the external-text boundary; it explicitly explains that annotations alone do not enforce runtime types and frozen dataclasses are not deeply immutable. The contract lesson contrasts ABC instantiation enforcement with structural Protocol typing and injects a collaborator by composition. It does not claim Protocol annotations perform runtime validation.
- Bundled Python ran both new worked examples and lab solutions (four snippets, exit 0, exact predicted output). The first demonstrates independent mutable defaults and rejection of a raw state string. The second demonstrates two in-memory providers and failure to instantiate an abstract base directly. Static type-checker behavior is documented, not falsely claimed as a local checker run.
- Both new lessons have original beginner explanations, real-world scenarios, mistakes, guided labs with checks/hints/solutions, three explained questions, source text, review dates and project milestones. The existing broad lesson was subsequently corrected: its `Submission` model now validates the enum field in `__post_init__` and its lab demonstrates rejection of a raw string stage.

## Representation, comparison, arithmetic, container, iterator and context protocols — reviewed 2026-10-03

- Lessons: `advanced/value-object-repr-comparison-and-arithmetic/lesson.json`, `advanced/container-iteration-and-context-protocols/lesson.json`, plus `advanced/contextlib-generator-context-managers/lesson.json` and `advanced/custom-context-managers-and-resource-ownership/lesson.json` for additional cleanup detail.
- Checked Python 3.14 language-reference data-model sections for special-method dispatch, NotImplemented, hash/equality contract, container iteration and context management. The first focused lesson implements a validated study-minute value with safe repr, value comparison, unsupported-operand NotImplemented, fresh-object addition and explicit unhashability. The second implements len/indexing/fresh iteration over a tuple snapshot and a with manager whose exit clears state without suppressing a deliberate ValueError.
- Bundled Python ran both new worked examples and lab solutions (four snippets, exit 0 and exact expected output). The two context-manager lessons had been exercised earlier for success and failure cleanup. The examples do not claim a full general-purpose sequence implementation, deep immutability, or browser-side execution.
- Each new lesson contains original beginner explanation, practical project context, common mistakes, a guided lab with starter/checks/hints/solution, three explained questions, source text and review date. This supports the named master item at practical introductory-to-advanced depth, not every special method Python defines.

## Inheritance, composition, mixins, MRO, super and polymorphism — reviewed 2026-10-03

- Lessons: `advanced/cooperative-super-mixins-and-polymorphism/lesson.json`, `advanced/composition-inheritance-and-method-resolution/lesson.json`, and `advanced/classes-objects-and-composition/lesson.json`.
- Checked Python 3.14 tutorial inheritance/multiple-inheritance sections and built-in `super()` documentation. The new focused lesson prints a concrete MRO, traces each cooperative `super().render()` contribution, and contrasts a subtype/mixin with a composed collaborator. The older composition lesson shows a replaceable notifier without external messaging.
- Bundled Python ran the new example and lab solution with exit 0 and predicted class order and rendered string. The cooperative demonstration has compatible no-argument `render` methods and intentionally avoids implying arbitrary multiple-inheritance initializers are safe.
- The new lesson has original beginner explanation, practical report use, mistakes, guided lab with hints/checks/solution, three explained questions, source text, review date and project milestone. This is local snippet evidence, not in-browser Python execution or a general endorsement of deep inheritance hierarchies.

## Encapsulation conventions, properties, mangling and introspection — reviewed 2026-10-03

- Lessons: `advanced/properties-name-mangling-and-introspection/lesson.json` and the existing `advanced/python-data-model-properties-and-invariants/lesson.json`.
- Checked `property`, class-private name rewriting, `vars`, ordinary instance `__dict__`, and `getattr` against official Python 3.14 tutorial, built-ins and data-model documentation. The focused new lesson distinguishes a single-underscore convention from double-underscore collision avoidance, does not claim security, and explains that attribute access may invoke descriptors. It also explicitly rejects booleans from an integer percentage, since `bool` subclasses `int`.
- Bundled Python ran the new worked example and guided lab solution with exit 0 and exact predicted output. They show normal assignment, a narrow allowlisted instance-state diagnostic, ValueError for `True`, and preservation of the prior valid state. The older broad lesson was subsequently repaired to reject booleans with an exact-int check, and its lab solution now executes boundary and invalid cases instead of defining a class without testing it.
- The new lesson has original beginner explanation, a practical dashboard scenario, common mistakes, guided lab with hints/checks/solution, three explained questions, source text, review date and aligned project milestone. This does not prove browser code execution or complete coverage of advanced descriptors.

## Class construction, method binding and attribute ownership — reviewed 2026-10-03

- Lessons: `advanced/class-construction-and-bound-methods/lesson.json`, `advanced/class-instance-attributes-and-shadowing/lesson.json`, and the existing `advanced/classes-objects-and-composition/lesson.json`.
- Checked class construction, `__init__`, bound methods, instance versus class variables, and ordinary attribute shadowing against Python 3.14 tutorial chapter 9 and data-model documentation. The focused lessons explain where `self` comes from, use `saved_action.__self__` to expose a bound receiver, and contrast class-wide defaults with per-instance mutable progress. They state that descriptor-backed attributes and objects without `__dict__` need separate treatment.
- Bundled Python ran both new worked examples and both guided lab solutions with exit 0 and exact predicted output. Two learner objects kept independent progress, a saved bound method updated the intended object, and only one learner shadowed the class label.
- Both new lessons have original beginner explanations, practical dashboard scenarios, common mistakes, guided labs with hints/checks/solutions, three explained questions, source text, review dates and project milestones. This evidences the named class-basics master item, not the remaining deeper OOP/design items or browser code execution.

## Breakpoints, pdb, tracebacks and small reproductions — reviewed 2026-10-03

- Lessons: `intermediate/debugging-breakpoint-pdb-and-minimal-repro/lesson.json` and `intermediate/tracebacks-debugging-and-minimal-reproductions/lesson.json`.
- Checked `breakpoint()`, interactive pdb commands, and `traceback.extract_tb()` against Python 3.14 official `pdb`, built-in functions and `traceback` documentation. The new focused lesson reduces an empty-list crash to one fictional input, prints the exception and failing frame, then repairs the empty case and checks the normal case. The breakpoint is deliberately commented out because the site's guided snippet environment cannot service an interactive pdb prompt.
- Ran the new worked example and lab solution under bundled Python: both exited 0 with the expected diagnostic and repaired outputs. The older lesson's worked example intentionally exits 1 with IndexError and its lab solution handles the empty case; this is intentional failure pedagogy, not a passing execution claim.
- The new lesson includes original beginner explanation, a practical study-progress scenario, common mistakes, guided lab/checks/hints/solution, three explained questions, source text, review date and project milestone. Local Python execution does not establish browser execution of guided labs or interactive debugger integration.

## Logging levels, context, handlers, formatters and privacy — reviewed 2026-10-03

- Lessons: `intermediate/structured-context-logging-without-secrets/lesson.json`, `intermediate/logging-context-levels-and-safe-diagnostics/lesson.json`, `intermediate/logging-debugging-and-tracebacks/lesson.json`, and `production/safe-job-logging-and-incident-triage/lesson.json`.
- Checked logger/handler/formatter responsibilities, level filtering, `extra` context and propagation against Python 3.14 logging docs and HOWTO. The new lesson uses a named logger, in-memory StreamHandler and safe job context, demonstrating that a fictional token is absent. It teaches that privacy is decided before record creation, not delegated to the formatter.
- Bundled Python ran the new and updated intermediate examples/labs with exit 0 and expected logs. The older contextual lesson previously printed results on stdout but sent logs to stderr while its expected output interleaved them; it now routes both to one stdout stream and removes/closes its owned handler, yielding stable ordered output. The baseline lesson still uses logging's normal stderr output, which is documented in evidence rather than treated as a stdout match. The production example printed one safe summary; its lab currently checks a formatting function with assertions and does not demonstrate a logger by itself.
- Learner-facing material has original explanations, practical import use cases, common mistakes, guided labs, three explained questions, source text, review dates and project milestones. This proves local execution of sample snippets, not browser execution or operational log-retention policy enforcement.

## JSON/CSV serialization and pickle trust boundary — reviewed 2026-10-03

- Lessons: `intermediate/serialization-formats-and-trust-boundaries/lesson.json`, `intermediate/json-validation-and-untrusted-data-boundaries/lesson.json`, `intermediate/json-csv-parsing-and-schema-boundaries/lesson.json`, and `intermediate/context-managers-serialization-and-files/lesson.json`.
- Checked JSON parse/serialize behavior, `csv.DictReader` text-cell behavior, and the unsafe untrusted-pickle load boundary against Python 3.14 standard-library documentation. The new lesson chooses format by data shape and trust, converts and validates CSV values before JSON export, and explicitly excludes `pickle.loads` on untrusted data. It notes size limits and that successful parsing is not schema validation.
- Bundled Python ran all four worked examples and four guided lab solutions (all exit 0); the results included quoted CSV handling, rejection of malformed/wrong-shape JSON, and numeric JSON export after CSV conversion. The older file-based JSON lesson was repaired to use `TemporaryDirectory`, so the lesson/lab no longer writes `progress.json` or `checklist.json` into the learner's current directory.
- These lessons include real-world scenarios, original beginner explanations, common mistakes, guided labs with checks/hints/solutions, three explained questions, source text, review dates and project connections. They do not claim JSON/CSV parsers provide a complete schema validator or that local snippet execution proves browser execution.

## Context managers and resource ownership — reviewed 2026-10-03

- Lessons: `advanced/custom-context-managers-and-resource-ownership/lesson.json`, `advanced/contextlib-generator-context-managers/lesson.json`, and the file-mode and atomic-write lessons for built-in file context use.
- Checked `with`, the `__enter__`/`__exit__` protocol, and `contextlib.contextmanager` against Python 3.14 language reference and standard-library docs. The new focused lesson explains one yield, cleanup in finally, and re-raising an error caught only for logging; the older class-based lesson's lab was changed from a duplicate success path into success-plus-deliberate-failure practice.
- Bundled Python ran both context-manager worked examples and both guided lab solutions (all exit 0). Their output confirmed the active marker was True inside the body, False after normal or error exit, and the deliberate ValueError reached the outer handler rather than being suppressed.
- Both lessons include a professional resource-lifetime use case, beginner explanation, common mistakes, lab starter/steps/hints/checks/solution, three explained questions, source text, review date and project milestone. These tests are local Python evidence, not in-browser runner or visual-render evidence.

## Syntax errors, exceptions and traceback reading — reviewed 2026-10-03

- Lessons: `intermediate/syntax-errors-runtime-exceptions-and-tracebacks/lesson.json` and `intermediate/tracebacks-debugging-and-minimal-reproductions/lesson.json`.
- Compared parse-stage SyntaxError, runtime ValueError/IndexError, traceback anatomy, and the built-in exception hierarchy with the Python 3.14 tutorial and exception/traceback documentation. The new lesson explains why a try block in an invalid file cannot run, while a valid surrounding program can catch `compile()`'s SyntaxError.
- Bundled Python ran the new worked example and lab with outputs `SyntaxError`, `ValueError`, and hierarchy confirmation. The older diagnostic example intentionally exited 1 with a traceback ending in `IndexError: list index out of range`; its repaired lab exited 0 with `None` and `loops`. This intentional failure was checked as expected behavior, not counted as a passing script.
- Both provide beginner explanations, practical scenarios, common mistakes, guided checks/hints/solutions, explained review questions, source text, review dates and project milestones. Browser rendering/execution remains unverified.

## Exception clause flow, chaining and domain boundaries — reviewed 2026-10-03

- Lessons: `intermediate/exception-flow-else-finally-and-assertions/lesson.json`, `intermediate/exception-boundaries-custom-errors-and-cleanup/lesson.json`, and `intermediate/exception-design-recovery-and-cleanup/lesson.json`.
- Checked `try`/`except`/`else`/`finally`, `raise ... from`, custom Exception subclasses and disabled-assertion caveat against the Python 3.14 tutorial and language reference. The new worked example and lab visibly show `finally` on success and failure, and explain why a return from `finally` is unsafe.
- Bundled Python ran all three worked examples and all three lab solutions with exit 0. The older exception-design lab previously defined a function without observable checks; it now exercises valid input, bad text and negative input, printing the distinct outcomes.
- Each lesson has practical context, common mistakes, steps/hints/checks/solution, three explained questions, source text, review date and project connection. This is local snippet evidence, not proof of an in-browser runner.

## File modes, encodings, paths and replacement writes — reviewed 2026-10-03

- Lessons: `intermediate/text-binary-files-and-encoding/lesson.json` and `intermediate/paths-encodings-and-atomic-file-writes/lesson.json`.
- Checked `open` modes/encoding/buffering, `pathlib.Path`, `tempfile` and resource cleanup against Python 3.14 built-in and standard-library documentation. The new lesson contrasts `r`, `w`, `a`, `x`, text and binary modes, explains UTF-8 and buffering limits, and uses disposable files. The older lesson was repaired: both its worked example and guided lab now use a same-directory temporary file, `os.replace`, and `finally` cleanup rather than leaving a stale temporary file on failure.
- Bundled Python executed the two worked examples and both lab solutions with exit 0 and expected results. An additional simulated replacement failure kept the original note as `old` and left only `note.txt` in the disposable directory (no stray temp file).
- Both lessons have original explanations, job-use cases, common mistakes, hints/checks/solutions, three explained review questions, source text, review dates and aligned project milestones. The replacement pattern is not claimed to guarantee power-loss durability or multi-file transactions. Browser execution/rendering is still a separate release gate.

## Configuration layering, parsing and secret boundaries — reviewed 2026-10-03

- Lessons: `intermediate/layered-configuration-and-secret-boundaries/lesson.json`, `intermediate/command-line-argparse-and-config/lesson.json`, `intermediate/portable-paths-environment-and-runtime/lesson.json`, `production/secure-configuration-secrets-and-subprocesses/lesson.json`, and `core/modules-packages-and-configuration/lesson.json`.
- Checked `ConfigParser` string storage/getint and INI section behavior, `argparse` choices/parse_args, and `os.environ` mapping against Python 3.14 Standard Library pages. New focused lesson establishes CLI > environment > file precedence, validates the final value after resolution, separates ordinary settings from secrets, and explains that an environment variable is not automatically secret-safe.
- Bundled Python ran the focused worked example/lab (exact outputs `json/4/True` and `json/3`), plus examples and lab solutions from the four related existing lessons. All exited 0 using fictional values and a disposable working directory for file-writing examples. The core module lesson prints no output but created its expected report file; the CLI lesson printed `Format: text`; the secure-config example's version line is runtime-dependent. Updated the secure-config example to use `sys.executable` rather than whichever `python` is on PATH.
- Guided lab checks/hints/solution, mistakes, three explained questions, source text, review date and project milestone are present. This verifies local Python behavior and lesson content, not in-browser execution or visual rendering.

## Dependency management and pip workflow — reviewed 2026-10-03

- Lessons: `production/requirements-constraints-and-safe-upgrades/lesson.json`, `production/packaging-pyproject-and-dependencies/lesson.json`, and `production/inspect-project-metadata-offline/lesson.json`.
- Compared the direct-versus-build dependency explanation, interpreter-bound `python -m pip`, requirements/constraints semantics, lock purpose, and repeatability-versus-security boundary against the pip User Guide, pip Secure installs, Python Packaging User Guide, and pylock.toml specification. The new lesson warns that its tiny name-set example is not pip's resolver.
- Bundled Python ran the dependency lesson's example/lab and the metadata lesson's example/lab with exit 0; both stored worked-example outputs matched. The older TOML-only packaging lesson's metadata is an illustrative document, not executable Python, and was not counted as a Python run.
- Learner-facing material includes reasons, practical team scenario, commands with caveats, mistakes, guided offline practice and answer checks, three explained questions, source text, review dates and project milestones. This is foundational dependency engineering coverage, not a claim that an offline web page has queried live vulnerability databases or resolved arbitrary package graphs. In-browser Python execution remains a site-wide unverified release gate.

## Project metadata, build artifacts and release boundaries — reviewed 2026-10-03

- Lessons: `production/inspect-project-metadata-offline/lesson.json`, `production/wheels-sdists-and-release-boundaries/lesson.json`, and `production/packaging-pyproject-and-dependencies/lesson.json`.
- Verified concepts against Python Packaging User Guide pages for pyproject.toml, packaging projects, package formats, wheel and sdist specifications. The lessons separate a build frontend from its backend, runtime from build requirements, wheel from sdist, and local build from upload. Version metadata and clean-install/release checks are explicitly taught; no upload is performed.
- Bundled Python executed the two new lessons' examples and guided lab solutions (four snippets, all exit 0); stored worked outputs matched. A copied `tools/fixtures/python-package-demo/` project was built **offline** using local setuptools: `pip wheel --no-index --no-deps --no-build-isolation` produced a `py3-none-any.whl`; the backend produced an sdist; a clean target install of the wheel imported `learnverse_package_demo.greeting` and printed `Hello, Learner!`. After adding README.md to the fixture, a repeated sdist build confirmed its archive contains README.md and `__init__.py`.
- The lessons' in-site labs are guided and offline; the artifact-name lab does not itself build a distribution and expressly says its name checks do not prove archive validity. The real build is a local authoring verification, not an in-browser runner. Actual index publication is deliberately outside the lab and requires separate authority.

## Standard-library starter modules — reviewed 2026-10-03

- Lessons: `intermediate/standard-library-report-metrics/lesson.json` (`math`, `random`, `statistics`, `collections`); `intermediate/dates-and-deadlines-with-datetime/lesson.json` (`datetime`); `intermediate/portable-paths-environment-and-runtime/lesson.json` (`pathlib`, `os`, `sys`); `intermediate/iterators-itertools-and-one-pass-data/lesson.json` (`itertools`); `core/functions-as-values-map-filter-and-partial/lesson.json` (`functools`). The later two lessons already existed and were reviewed rather than duplicated.
- Checked against current Python Standard Library pages for all named modules. Examples teach the job each tool performs, with concrete study-report, scheduling, file, streaming and callable use cases. They explicitly warn that `random.Random` is not for security tokens, that date-only values omit time zones, and that iterators can be consumed.
- Bundled Python executed five worked examples and five guided lab solutions: all exited 0. All five worked outputs matched their stored expected output. The solutions printed the checked values for counts, deadlines, portable files, one-pass previews, and pre-filled callables.
- Each of the five lessons has source text, last-reviewed date, real-world context, common mistakes, guided steps/hints/checks/solution, three explained questions and project connection. Scope is the listed starter modules, not every API or function in the standard library. In-browser execution and visual rendering remain release-wide unverified gates.

## Input/output, `print()`, `input()`, conversion, formatting, f-strings — reviewed 2026-10-03

- Lesson: `foundations/input-output-conversion-and-fstrings/lesson.json`.
- Primary behavior checked against Python 3.14 built-in functions (`input`, `print`, `int`, `float`) and f-string language reference.
- Beginner theory explains that `input()` returns text, shows where conversion occurs, and explains two-decimal formatting. The worked café example explains each line, includes a real receipt use case, and notes invalid input.
- Bundled Python executed the worked example with input `2`: exit 0, output includes `You ordered 2 coffee(s).` and `Total: $7.00`. It executed the lab solution with input `3`: exit 0, output includes `Quantity: 3` and `Total: $12.75`. In a terminal the typed response is echoed after the prompt; a pipe does not echo input, which accounts for the visual difference from the sample transcript.
- The guided in-site snack-receipt lab includes starter code, five steps, four checks, three hints, full solution, solution explanation, and predict/bug/experiment challenges. The lesson includes three common mistakes, three explained check questions, source text, review date, and a Budget Splitter project milestone.
- Remaining boundary: this review proves the Python content and local execution. It does not prove the lesson page or lab editor renders correctly in the browser; that remains a release-wide gate.

## Variables, assignment, rebinding, dynamic typing, object identity versus equality — reviewed 2026-10-03

- Lessons: `foundations/variables-assignment-and-identity/lesson.json` and `foundations/names-bindings-identity-and-equality/lesson.json`.
- Compared name binding and object identity with Python 3.14 Language Reference, Assignment statements and Data model. The lessons distinguish a name being rebound from an object being mutated, `==` value equality from `is` identity, and `is None` from ordinary value comparisons.
- Bundled Python ran both worked examples and both lab solutions with exit 0. Worked outputs matched their stored expected outputs. Lab solutions printed, respectively, `Receipt for Sam: 80` / `Current basket total: 120` / `Match: False`, and separate original/copy lists followed by `False` / `False`.
- Both have beginner explanations, practical examples, guided in-site labs with checks, hints and full solutions, three common mistakes, three explained review questions, source text, review dates and Study-plan project connections.
- The execution evidence is local Python execution of stored snippets, not browser-runner or route verification.

## Built-in scalar types: None, bool, int, float, complex, str, bytes — reviewed 2026-10-03

- Lessons: `foundations/data-types-and-type-conversion/lesson.json` and `foundations/text-bytes-complex-and-missing-values/lesson.json`.
- Compared types, encoding/decoding, complex components, and None semantics with Python 3.14.8 Built-in Types and Data model. Existing beginner lesson explains str, int, float, bool and None; new focused lesson adds bytes and complex, Unicode encoding boundary, and optional-value distinctions.
- Bundled Python executed both worked examples and both lab solutions with exit 0; stored expected outputs match. The non-ASCII example requires UTF-8 stdout when tested on Windows; without that setting the console can replace the display character even though encode/decode itself succeeds.
- Both lessons include plain-language theory, real-world scenarios, line-by-line example explanation, guided in-site labs with hints/checks/solutions, at least three common mistakes, three explained questions, source text, review dates, and linked importer/profile projects.
- Remaining boundary: local snippet execution and JSON/route validation are not evidence that the browser editor executes Python.

## Statements, expressions, indentation, comments, names, literals, keywords — reviewed 2026-10-03

- Lessons: `foundations/first-program-comments-names-and-operators/lesson.json`, `foundations/values-expressions-control-flow/lesson.json`, and new focused `foundations/statements-expressions-and-keywords/lesson.json`.
- Compared the distinctions and indentation/keyword behavior with Python 3.14.8 Language Reference chapters on lexical analysis, expressions, and statements. The focused lesson explains each term separately and shows how an indented decision changes a real study-planner message.
- Bundled Python executed all three stored examples and all three lab solutions with exit 0. Example outputs matched their stored expectations; the focused lab printed `One more lesson to go` for the below-threshold test.
- The three lessons include original beginner theory, line-by-line worked examples, guided labs with hints and checks, common mistakes, three explained questions apiece, primary source text, review dates, and aligned beginner project milestones. Browser execution is still unverified.

## Conditional flow: if/elif/else, match/case, guards, structural pattern matching — reviewed 2026-10-03

- Lessons: `foundations/conditional-statements-and-decision-tables/lesson.json` and `foundations/structural-pattern-matching-and-guards/lesson.json`.
- Compared ordinary conditional and structural-pattern syntax with Python 3.14.8 Language Reference. Beginner lesson covers ordered if/elif/else thresholds and boundary testing; matching lesson covers sequence patterns, capture, guard order, and a fallback case, including when a plain if chain is clearer.
- Bundled Python executed both examples and lab solutions with exit 0; example outputs matched stored expectations. The labs printed `Next step: Ready for a challenge` and `add: loops`.
- Both lessons carry worked examples, guided steps/checks/hints/solutions, real use cases, mistakes, three explained questions, source text, review dates, and connected projects. This does not establish browser-runner execution.

## Numeric operations, precedence, integer division, modulo, exponentiation, rounding, floating-point limits, decimal use cases — reviewed 2026-10-03

- Lessons: `foundations/operators-expressions-and-precedence/lesson.json`, `foundations/floating-point-decimal-and-numerical-reasoning/lesson.json`, and new focused `foundations/division-remainder-powers-and-rounding/lesson.json`.
- Checked operator precedence, floor division, modulo, powers, `round()`, and `Decimal.quantize()` against Python 3.14.8 language reference and standard library documentation. The focused lesson explains negative floor-division behavior, exact halfway ties-to-even, and explicit Decimal rounding policy rather than implying `round()` is suitable for every financial rule.
- Bundled Python executed all three worked examples and three lab solutions with exit 0. Each stored example output matched. The focused lab produced `3 2`, `25`, and `1.24` for grouping, exponentiation, and policy rounding.
- The three lessons collectively include plain-language rationale, line-by-line examples, realistic study/price cases, guided in-site labs, mistakes, three explained checks each, source text, review dates, and project milestones. No claim of browser Python execution.

## Comparisons, truthiness, short-circuit logic, chained comparisons, is versus == — reviewed 2026-10-03

- Lessons: `foundations/truthiness-short-circuiting-and-safe-conditions/lesson.json`, `foundations/names-bindings-identity-and-equality/lesson.json`, and new `foundations/chained-comparisons-and-boolean-values/lesson.json`.
- Compared truth testing, comparison chains, Boolean operand return values, and identity with Python 3.14.8 Built-in Types and Language Reference. The new lesson adds explicit `0 <= value <= 100` boundaries and highlights the `bool`-is-an-`int` subclass trap; it uses exact type checking for a domain field that must reject Boolean scores.
- Bundled Python executed three examples and three lab solutions with exit 0; example outputs matched. The new lab printed `True`, `True`, `Anonymous learner`, `False`.
- All lessons have original explanations, worked examples, guided practice, common mistakes, source text, review dates, three explained questions, and project connections. Browser-runner behavior remains a separate gate.

## Iteration: for, while, range, break, continue, pass, loop else — reviewed 2026-10-03

- Lessons: `foundations/loops-range-and-repetition/lesson.json` and new `foundations/loop-exit-and-search-else/lesson.json`.
- Compared for/while loops, range stop exclusion, break/continue/pass, and the no-break meaning of loop else with Python 3.14.8 Tutorial and Language Reference. The focused search lesson includes an empty-input case and a bounded while example whose counter changes.
- Bundled Python executed both worked examples and both lab solutions with exit 0; stored worked outputs matched. New example printed `Next: files` and `Attempts: 2`; new lab printed `Next lesson: functions`.
- Both lessons contain beginner reasoning, line-by-line worked examples, guided local practice with starter/hints/checks/solutions, mistakes, three explained questions, source text, review dates, and aligned study-plan projects. Browser execution is not proven.

## Defining/calling functions, parameters, arguments, return, None, docstrings — reviewed 2026-10-03

- Lessons: `core/functions-parameters-returns-and-scope/lesson.json` and new beginner bridge `foundations/functions-results-and-documentation/lesson.json`.
- Compared function definition/call, implicit None, return and docstrings with Python 3.14.8 Tutorial and Language Reference. The bridge lesson distinguishes reusable returned values from printed side effects and documents a zero-denominator contract.
- Bundled Python executed both examples and both lab solutions with exit 0; stored worked outputs matched. New example printed `75% complete`, `75.0`, `True`; new lab printed `40.0`.
- Both lessons include original explanation, worked examples, guided steps/checks/hints/solutions, common mistakes, three explained questions, source text, review dates and project milestones. Browser execution remains unproven.

## Comprehensions and generator expressions; nesting, filters, readability trade-offs — reviewed 2026-10-03

- Lessons: `core/comprehensions-iterators-regex-and-structured-data/lesson.json`, `core/comprehensions-iterators-regex-and-json/lesson.json`, and new focused `core/comprehensions-generators-and-readable-nesting/lesson.json`.
- Compared list comprehension and generator-expression behavior with Python 3.14.8 Tutorial Data Structures and Language Reference. The focused lesson explains filtering, one-pass generator consumption, equivalent nested-loop order, and when an ordinary loop is clearer.
- Bundled Python executed all three worked examples and all three lab solutions with exit 0. All worked outputs matched. One older lab solution is a pure function definition with no output; this check proves it runs but not its return contract, so the focused lab supplies an observable completed-names and 19-minute result.
- The focused lesson includes original beginner theory, line-by-line worked example, real report use case, guided in-site lab with hints/checks/solution, mistakes, three explained questions, source text, review date, and project milestone. Browser execution remains a separate gate.

## Strings: indexing, slicing, immutability, Unicode, encodings, escape sequences, formatting, common methods — reviewed 2026-10-03

- Lessons: `foundations/strings-slicing-and-text-methods/lesson.json`, `foundations/text-bytes-complex-and-missing-values/lesson.json`, and new `foundations/unicode-string-boundaries-and-escapes/lesson.json`.
- Compared str indexing/slicing/method behavior, string escapes, and UTF-8 encoding/decoding with Python 3.14.8 Built-in Types, Language Reference and Tutorial. The new lesson explains the stop-exclusive rule, string immutability, repr of escapes, and the important distinction between code-point indexing and user-perceived characters.
- Bundled Python executed all three worked examples and all three lab solutions with UTF-8 stdout, exit 0, and matching stored worked outputs. The new lab printed `Ca`, `CAFÉ`, and unchanged `Café`.
- Together the lessons include original theory, annotated examples, real import/display use cases, guided practice, common mistakes, three explained questions each, source text, review dates, and linked study-profile projects. Browser lab execution is not established.

## Lists: creation, mutation, slicing, copying versus aliasing, methods, stacks/queues, nested lists — reviewed 2026-10-03

- Lessons: `foundations/lists-mutation-copying-and-nested-data/lesson.json`, `core/collections-text-and-copying/lesson.json`, and new `core/list-methods-nested-copies-and-queues/lesson.json`.
- Compared common list methods and stack/queue guidance against Python 3.14.8 Tutorial Data Structures; compared shallow/deep copy and deque against standard-library documentation. The focused lesson adds explicit nested-list ownership, the difference between append and extend, and why deque is preferable to repeated list front-removal.
- Bundled Python ran all three examples and three lab solutions with exit 0; stored worked outputs matched. New lab showed independent two-level snapshot `['input']`, changed active day `['input', 'quiz']`, and FIFO first item `day 1`.
- Lessons provide beginner explanation, worked examples, guided labs with checks/hints/solutions, mistakes, three explained questions each, source text, review dates and linked planner projects. The copy strategy is explicitly limited to the known two-level shape; browser execution is not established.

## Tuples: packing/unpacking, immutability, single-item tuple, named tuples — reviewed 2026-10-03

- Lessons: `foundations/dictionaries-sets-and-tuples/lesson.json` and new `core/tuples-unpacking-and-named-records/lesson.json`.
- Compared tuple packing/unpacking and immutability with Python 3.14.8 Tutorial and Built-in Types; checked namedtuple against standard-library documentation. The focused lesson covers the one-item comma, starred unpacking, readable named fields, and the nested-mutable-object caveat.
- Bundled Python ran both examples and both lab solutions with exit 0; stored worked outputs matched. New lab printed `8 10`, `8`, `tuple`.
- Lessons include original explanation, real quiz-report use case, line-by-line worked code, guided hints/checks/solutions, mistakes, three explained questions, source text, review dates and aligned project milestones. Browser execution remains unproven.

## Sets and frozensets: uniqueness, membership, set algebra, hashability — reviewed 2026-10-03

- Lessons: `foundations/dictionaries-sets-and-tuples/lesson.json`, `core/sets-hashability-and-key-design/lesson.json`, and new `core/set-algebra-frozenset-and-membership/lesson.json`.
- Compared set/frozenset membership and operations with Python 3.14.8 Built-in Types and hashability with Data model. New lesson covers union, intersection, difference, symmetric difference, `set()` versus `{}`, display-order caveat, and frozenset as a key when its members are hashable.
- Bundled Python executed three worked examples and three lab solutions with exit 0; all stored worked outputs matched. New lab returned missing `['files']`, shared `['loops', 'variables']`, `False`, and `frozenset`.
- Lessons include beginner theory, real prerequisite planning, worked code, guided practice with checks/hints/solutions, mistakes, explained checks, source text, review dates and project milestones. Browser execution remains unproven.

## Dictionaries: key/value design, lookup, iteration, views, defaults, merging, ordering, nested structures — reviewed 2026-10-03

- Lessons: `foundations/dictionaries-sets-and-tuples/lesson.json`, `advanced/dictionaries-hash-tables-and-lookup-tradeoffs/lesson.json`, and new `core/dictionary-views-defaults-merging-and-nesting/lesson.json`.
- Compared mappings, insertion order, dynamic views, get/setdefault, union merging and key hashability with Python 3.14.8 Built-in Types and Language Reference. The new lesson distinguishes required bracket lookup from optional get, shows a live keys view, and merges a nested record at the intended level instead of replacing it whole.
- Bundled Python executed three worked examples and three lab solutions with exit 0; stored worked outputs matched. New lab printed updated python `3/5`, unchanged sql `1/4`, and preserved original python record.
- Lessons include original explanations, realistic local progress data, line-by-line examples, guided labs with hints/checks/solutions, mistakes, three explained questions each, source text, review dates and aligned project connections. Browser execution is not established.

## Sequence operations, iterable protocol, unpacking, starred expressions, enumerate, zip, sorted, reversed — reviewed 2026-10-03

- Lessons: `core/unpacking-enumerate-zip-and-starred-expressions/lesson.json`, `core/iteration-order-and-unequal-inputs/lesson.json`, `intermediate/iterators-itertools-and-one-pass-data/lesson.json`, and new `core/sequence-ordering-reversal-and-strict-pairing/lesson.json`.
- Compared the built-ins and iterator behavior with Python 3.14.8 Built-in Functions and Tutorial. New focused lesson supplies sorted-versus-sort, reverse-iterator consumption, strict zip mismatches, numbered rows, starred unpacking and source-preservation examples.
- Bundled Python executed four worked examples and four lab solutions with exit 0; all stored worked outputs matched. One earlier strict-zip lab has assertions but no printed output, so its exit 0 is evidence only for the asserted path; the focused lab prints the ranked report and unchanged source order.
- Lessons include original explanations, real report use cases, guided labs with hints/checks/solutions, mistakes, three explained questions each, source text, review dates and linked projects. Browser execution remains unproven.

## Hashability, mutability, shallow/deep copy, aliasing, default mutable argument trap — reviewed 2026-10-03

- Lessons: `core/sets-hashability-and-key-design/lesson.json`, `core/aliasing-shallow-copy-and-nested-mutation/lesson.json`, `core/collections-text-and-copying/lesson.json`, `core/function-defaults-args-kwargs-and-mutable-state/lesson.json`, and `core/list-methods-nested-copies-and-queues/lesson.json`.
- Compared hashability and mutable-container rules with Python 3.14.8 Data model and Built-in Types, shallow/deep copying with the copy module, and default-argument behavior with the Tutorial. Together these lessons distinguish aliases from outer copies, show nested mutation and selected deep copying, explain hashable keys, and demonstrate the fresh-list-via-None default pattern.
- Bundled Python executed the hashability, alias/copy and mutable-default examples and lab solutions in this batch with exit 0 and matching stored worked outputs. The earlier collections/deepcopy and list-ownership examples/labs also ran with exit 0 and matching worked outputs in the prior batch. One aliasing lab is assertion-only, so its exit 0 proves the asserted sample but not every nested shape.
- Lessons include beginner theory, worked examples, guided labs, common mistakes, explained checks, source text, review dates and connected project milestones. Browser execution is not established.

## Regular expressions: patterns, raw strings, groups, search/match/fullmatch, substitution, readability and safety — reviewed 2026-10-03

- Lessons: `core/regex-patterns-and-safe-text-validation/lesson.json` and new `core/regex-search-match-fullmatch-and-replacement/lesson.json`; broader regex use also appears in the two comprehension/structured-data lessons.
- Compared re.search, re.match, re.fullmatch, named groups, re.sub and raw-string pattern use with Python 3.14.8 re documentation. New lesson shows why a prefix or embedded match is not whole-ID validation and why JSON/CSV need dedicated parsers.
- Bundled Python executed both worked examples and both lab solutions with exit 0; stored worked outputs matched. New lab accepts only PY-101 and rejects both suffix and embedded near misses.
- Both lessons provide beginner explanation, real ID-intake use case, worked code, guided in-site labs with hints/checks/solutions, mistakes, three explained questions, source text, review dates and project milestones. Browser execution remains unproven.

## JSON, CSV, and structured-data shapes; validation and schema thinking — reviewed 2026-10-03

- Lessons: `intermediate/csv-json-schema-and-data-normalization/lesson.json`, `intermediate/json-validation-and-untrusted-data-boundaries/lesson.json`, `intermediate/csv-normalization-and-data-quality-checks/lesson.json`, and new `intermediate/json-csv-parsing-and-schema-boundaries/lesson.json`; later pipeline/project lessons extend the workflow.
- Compared json.loads, csv.DictReader and related boundary behavior with Python 3.14.8 standard-library documentation. New lesson separates parsing from schema validation, shows quoted CSV titles containing commas, and rejects JSON Boolean values for exact-integer count fields.
- Bundled Python executed all four worked examples and all four lab solutions with exit 0; stored worked outputs matched. One older schema lab only defines a function, so exit 0 alone does not prove its return behavior; other focused labs produce observable validation outputs.
- Lessons include plain-language theory, annotated examples, safe import scenarios, guided practice, mistakes, explained checks, source text, review dates and aligned importer projects. Production CSV error wrapping remains deeper work in the later pipeline lesson; browser execution is not established.

## Positional-only, positional-or-keyword, keyword-only, defaults, *args, **kwargs, argument unpacking — reviewed 2026-10-03

- Lessons: `core/functions-scope-and-typed-interfaces/lesson.json`, `core/function-defaults-args-kwargs-and-mutable-state/lesson.json`, and new `core/parameter-kinds-defaults-and-unpacking/lesson.json`.
- Compared signature markers, default evaluation, variadic gathering and call-site unpacking with Python 3.14.8 Tutorial and Language Reference. The new lesson demonstrates `/`, `*`, `*args`, `**kwargs`, `*values` and `**mapping` in one readable reminder contract, while existing lessons cover a fresh-list-via-None default.
- Bundled Python executed three worked examples and three lab solutions with exit 0; stored worked outputs matched. The older typed-interface lab only defines a function without asserting output, so its exit 0 does not prove the function contract; the new lab prints both reminder call results.
- Lessons include original beginner explanation, real reminder use case, annotated worked code, guided in-site lab with hints/checks/solution, mistakes, three explained checks, source text, review dates and project milestones. Browser execution remains unproven.

## LEGB scope, local/global/nonlocal names, closures, late binding, shadowing — reviewed 2026-10-03

- Lessons: `core/functions-parameters-returns-and-scope/lesson.json`, `core/scope-closures-and-late-binding/lesson.json`, and new `core/name-resolution-shadowing-and-late-callbacks/lesson.json`.
- Compared name resolution, global/nonlocal statements and nested-scope behavior with Python 3.14.8 Language Reference. The new lesson shows a failing loop-callback pattern, a factory repair, closure-owned nonlocal counter, and built-in shadowing concerns.
- Bundled Python executed the two scope-focused worked examples and lab solutions with exit 0; stored worked outputs matched. New example printed two wrong `Files` values then correct Loops/Files callbacks and independent counter results; the lab prints Input/Loops/Files correctly.
- Lessons include original explanations, realistic deferred-reminder use cases, worked examples, guided hints/checks/solutions, mistakes, three explained questions, source text, review dates and aligned projects. Browser execution is not established.

## Recursion, base cases, stack limits, iteration alternatives — reviewed 2026-10-03

- Lessons: `advanced/recursion-backtracking-and-dynamic-programming/lesson.json` and new beginner bridge `core/recursive-base-cases-and-iterative-alternatives/lesson.json`.
- Compared function calls and recursion limits with Python 3.14.8 Tutorial and sys documentation. The bridge lesson shows a leaf base case, a shrinking step over an acyclic curriculum tree, an explicit-stack alternative, and the need for a cycle/depth policy on untrusted graph-shaped input.
- Bundled Python ran both worked examples and both lab solutions with exit 0 and matching stored worked outputs. New example prints `4` twice and new lab prints `6` twice.
- Lessons include original explanation, real curriculum traversal, annotated examples, guided labs with hints/checks/solutions, mistakes, three explained questions, source text, review dates and project milestones. The beginner lab intentionally avoids executing a cycle or runaway recursion; browser execution remains unproven.

## First-class functions, lambdas, higher-order functions, map, filter, functools, decorators — reviewed 2026-10-03

- Lessons: `core/higher-order-functions-and-decorators/lesson.json`, `core/generators-decorators-and-lazy-workflows/lesson.json`, and new `core/functions-as-values-map-filter-and-partial/lesson.json`.
- Compared lambda, map/filter, functools.partial and wraps with Python 3.14.8 Tutorial, Built-in Functions and functools docs. The new lesson contrasts lazy map/filter with an equivalent comprehension, a configured partial callable, and lambda as a short sort key; the existing decorator lesson explains wrapper replacement and metadata preservation.
- Bundled Python ran the decorator and new function-values worked examples and lab solutions with exit 0 and matching stored worked outputs. The generator/decorator overview remains a separately validated module with a narrow generator sample; it is not the primary evidence for the broader decorator claim.
- Lessons include original beginner explanations, practical title-normalization and tracing examples, guided practice, mistakes, three explained questions, source text, review dates and aligned projects. Browser execution remains unproven.

## Generators, yield, yield from, iterators, lazy evaluation, iterator exhaustion — reviewed 2026-10-03

- Lessons: `core/generators-decorators-and-lazy-workflows/lesson.json`, `intermediate/iterators-itertools-and-one-pass-data/lesson.json`, and new `core/yield-from-and-one-pass-generator-pipelines/lesson.json`.
- Compared yield/yield from semantics and iterator exhaustion with Python 3.14.8 Language Reference and Tutorial; islice with the standard-library documentation. The focused lesson shows one-pass preview consumption, a fresh generator pass, and the shape risk of delegating a string rather than a collection of records.
- Bundled Python executed three worked examples and three lab solutions with exit 0 and matching stored worked outputs. The new lab prints one preview item, three remaining items, then all four on a fresh pass.
- Lessons include original beginner theory, annotated examples, practical weekly-report use cases, guided in-site labs, mistakes, three explained questions, source text, review dates and linked projects. Browser execution remains unproven.

## Type annotations, typing, generics, protocols, TypedDict, dataclass, runtime versus static checking — reviewed 2026-10-03

- Lessons: `core/type-hints-dataclasses-and-protocols/lesson.json`, `advanced/generics-protocols-and-runtime-validation-boundaries/lesson.json`, and new `core/typeddict-protocol-generic-and-runtime-checks/lesson.json`.
- Compared TypedDict, Protocol and generic constructs with Python 3.14.8 typing documentation and dataclass behavior with the standard library. The new lesson clearly distinguishes static contracts from actual runtime validation, including bool-versus-int input. The older generic worked example previously contained prose in its expectedOutput while printing nothing; it was corrected to print a generic fallback and validated identifier, with exact output recorded.
- Bundled Python executed three worked examples and three lab solutions with exit 0 and matching stored worked outputs after that correction. The older generic lab is assertion-only; its exit 0 proves only its asserted sample cases.
- Lessons provide original beginner explanation, real importer scenarios, annotated code, guided labs with hints/checks/solutions, mistakes, three explained questions, source text, review dates and project connections. Browser execution remains unproven.

## Imports, import forms, import-time effects, module cache, sys.path, dir, __name__ — reviewed 2026-10-03

- Lessons: `intermediate/modules-packages-and-imports/lesson.json`, `intermediate/imports-packages-and-program-entry-points/lesson.json`, `intermediate/imports-module-cache-and-side-effects/lesson.json`, and new `intermediate/import-cache-path-and-side-effect-lab/lesson.json`.
- Compared module loading and caching with Python 3.14.8 Import System reference and Tutorial. New lesson creates a uniquely named temporary module, demonstrates one-time top-level execution, `sys.modules` identity, `sys.path`, `dir`, and imported `__name__`; previous main-guard lessons explain direct-run behavior.
- Found and corrected an older two-file example and lab that looked like two files in comments but failed when run in one editor (`ModuleNotFoundError`). They now construct real temporary files and run the app via the current interpreter. Also corrected an older expectedOutput value from prose (`1 when run directly`) to actual output `1`.
- Bundled Python executed the four relevant worked examples and four lab solutions with exit 0 and matching stored worked outputs after repair. Lessons include original explanation, guided labs, mistakes, explained checks, source text, review dates and project milestones. Browser execution remains unproven.

## User modules, packages, __init__.py, relative imports, namespace packages, public API design — reviewed 2026-10-03

- Lessons: `intermediate/modules-packages-and-imports/lesson.json`, `intermediate/packages-relative-imports-and-public-apis/lesson.json`, and new `intermediate/package-boundaries-relative-imports-and-namespace-layout/lesson.json`.
- Compared regular/namespace package layouts and relative imports with Python 3.14.8 Import System reference and Tutorial. The new lesson builds a real temporary regular package, sibling module and public __init__.py re-export; it explains namespace packages as a distinct no-__init__ layout but does not claim the small lab executes a namespace package.
- Found and corrected an older package example/lab whose comment-separated pseudo-files raised `ImportError: attempted relative import with no known parent package` in the in-site single editor. They now create an actual temporary package and clean up the path/cache.
- Bundled Python executed the three relevant worked examples and three lab solutions with exit 0 and matching stored worked outputs after repair. Original theory, realistic package project, guided practice, common mistakes, three explained questions, source text and review dates are present. Browser execution remains unproven.
