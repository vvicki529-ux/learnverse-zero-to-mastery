/* The generated index exposes every authored Python lesson in learning order. */
let pythonNavigationData;
let pythonNavigationLoading;

function renderPythonCourseOutline(holder, trackName) {
  const requestedHash = location.hash;
  holder.innerHTML = `<div class="outline-title">${esc(trackName)} course</div><p class="outline-intro">Loading the complete lesson list…</p>`;
  const load = pythonNavigationData
    ? Promise.resolve(pythonNavigationData)
    : (pythonNavigationLoading ||= fetch('content/python/navigation.json?v=pythonnav02')
        .then(response => { if (!response.ok) throw new Error('Python lesson index unavailable'); return response.json(); })
        .then(data => (pythonNavigationData = data)));
  load.then(data => {
    if (holder.dataset.track !== 'python' || location.hash !== requestedHash) return;
    const activeId = location.hash.startsWith('#python-module/') ? location.hash.slice('#python-module/'.length) : '';
    holder.innerHTML = `<div class="outline-title">${esc(trackName)} course</div><p class="outline-intro">${data.groups.reduce((sum, group) => sum + group.lessons.length, 0)} guided lessons · open a level to choose one.</p>${data.groups.map((group, groupIndex) => {
      const active = group.lessons.some(lesson => lesson.id === activeId);
      return `<details class="course-outline-group" ${active || (!activeId && groupIndex === 0) ? 'open' : ''}><summary>${esc(group.title)} <span class="outline-count">${group.lessons.length}</span><span aria-hidden="true">⌄</span></summary><div>${group.lessons.map((lesson, index) => `<a class="outline-lesson" href="#python-module/${esc(lesson.id)}" ${lesson.id === activeId ? 'aria-current="page"' : ''}><b>${index + 1}.</b><span>${esc(lesson.title)}</span></a>`).join('')}</div></details>`;
    }).join('')}`;
  }).catch(() => {
    if (holder.dataset.track !== 'python' || location.hash !== requestedHash) return;
    holder.innerHTML = `<div class="outline-title">${esc(trackName)} course</div><p class="outline-intro">The full lesson list could not load. <a href="#python-modules">Open the Python learning path</a>.</p>`;
    pythonNavigationLoading = null;
  });
}
