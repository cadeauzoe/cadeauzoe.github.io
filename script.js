'use strict';
const $ = s => document.querySelector(s);
const stars = $('.stars');
for(let i=0;i<65;i++){const e=document.createElement('i');e.className='star';const n=1+Math.random()*2;e.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${n}px;height:${n}px;animation-delay:${Math.random()*5}s`;stars.append(e)}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){let count=0;setInterval(()=>{if(document.hidden||count>17)return;const e=document.createElement('span');e.className='petal';e.textContent=Math.random()>.5?'♡':'✿';e.style.cssText=`left:${Math.random()*100}%;font-size:${12+Math.random()*17}px;animation-duration:${9+Math.random()*8}s`;$('.petals').append(e);count++;e.addEventListener('animationend',()=>{e.remove();count--})},1300)}
const GIFT_KEY='zoe-cadeau-ouvert-v5';
let giftOpened=false;
try{giftOpened=localStorage.getItem(GIFT_KEY)==='yes'}catch(e){}
function showWelcome(){
 if(giftOpened){$('#startBtn').hidden=true;$('#replaySurprise').hidden=false;$('#continueGift').hidden=false;$('.hero-text').textContent='Coucou mon petit cœur ❤️🥹 tu reviens me voir mdrrr ? Ton petit cadeau t’attend toujours. Tu peux le revoir autant de fois que tu veux, je t’aime fort ❤️♾️';$('.hint').textContent='Tes invocations et tes lettres t’attendent toujours ♡'}
}
function start(replay=false){
 if(!$('#journey').hidden){if(replay){$('#journey').hidden=true;$('#envelope').classList.remove('open')}else{$('#histoire').scrollIntoView({behavior:'smooth'});return}}
 $('#envelope').classList.add('open');$('#startBtn').disabled=true;
 if(!giftOpened){giftOpened=true;try{localStorage.setItem(GIFT_KEY,'yes')}catch(e){}}
 setTimeout(()=>{$('#journey').hidden=false;observe();showWelcome();$('#histoire').scrollIntoView({behavior:'smooth'})},850)
}
$('#startBtn').addEventListener('click',()=>start());
$('#envelope').addEventListener('click',()=>start());
$('#envelope').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();start()}});
$('#replaySurprise').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>start(true),400)});
$('#continueGift').addEventListener('click',()=>{$('#journey').hidden=false;observe();$('#tresors').scrollIntoView({behavior:'smooth'})});
if(giftOpened){$('#journey').hidden=false;observe();showWelcome()}
function observe(){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}
document.querySelectorAll('.flower').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.flower').forEach(e=>e.classList.remove('active'));btn.classList.add('active');$('#flowerNote').textContent=btn.dataset.note}));
const dialog=$('#letterDialog');document.querySelectorAll('.secret').forEach(btn=>btn.addEventListener('click',()=>{$('#dialogTitle').textContent=btn.dataset.title;$('#dialogText').textContent=btn.dataset.message;dialog.showModal()}));$('#closeDialog').addEventListener('click',()=>dialog.close());$('#dialogOk').addEventListener('click',()=>dialog.close());
$('#lastSurprise').addEventListener('click',()=>{$('#lastMessage').hidden=false;$('#lastSurprise').hidden=true;burst();$('#lastMessage').scrollIntoView({behavior:'smooth',block:'center'})});
function burst(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;for(let i=0;i<25;i++){setTimeout(()=>{const e=document.createElement('span');e.className='petal';e.textContent='♥';e.style.cssText=`left:${Math.random()*100}%;font-size:${15+Math.random()*18}px;animation-duration:${5+Math.random()*4}s`;$('.petals').append(e);e.addEventListener('animationend',()=>e.remove())},i*85)}}
// Notre chanson est diffusée par le lecteur officiel YouTube, sans héberger de MP3.
const sound=document.getElementById('soundBtn');
const musicDialog=document.getElementById('musicDialog');
const musicFrame=document.getElementById('musicFrame');
const musicClose=document.getElementById('closeMusic');
function closeMusicPlayer(){musicDialog.close();musicFrame.removeAttribute('src');sound.setAttribute('aria-expanded','false');}
sound.setAttribute('aria-expanded','false');
sound.setAttribute('aria-controls','musicDialog');
sound.addEventListener('click',()=>{musicFrame.src=musicFrame.dataset.src;musicDialog.showModal();sound.setAttribute('aria-expanded','true')});
musicClose.addEventListener('click',closeMusicPlayer);
musicDialog.addEventListener('cancel',e=>{e.preventDefault();closeMusicPlayer()});
musicDialog.addEventListener('click',e=>{if(e.target===musicDialog)closeMusicPlayer()});

// Les huit trésors de Zoé : un Memory qui fait fleurir le jardin.
const treasures=[{"label": "Lys", "emoji": "🌸"}, {"label": "Bague", "emoji": "💍"}, {"label": "Dragibus", "emoji": "🍬"}, {"label": "Tagada", "emoji": "🍓"}, {"label": "Lulu noisette", "emoji": "🍪"}, {"label": "Chocolat blanc", "emoji": "🍫"}, {"label": "Peluche", "emoji": "🧸"}, {"label": "Jus de pomme", "emoji": "🧃"}];
const prayers=["Qu’Allah te garde sous Sa protection jour et nuit.", "Qu’Allah te préserve de tout mal visible et invisible.", "Qu’Allah te protège de tout œil envieux.", "Qu’Allah éloigne de toi toute injustice.", "Qu’Allah te préserve des cœurs malveillants.", "Qu’Allah te garde de tout accident et de tout danger.", "Qu’Allah t’entoure de Sa protection et de Ses anges.", "Qu’Allah te préserve de la maladie et de la douleur.", "Qu’Allah te protège dans tes déplacements et tes voyages.", "Qu’Allah te préserve de tout ce qui pourrait te nuire.", "Qu’Allah t’accorde une santé de fer.", "Qu’Allah guérisse tout ce qui te fait souffrir.", "Qu’Allah fortifie ton corps et ton cœur.", "Qu’Allah t’accorde le repos et la sérénité.", "Qu’Allah éloigne de toi le stress et l’anxiété.", "Qu’Allah apaise ton cœur et ton âme.", "Qu’Allah t’accorde l’énergie et la vitalité chaque jour.", "Qu’Allah fasse que ton sourire ne quitte jamais ton visage.", "Qu’Allah te donne un sommeil paisible et réparateur.", "Qu’Allah préserve ta santé pour de longues années.", "Qu’Allah mette de la baraka dans ta vie.", "Qu’Allah bénisse chaque jour qui passe.", "Qu’Allah multiplie les bienfaits dans ta vie.", "Qu’Allah bénisse ta famille et tes proches.", "Qu’Allah bénisse ta maison et tout ce qu’elle contient.", "Qu’Allah mette de la bénédiction dans ton travail et tes études.", "Qu’Allah bénisse tes biens et tes revenus.", "Qu’Allah bénisse ta nourriture et en fasse une source de force.", "Qu’Allah fasse que chaque année de ta vie soit meilleure que la précédente.", "Qu’Allah bénisse cette nouvelle année de ta vie, du début à la fin.", "Qu’Allah remplisse ta vie de joie sincère.", "Qu’Allah te donne des raisons de sourire chaque jour.", "Qu’Allah éloigne de toi la tristesse.", "Qu’Allah te comble de moments de bonheur.", "Qu’Allah fasse de ta vie un jardin de paix.", "Qu’Allah accorde à ton cœur la paix intérieure.", "Qu’Allah te donne le bonheur dans ce monde et dans l’au-delà.", "Qu’Allah fasse que tes rêves se réalisent un à un, s’ils sont un bien pour toi.", "Qu’Allah illumine ta vie comme tu illumines la mienne.", "Qu’Allah t’accorde encore plus de bien que ce que tu espères.", "Qu’Allah rapproche ton cœur de Lui chaque jour.", "Qu’Allah illumine ton cœur de la lumière de la foi.", "Qu’Allah t’accorde une foi solide et constante.", "Qu’Allah accepte tes prières et tes invocations.", "Qu’Allah te compte parmi Ses serviteurs qu’Il aime.", "Qu’Allah te facilite l’accomplissement de tes devoirs envers Lui.", "Qu’Allah te pardonne tes péchés et efface tes fautes.", "Qu’Allah t’accorde le Paradis comme demeure finale.", "Qu’Allah t’accorde de quitter ce monde dans la foi et de ressusciter avec les pieux.", "Qu’Allah t’accorde Sa satisfaction dans cette vie et dans l’au-delà."];
const STORE_KEY='zoe-50-duas-v4';
let discovered=[];
try { const saved=JSON.parse(localStorage.getItem(STORE_KEY)||'[]'); if(Array.isArray(saved)) discovered=[...new Set(saved.filter(i=>Number.isInteger(i)&&i>=0&&i<50))]; } catch(e){}
const milestones={10:'Mon petit cœur t’as déjà découvert 10 invocations 🥹❤️ qu’Allah te protège toi et ta famille, je veux tellement te voir heureuse ma princesse ❤️',20:'Mdrrrr mon petit cœur tu continues encore 🥹❤️ tu sais même si je pouvais t’écrire 1000 invocations je le ferais parce que je veux toujours le meilleur pour toi, qu’Allah te protège ma princesse ❤️♾️',30:'30 invocations mon amour 😭❤️ t’es vraiment trop mignonne, j’espère que chaque petit mot te fait sourire. Qu’Allah t’accorde tout le bonheur que tu mérites 🤲❤️',40:'40 déjà mdrrrr ma Zoé 🥰❤️ t’es presque au bout ! Je demande à Allah de préserver ton sourire, ta foi et toute ta famille. Encore un petit effort ma princesse ❤️'};
function saveDuas(){try{localStorage.setItem(STORE_KEY,JSON.stringify(discovered))}catch(e){}}
function renderCollection(){
 $('#collectionCount').textContent=discovered.length+' / 50 invocations découvertes';
 $('#collectionBar').style.width=(discovered.length*2)+'%';
 const journal=$('#duaJournal');journal.replaceChildren();
 if(!discovered.length){const p=document.createElement('p');p.textContent='Ton carnet t’attend mon petit cœur… Trouve une paire pour découvrir ta première du’a ♡';journal.append(p)}
 discovered.forEach((id,n)=>{const p=document.createElement('p');p.textContent='🤲 '+(n+1)+'. '+prayers[id];journal.append(p)});
 for(const threshold of [10,20,30,40]) if(discovered.length>=threshold){const p=document.createElement('p');p.className='saved-milestone';p.textContent='💌 '+threshold+' du’as — '+milestones[threshold];journal.append(p)}
 $('#secretFifty').hidden=discovered.length!==50;
 renderEternalGarden();
}
function earnDua(){
 const remaining=prayers.map((_,i)=>i).filter(i=>!discovered.includes(i));
 if(!remaining.length){return prayers[Math.floor(Math.random()*prayers.length)]}
 const id=remaining[Math.floor(Math.random()*remaining.length)];discovered.push(id);saveDuas();renderCollection();
 if(milestones[discovered.length]){const panel=$('#milestoneMessage');panel.hidden=false;panel.textContent='💌 '+milestones[discovered.length];burst()}
 if(discovered.length===50){$('#milestoneMessage').hidden=false;$('#milestoneMessage').textContent='Tu as découvert les 50 invocations, mon amour ! Une dernière lettre secrète t’attend dans ton carnet ❤️';burst()}
 return prayers[id];
}
const lilySVG='<svg class="lily" viewBox="0 0 120 135" role="img" aria-label="Lys rose"><defs><radialGradient id="petalColor"><stop stop-color="#fff3f6"/><stop offset=".68" stop-color="#ffafc5"/><stop offset="1" stop-color="#ce466f"/></radialGradient></defs><path d="M60 72 Q64 108 61 130" fill="none" stroke="#7ba57b" stroke-width="4"/><path d="M61 108 Q36 84 20 104 Q43 122 61 114" fill="#83b78c"/><g transform="translate(60 62)"><g fill="url(#petalColor)" stroke="#ffdee7" stroke-width="1.2"><ellipse cx="0" cy="-22" rx="15" ry="32"/><ellipse cx="0" cy="-22" rx="15" ry="32" transform="rotate(60)"/><ellipse cx="0" cy="-22" rx="15" ry="32" transform="rotate(120)"/><ellipse cx="0" cy="-22" rx="15" ry="32" transform="rotate(180)"/><ellipse cx="0" cy="-22" rx="15" ry="32" transform="rotate(240)"/><ellipse cx="0" cy="-22" rx="15" ry="32" transform="rotate(300)"/></g><g stroke="#e4a65e" stroke-width="2" stroke-linecap="round"><path d="M0 0L-9 -18M0 0L10 -17M0 0L0 -24"/></g><g fill="#ad5c3e"><circle cx="-9" cy="-18" r="3"/><circle cx="10" cy="-17" r="3"/><circle cx="0" cy="-24" r="3"/></g><circle r="6" fill="#ffe5a7"/></g></svg>';
function renderEternalGarden(){
 const unlocked=discovered.length===50;
 const section=$('#eternalGarden');if(!section)return;
 section.hidden=!unlocked;
 if(unlocked && !$('#eternalFlowers').children.length){
  for(let i=0;i<8;i++){const flower=document.createElement('div');flower.className='eternal-lily';flower.innerHTML=lilySVG;$('#eternalFlowers').append(flower)}
 }
}
let memoryDeck=[],memoryOpen=[],memoryFound=new Set(),memoryBusy=false,memoryAttempts=0,memoryTimer=null;
function setupMemory(){clearTimeout(memoryTimer);memoryDeck=treasures.flatMap((_,i)=>[i,i]);for(let i=memoryDeck.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[memoryDeck[i],memoryDeck[j]]=[memoryDeck[j],memoryDeck[i]]}memoryOpen=[];memoryFound=new Set();memoryBusy=false;memoryAttempts=0;$('#memoryGrid').replaceChildren();$('#garden').replaceChildren();$('#gardenFinal').hidden=true;$('#milestoneMessage').hidden=true;renderCollection();treasures.forEach((t,i)=>{const flower=document.createElement('div');flower.className='garden-plant';flower.dataset.treasure=i;flower.innerHTML=lilySVG+'<span>'+t.label+'</span>';$('#garden').append(flower)});memoryDeck.forEach((v,i)=>{const b=document.createElement('button');b.type='button';b.className='memory-card';b.setAttribute('aria-label','Carte '+(i+1)+' face cachée');b.innerHTML='<span class="card-front" aria-hidden="true">♥</span><span class="card-back" aria-hidden="true"><b>'+treasures[v].emoji+'</b><small>'+treasures[v].label+'</small></span>';b.addEventListener('click',()=>flipMemory(i));$('#memoryGrid').append(b)});updateMemory();$('#memoryStatus').textContent='Retourne deux cartes pour trouver une paire ♡'}
function updateMemory(){$('#memoryProgress').textContent=memoryFound.size+' / 8 paires trouvées';$('#memoryTries').textContent=memoryAttempts+' essais'}
function flipMemory(i){if(memoryBusy||memoryOpen.includes(i)||memoryFound.has(memoryDeck[i]))return;const card=$('#memoryGrid').children[i];card.classList.add('flipped');card.setAttribute('aria-label',treasures[memoryDeck[i]].label);memoryOpen.push(i);if(memoryOpen.length!==2)return;memoryAttempts++;updateMemory();const [a,b]=memoryOpen;if(memoryDeck[a]===memoryDeck[b]){const id=memoryDeck[a];memoryFound.add(id);memoryOpen=[];[a,b].forEach(k=>{$('#memoryGrid').children[k].classList.add('matched');$('#memoryGrid').children[k].disabled=true});const plant=$('#garden').querySelector('[data-treasure="'+id+'"]');plant.classList.add('bloom');$('#memoryStatus').textContent='Bravo ma princesse ! '+earnDua();if(memoryFound.size===8){$('#gardenFinal').hidden=false;$('#memoryStatus').textContent='Les 8 lys ont fleuri ! Descends découvrir ton dernier cadeau mon amour ❤️';burst();setTimeout(()=>$('#gardenFinal').scrollIntoView({behavior:'smooth',block:'start'}),500)}}else{memoryBusy=true;$('#memoryStatus').textContent='Presque mon cœur, essaie encore ❤️';memoryTimer=setTimeout(()=>{[a,b].forEach(k=>{$('#memoryGrid').children[k].classList.remove('flipped');$('#memoryGrid').children[k].setAttribute('aria-label','Carte '+(k+1)+' face cachée')});memoryOpen=[];memoryBusy=false;$('#memoryStatus').textContent='À toi de jouer ma princesse ♡'},900)}}
$('#resetMemory').addEventListener('click',setupMemory);$('#replayGarden').addEventListener('click',()=>{setupMemory();$('#tresors').scrollIntoView({behavior:'smooth'})});setupMemory();
