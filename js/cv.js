/* cv.js - "Download CV" PDF generation (needs jsPDF, loaded before this file) */
(function(){
  function buildCV(){var d=new window.jspdf.jsPDF({unit:"mm",format:"a4"}),W=210,M=16,y;
    d.setFillColor(255,217,61);d.rect(0,0,W,40,"F");d.setDrawColor(27,27,47);d.setLineWidth(1.2);d.line(0,40,W,40);
    d.setTextColor(27,27,47);d.setFont("helvetica","bold");d.setFontSize(26);d.text("Mayur Singh",M,19);
    d.setFont("helvetica","normal");d.setFontSize(11);d.text("B.Tech AI & ML student | SRMCEM, Lucknow | Aspiring AI/ML Engineer",M,27);
    d.setFontSize(9.5);d.text("Mayur4singhhh@gmail.com  |  github.com/mayursingh24  |  linkedin.com/in/mayursingh24",M,34);y=52;
    function H(t){d.setFont("helvetica","bold");d.setFontSize(13);d.setTextColor(27,27,47);d.text(t,M,y);d.setDrawColor(255,107,157);d.setLineWidth(1);d.line(M,y+1.8,M+d.getTextWidth(t),y+1.8);y+=8}
    function P(t,b){d.setFont("helvetica",b?"bold":"normal");d.setFontSize(10.5);d.setTextColor(40,40,60);var l=d.splitTextToSize(t,W-2*M);d.text(l,M,y);y+=l.length*5+(b?.5:2)}
    H("About");P("B.Tech student specializing in Artificial Intelligence & Machine Learning, passionate about AI, Data Science and software development. I enjoy building practical, user-friendly applications with Python, Flask, Django and MySQL, and my goal is to become an AI/ML Engineer.");y+=2;
    H("Education");P("B.Tech, Artificial Intelligence & Machine Learning",1);P("Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM), Lucknow | 2025 - 2029 | Current CGPA: 8+");y+=2;
    H("Skills");P("Python, Flask, Django, MySQL, C, HTML, CSS");y+=2;
    H("Projects");
    P("NoteLense AI",1);P("Gemini-powered notes analyzer that turns study notes into summaries, short notes and MCQs. github.com/mayursingh24/NOTELENSE-AI");
    P("MyDukaan",1);P("Smart business platform for local shops in India: billing, inventory, analytics and customers. Flowzint Hackathon winner. github.com/mayursingh24/MyDukaan");
    P("MediLens AI",1);P("AI-powered prescription analysis and medication intelligence platform. github.com/mayursingh24/MediLens-AI");
    P("Sentinel AI",1);P("AI-powered criminal network analysis and intelligence system, built as an SIH prototype. Top 1 in SIH internal rounds. github.com/Prashant07-jaiswal/SIH_Prototype_189");y+=2;
    H("Achievements & Roles");P("- Top 1 Winner, SIH Internal Rounds");P("- Flowzint Hackathon Winner (MyDukaan24)");P("- Google Student Ambassador");P("- Coordinator at AlgoZenith, SRMCEM");
    return d.output("arraybuffer")}
  var note=document.getElementById("cvnote");
  document.getElementById("cvbtn").addEventListener("click",async function(){note.textContent="";
    if(!window.jspdf){note.textContent="PDF tool is still loading. Try again in a second.";return}
    var blob=new Blob([buildCV()],{type:"application/pdf"});
    try{
      if(window.claude&&claude.use){var dl=await claude.use("downloads");
        if(!dl){note.textContent="Saving isn’t available in this view. Open the page in your browser to download.";return}
        await dl.save({filename:"Mayur_Singh_CV.pdf",data:blob});note.textContent="CV ready. Check your downloads!";return}
      var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="Mayur_Singh_CV.pdf";document.body.appendChild(a);a.click();a.remove();note.textContent="CV downloaded!"
    }catch(e){if(!e||e.code!=="declined")note.textContent="Couldn’t save the CV. Please try again."}});
})();
