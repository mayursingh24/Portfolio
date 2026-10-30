/* welcome.js - welcome screen (needs GSAP, loaded before this file) */
(function(){
  /* CONFIG: where the "EXIT HERE" button sends visitors. Change this URL. */
  var EXIT_URL="https://www.google.com";

  var el=document.getElementById("welcome");if(!el)return;
  var root=document.documentElement,rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  var seen=false;try{seen=!!sessionStorage.getItem("seen")}catch(e){}
  if(seen||location.hash){try{sessionStorage.setItem("seen","1")}catch(e){}el.remove();return}
  function $(s){return el.querySelector(s)}function $$(s){return el.querySelectorAll(s)}
  var bEnter=$("#wlEnter"),bExit=$("#wlExit"),skip=$("#wlSkip"),conf=$("#wlConfirm"),stay=$("#wlStay"),
      char=$("#wlChar"),bob=$("#wlBob"),arm=$("#wlArm"),say=$("#wlSay"),flLayer=$(".wl-float"),
      fl=Array.prototype.slice.call($$(".wl-fl")),live=[],g=window.gsap;
  root.style.overflow="hidden";

  /* split the speech bubble into letters */
  var txt=say.textContent;
  say.innerHTML='<span class="wl-sr">'+txt+'</span>'+txt.split(" ").map(function(w){
    return '<span class="wl-wd" aria-hidden="true">'+w.split("").map(function(c){return "<i>"+c+"</i>"}).join("")+"</span>"}).join(" ");
  var letters=$$(".wl-wd i");

  function finish(){el.remove();root.style.overflow="";
    var h=document.querySelector(".hero h1");if(h){h.style.animation="none";void h.offsetWidth;h.style.animation=""}
    if(g&&!rm)g.from(".hero .bubble,.hero .tag,.hero .type,.hero .lede,.hero .wins li,.hero .btns",{y:30,autoAlpha:0,duration:.6,stagger:.07,ease:"back.out(1.5)",clearProps:"opacity,visibility,transform"});
    if(g&&!rm)g.from(".hero .avatar",{scale:.6,autoAlpha:0,duration:.8,ease:"back.out(1.6)",clearProps:"opacity,visibility,transform"})}

  function confetti(){var em=["⭐","✨","🎉","💥","💫","🚀"],r=char.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/3;
    for(var i=0;i<16;i++){var s=document.createElement("span");s.textContent=em[i%em.length];
      s.style.cssText="position:fixed;z-index:120;pointer-events:none;font-size:1.8rem;left:"+cx+"px;top:"+cy+"px";el.appendChild(s);
      var a=Math.PI*2*i/16,d=110+Math.random()*120;
      g.to(s,{x:Math.cos(a)*d,y:Math.sin(a)*d,rotation:Math.random()*360,autoAlpha:0,scale:1.3,duration:.9,ease:"power2.out",onComplete:function(){this.targets()[0].remove()}})}}

  function enter(){
    try{sessionStorage.setItem("seen","1")}catch(e){}
    bEnter.disabled=bExit.disabled=true;
    if(!g||rm){finish();return}
    live.forEach(function(t){t.kill()});
    var out=g.timeline({onComplete:finish});
    out.to(char,{y:-70,scale:1.12,duration:.28,ease:"power2.out"})
       .add(confetti)
       .to(char,{y:0,scale:1,duration:.35,ease:"bounce.out"})
       .to($(".wl-in"),{y:-30,autoAlpha:0,duration:.35},"-=.1")
       .fromTo(el,{clipPath:"circle(150% at 50% 50%)"},{clipPath:"circle(0% at 50% 50%)",duration:.9,ease:"power3.inOut"},"-=.1")}

  bEnter.addEventListener("click",enter);
  bExit.addEventListener("click",function(){
    conf.hidden=false;
    if(g&&!rm)g.fromTo(conf.firstElementChild,{scale:.6,autoAlpha:0},{scale:1,autoAlpha:1,duration:.4,ease:"back.out(2)"});
    stay.focus()});
  stay.addEventListener("click",function(){conf.hidden=true;bExit.focus()});
  $("#wlLeave").addEventListener("click",function(){location.href=EXIT_URL});
  addEventListener("keydown",function(e){if(e.key==="Escape"&&el.isConnected&&!conf.hidden){conf.hidden=true;bExit.focus()}});

  /* no GSAP (offline / blocked) or reduced motion: show everything at once */
  if(!g){el.classList.add("nogsap");skip.hidden=true;return}
  if(rm){g.set($$(".wl-i"),{autoAlpha:1});skip.hidden=true;return}

  /* 3D tilt + parallax following the pointer */
  g.set(bob,{transformPerspective:700});
  if(matchMedia("(pointer:fine)").matches){
    var o={duration:.7,ease:"power3"},rx=g.quickTo(bob,"rotationX",o),ry=g.quickTo(bob,"rotationY",o),fx=g.quickTo(flLayer,"x",o),fy=g.quickTo(flLayer,"y",o);
    addEventListener("pointermove",function(e){if(!el.isConnected)return;var nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;ry(nx*26);rx(-ny*16);fx(-nx*30);fy(-ny*30)})}

  /* floating code stickers */
  g.fromTo(fl,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1,duration:.6,stagger:.08,delay:.1,ease:"back.out(2)"});
  fl.forEach(function(f){live.push(g.to(f,{y:"random(-24,24)",x:"random(-14,14)",rotation:"random(-14,14)",duration:"random(2.2,4)",repeat:-1,yoyo:true,ease:"sine.inOut",delay:.3}))});

  var idled=false;
  function idle(){if(idled)return;idled=true;skip.hidden=true;live.push(g.to(bob,{y:-10,duration:1.3,repeat:-1,yoyo:true,ease:"sine.inOut"}))}
  function wave(){live.push(g.fromTo(arm,{rotation:-14,svgOrigin:"178 184"},{rotation:16,svgOrigin:"178 184",duration:.3,repeat:-1,yoyo:true,ease:"sine.inOut"}))}

  var tl=g.timeline({delay:.25,defaults:{ease:"power3.out"},onComplete:idle});
  tl.fromTo(char,{x:function(){return -innerWidth*.6},rotation:-18,autoAlpha:0},{x:0,rotation:0,autoAlpha:1,duration:1,ease:"back.out(1.4)"})
    .to(char,{y:-26,duration:.18,yoyo:true,repeat:1,ease:"power1.out"})
    .add(wave,"-=.1")
    .fromTo(say,{scale:0,autoAlpha:0,transformOrigin:"50% 100%"},{scale:1,autoAlpha:1,duration:.5,ease:"back.out(2.2)"},"-=.05")
    .fromTo(letters,{y:24,autoAlpha:0,rotation:-14},{y:0,autoAlpha:1,rotation:0,duration:.4,stagger:.035,ease:"back.out(3)"},"<.2")
    .fromTo($$(".wl-tw"),{scale:2.6,rotation:-8,autoAlpha:0},{scale:1,rotation:0,autoAlpha:1,duration:.5,stagger:.16,ease:"back.out(1.8)"},"-=.25")
    .fromTo($(".wl-sub"),{y:20,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},"-=.1")
    .fromTo([bEnter,bExit],{y:50,scale:.5,autoAlpha:0},{y:0,scale:1,autoAlpha:1,duration:.9,stagger:.15,ease:"elastic.out(1,.6)",clearProps:"transform"},">-.1")
    .fromTo($(".wl-tag"),{y:10,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},"-=.5")
    .add(function(){bEnter.focus({preventScroll:true})});
  skip.addEventListener("click",function(){tl.progress(1)});
})();
