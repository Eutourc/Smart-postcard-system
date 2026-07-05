const pages = [
  {type:"cover", src:"assets/cover/cover.png", title:"封面"},
  {type:"card", src:"assets/postcards/sweden.jpg", title:"瑞典"},
  {type:"card", src:"assets/postcards/norway.jpg", title:"挪威"},
  {type:"card", src:"assets/postcards/denmark.jpg", title:"丹麦"},
  {type:"card", src:"assets/postcards/finland.jpg", title:"芬兰"},
  {type:"card", src:"assets/postcards/iceland.jpg", title:"冰岛"}
];

const track = document.querySelector(".track");
const badge = document.querySelector(".badge");
let index = 0, startX = 0, dx = 0;

function render(){
  track.innerHTML = pages.map(p => `
    <section class="page ${p.type}">
      <img src="${p.src}" alt="${p.title}">
    </section>
  `).join("");
  update();
}
function update(){
  track.style.transform = `translateX(${-index * 100}vw)`;
  badge.textContent = `${index + 1} / ${pages.length}`;
}
function next(){ if(index < pages.length - 1){ index++; update(); } }
function prev(){ if(index > 0){ index--; update(); } }

document.addEventListener("touchstart", e => { startX = e.touches[0].clientX; dx = 0; }, {passive:true});
document.addEventListener("touchmove", e => { dx = e.touches[0].clientX - startX; }, {passive:true});
document.addEventListener("touchend", () => { if(Math.abs(dx) > 50){ dx < 0 ? next() : prev(); } });
document.addEventListener("keydown", e => { if(e.key === "ArrowRight") next(); if(e.key === "ArrowLeft") prev(); });

render();
