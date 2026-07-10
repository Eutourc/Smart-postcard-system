
const fallbackPages=[
  {type:"cover",src:"assets/cover/cover.png",title:"电子相册封面"},
  {type:"card",src:"assets/postcards/sweden.svg",title:"瑞典"},
  {type:"card",src:"assets/postcards/norway.svg",title:"挪威"},
  {type:"card",src:"assets/postcards/denmark.svg",title:"丹麦"},
  {type:"card",src:"assets/postcards/finland.svg",title:"芬兰"},
  {type:"card",src:"assets/postcards/iceland.svg",title:"冰岛"}
];
const track=document.querySelector(".track");
const badge=document.querySelector(".badge");
let pages=fallbackPages,index=0,startX=0,dx=0;

async function loadData(){
  try{
    const res=await fetch("data/album.json",{cache:"no-store"});
    if(res.ok){
      const data=await res.json();
      if(Array.isArray(data.pages)&&data.pages.length){pages=data.pages;}
    }
  }catch(e){pages=fallbackPages;}
}
function render(){
  track.innerHTML=pages.map((p,i)=>{
    const seal=p.type==="cover"?'<img class="seal" src="assets/seal/seal.png" alt="官方收藏章">':"";
    const title=p.type==="cover"?'<div class="cover-title">Smart Postcard 电子相册</div>':"";
    return `<section class="page ${p.type}" data-index="${i}"><img class="main-img" src="${p.src}" alt="${p.title||''}" draggable="false">${seal}${title}</section>`;
  }).join("");
  update();
}
function update(){track.style.transform=`translateX(${-index*100}vw)`;badge.textContent=`${index+1} / ${pages.length}`;}
function next(){if(index<pages.length-1){index++;update();}}
function prev(){if(index>0){index--;update();}}
document.addEventListener("touchstart",e=>{startX=e.touches[0].clientX;dx=0;},{passive:true});
document.addEventListener("touchmove",e=>{dx=e.touches[0].clientX-startX;},{passive:true});
document.addEventListener("touchend",()=>{if(Math.abs(dx)>48){dx<0?next():prev();}});
document.querySelector(".nav-zone.left").addEventListener("click",prev);
document.querySelector(".nav-zone.right").addEventListener("click",next);
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")next();if(e.key==="ArrowLeft")prev();});
loadData().then(render);
