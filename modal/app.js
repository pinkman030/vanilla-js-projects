const btn = document.querySelector(".btn");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const close = document.querySelector("#close");



btn.addEventListener("click",function(){

    modalContent.classList.add("m-active");
    container.classList.add("c-active");
});

close.addEventListener("click",function(){

    modalContent.classList.remove("m-active");
    container.classList.remove("c-active");

});