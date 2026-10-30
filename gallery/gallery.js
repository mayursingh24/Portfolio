/* gallery.js - reveal-on-scroll for the gallery polaroids + scroll progress bar (same logic as js/animations.js).
   Theme toggle and sounds come from ../js/main.js. */
(function(){
  var rm=matchMedia("(prefers-reduced-motion: reduce)").matches,root=document.documentElement;
  var pg=document.getElementById("pg");
  function sc(){var m=root.scrollHeight-root.clientHeight,t=root.scrollTop;pg.style.transform="scaleX("+(m>0?t/m:0)+")"}
  addEventListener("scroll",sc,{passive:true});sc();
  if("IntersectionObserver" in window&&!rm){
    root.classList.add("js");
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
    document.querySelectorAll(".title,.polaroid").forEach(function(el){el.classList.add("rv");io.observe(el)});
  }
})();
