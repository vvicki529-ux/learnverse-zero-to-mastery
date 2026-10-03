# LearnVerse Zero to Mastery

This additive application is served from `/mastery/` by the project-root `serve.js`. It does not alter the existing certification app; the Certification navigation item routes internally to `../index.html`.

## Run

From the parent project folder run `node serve.js`, then open `http://localhost:8080/mastery/`.

## Runner status

The Python lesson editor has a **Run Python** button backed by the self-hosted Pyodide core distribution in `vendor/pyodide/`. Its files load from this project, not from a CDN. A disposable module worker keeps the page responsive, captures output and errors, accepts optional text input, and stops a run after eight seconds. The Node runtime smoke test passes; test the actual published browser UI before claiming full browser verification. This worker is **not a security sandbox**: run only code you trust and never paste secrets. Some lessons require packages or OS services absent from the core browser runtime. SQL, Spark, TensorFlow and real security tooling remain guided/simulated, not executable. Ethical-hacking exercises must remain self-hosted, isolated and authorized.

## Content model

`content/catalog.json` is the dashboard index. Track-level `COVERAGE.md` files record source-area coverage. Add detailed topic data below `content/<track>/<level>/<topic>/`, including a lesson document and three lab definitions. Run `node mastery/tools/check-coverage.js` to validate seeded explicit labs.
