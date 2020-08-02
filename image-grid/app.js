const main = document.querySelector(".container");
const modal = document.querySelector(".modal");
const pic = document.querySelector(".modal .modal-content img");
const closeBtn = document.querySelector("#close");

const frames = document.querySelectorAll(".container > div >img");


frames.forEach(frame => {
    
frame.addEventListener("click",function(){

    modal.classList.add("show-modal");
    pic.classList.add("clicked");




console.log(frame.src);
pic.src = frame.src;
pic.style.transition = "opacity 1s ease-in";

pic.style.opacity="1";



    

});

});







closeBtn.addEventListener("click",function(){


    modal.classList.remove("show-modal");
    modal.classList.remove("clicked");

});