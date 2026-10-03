// Runs learner-authored Python in a disposable worker using only self-hosted Pyodide assets.
import { loadPyodide } from './vendor/pyodide/pyodide.mjs';

let pyodide;
try {
  const runtimeBase = typeof process === 'undefined' ? new URL('./vendor/pyodide/', import.meta.url).href : './vendor/pyodide/';
  pyodide = await loadPyodide({indexURL: runtimeBase, fullStdLib: false});
  self.postMessage({type: 'ready'});
} catch (error) {
  self.postMessage({type: 'init-error', message: String(error?.message || error)});
}

self.onmessage = async ({data}) => {
  if (!pyodide || data?.type !== 'run') return;
  const code = String(data.code || '').slice(0, 100000);
  const stdin = String(data.stdin || '').slice(0, 10000);
  // JSON encoding creates Python string literals without interpolating learner code into syntax.
  const wrapper = `import contextlib, io, json, sys, traceback\n` +
    `source = ${JSON.stringify(code)}\n` +
    `input_text = ${JSON.stringify(stdin)}\n` +
    `output = io.StringIO()\nerrors = io.StringIO()\n` +
    `old_stdin = sys.stdin\nsys.stdin = io.StringIO(input_text)\n` +
    `exit_code = 0\n` +
    `try:\n` +
    `    with contextlib.redirect_stdout(output), contextlib.redirect_stderr(errors):\n` +
    `        try:\n` +
    `            exec(compile(source, '<lesson>', 'exec'), {'__name__': '__main__'})\n` +
    `        except BaseException:\n` +
    `            traceback.print_exc()\n` +
    `            exit_code = 1\n` +
    `finally:\n` +
    `    sys.stdin = old_stdin\n` +
    `json.dumps({'stdout': output.getvalue()[:8192], 'stderr': errors.getvalue()[:8192], 'exitCode': exit_code})`;
  try {
    const result = JSON.parse(await pyodide.runPythonAsync(wrapper));
    self.postMessage({type: 'result', ...result});
  } catch (error) {
    self.postMessage({type: 'result', stdout: '', stderr: String(error?.message || error), exitCode: 1});
  }
};
