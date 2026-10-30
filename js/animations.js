/* animations.js - scroll progress, typewriter, reveal-on-scroll, avatar burst, roadmap car, speech bubble, achievements burst */
(function(){
  var rm=matchMedia("(prefers-reduced-motion: reduce)").matches,root=document.documentElement;
  var pg=document.getElementById("pg"),up=document.getElementById("up");
  function sc(){var m=root.scrollHeight-root.clientHeight,t=root.scrollTop;pg.style.transform="scaleX("+(m>0?t/m:0)+")";up.hidden=t<600}
  addEventListener("scroll",sc,{passive:true});sc();
  up.addEventListener("click",function(){scrollTo({top:0,behavior:rm?"auto":"smooth"})});
  var tw=document.getElementById("tw"),tl=document.getElementById("tl"),pairs=[["Exploring","Artificial Intelligence"],["Currently","Learning Data Science"],["Building","Python Applications"],["Working With","Python | Django | Flask"],["Passionate About","Intelligent Systems"],["Future Goal","AI/ML Engineer"],["Location","Lucknow, India"]],wi=0,ci=0,del=false;
  if(!rm){(function t(){var q=pairs[wi];tl.textContent=q[0];ci+=del?-1:1;tw.textContent=q[1].slice(0,ci);var d=del?35:80;
    if(!del&&ci===q[1].length){d=1500;del=true}else if(del&&ci===0){del=false;wi=(wi+1)%pairs.length;d=250}setTimeout(t,d)})()}
  if("IntersectionObserver" in window&&!rm){
    root.classList.add("js");
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);
      if(e.target.dataset&&e.target.dataset.n)count(e.target)}})},{threshold:.15});
    document.querySelectorAll(".title,.card,.step,.polaroid,.say,.burst>div").forEach(function(el){el.classList.add("rv");io.observe(el)});
    document.querySelectorAll("b[data-n]").forEach(function(b){io.observe(b)});
  }
  function count(b){var n=+b.dataset.n,suf=b.dataset.suf||"",t0=performance.now();
    (function f(t){var k=Math.min((t-t0)/900,1);b.textContent=Math.round(n*k)+suf;if(k<1)requestAnimationFrame(f)})(t0)}
  var av=document.querySelector(".avatar");
  av.addEventListener("click",function(){
    if(rm)return;var r=av.getBoundingClientRect(),em=["⭐","✨","💥","🎉","💫","🔥"];
    for(var i=0;i<12;i++){var s=document.createElement("span");s.textContent=em[i%em.length];
      s.style.cssText="position:fixed;z-index:60;pointer-events:none;font-size:1.8rem;left:"+(r.left+r.width/2)+"px;top:"+(r.top+r.height/2)+"px";
      document.body.appendChild(s);var a=Math.PI*2*i/12,d=90+Math.random()*90;
      s.animate([{transform:"translate(0,0) scale(.4)",opacity:1},{transform:"translate("+Math.cos(a)*d+"px,"+Math.sin(a)*d+"px) rotate(240deg) scale(1.2)",opacity:0}],{duration:900,easing:"cubic-bezier(.2,.8,.3,1)"}).onfinish=(function(x){return function(){x.remove()}})(s)}
  });
})();

(function(){
  var road=document.querySelector(".road"),car=document.getElementById("car"),ac,last=0;
  function drive(){var r=road.getBoundingClientRect(),h=r.height,p=Math.max(0,Math.min(1,(innerHeight*.55-r.top)/h));car.style.top=p*(h-car.offsetHeight)+"px"}
  addEventListener("scroll",drive,{passive:true});addEventListener("resize",drive);drive();
  var sd=document.getElementById("sd");
  car.addEventListener("click",function(){if(sd.getAttribute("aria-pressed")!=="true")return;
    try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();[0,.22].forEach(function(dl){var t=ac.currentTime+dl,o=ac.createOscillator(),g=ac.createGain();
      o.type="square";o.frequency.value=dl?330:420;g.gain.setValueAtTime(.09,t);g.gain.exponentialRampToValueAtTime(.001,t+.18);o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+.2)})}catch(e){}});
})();

(function(){
  var rm=matchMedia("(prefers-reduced-motion: reduce)").matches,it=document.getElementById("intro");
  var q=["Hi! 👋","Need a Flask backend?","Tap me! 💥","Python is my jam 🐍","Let’s build something!","Chai first ☕"],qi=0,bb=document.getElementById("avbub");
  if(!rm)setInterval(function(){qi=(qi+1)%q.length;bb.textContent=q[qi]},2800);
  var wins=document.querySelector(".wins");
  if(wins&&!rm&&"IntersectionObserver" in window){var wo=new IntersectionObserver(function(es){if(es[0].isIntersecting){wo.disconnect();setTimeout(function(){burst(wins)},400)}},{threshold:.6});wo.observe(wins)}
  function burst(el){var r=el.getBoundingClientRect(),em=["🎉","⭐","🏆","✨","🎊"];
    for(var i=0;i<14;i++){var x=document.createElement("span");x.textContent=em[i%5];
      x.style.cssText="position:fixed;z-index:60;pointer-events:none;font-size:1.6rem;left:"+(r.left+Math.random()*r.width)+"px;top:"+(r.top+10)+"px";document.body.appendChild(x);
      x.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:"translate("+(Math.random()*120-60)+"px,"+(160+Math.random()*120)+"px) rotate("+(Math.random()*540)+"deg)",opacity:0}],{duration:1300+Math.random()*600,easing:"cubic-bezier(.2,.6,.4,1)"}).onfinish=(function(n){return function(){n.remove()}})(x)}}
})();
