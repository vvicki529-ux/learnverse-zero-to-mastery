# Self-hosted Python runtime

The Python Run button uses the official Pyodide 314.0.7 core distribution. Its runtime files are in `vendor/pyodide/`; no CDN is used at learner runtime. The local Node smoke test passes; browser smoke testing on the published site remains required before claiming the feature is fully verified.

Official archive: `https://github.com/pyodide/pyodide/releases/download/314.0.7/pyodide-core-314.0.7.tar.bz2`

Official SHA-256: `2abdcc2e35208af406e07724cffa85bc582ced97e9028383ecf5462541393f95`

Required files after extraction: `pyodide.mjs`, `pyodide.asm.mjs`, `pyodide.asm.wasm`, `python_stdlib.zip`, and `pyodide-lock.json`. Pyodide is distributed under MPL-2.0; see the upstream `LICENSE` at `https://github.com/pyodide/pyodide/blob/314.0.7/LICENSE`. The core distribution provides Python and its standard library, not third-party packages such as NumPy, pandas, or pytest. Those need separately bundled compatible wheels.

Run code only that you trust. A browser worker protects responsiveness but is **not** a security boundary for hostile Python code. Each run gets a fresh worker, an 8-second execution limit, and displayed output is truncated to 8 KiB per stream. Browser memory use can still be significant.
