# Python — zero-to-mastery master topic checklist

**Track status:** Research and gap-mapping in progress. Do not mark the Python track complete until every required item below is `covered well` and has a self-contained lesson, verified example, in-site exercise/lab, common mistakes, project connection, and review date.

**Status legend:** `[x] covered well` · `[~] covered but shallow` · `[ ] missing`

**Research baseline:** Python language and standard-library documentation reviewed against Python 3.14 documentation; Python Institute PCEP-30-02 and PCAP-31-03 objectives reviewed; university beginner-programming progression and current Python engineering role requirements reviewed. PCEP-30-03 is scheduled for a future release; version-specific details must be rechecked before publishing certification material.

## 1. Environment, tools, and program execution

- [ ] Installing and selecting a Python version; CPython versus alternative implementations
- [ ] Interpreter, REPL, script execution, command-line arguments, exit status, `__main__`
- [ ] Editor/IDE workflow, formatter, linter, debugger, terminal, and reading tracebacks
- [ ] File paths, current working directory, encodings, newline differences, cross-platform behaviour
- [ ] Virtual environments, `venv`, activation, dependency isolation, reproducible environments
- [ ] Git fundamentals for Python projects: repository, commit, branch, ignore files, code review

## 2. Core syntax and program flow — PCEP foundation

- [~] Statements, expressions, indentation, comments, names, literals, keywords
- [~] Variables, assignment, rebinding, dynamic typing, object identity versus equality
- [~] Built-in scalar types: `None`, `bool`, `int`, `float`, `complex`, `str`, `bytes`
- [ ] Numeric operations, precedence, integer division, modulo, exponentiation, rounding, floating-point limits, `decimal` use cases
- [ ] Comparisons, truthiness, short-circuit logic, chained comparisons, `is` versus `==`
- [~] Input/output, `print()`, `input()`, conversion, formatting, f-strings
- [~] Conditional flow: `if`, `elif`, `else`, `match`/`case`, guards, structural pattern matching
- [~] Iteration: `for`, `while`, `range`, `break`, `continue`, `pass`, loop `else`
- [ ] Comprehensions and generator expressions; nesting, filters, readability trade-offs

## 3. Collections, text, and data modelling — PCEP/PCAP core

- [ ] Strings: indexing, slicing, immutability, Unicode, encodings, escape sequences, formatting, common methods
- [ ] Lists: creation, mutation, slicing, copying versus aliasing, methods, stacks/queues, nested lists
- [ ] Tuples: packing/unpacking, immutability, single-item tuple, named tuples
- [ ] Sets and frozensets: uniqueness, membership, set algebra, hashability
- [ ] Dictionaries: key/value design, lookup, iteration, views, defaults, merging, ordering, nested structures
- [ ] Sequence operations, iterable protocol, unpacking, starred expressions, `enumerate`, `zip`, `sorted`, `reversed`
- [ ] Hashability, mutability, shallow/deep copy, aliasing, default mutable argument trap
- [ ] Regular expressions: patterns, raw strings, groups, search/match/fullmatch, substitution, readability and safety
- [ ] JSON, CSV, and structured-data shapes; validation and schema thinking

## 4. Functions, scope, and functional techniques — PCEP/PCAP core

- [~] Defining/calling functions, parameters, arguments, `return`, `None`, docstrings
- [ ] Positional-only, positional-or-keyword, keyword-only, defaults, `*args`, `**kwargs`, argument unpacking
- [ ] LEGB scope, local/global/nonlocal names, closures, late binding, shadowing
- [ ] Recursion, base cases, stack limits, iteration alternatives
- [ ] First-class functions, lambdas, higher-order functions, `map`, `filter`, `functools`, decorators
- [ ] Generators, `yield`, `yield from`, iterators, lazy evaluation, iterator exhaustion
- [ ] Type annotations, `typing`, generics, protocols, `TypedDict`, `dataclass`, runtime versus static checking

## 5. Modules, packages, dependencies, and distribution — PCAP/production

- [ ] Imports, import forms, import-time effects, module cache, `sys.path`, `dir`, `__name__`
- [ ] User modules, packages, `__init__.py`, relative imports, namespace packages, public API design
- [ ] Standard modules: `math`, `random`, `statistics`, `datetime`, `pathlib`, `os`, `sys`, `collections`, `itertools`, `functools`
- [ ] Dependency management, `pip`, requirement/constraint files, lock files, dependency vulnerability awareness
- [ ] `pyproject.toml`, build backends, package metadata, wheels/sdists, versioning, publishing concepts
- [ ] Configuration management: environment variables, `argparse`, `configparser`, secrets boundaries

## 6. Errors, files, resources, and observability — PCAP/real-world

- [ ] Syntax errors versus exceptions, traceback reading, exception hierarchy
- [ ] `try`/`except`/`else`/`finally`, `raise`, chaining, assertions, custom exceptions, error boundaries
- [ ] File I/O: `open`, modes, encoding, text/binary, buffering, context managers, paths, atomic-write patterns
- [ ] Context managers and `with`; creating context managers where appropriate
- [ ] Serialization: `json`, CSV, pickle risks, data validation and untrusted input
- [ ] Logging levels, structured/contextual logging, handlers, formatters, log privacy
- [ ] Debugging: breakpoints, `pdb`, tracebacks, minimal reproducible examples

## 7. Object-oriented programming and Python data model — PCAP/advanced

- [ ] Classes, instances, methods, `self`, constructors, attributes, class versus instance variables
- [ ] Encapsulation conventions, properties, name mangling, `__dict__`, introspection
- [ ] Inheritance, composition, mixins, multiple inheritance, MRO, `super`, polymorphism
- [ ] Dunder methods: representation, comparison, arithmetic, container, context-manager, iterator protocols
- [ ] `dataclass`, enums, abstract base classes, protocols, design trade-offs
- [ ] Descriptors, decorators, metaclasses, class creation hooks — advanced/internals

## 8. Execution model, memory, performance, and internals

- [ ] Names, bindings, references, object lifetime, garbage collection, reference cycles, weak references
- [ ] Mutability, interning/caching caveats, copy semantics, memory profiling
- [ ] Bytecode, compilation, `.pyc`, import execution, frames, call stack, namespaces
- [ ] Algorithmic complexity, profiling, benchmarking, `timeit`, `cProfile`, performance trade-offs
- [ ] CPython GIL, implementation portability, when details are CPython-specific
- [ ] Async internals, event-loop concepts, cooperative scheduling, cancellation, backpressure

## 9. Concurrency, networking, and asynchronous programs

- [ ] Threads, locks, queues, races, deadlocks, thread-safe design, I/O-bound work
- [ ] Processes, multiprocessing, pickling constraints, pools, IPC, CPU-bound work
- [ ] `asyncio`: coroutines, `async`/`await`, tasks, gather, timeouts, cancellation, async context managers
- [ ] Sockets, HTTP concepts, REST APIs, requests, retries, idempotency, pagination, rate limits, error handling
- [ ] Webhooks, message queues, event-driven concepts, background workers

## 10. Databases, services, and application development

- [ ] SQL fundamentals from Python: parameterized queries, transactions, connection lifecycle, SQLite/PostgreSQL concepts
- [ ] ORM concepts, migrations, query performance, N+1 query problem
- [ ] API design and consumption: validation, authentication concepts, status codes, pagination, versioning
- [ ] Web-framework concepts: routing, request/response, templates, middleware, background work
- [ ] Framework survey and project labs: Flask/FastAPI/Django concepts; use one verified framework version per deep module
- [ ] Caching, queues, task scheduling, idempotency, distributed-system failure modes

## 11. Testing, code quality, and secure engineering

- [ ] Unit, integration, end-to-end, regression, property-based, and contract-test concepts
- [ ] `pytest`: test discovery, assertions, fixtures, parametrization, mocks, temporary files, coverage
- [ ] `unittest`, `unittest.mock`, test doubles, patching namespaces correctly
- [ ] Static analysis, formatting, linting, type checking, documentation, code review
- [ ] Security: input validation, injection risks, deserialization, path traversal, secrets, dependency risk, safe subprocess use
- [ ] Accessibility, reliability, error messages, internationalization, privacy-aware logging

## 12. Delivery, operations, and job-ready workflows

- [ ] Project layout, README, licensing, semantic versioning, changelog, architecture decisions
- [ ] Containers: Dockerfile concepts, images, environment configuration, local reproducibility
- [ ] CI/CD: test/lint/type-check/build stages, artifacts, deployment gates, rollback concepts
- [ ] Cloud and serverless concepts: storage, databases, queues, functions, identity, configuration
- [ ] Monitoring, metrics, tracing, alerting, on-call basics, incident-friendly logging
- [ ] Linux/shell basics, environment management, process signals, scheduled jobs
- [ ] Team workflow: issue tracking, agile delivery, pull requests, code review, technical communication

## 13. Specialisation pathways and integration projects

- [ ] Automation and scripting: files, APIs, browser/task automation concepts, scheduling, resilience
- [ ] Data engineering: CSV/JSON, SQL, pandas/NumPy basics, data quality, pipelines
- [ ] Web/backend: REST APIs, authentication concepts, database-backed services, deployment
- [ ] Testing/QA automation: test framework, fixtures, API/UI testing concepts, reporting
- [ ] AI/ML integration: data preparation, model-service API boundaries, evaluation and monitoring concepts
- [ ] Five progressive projects: CLI utility, data/file tool, API client, tested service, production-style capstone

## 14. Certification mapping and exam readiness

- [ ] PCEP-30-02 objectives: computer programming basics, data types/evaluations, control flow, collections, functions/exceptions
- [ ] PCAP-31-03 modules/packages objective block
- [ ] PCAP-31-03 exceptions objective block
- [ ] PCAP-31-03 strings objective block
- [ ] PCAP-31-03 OOP objective block
- [ ] PCAP-31-03 comprehensions/lambdas/closures/I-O objective block
- [ ] PCPP-level extension topics: advanced OOP, GUI, networking, files/data processing, standards
- [ ] Exam-style scenarios, code tracing, distractors, timed mock exams, weak-area remediation

## Required evidence before checking an item off

- Original beginner explanation and why-it-matters context
- Verified syntax/example, expected result, and edge case
- At least one real-world usage example
- In-site guided exercise/lab with solution and explanation
- Common mistake/gotcha and best practice
- Source/objective mapping and last-reviewed date
- Associated project or capstone milestone where applicable

## Current gap result

Only the broad foundation topic is present and is still **covered but shallow**. Every other item above is currently missing as an individually complete lesson/lab. Python must remain in this status until the checklist is converted into modular lesson files and every entry is verified complete.
