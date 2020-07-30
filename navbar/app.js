const bars = document.querySelector("#bars");
const nav = document.querySelector("nav");
const pageLinks = document.querySelector(".page-links");
const socialLinks = document.querySelector(".social-links");


// toggling navbar
bars.addEventListener("click",function(){

    pageLinks.classList.toggle("active");
    socialLinks.classList.toggle("active");



});

// closing navbar
document.addEventListener("click",(e)=>{

    console.log(e.target);
    if(!nav.contains(e.target)){
    
    pageLinks.classList.remove("active");
    socialLinks.classList.remove("active");

    }
    
    })