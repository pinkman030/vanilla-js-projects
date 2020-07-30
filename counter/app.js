// alert("working js");


const decreaseBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#plus");
const counter = document.querySelector(".counter");

let value = parseInt(counter.textContent);

console.log(value);

function applyColor(val){

if(val === 0)
{
    counter.style.color = "#8f85e7";
    
}
else if( val > 0)
{
    counter.style.color = "#00ff00"

}
else{
    counter.style.color = "#ff0000"

}

}

decreaseBtn.addEventListener("click",function(){
   
    value = parseInt(counter.textContent) - 1;
    counter.textContent = value;
    applyColor(value);

});

resetBtn.addEventListener("click",function(){
    
    value = 0;
    counter.textContent = value;
    applyColor(value);



});

increaseBtn.addEventListener("click",function(){

    value = parseInt(counter.textContent) + 1;
    counter.textContent = value;
    applyColor(value);


});



