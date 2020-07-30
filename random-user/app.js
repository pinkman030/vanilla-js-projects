
const content = document.querySelector(".content");
const btn = document.querySelector("#fetch-user");
const img = document.querySelector(".img-box img");
const infoBtns = document.querySelectorAll(".links button");


console.log(infoBtns);


function init(){

    showUser();
}

init();


// random user select function
function randomUser(){

let random = Math.floor(Math.random()*data.length);

content.innerHTML ="";

console.log(random);

img.src =  `images/person-${random+1}.png`;



return data[random];


}


// show user details
function showUser()
{
    let user= randomUser();
 

  
    console.log(user);
 

    content.innerHTML =`<p class="temp">${sentence[0]}</p>
    <p class="user-data">${user[keys[0]]}</p>`;
    
    
 
 
    infoBtns.forEach((infoBtn,i) => {
     
     infoBtn.addEventListener("click",function(){
 
         content.innerHTML ="";
       
             
         content.innerHTML =` <p class="temp">${sentence[i]}</p>
         <p class="user-data">${user[keys[i]]}</p>`;
 
         
     });
 
 
 });
 

}


btn.addEventListener("click",function(){

showUser();


});


