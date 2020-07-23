const ans = document.querySelectorAll(".ans");
const btns = document.querySelectorAll(".btn i");

btns.forEach((el,i) => {
    
   el.addEventListener("click",function(){

    ans[i].classList.toggle("ans-active");
    if(ans[i].classList.contains("ans-active"))
    {
     el.classList.replace("fa-plus-square","fa-minus-square");

    }
    else{
     el.classList.replace("fa-minus-square","fa-plus-square");

    }

   }) ;
});





