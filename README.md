# LearnVerse Zero to Mastery

This additive application is served from `/mastery/` by the project-root `serve.js`. It does not alter the existing certification app; the Certification navigation item routes internally to `../index.html`.

## Run

From the parent project folder run `node serve.js`, then open `http://localhost:8080/mastery/`.

## Runner status

The included editor and lab simulator work fully offline and enforce no network access. It intentionally does **not** claim to execute Python, SQL, Spark, TensorFlow, or real security tooling. Those local runtimes require substantial separately bundled vendor assets or local containers that are not currently present in this project. Before enabling them, bundle and validate their licenses and assets under `mastery/vendor/` or add an optional isolated local backend. Ethical-hacking exercises must remain self-hosted, isolated, and explicitly authorized.

## Content model

`content/catalog.json` is the dashboard index. Track-level `COVERAGE.md` files record source-area coverage. Add detailed topic data below `content/<track>/<level>/<topic>/`, including a lesson document and three lab definitions. Run `node mastery/tools/check-coverage.js` to validate seeded explicit labs.
