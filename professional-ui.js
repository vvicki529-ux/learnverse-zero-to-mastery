/* Polished dashboard layer: keeps the existing tracks, content, routes, and local progress model. */
const trackBenefits={python:'Build automation, APIs, data tools, and reliable software.',snowflake:'Model, govern, transform, and share cloud data.',databricks:'Engineer pipelines and production-scale analytics.', 'ethical-hacking':'Assess authorized systems and produce remediation evidence.','cyber-security':'Protect identities, systems, data, and operations.','ai-ml':'Create, evaluate, and operate responsible ML products.'};
function home(){
  current=null;
  const total=catalog.tracks.reduce((n,t)=>n+t.levels.length,0);
  const done=catalog.tracks.reduce((n,t)=>n+progress(t.id).length,0);
  const pct=total?Math.round(done/total*100):0;
  out.innerHTML=`<section class="hero"><span class="badge">Professional learning workspace</span><h1>Build real skills.<br>Understand every step.</h1><p>Choose a track, learn concepts in a clear order, practise in guided labs, and turn small projects into one unified capstone.</p><div class="grid"><div><strong>${done} / ${total}</strong><br><small>level checkpoints completed</small></div><div><strong>${pct}%</strong><br><small>overall progress</small></div><div><strong>${catalog.tracks.length}</strong><br><small>learning tracks</small></div></div></section><section class="panel"><span class="badge">Recommended next lesson</span><h2>${nextLesson()}</h2><p class="muted">Start with theory, then work through examples, guided labs, mini projects, and a short checkpoint.</p></section><h2>Choose your learning track</h2><div class="grid">${catalog.tracks.map(t=>{
    const complete=progress(t.id).length;
    const p=Math.round(complete/t.levels.length*100);
    const scope=t.id==='python'
      ? '<span data-python-count>Loading guided lesson count…</span>'
      : `${t.levels.reduce((n,l)=>n+l.topics.length,0)} mapped topics · theory, labs, projects`;
    return `<article class="card course" data-track="${t.id}"><span class="badge">${esc(t.prerequisites)}</span><h2>${esc(t.name)}</h2><p>${esc(trackBenefits[t.id]||t.summary)}</p><p><strong>${complete}/${t.levels.length} levels completed</strong></p><div class="meter"><i style="width:${p}%"></i></div><p class="muted">${scope}</p><button class="secondary">Continue learning →</button></article>`;
  }).join('')}</div>`;
  document.querySelectorAll('[data-track]').forEach(x=>x.onclick=()=>location.hash='track/'+x.dataset.track);
  const pythonCount=out.querySelector('[data-python-count]');
  if(pythonCount){
    fetch('content/python/navigation.json?v=home-count01')
      .then(response=>{if(!response.ok)throw new Error('Lesson index unavailable');return response.json()})
      .then(data=>{
        const count=data.groups.reduce((sum,group)=>sum+group.lessons.length,0);
        if(pythonCount.isConnected)pythonCount.textContent=`${count} guided lessons · theory, labs, projects`;
      })
      .catch(()=>{if(pythonCount.isConnected)pythonCount.textContent='Guided Python lessons · open the track to browse';});
  }
}
