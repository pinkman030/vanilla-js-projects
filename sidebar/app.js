const body = document.querySelector("body");
const bars = document.querySelector("#bars");
const sidebar = document.querySelector("nav");
const closebar = document.querySelector("#close .btn");


closebar.addEventListener("click",function(){

    sidebar.classList.remove("active");
    body.classList.remove("between");


});


bars.addEventListener("click",function(){

    sidebar.classList.toggle("active");
    body.classList.toggle("between");


});
