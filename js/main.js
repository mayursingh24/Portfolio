/* main.js - theme toggle, project filters, cartoon sound effects, cursor sparkles */
(function(){
  var root=document.documentElement,tg=document.getElementById("tg");
  function isDark(){var t=root.getAttribute("data-theme");return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
  try{var s=localStorage.getItem("theme");if(s)root.setAttribute("data-theme",s)}catch(e){}
  tg.textContent=isDark()?"☀️":"🌙";
  tg.addEventListener("click",function(){var n=isDark()?"light":"dark";root.setAttribute("data-theme",n);tg.textContent=n==="dark"?"☀️":"🌙";try{localStorage.setItem("theme",n)}catch(e){}});
  var chips=document.querySelectorAll(".chip"),cards=document.querySelectorAll(".card");
  chips.forEach(function(c){c.addEventListener("click",function(){
    chips.forEach(function(x){x.setAttribute("aria-pressed","false")});c.setAttribute("aria-pressed","true");
    var f=c.dataset.f;cards.forEach(function(k){k.hidden=!(f==="all"||k.dataset.c.split(" ").indexOf(f)>-1)});
  })});
})();

(function(){
  var rm=matchMedia("(prefers-reduced-motion: reduce)").matches,intro=document.getElementById("intro");
  
  var ac,snd=false,last=0;
  function A(){if(!ac){try{ac=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(ac&&ac.state==="suspended")ac.resume();return ac}
  function tone(f1,f2,d,ty,v,dl){var a=A();if(!a||!snd)return;var t=a.currentTime+(dl||0),o=a.createOscillator(),g=a.createGain();
    o.type=ty;o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+d);
    g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.03)}
  var S={
    boing:function(){tone(160,620,.22,"sine",.22);tone(620,150,.3,"sine",.16,.2)},
    pop:function(){tone(900,180,.12,"triangle",.25)},
    zip:function(){tone(250,1500,.2,"sawtooth",.07)},
    tada:function(){[523,659,784,1047,1319].forEach(function(f,i){tone(f,f*1.02,.16,"square",.07,i*.09)})}
  };
  var sd=document.getElementById("sd");
  if(sd){
    sd.addEventListener("click",function(){snd=!snd;sd.textContent=snd?"🔊":"🔇";sd.setAttribute("aria-pressed",snd);
      sd.setAttribute("aria-label",snd?"Turn cartoon sounds off":"Turn cartoon sounds on");if(snd){A();S.boing()}});
  }
  document.addEventListener("click",function(e){var t=e.target;if(!t.closest)return;
    if(t.closest(".wins li"))S.tada();else if(t.closest(".avatar")){S.boing();setTimeout(S.tada,250)}
    else if(t.closest(".btn,.chip,.gh,.menu a,.dock a,.up,.pill,.lightbox-close"))S.pop();
    else if(t.closest(".polaroid"))S.boing()});
  document.addEventListener("mouseover",function(e){var t=e.target;if(!t.closest||!t.closest(".card,.polaroid,.step .pop"))return;
    var n=performance.now();if(n-last>350){last=n;S.boing()}});
  var cs=document.querySelectorAll("b[data-n]");cs.forEach(function(b){new MutationObserver(function(){}).observe(b,{childList:true})});
  if(!rm&&matchMedia("(pointer:fine)").matches){var lt=0,em=["✨","⭐","💫"];
    addEventListener("pointermove",function(e){var n=performance.now();if(n-lt<70)return;lt=n;
      var s=document.createElement("span");s.textContent=em[Math.floor(Math.random()*3)];
      s.style.cssText="position:fixed;z-index:60;pointer-events:none;font-size:1rem;left:"+e.clientX+"px;top:"+e.clientY+"px";
      document.body.appendChild(s);s.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:"translate("+(Math.random()*40-20)+"px,40px) rotate(180deg) scale(.3)",opacity:0}],{duration:700}).onfinish=function(){s.remove()}})}

  /* Gallery Lightbox */
  var lb=document.getElementById("lightbox");
  if(lb){
    var lbImg=document.getElementById("lightboxImg"),
        lbCap=document.getElementById("lightboxCaption"),
        lbClose=document.getElementById("lightboxClose");
    function closeLb(){
      lb.classList.remove("open");
      if(lbImg) lbImg.src="";
    }
    document.querySelectorAll(".polaroid").forEach(function(p){
      p.addEventListener("click",function(){
        var full=p.getAttribute("data-full")||(p.querySelector("img")&&p.querySelector("img").src);
        var cap=p.querySelector("figcaption")?p.querySelector("figcaption").textContent:"";
        if(full&&lbImg){
          lbImg.src=full;
          lbImg.alt=cap;
          if(lbCap) lbCap.textContent=cap;
          lb.classList.add("open");
        }
      });
    });
    if(lbClose) lbClose.addEventListener("click",closeLb);
    lb.addEventListener("click",function(e){if(e.target===lb)closeLb()});
    addEventListener("keydown",function(e){if(e.key==="Escape"&&lb.classList.contains("open"))closeLb()});
  }
})();
