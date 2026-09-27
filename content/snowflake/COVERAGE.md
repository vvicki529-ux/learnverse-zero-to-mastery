# Snowflake coverage audit

**Audit started:** 2026-09-28  
**Status meanings:** `complete` requires a findable learner-facing lesson with explanation, example, mistakes, guided practice, and project connection. `shallow` means a topic is only named or has seed text. `missing` means no learner-facing lesson exists.

The previous one-row record hid the difference between a broad catalog label and a real course lesson. This is the working source of truth for the Snowflake rebuild, based on Snowflake platform documentation and SnowPro Core scope.

## Foundations

- [~] Architecture: cloud services, storage, virtual warehouses, account/region concepts — **shallow**
- [~] Snowsight workflow, databases, schemas, objects, roles, query history — **shallow**
- [~] SQL: filtering, joins, aggregation, windows, CTEs, set operations — **shallow**
- [~] Data types, NULL semantics, conversions, date/time — **shallow**
- [ ] DDL/DML/transactions, table types, constraints, views and secure views — **missing**

## Ingestion and transformation

- [~] Stages, file formats, COPY INTO, semi-structured data and FLATTEN — **shallow**
- [ ] Load validation/error handling, load metadata and duplicate-load behaviour — **missing**
- [ ] Snowpipe and Snowpipe Streaming: design, monitoring and recovery — **missing**
- [ ] File-format trade-offs, unloading, external locations and egress controls — **missing**
- [ ] Data quality, reconciliation, schema evolution, lineage and observability — **missing**

## Programming and automation

- [~] Streams, tasks, task graphs, Snowpark and Time Travel — **shallow**
- [ ] Dynamic tables, target lag, refresh modes, monitoring and failure recovery — **missing**
- [ ] Stored procedures, Snowflake Scripting, UDFs/UDTFs/UDAFs and testing — **missing**
- [ ] Snowpark Python packaging, deployment, debugging and secure dependencies — **missing**
- [ ] External functions and storage/API/notification/security integrations — **missing**

## Security, governance and sharing

- [~] RBAC, data governance and secure sharing — **shallow**
- [ ] Database roles, future grants, managed access schemas and role hierarchy design — **missing**
- [ ] Authentication, MFA/SSO/key-pair/OAuth concepts and network policies — **missing**
- [ ] Tags, classification, masking, row-access and other policy controls — **missing**
- [ ] Access history, audit investigations, reader accounts, listings, replication and failover — **missing**

## Performance, cost and internals

- [~] Warehouses, micro-partitions, query profile, clustering, search optimization and cost controls — **shallow**
- [ ] Query diagnostics: pruning, spilling, compilation/execution and concurrency — **missing**
- [ ] Result/warehouse/metadata cache behaviour and cache-safe testing — **missing**
- [ ] Query Acceleration, concurrency scaling, monitors, budgets and chargeback — **missing**
- [ ] Time Travel, zero-copy cloning, retention, Fail-safe and recovery design — **missing**

## Real-world and advanced platform

- [ ] Data-product design, CI/CD, environment promotion and operational runbooks — **missing**
- [ ] Iceberg tables, external volumes/catalogs, Native Apps and Container Services concepts — **missing**
- [ ] Cortex/AI governance and cost boundaries — **missing**
- [ ] Migration assessment, validation, cutover and rollback — **missing**
- [ ] Capstone: governed multi-team data product with ingestion, transformation, RBAC, quality, monitoring, cost controls and sharing — **missing**

## Current conclusion

The existing Snowflake catalog is an **early draft**. Only the architecture topic has expanded learner-facing content. Every item above remains shallow or missing until it has a dedicated, ordered lesson and a safe clearly labelled practice path.
