const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..','content'),catalog=JSON.parse(fs.readFileSync(path.join(root,'catalog.json')));
let errors=[]; for(const track of catalog.tracks){const coverage=path.join(root,track.id,'COVERAGE.md');if(!fs.existsSync(coverage))errors.push(`${track.id}: missing COVERAGE.md`);for(const level of track.levels){if(!level.topics.length)continue;for(const topic of level.topics)if(!topic.labs||topic.labs.length<3)errors.push(`${track.id}/${level.id}/${topic.id}: fewer than 3 labs`);}}
if(errors.length){console.error(errors.join('\n'));process.exit(1)} console.log(`Coverage structure valid for ${catalog.tracks.length} tracks.`);
