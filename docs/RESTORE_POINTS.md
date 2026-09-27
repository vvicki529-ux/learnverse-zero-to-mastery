# Restore points

## Before reference-driven expansion

Tag: `backup-before-reference-expansion-20260928`  
Commit: `5867ddc226950232b92e69b26a187ceaf6e4ea8d`  
Meaning: the published project state immediately before the user supplied external curriculum-reference links on 2026-09-28.

## Safe restore procedure

Do not delete newer work to inspect this version. First create a new branch from the tag:

```powershell
git switch -c restore-review backup-before-reference-expansion-20260928
```

Review and test that branch. If it is the version to publish, merge or fast-forward it only after saving the newer branch state. The tag is pushed to the remote repository, so it remains available even if the local checkout changes.

