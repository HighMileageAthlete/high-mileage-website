const button=document.querySelector(".menu"),nav=document.querySelector("nav");
button.addEventListener("click",()=>{const open=nav.classList.toggle("open");button.setAttribute("aria-expanded",open);button.textContent=open?"×":"☰"});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");button.textContent="☰";button.setAttribute("aria-expanded","false")}));
document.getElementById("year").textContent=new Date().getFullYear();