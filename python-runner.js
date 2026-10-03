// A fresh worker per run keeps the lesson editor responsive and avoids state leaking between runs.
function attachPythonRunButton(module, editor, controls) {
  if (!controls) return;
  const output = document.querySelector('#moduleConsole');
  const run = document.createElement('button');
  run.type = 'button';
  run.className = 'primary';
  run.textContent = 'Run Python';
  const stop = document.createElement('button');
  stop.type = 'button';
  stop.className = 'secondary';
  stop.textContent = 'Stop';
  stop.disabled = true;
  const input = document.createElement('textarea');
  input.className = 'python-stdin';
  input.rows = 2;
  input.maxLength = 10000;
  input.placeholder = 'Optional input: one line per input() call';
  input.setAttribute('aria-label', 'Input for Python program');
  controls.prepend(run, ' ', stop, document.createElement('br'), input);
  let worker = null;
  let timer = null;
  const finish = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    if (worker) worker.terminate();
    worker = null;
    run.disabled = false;
    stop.disabled = true;
  };
  stop.addEventListener('click', () => {
    finish();
    output.textContent = 'Run stopped. No result was saved.';
  });
  run.addEventListener('click', () => {
    if (worker) return;
    if (editor.value.length > 100000) {
      output.textContent = 'This draft is too long to run (100,000 character limit).';
      return;
    }
    if (location.protocol === 'file:') {
      output.textContent = 'Python needs a local web server or the published site. It cannot load its runtime from a file:// page.';
      return;
    }
    run.disabled = true;
    stop.disabled = false;
    output.textContent = 'Loading the local Python runtime…';
    try {
      worker = new Worker('python-runner-worker.mjs', {type: 'module'});
    } catch (error) {
      finish();
      output.textContent = `Python could not start: ${error.message}`;
      return;
    }
    timer = setTimeout(() => {
      finish();
      output.textContent = 'Python runtime did not load in 30 seconds. Check that vendor/pyodide contains the bundled runtime files.';
    }, 30000);
    worker.onerror = () => {
      finish();
      output.textContent = 'Python runtime is missing or failed to load. The self-hosted Pyodide files must be installed in vendor/pyodide.';
    };
    worker.onmessage = ({data}) => {
      if (data?.type === 'init-error') {
        finish();
        output.textContent = `Python runtime could not load: ${data.message}`;
      } else if (data?.type === 'ready') {
        clearTimeout(timer);
        output.textContent = 'Running your Python code…';
        timer = setTimeout(() => {
          finish();
          output.textContent = 'Stopped after 8 seconds. Check for an infinite loop or slow operation.';
        }, 8000);
        worker.postMessage({type: 'run', code: editor.value, stdin: input.value});
      } else if (data?.type === 'result') {
        finish();
        const stdout = data.stdout || '(no output)';
        output.textContent = `Exit code: ${data.exitCode}\nOutput:\n${stdout}${data.stderr ? `\nErrors:\n${data.stderr}` : ''}`;
      }
    };
  });
  return finish;
}
