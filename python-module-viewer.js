/* Modular Python lesson viewer. Loads authored JSON files without changing legacy lessons. */
const pythonModuleBase = 'content/python/';
let pythonManifest;
let pythonRoadmap;
let pythonLegacyLabExplanations;
let pythonLegacyProjectConnections;
function renderPythonLabSimulation(module, section){
  const simulation=module.lab?.simulation;
  if(!simulation || !Array.isArray(simulation.choices) || !Number.isInteger(simulation.correctIndex)) return;
  const box=document.createElement('div');
  box.className='lab-simulation';
  const heading=document.createElement('h3');heading.textContent='Try the concept here';box.append(heading);
  const prompt=document.createElement('p');prompt.textContent=simulation.prompt;box.append(prompt);
  const choices=document.createElement('div');choices.className='lab-simulation-choices';
  const group='lab-simulation-'+module.id;
  simulation.choices.forEach((choice,index)=>{
    const label=document.createElement('label');label.style.display='block';label.style.margin='0.55rem 0';
    const radio=document.createElement('input');radio.type='radio';radio.name=group;radio.value=String(index);
    label.append(radio,document.createTextNode(' '+choice));choices.append(label);
  });
  box.append(choices);
  const button=document.createElement('button');button.type='button';button.className='secondary';button.textContent='Check my answer';box.append(button);
  const result=document.createElement('p');result.setAttribute('aria-live','polite');box.append(result);
  button.addEventListener('click',()=>{
    const picked=choices.querySelector('input:checked');
    if(!picked){result.textContent='Choose an answer first.';return;}
    const correct=Number(picked.value)===simulation.correctIndex;
    result.textContent=(correct?'Correct. ':'Not quite. ')+simulation.explanation;
  });
  section.append(box);
}
async function loadPythonManifest(){
  if(!pythonManifest) pythonManifest = await fetch(pythonModuleBase+'manifest.json?v=pythonrelease20261003').then(r=>{if(!r.ok)throw new Error('Python module manifest unavailable');return r.json()});
  return pythonManifest;
}
async function loadPythonRoadmap(){
  if(!pythonRoadmap) pythonRoadmap=await fetch(pythonModuleBase+'learning-roadmap.json?v=pythonroadmap01').then(r=>{if(!r.ok)throw new Error('Python learning roadmap unavailable');return r.json()});
  return pythonRoadmap;
}
async function loadPythonLegacyLabExplanations(){
  if(!pythonLegacyLabExplanations) pythonLegacyLabExplanations=await fetch(pythonModuleBase+'legacy-lab-explanations.json?v=pythonlegacy01').then(r=>{if(!r.ok)throw new Error('Python legacy lab explanations unavailable');return r.json()});
  return pythonLegacyLabExplanations;
}
async function loadPythonLegacyProjectConnections(){
  if(!pythonLegacyProjectConnections) pythonLegacyProjectConnections=await fetch(pythonModuleBase+'legacy-project-connections.json?v=pythonlegacy01').then(r=>{if(!r.ok)throw new Error('Python legacy project connections unavailable');return r.json()});
  return pythonLegacyProjectConnections;
}
function moduleCode(s){return esc(s).replace(/\b(from|import|print|for|in|if|else|return|Path|sys)\b/g,'<span class="code-keyword">$1</span>')}
function moduleList(items){return `<ul>${items.map(x=>`<li>${esc(typeof x==='string'?x:x.mistake||x)}</li>`).join('')}</ul>`}
function firstSentence(text){const match=text.match(/^.*?[.!?](?:\s|$)/);return match?match[0].trim():text}
function setupPythonLabEditor(module){
  const editor=out.querySelector('#moduleEditor');
  const lines=out.querySelector('.lab-first .lines');
  if(!editor||!lines)return ()=>{};
  const draftKey='learnverse-python-lab-v1:'+module.id;
  try{const draft=localStorage.getItem(draftKey);if(draft!==null)editor.value=draft}catch(_error){/* Private browsing can deny storage; editing still works. */}
  editor.setAttribute('aria-label','Practice code for '+module.title);
  const updateLines=()=>{const count=Math.max(1,editor.value.split('\n').length);lines.textContent=Array.from({length:count},(_unused,index)=>String(index+1)).join('\n')};
  const saveDraft=()=>{try{localStorage.setItem(draftKey,editor.value)}catch(_error){/* Do not block typing when storage is unavailable. */}};
  updateLines();
  editor.addEventListener('input',()=>{updateLines();saveDraft()});
  editor.addEventListener('scroll',()=>{lines.scrollTop=editor.scrollTop});
  editor.addEventListener('keydown',event=>{
    if(event.key!=='Tab'||event.ctrlKey||event.altKey||event.metaKey)return;
    event.preventDefault();
    const start=editor.selectionStart,end=editor.selectionEnd;
    editor.setRangeText('    ',start,end,'end');
    updateLines();saveDraft();
  });
  const controls=editor.closest('.editor')?.nextElementSibling;
  if(controls){
    const reset=document.createElement('button');reset.type='button';reset.className='secondary';reset.textContent='Reset starter code';
    reset.addEventListener('click',()=>{editor.value=module.lab.starterCode;updateLines();editor.scrollTop=0;lines.scrollTop=0;try{localStorage.removeItem(draftKey)}catch(_error){};editor.focus()});
    controls.append(' ',reset);
    const notice=document.createElement('p');notice.className='muted python-lab-runtime-note';notice.textContent='Your draft is saved on this device when storage is available. Run Python uses a locally bundled browser runtime for standard-library exercises. Some older lab notes describe the previous editor; OS services, subprocesses and unbundled packages still may not work here. Do not paste secrets or untrusted code.';
    controls.after(notice);
    if(typeof attachPythonRunButton==='function')attachPythonRunButton(module,editor,controls);
  }
  return updateLines;
}
async function showPythonModule(id){
  try{
    const manifest=await loadPythonManifest(),entry=manifest.modules.find(m=>m.id===id);if(!entry)throw new Error('Module not found');
    const [m,legacyLabExplanations,legacyProjectConnections]=await Promise.all([fetch(pythonModuleBase+entry.path+'?v=pythonrelease20261003').then(r=>{if(!r.ok)throw new Error('Lesson file unavailable');return r.json()}),loadPythonLegacyLabExplanations(),loadPythonLegacyProjectConnections()]);
    if(typeof m.projectConnection==='string') m.projectConnection=legacyProjectConnections[m.id]||{project:'Project connection',milestone:m.projectConnection,definitionOfDone:'Document the next usable milestone before continuing.'};
    const checks=Array.isArray(m.assessment)?m.assessment:(m.assessment?.questions||[]);
    // Legacy modules used { questions: [...] }; normalize before the shared template renders.
    m.assessment=checks;
    const answerText=q=>typeof q.answer==='number'&&q.choices?q.choices[q.answer]:q.answer;
    out.innerHTML=`<p class="crumb"><a href="#python-modules">← Python learning path</a></p><article class="panel lesson-reader modular-lesson"><div class="lesson-meta"><span class="badge">Learn one step at a time</span><span>Reviewed: ${esc(m.lastReviewed)}</span></div><h1>${esc(m.title)}</h1><p class="lesson-lead">${esc(firstSentence(m.whyItMatters))}</p><section class="start-here"><span class="badge">Start here · about 10 minutes</span><h2>First, understand the idea</h2><p>${esc(m.simpleExplanation)}</p><p class="analogy"><strong>Think of it like this:</strong> ${esc(m.mentalModel)}</p><h3>Your first goal</h3><p>${esc(m.outcomes[0])}</p></section><section class="lesson-section"><h2>See one small example</h2><p>Do not try to memorize this code. Read the explanation below it one point at a time.</p><p><strong>Example file:</strong> <code>${esc(m.workedExample.filename)}</code></p><pre><code>${moduleCode(m.workedExample.code)}</code></pre><h3>What this code is doing</h3>${moduleList(m.workedExample.explanation)}<p><strong>You should see:</strong></p><pre><code>${esc(m.workedExample.expectedOutput)}</code></pre><p class="safe-note"><strong>Small safe experiment:</strong> ${esc(m.workedExample.safeExperiment)}</p></section><section class="lesson-section lab-first"><h2>Now practise it yourself</h2><p><strong>${esc(m.lab.title)}</strong></p><p>${esc(m.lab.safety)}</p><ol>${m.lab.guidedSteps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><div class="editor"><div class="lines">1\n2\n3\n4\n5\n6\n7\n8</div><textarea id="moduleEditor" spellcheck="false">${esc(m.lab.starterCode)}</textarea></div><p><button class="secondary" id="moduleHint">I need a hint</button> <button class="secondary" id="moduleChecks">Check my approach</button> <button class="secondary" id="moduleSolution">Show the answer</button></p><div class="console" id="moduleConsole">Try Step 1 first. If you get stuck, ask for one hint—not the whole solution.</div></section><section class="lesson-section"><h2>Quick check</h2>${m.assessment.map((q,i)=>`<details><summary>${i+1}. ${esc(q.question)}</summary><p><strong>Answer:</strong> ${esc(q.answer)}</p><p>${esc(q.explanation)}</p></details>`).join('')}</section><details class="deeper-learning"><summary>Go deeper when you are ready</summary><section class="lesson-section"><h2>Why this is used at work</h2><h3>${esc(m.realWorldExample.scenario)}</h3><p><strong>What can go wrong:</strong> ${esc(m.realWorldExample.riskWithoutSetup)}</p><p><strong>A good approach:</strong> ${esc(m.realWorldExample.professionalApproach)}</p></section><section class="lesson-section"><h2>More steps to follow</h2><ol>${m.procedure.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></section><section class="lesson-section"><h2>Common beginner mistakes</h2>${m.commonMistakes.map(x=>`<article class="mistake"><h3>${esc(x.mistake)}</h3><p><strong>Why:</strong> ${esc(x.why)}</p><p><strong>Try this instead:</strong> ${esc(x.avoid)}</p></article>`).join('')}</section><section class="lesson-section"><h2>Build toward a project</h2><h3>${esc(m.projectConnection.project)}</h3><p>${esc(m.projectConnection.milestone)}</p><p><strong>You are finished when:</strong> ${esc(m.projectConnection.definitionOfDone)}</p></section></details><footer class="lesson-source"><strong>Lesson sources:</strong> ${m.sources.map(esc).join('; ')}.</footer></article>`;
    setTimeout(()=>{const practiceSection=out.querySelector('.lab-first');if(!practiceSection)return;renderPythonLabSimulation(m,practiceSection);if(!out.querySelector('.software-howto')&&typeof softwareGuideHTML==='function')practiceSection.insertAdjacentHTML('beforebegin',softwareGuideHTML('python'));if(!out.querySelector('.project-preview'))practiceSection.insertAdjacentHTML('beforebegin',`<section class="lesson-section project-preview"><span class="software-step-number">Build toward a real project</span><h2>${esc(m.projectConnection.project)}</h2><p><strong>Your next milestone:</strong> ${esc(m.projectConnection.milestone)}</p><p><strong>You are ready when:</strong> ${esc(m.projectConnection.definitionOfDone)}</p></section>`)},0);
    const updateLabLines=setupPythonLabEditor(m);
    let hint=0;$('#moduleHint').onclick=()=>{$('#moduleConsole').textContent='Hint: '+m.lab.hints[Math.min(hint++,m.lab.hints.length-1)]};$('#moduleChecks').onclick=()=>{$('#moduleConsole').textContent='Self-check:\n'+m.lab.checks.map(x=>'• '+x).join('\n')};$('#moduleSolution').onclick=()=>{$('#moduleEditor').value=m.lab.solution;updateLabLines();const explanation=m.lab.solutionExplanation||legacyLabExplanations[m.id]||'Compare it with your attempt one line at a time. State what each line receives, changes, returns, or checks before moving on.';$('#moduleConsole').textContent='Solution loaded.\n\nWhy this works: '+explanation};
  }catch(error){out.innerHTML=`<section class="panel"><h1>Python lesson unavailable</h1><p>${esc(error.message)}</p><a class="primary" href="#track/python">Return to Python</a></section>`}
}
async function showPythonModules(){try{const [manifest,roadmap]=await Promise.all([loadPythonManifest(),loadPythonRoadmap()]);const modules=Object.fromEntries(manifest.modules.map(m=>[m.id,m]));const mapped=new Set(roadmap.stages.map(s=>s.module));const focused=manifest.modules.filter(m=>!mapped.has(m.id));out.innerHTML=`<p class="crumb"><a href="#track/python">← Python curriculum</a></p><section class="hero"><span class="badge">Python made simple</span><h1>Learn Python from first program to professional projects.</h1><p>${esc(roadmap.intro)}</p><p><a class="primary" href="#python-module/${esc(roadmap.stages[0].module)}">Start at Step 1 →</a></p></section><section class="panel learning-order"><h2>Complete Python learning path</h2><p>There are ${roadmap.stages.length} ordered stages. Open any stage to see every topic and its aligned mini-project. Then open the guided lesson for the beginner explanation, worked example, practice, and quick check.</p><div class="roadmap-stages">${roadmap.stages.map((stage,index)=>`<details class="roadmap-stage" ${index===0?'open':''}><summary><span class="badge">Stage ${index+1}</span><strong>${esc(stage.title)}</strong><span class="roadmap-count">${stage.topics.length} topics</span></summary><div class="roadmap-body"><h3>Topics in this stage</h3><ul>${stage.topics.map(topic=>`<li>${esc(topic)}</li>`).join('')}</ul><article class="project-preview"><span class="software-step-number">Build something</span><h3>${esc(stage.project.name)}</h3><p>${esc(stage.project.build)}</p></article><a class="primary" href="#python-module/${esc(stage.module)}">Open the guided lesson →</a>${modules[stage.module]?` <span class="muted">Lesson ready</span>`:''}</div></details>`).join('')}</div></section><section class="panel"><h2>Build one connected project portfolio</h2><p>Each stage contributes to a practical portfolio. Complete them in order so later projects reuse skills from earlier ones.</p><ol>${roadmap.projectArc.map(project=>`<li>${esc(project)}</li>`).join('')}</ol></section>${focused.length?`<section class="panel learning-order"><h2>Focused topic lessons</h2><p>Use these short lessons when you want to master one idea before continuing with its wider stage.</p><div class="grid">${focused.map(m=>`<article class="card"><span class="badge">Focused foundation</span><h3>${esc(m.id.replaceAll('-',' '))}</h3><p>One concept, explained simply with an example, practice, and quick check.</p><a class="primary" href="#python-module/${esc(m.id)}">Open lesson →</a></article>`).join('')}</div></section>`:''}<section class="panel"><h2>How to use this path</h2><ol><li>Open the next stage in order.</li><li>Read the plain-language idea before looking at code.</li><li>Follow the guided practice and use the hint only when needed.</li><li>Complete the stage project before moving on.</li></ol><p class="lesson-source"><strong>Coverage source:</strong> ${esc(roadmap.sourceNote)}</p></section>`}catch(error){out.innerHTML=`<section class="panel"><h1>Python lessons are unavailable</h1><p>${esc(error.message)}</p></section>`}}
async function showPythonModulesOrganized(){
  try{
    const [manifest,roadmap]=await Promise.all([loadPythonManifest(),loadPythonRoadmap()]);
    const modules=Object.fromEntries(manifest.modules.map(m=>[m.id,m]));
    const mapped=new Set(roadmap.stages.map(s=>s.module));
    const levelOrder=['foundations','core','intermediate','advanced','production','expert','real-world'];
    const levelName={foundations:'Foundations',core:'Core programming',intermediate:'Intermediate engineering',advanced:'Advanced Python',production:'Production Python',expert:'Expert and internals','real-world':'Real-world projects'};
    const focused=manifest.modules.filter(m=>!mapped.has(m.id));
    const focusedByLevel=levelOrder.map(level=>({level,items:focused.filter(m=>m.level===level)})).filter(group=>group.items.length);
    const stageCards=roadmap.stages.map((stage,index)=>`<details class="roadmap-stage" ${index===0?'open':''}><summary><span class="badge">Stage ${index+1}</span><strong>${esc(stage.title)}</strong><span class="roadmap-count">${stage.topics.length} topics</span></summary><div class="roadmap-body"><h3>Topics in this stage</h3><ul>${stage.topics.map(topic=>`<li>${esc(topic)}</li>`).join('')}</ul><article class="project-preview"><span class="software-step-number">Build something</span><h3>${esc(stage.project.name)}</h3><p>${esc(stage.project.build)}</p></article><a class="primary" href="#python-module/${esc(stage.module)}">Open the guided lesson →</a>${modules[stage.module]?` <span class="muted">Lesson ready</span>`:''}</div></details>`).join('');
    const focusedCards=focusedByLevel.map((group,index)=>`<details class="python-topic-group" ${index===0?'open':''}><summary><strong>${esc(levelName[group.level])}</strong><span class="roadmap-count python-group-count">${group.items.length} lessons</span></summary><div class="python-topic-list">${group.items.map(m=>`<article class="python-topic-item" data-search="${esc([m.id,...(m.masterChecklist||[])].join(' ').toLowerCase())}"><a href="#python-module/${esc(m.id)}">${esc(m.id.replaceAll('-',' '))}</a><span class="muted">Explanation · example · practice · check</span></article>`).join('')}</div></details>`).join('');
    out.innerHTML=`<p class="crumb"><a href="#track/python">← Python curriculum</a></p><section class="hero"><span class="badge">Python made simple</span><h1>Learn Python from first program to professional projects.</h1><p>${esc(roadmap.intro)}</p><p><a class="primary" href="#python-module/${esc(roadmap.stages[0].module)}">Start at Step 1 →</a></p></section><section class="panel learning-order"><h2>Complete Python learning path</h2><p>Follow the ${roadmap.stages.length} stages in order. Each stage introduces its topics, a project, and a guided lesson.</p><div class="roadmap-stages">${stageCards}</div></section><section class="panel"><h2>Build one connected project portfolio</h2><p>Each stage contributes to a practical portfolio. Complete them in order so later projects reuse skills from earlier ones.</p><ol>${roadmap.projectArc.map(project=>`<li>${esc(project)}</li>`).join('')}</ol></section>${focusedCards?`<section class="panel learning-order"><h2>Master individual Python topics</h2><p>Open a level or search for a specific skill. The main stages remain the recommended beginner order.</p><label class="python-topic-search-label" for="pythonTopicSearch">Find a Python lesson</label><input id="pythonTopicSearch" type="search" placeholder="Try testing, packages, SQL, async…" autocomplete="off"><p id="pythonTopicResults" class="muted" role="status" aria-live="polite">${focused.length} focused lessons across ${focusedByLevel.length} levels</p>${focusedCards}</section>`:''}<section class="panel"><h2>How to use this path</h2><ol><li>Open the next stage in order.</li><li>Read the plain-language idea before looking at code.</li><li>Follow the guided practice and use a hint only when needed.</li><li>Complete the stage project before moving on.</li></ol><p class="lesson-source"><strong>Coverage source:</strong> ${esc(roadmap.sourceNote)}</p></section>`;
    const topicSearch=out.querySelector('#pythonTopicSearch');
    if(topicSearch)topicSearch.addEventListener('input',()=>{
      const terms=topicSearch.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      let visible=0;
      out.querySelectorAll('.python-topic-group').forEach(group=>{
        let groupVisible=0;
        group.querySelectorAll('.python-topic-item').forEach(item=>{
          const matches=terms.every(term=>item.dataset.search.includes(term));
          item.hidden=!matches;
          if(matches){visible++;groupVisible++}
        });
        group.hidden=groupVisible===0;
        group.querySelector('.python-group-count').textContent=`${groupVisible} ${groupVisible===1?'lesson':'lessons'}`;
        if(terms.length&&groupVisible)group.open=true;
      });
      out.querySelector('#pythonTopicResults').textContent=visible?`${visible} ${visible===1?'lesson':'lessons'} found`:'No focused lesson matches yet. Try a shorter term or open a main stage above.';
    });
  }catch(error){out.innerHTML=`<section class="panel"><h1>Python lessons are unavailable</h1><p>${esc(error.message)}</p></section>`}
}
function pythonModuleRoute(){const p=location.hash.slice(1).split('/');if(p[0]==='python-module'&&p[1])showPythonModule(p[1]);else if(p[0]==='python-modules')showPythonModulesOrganized()}
window.addEventListener('hashchange',pythonModuleRoute);
new MutationObserver(()=>{if(location.hash.startsWith('#track/python')&&!document.querySelector('[data-python-module]')){const start=$('#startTheory');if(start)start.insertAdjacentHTML('afterend',' <a class="secondary" data-python-module href="#python-modules">Open verified Python modules</a>')}}).observe(document.getElementById('app'),{childList:true,subtree:true});
pythonModuleRoute();
