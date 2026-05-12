
// Cursor
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx+'px'; cur.style.top = my+'px';
});
(function loop(){
  rx += (mx-rx)*.12; ry += (my-ry)*.12;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.svc-card,.g-item,.t-card,.proc-step,.stat-cell,.team-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
});
if(matchMedia('(pointer:coarse)').matches){
  cur.style.display='none'; ring.style.display='none';
  document.body.style.cursor='auto';
}

// Sticky nav
const nav = document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('stuck', scrollY>50));

// Burger
const burger = document.getElementById('burger');
const mobMenu = document.getElementById('mobMenu');
burger.addEventListener('click',()=>{
  burger.classList.toggle('open');
  mobMenu.classList.toggle('open');
  document.body.style.overflow = mobMenu.classList.contains('open')?'hidden':'';
});
document.querySelectorAll('.mob-l').forEach(l=>l.addEventListener('click',()=>{
  burger.classList.remove('open');
  mobMenu.classList.remove('open');
  document.body.style.overflow='';
}));

// Reveal on scroll
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Form
function doSubmit(e){
  e.preventDefault();
  document.getElementById('f-ok').style.display='block';
  e.target.querySelector('.f-submit').textContent='Sent ✓';
}
