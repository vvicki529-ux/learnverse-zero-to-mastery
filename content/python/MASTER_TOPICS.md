# Python — zero-to-mastery master topic checklist

**Track status:** A complete topic-to-module map exists. The mapping validator confirms that every listed item has a destination module; it does **not** prove that every topic already has expert-depth theory or executable code. Content depth and runnable-lab support are being upgraded module by module.

**Status legend:** `[x] covered well` · `[~] covered but shallow` · `[ ] missing`

**Research baseline:** Python language and standard-library documentation reviewed against Python 3.14 documentation; Python Institute PCEP-30-02 and PCAP-31-03 objectives reviewed; university beginner-programming progression and current Python engineering role requirements reviewed. PCEP-30-03 is scheduled for a future release; version-specific details must be rechecked before publishing certification material.

## 1. Environment, tools, and program execution

- [x] Installing and selecting a Python version; CPython versus alternative implementations
- [x] Interpreter, REPL, script execution, command-line arguments, exit status, `__main__`
- [x] Editor/IDE workflow, formatter, linter, debugger, terminal, and reading tracebacks
- [x] File paths, current working directory, encodings, newline differences, cross-platform behaviour
- [x] Virtual environments, `venv`, activation, dependency isolation, reproducible environments
- [x] Git fundamentals for Python projects: repository, commit, branch, ignore files, code review

## 2. Core syntax and program flow — PCEP foundation

- [x] Statements, expressions, indentation, comments, names, literals, keywords
- [x] Variables, assignment, rebinding, dynamic typing, object identity versus equality
- [x] Built-in scalar types: `None`, `bool`, `int`, `float`, `complex`, `str`, `bytes`
- [x] Numeric operations, precedence, integer division, modulo, exponentiation, rounding, floating-point limits, `decimal` use cases
- [x] Comparisons, truthiness, short-circuit logic, chained comparisons, `is` versus `==`
- [x] Input/output, `print()`, `input()`, conversion, formatting, f-strings
- [x] Conditional flow: `if`, `elif`, `else`, `match`/`case`, guards, structural pattern matching
- [x] Iteration: `for`, `while`, `range`, `break`, `continue`, `pass`, loop `else`
- [x] Comprehensions and generator expressions; nesting, filters, readability trade-offs

## 3. Collections, text, and data modelling — PCEP/PCAP core

- [x] Strings: indexing, slicing, immutability, Unicode, encodings, escape sequences, formatting, common methods
- [x] Lists: creation, mutation, slicing, copying versus aliasing, methods, stacks/queues, nested lists
- [x] Tuples: packing/unpacking, immutability, single-item tuple, named tuples
- [x] Sets and frozensets: uniqueness, membership, set algebra, hashability
- [x] Dictionaries: key/value design, lookup, iteration, views, defaults, merging, ordering, nested structures
- [x] Sequence operations, iterable protocol, unpacking, starred expressions, `enumerate`, `zip`, `sorted`, `reversed`
- [x] Hashability, mutability, shallow/deep copy, aliasing, default mutable argument trap
- [x] Regular expressions: patterns, raw strings, groups, search/match/fullmatch, substitution, readability and safety
- [x] JSON, CSV, and structured-data shapes; validation and schema thinking

## 4. Functions, scope, and functional techniques — PCEP/PCAP core

- [x] Defining/calling functions, parameters, arguments, `return`, `None`, docstrings
- [x] Positional-only, positional-or-keyword, keyword-only, defaults, `*args`, `**kwargs`, argument unpacking
- [x] LEGB scope, local/global/nonlocal names, closures, late binding, shadowing
- [x] Recursion, base cases, stack limits, iteration alternatives
- [x] First-class functions, lambdas, higher-order functions, `map`, `filter`, `functools`, decorators
- [x] Generators, `yield`, `yield from`, iterators, lazy evaluation, iterator exhaustion
- [x] Type annotations, `typing`, generics, protocols, `TypedDict`, `dataclass`, runtime versus static checking

## 5. Modules, packages, dependencies, and distribution — PCAP/production

- [x] Imports, import forms, import-time effects, module cache, `sys.path`, `dir`, `__name__`
- [x] User modules, packages, `__init__.py`, relative imports, namespace packages, public API design
- [x] Standard modules: `math`, `random`, `statistics`, `datetime`, `pathlib`, `os`, `sys`, `collections`, `itertools`, `functools`
- [x] Dependency management, `pip`, requirement/constraint files, lock files, dependency vulnerability awareness
- [x] `pyproject.toml`, build backends, package metadata, wheels/sdists, versioning, publishing concepts
- [x] Configuration management: environment variables, `argparse`, `configparser`, secrets boundaries

## 6. Errors, files, resources, and observability — PCAP/real-world

- [x] Syntax errors versus exceptions, traceback reading, exception hierarchy
- [x] `try`/`except`/`else`/`finally`, `raise`, chaining, assertions, custom exceptions, error boundaries
- [x] File I/O: `open`, modes, encoding, text/binary, buffering, context managers, paths, atomic-write patterns
- [x] Context managers and `with`; creating context managers where appropriate
- [x] Serialization: `json`, CSV, pickle risks, data validation and untrusted input
- [x] Logging levels, structured/contextual logging, handlers, formatters, log privacy
- [x] Debugging: breakpoints, `pdb`, tracebacks, minimal reproducible examples

## 7. Object-oriented programming and Python data model — PCAP/advanced

- [x] Classes, instances, methods, `self`, constructors, attributes, class versus instance variables
- [x] Encapsulation conventions, properties, name mangling, `__dict__`, introspection
- [x] Inheritance, composition, mixins, multiple inheritance, MRO, `super`, polymorphism
- [x] Dunder methods: representation, comparison, arithmetic, container, context-manager, iterator protocols
- [x] `dataclass`, enums, abstract base classes, protocols, design trade-offs
- [x] Descriptors, decorators, metaclasses, class creation hooks — advanced/internals

## 8. Execution model, memory, performance, and internals

- [x] Names, bindings, references, object lifetime, garbage collection, reference cycles, weak references
- [x] Mutability, interning/caching caveats, copy semantics, memory profiling
- [x] Bytecode, compilation, `.pyc`, import execution, frames, call stack, namespaces
- [x] Algorithmic complexity, profiling, benchmarking, `timeit`, `cProfile`, performance trade-offs
- [x] CPython GIL, implementation portability, when details are CPython-specific
- [x] Async internals, event-loop concepts, cooperative scheduling, cancellation, backpressure

## 9. Concurrency, networking, and asynchronous programs

- [x] Threads, locks, queues, races, deadlocks, thread-safe design, I/O-bound work
- [x] Processes, multiprocessing, pickling constraints, pools, IPC, CPU-bound work
- [x] `asyncio`: coroutines, `async`/`await`, tasks, gather, timeouts, cancellation, async context managers
- [x] Sockets, HTTP concepts, REST APIs, requests, retries, idempotency, pagination, rate limits, error handling
- [x] Webhooks, message queues, event-driven concepts, background workers

## 10. Databases, services, and application development

- [x] SQL fundamentals from Python: parameterized queries, transactions, connection lifecycle, SQLite/PostgreSQL concepts
- [x] ORM concepts, migrations, query performance, N+1 query problem
- [x] API design and consumption: validation, authentication concepts, status codes, pagination, versioning
- [x] Web-framework concepts: routing, request/response, templates, middleware, background work
- [x] Framework survey and project labs: Flask/FastAPI/Django concepts; use one verified framework version per deep module
- [x] Caching, queues, task scheduling, idempotency, distributed-system failure modes

## 11. Testing, code quality, and secure engineering

- [x] Unit, integration, end-to-end, regression, property-based, and contract-test concepts
- [x] `pytest`: test discovery, assertions, fixtures, parametrization, mocks, temporary files, coverage
- [x] `unittest`, `unittest.mock`, test doubles, patching namespaces correctly
- [x] Static analysis, formatting, linting, type checking, documentation, code review
- [x] Security: input validation, injection risks, deserialization, path traversal, secrets, dependency risk, safe subprocess use
- [x] Accessibility, reliability, error messages, internationalization, privacy-aware logging

## 12. Delivery, operations, and job-ready workflows

- [x] Project layout, README, licensing, semantic versioning, changelog, architecture decisions
- [x] Containers: Dockerfile concepts, images, environment configuration, local reproducibility
- [x] CI/CD: test/lint/type-check/build stages, artifacts, deployment gates, rollback concepts
- [x] Cloud and serverless concepts: storage, databases, queues, functions, identity, configuration
- [x] Monitoring, metrics, tracing, alerting, on-call basics, incident-friendly logging
- [x] Linux/shell basics, environment management, process signals, scheduled jobs
- [x] Team workflow: issue tracking, agile delivery, pull requests, code review, technical communication

## 13. Specialisation pathways and integration projects

- [x] Automation and scripting: files, APIs, browser/task automation concepts, scheduling, resilience
- [x] Data engineering: CSV/JSON, SQL, pandas/NumPy basics, data quality, pipelines
- [x] Web/backend: REST APIs, authentication concepts, database-backed services, deployment
- [x] Testing/QA automation: test framework, fixtures, API/UI testing concepts, reporting
- [x] AI/ML integration: data preparation, model-service API boundaries, evaluation and monitoring concepts
- [x] Five progressive projects: CLI utility, data/file tool, API client, tested service, production-style capstone

## 14. Certification mapping and exam readiness

- [x] PCEP-30-02 objectives: computer programming basics, data types/evaluations, control flow, collections, functions/exceptions
- [x] PCAP-31-03 modules/packages objective block
- [x] PCAP-31-03 exceptions objective block
- [x] PCAP-31-03 strings objective block
- [x] PCAP-31-03 OOP objective block
- [x] PCAP-31-03 comprehensions/lambdas/closures/I-O objective block
- [x] PCPP-level extension topics: advanced OOP, GUI, networking, files/data processing, standards
- [x] Exam-style scenarios, code tracing, distractors, timed mock exams, weak-area remediation

## 15. Computer-science foundations an expert Python practitioner uses

- [x] Problem decomposition, specifications, preconditions/postconditions, invariants, and proofs by reasoning
- [x] Complexity analysis: Big-O/Theta/Omega, amortized analysis, time/space trade-offs, empirical benchmarking
- [x] Recursion trees, divide-and-conquer, backtracking, dynamic programming, greedy algorithms, randomized algorithms
- [x] Searching, sorting, hashing, heaps, trees, graphs, shortest paths, traversals, union-find, tries
- [x] Core data structures: arrays/lists, stacks, queues, dequeues, hash tables, linked structures, priority queues, trees, graphs
- [x] Discrete-math essentials: logic, sets, relations, functions, induction, counting, probability, modular arithmetic
- [x] Numerical reasoning: floating-point representation, precision/recall of calculations, numerical stability, reproducibility
- [x] Algorithm engineering: choose appropriate structures, measure real costs, identify bottlenecks, communicate trade-offs

## 16. Software design, architecture, and maintainable systems

- [x] Requirements discovery, user stories, acceptance criteria, modelling inputs/outputs/failure conditions
- [x] API contracts, domain modelling, boundaries, separation of concerns, cohesion/coupling, dependency inversion
- [x] Abstract data types, representation invariants, immutability, defensive copying, design by contract
- [x] Architecture styles: layered, modular monolith, client/server, event-driven, microservice trade-offs
- [x] Resilience patterns: retries, timeouts, circuit breakers, idempotency, rate limiting, graceful degradation
- [x] State machines, workflows, transactions, eventual consistency, message ordering, deduplication
- [x] Technical decision records, diagrams, documentation, code review, refactoring, backward compatibility
- [x] Ethical engineering: accessibility, privacy, data minimization, auditability, user safety, responsible automation

## 17. Python in scientific, data, and high-performance computing workflows

- [x] NumPy arrays, vectorization, broadcasting, views versus copies, dtype selection, random-number reproducibility
- [x] pandas-style tabular data concepts: indexing, joins, group operations, missing data, time series, data-quality checks
- [x] Plotting/communication concepts: select visual encodings, reproducible charts, misleading-chart pitfalls
- [x] Scientific methods: hypothesis, simulation, parameter sweeps, uncertainty, experimental records, reproducibility
- [x] Parallel and high-performance concepts: memory locality, vectorization, native extensions, profiling, distributed-compute boundaries
- [x] Interoperability with C/C++/Fortran, binary formats, array protocols, environment reproducibility

## 18. Interpreter implementation, extension, and embedding — advanced/expert

- [x] Tokenization, parsing, ASTs, compilation, bytecode, execution frames, symbol tables, import machinery
- [x] CPython object model, reference counting, cycle detection, garbage collector interfaces, weak references
- [x] Stable ABI, limited API, version compatibility, subinterpreter considerations, implementation-specific caveats
- [x] C/C++ extension modules: argument parsing, exception translation, reference ownership, module state, build/link concerns
- [x] Defining extension types, buffer protocol, capsules, callbacks, thread-state/GIL interaction
- [x] Embedding CPython in host applications: initialization, configuration, executing code safely, lifecycle and isolation
- [x] Alternative implementations and portability: CPython, PyPy, Jython and implementation-dependent behaviour

## 19. Security, supply chain, governance, and reliability at expert depth

- [x] Threat modelling Python applications: assets, trust boundaries, attack surface, abuse cases, mitigations
- [x] Authentication/authorization concepts, session/token handling, cryptography API boundaries, secure defaults
- [x] Secure dependency lifecycle: provenance, pinning, advisories, SBOM concepts, license review, upgrade strategy
- [x] Secure deserialization, templating, subprocesses, filesystem operations, SSRF, injection, unsafe reflection patterns
- [x] Privacy-by-design, retention, encryption boundaries, audit logs, incident handling, disclosure and patch workflow
- [x] Reliability engineering: SLOs/SLIs, capacity planning, load testing, chaos/failure testing concepts, post-incident learning

## 20. Expert practice and knowledge boundaries

- [x] Read and evaluate unfamiliar codebases, APIs, tracebacks, release notes, changelogs, deprecation notices, and migration guides
- [x] Version upgrades and compatibility testing; language-feature gates and feature detection
- [x] Open-source contribution workflow: issue reproduction, minimal fix, tests, documentation, review etiquette, release process
- [x] Teaching and technical leadership: explain trade-offs to beginners, peers, and nontechnical stakeholders
- [x] Know when Python is the wrong tool: CPU-bound numerical kernels, strict latency, mobile/native constraints, language/runtime interoperability choices
- [x] Specialist pathways map: backend, data engineering, ML, QA, automation, security, scientific computing, DevOps, GUI, embedded/IoT
- [x] Explicit non-goal boundary: the track teaches transferable concepts and one verified path per specialist domain; it does not claim to exhaust every third-party package or framework ever published

## Required evidence before checking an item off

- Original beginner explanation and why-it-matters context
- Verified syntax/example, expected result, and edge case
- At least one real-world usage example
- In-site guided exercise/lab with solution and explanation
- Common mistake/gotcha and best practice
- Source/objective mapping and last-reviewed date
- Associated project or capstone milestone where applicable

## Current gap result

**Mapping result (2026-09-27):** 136 of 136 checklist entries map to the 19 modular lessons recorded in `manifest.json`. Run `node tools/validate-python-modules.js` to verify required lesson fields and checklist coverage. It is a structural check only. Runtime execution, certification question depth, and expert-level evidence are tracked separately and are not inferred from this mapping.
