const projects = [
  {
    id:'water-digital-twin', featured:true, order:'01', category:'digital-twin', categoryLabel:'Digital Twin',
    title:'Water Filtration Digital Twin', subtitle:'IoT-connected monitoring, prediction & What-If analysis', image:'assets/images/water-digital-twin.webp',
    tags:['Unity','IoT','Sensors','Predictive Analytics'],
    summary:'A physical–digital water-treatment prototype that synchronizes sensor data with a 3D filtration facility, live process trends, predictive outputs and scenario analysis.',
    problem:'Move beyond a static dashboard and make a laboratory-scale water system understandable as a connected operational model.',
    how:['Physical water prototype and sensors feed changing process conditions.','Unity visualizes temperature, contamination, pressure and flow in spatial context.','A predictive result and What-If module let users compare hypothetical operating scenarios.'],
    stack:['Unity','Embedded electronics','Sensors / IoT','Real-time data visualization','Predictive logic'],
    demo:'https://drive.google.com/file/d/1d4HFeNVNijgokx9x6kFzO_KTieO0Z__O/view?usp=drivesdk'
  },
  {
    id:'bouhel', featured:true, order:'02', category:'phygital', categories:['phygital','games'], categoryLabel:'Phygital / VR Game',
    title:'Bouhel Chronicles', subtitle:'Real-world recycling becomes in-game value', image:'assets/images/bouhel.webp',
    tags:['VR','IoT','Gamification','Embedded Systems'],
    summary:'A phygital VR sustainability experience where a smart physical recycling bin can identify a player and turn a real recycling action into virtual rewards and progression.',
    problem:'Make sustainability behavior part of the game loop instead of leaving it as a message outside the experience.',
    how:['Players register and explore a stylized VR world with currency, shops and challenges.','A physical smart bin uses a keypad, display and embedded electronics for player identification.','The physical recycling event connects back to the digital reward economy.'],
    stack:['Unity VR','Embedded electronics','Identity logic','Game economy','Phygital interaction']
  },
  {
    id:'petroleum-vr', featured:true, order:'03', category:'xr', categoryLabel:'Industrial VR',
    title:'Petroleum Machinery Training VR', subtitle:'Refinery exploration, equipment inspection & process training', image:'assets/images/petroleum-vr.webp',
    tags:['VR','Oil & Gas','Training','Process Engineering'],
    summary:'An immersive petroleum-engineering platform combining a refinery environment, machinery inspection, contextual technical information, heat-exchanger calculations and a VR laboratory.',
    problem:'Give learners spatial access to complex oil-and-gas assets that are expensive, hazardous or impractical to inspect during early training.',
    how:['Navigate a human-scale refinery and industrial workshop.','Inspect valves, pumps, pumpjacks, vessels and heat-exchange equipment in 3D.','Run co-current/counter-current exchanger calculations inside the training environment.'],
    stack:['Unity','VR interaction','3D industrial assets','Engineering calculations','Training UX'],
    demo:'https://drive.google.com/file/d/1h0nQuy6IdPf7ZieaZs6xcEsGjwxCMLSi/view?usp=drivesdk'
  },
  {
    id:'blue', featured:true, order:'04', category:'games', categoryLabel:'Serious Game',
    title:'The Blue: Village Chronicles', subtitle:'Award-winning water conservation adventure', image:'assets/images/blue-village.webp',
    tags:['Serious Game','Sustainability','Unity','Gamification'],
    summary:'A 3D educational adventure where players help a village overcome a water crisis through exploration, NPC quests, infrastructure puzzles, mini-games and water-treatment learning.',
    problem:'Turn water conservation and treatment concepts into an experience children can explore rather than a lesson they only read.',
    how:['Players explore a 3D village and receive missions from residents.','Puzzles cover water infrastructure, collection, treatment and molecular concepts.','A companion educational book extends selected quests into a phygital learning loop.'],
    stack:['Unity','Quest systems','Mini-games','Environmental storytelling','Educational design'],
    demo:'https://drive.google.com/file/d/1gxaRQZdI3goAZIlFNpO3a-pkiQNB7xPr/view?usp=drivesdk',
    public:'https://dt-studio.itch.io/the-blue-village-chronicles'
  },
  {
    id:'process-simulator', featured:true, order:'05', category:'simulation', categoryLabel:'Engineering Simulation',
    title:'Process Engineering Simulator', subtitle:'Interactive unit operations, thermodynamics & reporting', image:'assets/images/process-engineering.webp',
    tags:['Process Simulation','Peng–Robinson','Data Export','3D'],
    summary:'A 3D process-engineering application integrating feed, thermal equipment, pump and tank models with adjustable operating parameters, plots, calculations and exported engineering results.',
    problem:'Connect thermodynamics, fluid mechanics, equipment behavior and process visualization in one interactive learning workflow.',
    how:['Configure feed conditions and unit-operation parameters.','Run thermodynamic and equipment calculations using a Peng–Robinson framework.','Visualize profiles and export structured results plus an automatically generated report.'],
    stack:['Unity','C#','Thermodynamic modelling','Process calculations','Excel / PDF export'],
    demo:'https://drive.google.com/file/d/1h7NFCLBXI25a83VTjsFRonDQ5lM_jmhO/view?usp=drivesdk'
  },
  {
    id:'ar-chemical', featured:true, order:'06', category:'phygital', categoryLabel:'Augmented Reality',
    title:'AR Chemical Reactions', subtitle:'Physical element cards become interactive chemistry', image:'assets/images/ar-chemical.webp',
    tags:['AR','Vuforia','Chemistry','Tangible UI'],
    summary:'A marker-based chemistry experience where physical element cards trigger 3D atoms and molecules, and compatible cards can be combined into compounds such as NaCl.',
    problem:'Make abstract chemical symbols and molecular relationships tangible for learners.',
    how:['The camera recognizes printed element and molecule targets.','3D chemical information is anchored directly to each card.','Supported card combinations trigger compound formation and a visual reaction/fusion state.'],
    stack:['Unity','Vuforia','Image tracking','3D molecular visualization'],
    demo:'https://drive.google.com/file/d/1gnA7JLUUUO6VXxSokxnFjRj62HEVWAIj/view?usp=drivesdk'
  },
  {id:'tank-control',category:'digital-twin',categoryLabel:'Digital Twin',title:'Storage Tank Control Digital Twin',subtitle:'Unity–LabVIEW process-control co-simulation',image:'assets/images/tank-control.webp',tags:['Unity','LabVIEW','Process Control'],summary:'A 3D storage-tank interface driven by external LabVIEW control signals, visualizing setpoint, process variable, level-control-valve output, liquid level and trends.',stack:['Unity','LabVIEW','Port communication','Control loops']},
  {id:'virtual-refinery',category:'xr',categoryLabel:'Industrial 3D',title:'Virtual Refinery',subtitle:'Human-scale process-plant familiarization',image:'assets/images/virtual-refinery.webp',tags:['Oil & Gas','3D Environment','Training'],summary:'A large-scale virtual refinery for navigating columns, vessels, pipe racks, tanks and plant infrastructure from a human-scale viewpoint.',stack:['Unity','Industrial 3D','Plant visualization'],demo:'https://drive.google.com/file/d/1hrTVT7kUPxRfhuq1rcjxK21-gy6k9bgb/view?usp=drivesdk'},
  {id:'offshore-platform',category:'xr',categoryLabel:'Industrial 3D',title:'Virtual Offshore Platform',subtitle:'Offshore facility exploration & site familiarization',image:'assets/images/offshore-platform.webp',tags:['Offshore','Training','3D'],summary:'A multi-level offshore oil-and-gas environment featuring process areas, piping, cranes, flare infrastructure, helipad and constrained deck access.',stack:['Unity','Offshore visualization','Immersive navigation'],demo:'https://drive.google.com/file/d/1GEMY0abk2dOdKI0FMfjm3wQL72ArFt6P/view?usp=drivesdk'},
  {id:'turbine-inspection',category:'xr',categoryLabel:'Industrial Training',title:'Mechanical Turbine Inspection',subtitle:'Exploded-view equipment familiarization',image:'assets/images/turbine-inspection.webp',tags:['Mechanical','Inspection','3D'],summary:'An interactive turbine-inspection application with close-up exploration, component grouping and exploded views that expose internal machinery.',stack:['Unity','Exploded views','Mechanical training'],demo:'https://drive.google.com/file/d/1gvkEdpgB3E4K1r4GgSNap4aFq5DU2K7y/view?usp=drivesdk'},
  {id:'ai-oil-helper',category:'xr',categoryLabel:'AI + Immersive',title:'Virtual AI Oil & Gas Helper',subtitle:'Voice-interactive technical assistant inside a 3D world',image:'assets/images/ai-oil-helper.webp',tags:['Conversational AI','Voice','Oil & Gas'],summary:'A virtual human assistant embedded in an oil-and-gas environment that accepts spoken questions, displays dialogue and supports technical follow-up conversations.',stack:['Unity','Voice UI','Conversational interaction','3D avatar'],demo:'https://drive.google.com/file/d/1rsKoau5flncGLfX3HfgtEnKsPpQ9eEm7/view?usp=drivesdk'},
  {id:'ar-equipment',category:'phygital',categoryLabel:'Augmented Reality',title:'AR Industrial Equipment',subtitle:'Tabletop engineering & petrochemical visualization',image:'assets/images/ar-equipment.webp',tags:['AR','Oil & Gas','3D Visualization'],summary:'Marker-based AR for inspecting valves, heat exchangers, pumps, petrochemical units, offshore infrastructure and molecules at tabletop scale.',stack:['Unity','Vuforia','3D engineering assets'],demo:'https://drive.google.com/file/d/14bWOwC7W6j25tvZEIVWTaKVrwlLNZMIw/view?usp=drivesdk'},
  {id:'ar-sandbox',category:'phygital',categoryLabel:'Spatial AR',title:'AR Sandbox',subtitle:'Projection-mapped terrain & contour visualization',image:'assets/images/ar-sandbox.webp',tags:['Projection AR','Terrain','Tangible UI'],summary:'A physical sandbox where terrain changes are sensed and augmented with elevation color, contour lines and topographic feedback in real time.',stack:['Depth sensing','Projection mapping','Terrain visualization'],demo:'https://drive.google.com/file/d/1gbENy7kV3oFPLFt_phvb6jlbHyHE_5xJ/view?usp=drivesdk'},
  {id:'gourmet-ar',category:'phygital',categoryLabel:'WebAR / Commerce',title:'Gourmet AR Menu',subtitle:'3D food preview directly on the dining table',image:'assets/images/gourmet-ar.webp',tags:['WebAR','Hospitality','3D Product UX'],summary:'A browser-based restaurant menu with product details, 3D food models and AR tabletop placement so customers can inspect dishes before ordering.',stack:['WebAR','Mobile UX','3D food visualization']},
  {id:'ar-banking',category:'phygital',categoryLabel:'AR / FinTech',title:'AR Smart Banking Card',subtitle:'Physical card as a contextual digital interface',image:'assets/images/ar-banking.webp',tags:['AR','FinTech','Data Visualization'],summary:'A mobile AR prototype that recognizes a physical banking card and anchors balance, transaction, analytics and service information around it.',stack:['Image tracking','AR UI','Financial data visualization']},
  {id:'distillation',category:'simulation',categoryLabel:'Virtual Lab',title:'Virtual Distillation Laboratory',subtitle:'Binary batch distillation & VLE visualization',image:'assets/images/distillation.webp',tags:['Chemical Engineering','VLE','Virtual Lab'],summary:'An interactive benzene–toluene batch-distillation simulator showing liquid, vapor and distillate composition, temperature, volume and live engineering graphs.',stack:['Unity','Thermodynamics','Scientific visualization'],demo:'https://drive.google.com/file/d/17Q3KvTyoZSqxpuo2CqhvN_tuLkTh8Ydx/view?usp=drivesdk'},
  {id:'titration',category:'simulation',categoryLabel:'Virtual Lab',title:'Virtual Acid–Base Titration',subtitle:'Interactive experiment with live pH & titration curve',image:'assets/images/titration.webp',tags:['Chemistry','Virtual Lab','Scientific UX'],summary:'A full virtual titration bench where users configure reagents, manipulate glassware, control titrant addition and monitor pH, indicator color and equivalence behavior.',stack:['Unity','Chemistry calculations','3D interaction'],demo:'https://drive.google.com/file/d/1yodKu53p_es8NY1K29Sko8oFcFlvfeZ6/view?usp=drivesdk'},
  {id:'organic-molecules',category:'simulation',categoryLabel:'Scientific Visualization',title:'Organic Molecules Structure Simulator',subtitle:'Build structures and visualize reaction mechanisms',image:'assets/images/organic-molecules.webp',tags:['Organic Chemistry','3D Molecules','Education'],summary:'A molecular builder for carbon chains, multiple bonds, halogens and functional groups, with a mechanism module for 3D reaction visualization.',stack:['Unity','Rule-based generation','Molecular visualization'],demo:'https://drive.google.com/file/d/1groZWvGn5NZCMzrsIEuKssyEGEp-9fe-/view?usp=drivesdk'},
  {id:'robotics-center',category:'simulation',categoryLabel:'STEM / Interactive Learning',title:'Robotics Center for Kids',subtitle:'Learn, assemble, test and race a robot',image:'assets/images/robotics-center.webp',tags:['Robotics','STEM','Gamification'],summary:'A 3D robotics learning center combining guided lessons, virtual assembly, robot behavior demonstrations and a gamified driving/racing challenge.',stack:['Unity','Robotics education','Game systems'],demo:'https://drive.google.com/file/d/1GL2FCR1LI5H6cFxgVqik40hcVbgFAja5/view?usp=drivesdk'},
  {id:'solar-digital-twin',category:'digital-twin',categoryLabel:'Digital Twin',title:'Solar Panel Digital Twin',subtitle:'Mobile spatial monitoring concept for solar assets',image:'assets/images/solar-digital-twin.webp',tags:['Solar','Digital Twin','Mobile 3D'],summary:'A mobile solar digital-twin prototype that combines a spatial representation of the solar asset with an interactive operating-data interface for monitoring and technical visualization.',stack:['Unity / mobile 3D','Digital-twin UI','Energy visualization'],demo:'https://drive.google.com/file/d/1n-wNyzjT0k_kDpr80mUqbjKDXDSz6F0_/view?usp=drivesdk'},
  {id:'electric-motor',category:'simulation',categoryLabel:'Engineering Simulation',title:'Electric Motor Simulation',subtitle:'Parametric performance, condition states & data export',image:'assets/images/electric-motor.webp',tags:['Electrical Engineering','Parametric Study','3D'],summary:'An interactive motor-performance simulator where current, voltage and speed drive calculated torque, energy use, cost and condition states, with 3D inspection and exported engineering data.',stack:['Unity','Motor-performance modelling','Analytics','Excel / PDF export']},
  {id:'last-warrior',category:'games',categoryLabel:'Game',title:'The Last Warrior: Spirit of Fire',subtitle:'Released 3D fantasy action RPG',image:'assets/images/last-warrior.webp',tags:['Action RPG','Open World','Unity'],summary:'A released fantasy action RPG with exploration, enemies, boss battles, level items and abilities unlocked through progression.',stack:['Unity','Combat','World building','Progression'],public:'https://dt-studio.itch.io/tlw'},
  {id:'color-sort',category:'games',categoryLabel:'Mobile Game',title:'Color Sort Puzzle',subtitle:'Scalable liquid-sorting logic game',image:'assets/images/color-sort.webp',tags:['Mobile','Puzzle','Casual'],summary:'A casual liquid-sorting puzzle built around simple tap interactions, stack logic, animated pours and thousands of progressively challenging levels.',stack:['Unity','Puzzle logic','Mobile UX']},
  {id:'light-on-light-off',category:'games',categoryLabel:'Award-winning Mobile Game',title:'Light On Light Off',subtitle:'Four worlds, 40 levels and a dark puzzle adventure',coverClass:'cover-light',tags:['Mobile','Puzzle Adventure','Unity','GDWC Winner'],summary:'A released puzzle-adventure game built around light, dangerous mazes, unlockable characters, missions and upgradeable skills across four distinct worlds.',stack:['Unity','Level design','Puzzle systems','Mobile UX'],public:'https://dt-studio.itch.io/lolo'},
  {id:'diegress',category:'games',categoryLabel:'2D Puzzle Platformer',title:'Diegress — Die to Progress',subtitle:'Failure becomes the mechanic that builds the path forward',coverClass:'cover-diegress',tags:['2D','Platformer','Puzzle','Mobile'],summary:'A pixel-art platformer where each collision creates a strategic choice: place a platform at the last death point and use failure itself to construct the route forward.',stack:['Unity','2D gameplay','Puzzle design','Progression'],public:'https://youtu.be/le6wCKEcQaA'},
  {id:'switch-it',category:'games',categoryLabel:'Arcade Platformer',title:'SWITCH IT',subtitle:'Fast color-matching arcade action',coverClass:'cover-switch',tags:['Arcade','Platformer','Color mechanics'],summary:'A quick, color-driven arcade platformer focused on timing, reaction and matching the player state to the world around them.',stack:['Unity','Arcade systems','Game feel'],public:'https://www.youtube.com/watch?v=4s6PixKkOWU'},
  {id:'casbah',category:'experience',categoryLabel:'Virtual Heritage',title:'Virtual Casbah of Algiers',subtitle:'360° immersive architectural heritage experience',image:'assets/images/casbah.webp',tags:['360°','Heritage','Virtual Tourism'],summary:'An immersive cultural journey through narrow Casbah alleys, traditional interiors, central courtyards and rooftop views over Algiers.',stack:['3D environment','360° media','Architectural visualization']},
  {id:'macirvie',category:'experience',categoryLabel:'Corporate Metaverse',title:'Macir Vie Virtual Experience',subtitle:'Immersive insurance showcase & virtual event',image:'assets/images/macirvie.webp',tags:['Virtual Event','Brand Experience','3D'],summary:'A branded virtual venue combining insurance-product showcases, holographic-style displays, corporate storytelling, lounges, avatars and a large virtual party environment.',stack:['Unity','Spatial UI','Virtual event design']}
];

const featuredGrid = document.getElementById('featured-grid');
const projectsGrid = document.getElementById('projects-grid');
const gameTrack = document.getElementById('game-track');
const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');

function tagsHtml(tags=[]){return `<div class="tag-row">${tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`}
function featuredCard(p){return `<article class="featured-card reveal" data-project="${p.id}" tabindex="0" role="button" aria-label="Open ${p.title} case study"><img loading="lazy" src="${p.image}" alt="${p.title}"><span class="card-arrow">↗</span><div class="featured-meta"><span class="index">${p.order} · ${p.categoryLabel}</span><h3>${p.title}</h3><p>${p.subtitle}</p>${tagsHtml(p.tags)}</div></article>`}
function visualHtml(p,context='thumb'){
  if(p.image)return `<img loading="lazy" src="${p.image}" alt="${p.title}">`;
  return `<div class="project-cover ${p.coverClass || ''}" aria-hidden="true"><span>${p.title}</span><small>DT GAMES</small></div>`;
}
function projectCard(p){const categories=(p.categories || [p.category]).join(' ');return `<article class="project-card reveal" data-project="${p.id}" data-category="${categories}" tabindex="0" role="button" aria-label="Open ${p.title}"><div class="project-thumb">${visualHtml(p)}</div><div class="project-info"><span class="project-cat">${p.categoryLabel}</span><h3>${p.title}</h3><p>${p.subtitle}</p></div></article>`}
function gameCard(p,index){return `<article class="game-card" data-project="${p.id}" tabindex="0" role="button" aria-label="Open ${p.title}"><img loading="lazy" src="${p.image}" alt="${p.title}"><div class="game-meta"><div><span class="index">0${index+1} · ${p.categoryLabel}</span><h3>${p.title}</h3><p>${p.subtitle}</p></div><span class="game-arrow" aria-hidden="true">↗</span></div></article>`}

featuredGrid.innerHTML = projects.filter(p=>p.featured).map(featuredCard).join('');
// Keep featured case studies out of the archive, except games: the Games filter
// is intentionally a complete catalogue of the game-development journey.
projectsGrid.innerHTML = projects.filter(p=>!p.featured || p.category==='games' || p.categories?.includes('games')).map(projectCard).join('');
const gameIds=['blue','last-warrior','bouhel','color-sort','robotics-center'];
gameTrack.innerHTML=gameIds.map((id,index)=>gameCard(projects.find(p=>p.id===id),index)).join('');

function openProject(id){
  const p=projects.find(x=>x.id===id); if(!p)return;
  const how = p.how || [p.summary,'Explore the interactive 3D system and the relationship between user input, engineering/scientific state and visual feedback.'];
  dialogContent.innerHTML=`
    <div class="dialog-hero"><div class="dialog-visual">${visualHtml(p,'dialog')}</div><div class="dialog-hero-copy"><span class="kicker">${p.categoryLabel}</span><h2>${p.title}</h2><p>${p.subtitle}</p>${tagsHtml(p.tags)}</div></div>
    <div class="dialog-body"><div>
      <div class="detail-block"><h3>Overview</h3><p>${p.summary}</p></div>
      ${p.problem?`<div class="detail-block"><h3>The challenge</h3><p>${p.problem}</p></div>`:''}
      <div class="detail-block"><h3>How it works</h3><ul>${how.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    </div><aside class="dialog-side"><h3>Built with</h3>${tagsHtml(p.stack || p.tags)}
      <div class="dialog-links">${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener"><span>Watch project demo</span><b>↗</b></a>`:''}${p.public?`<a href="${p.public}" target="_blank" rel="noopener"><span>View public release</span><b>↗</b></a>`:''}<a href="mailto:sidsouhil72@gmail.com?subject=${encodeURIComponent('Portfolio project: '+p.title)}"><span>Discuss this project</span><b>↗</b></a></div>
    </aside></div>`;
  dialog.showModal(); document.body.style.overflow='hidden';
}
function closeDialog(){dialog.close();document.body.style.overflow=''}

document.addEventListener('click',e=>{const card=e.target.closest('[data-project]');if(card)openProject(card.dataset.project)});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&document.activeElement?.dataset?.project){e.preventDefault();openProject(document.activeElement.dataset.project)}});
document.getElementById('dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog()});
dialog.addEventListener('close',()=>document.body.style.overflow='');

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card=>{card.style.display=(f==='all'||card.dataset.category.split(' ').includes(f))?'block':'none'});
}));

const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in-view');io.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const gamesStory=document.querySelector('.games-story');
const progressBar=document.querySelector('.scroll-progress span');
let ticking=false;
function updateScrollEffects(){
  const docHeight=document.documentElement.scrollHeight-window.innerHeight;
  progressBar.style.transform=`scaleX(${docHeight>0?window.scrollY/docHeight:0})`;
  if(window.matchMedia('(min-width: 761px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const start=gamesStory.offsetTop;
    const distance=gamesStory.offsetHeight-window.innerHeight;
    const progress=Math.max(0,Math.min(1,(window.scrollY-start)/distance));
    const maxShift=Math.max(0,gameTrack.scrollWidth-window.innerWidth+Math.max(32,(window.innerWidth-1320)/2));
    gameTrack.style.transform=`translate3d(${-progress*maxShift}px,0,0)`;
  }else{
    gameTrack.style.transform='none';
  }
  ticking=false;
}
function requestScrollUpdate(){if(!ticking){requestAnimationFrame(updateScrollEffects);ticking=true}}
window.addEventListener('scroll',requestScrollUpdate,{passive:true});
window.addEventListener('resize',requestScrollUpdate);
updateScrollEffects();
