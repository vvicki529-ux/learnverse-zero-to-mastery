# Full curriculum expansion progress

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

Build a generic modular lesson renderer for the five non-Python tracks (or extend the existing Python module renderer safely), then create one JSON lesson file per audited topic so lessons are searchable, ordered, and fully learner-facing rather than stored as broad seed cards. Start with Snowflake: `COPY INTO` load validation and semi-structured JSON/Parquet.

## Validation limitation

The static project currently has guided practice editors, not bundled runtimes for Python, Snowflake, Databricks, or security simulations. Do not claim labs execute code until runners and tests are actually bundled and validated.
