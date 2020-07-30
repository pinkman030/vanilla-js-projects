// alert("working js");


const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const color = document.querySelector("h1 .color");
const simple = document.querySelector(".simple");
const hex = document.querySelector(".hex");

let mode = simple.textContent;

console.log(mode);


const nameColors = [
    'slateblue',
    'violet',
    'cyan',
    'skyblue',
    'orange',
    'teal',
    'olive',
    'lime',
    'aqua',
    'maroon',
    'white',
    'pink',
    'tomato'
];



const hexColors = [

    '#f26261','#5151d2','#717171','#81f272','#d628a1','#62b6fd','#eabcbf','#51aa81','#d4ebeb'
];


simple.addEventListener("click",function(){

    mode = simple.textContent;
    console.log(mode);
    hex.classList.remove("active");
    simple.classList.add("active");
    body.style.backgroundColor="white";
color.textContent="white";

});

hex.addEventListener("click",function(){

    mode = hex.textContent;
    console.log(mode);
    simple.classList.remove("active");
    hex.classList.add("active");
    body.style.backgroundColor='#d4ebeb';
color.textContent='#d4ebeb';

});



function randomColorPicker(colorArr){

    const i = Math.floor(Math.random()*colorArr.length);
    console.log(colorArr[i]);
return colorArr[i];
}

btn.addEventListener("click",function(){

    let bgcolor;
if(mode === "Simple")
{
   bgcolor=randomColorPicker(nameColors);
}
else{

    bgcolor = randomColorPicker(hexColors);
}

body.style.backgroundColor=bgcolor;
color.textContent=bgcolor;
});



