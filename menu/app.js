const all = document.querySelector("#all");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const shakes = document.querySelector("#shakes");
const dinner = document.querySelector("#dinner");
const container = document.querySelector(".container");

let mealTemplate;

// intialize fun
function init()
{
       
menu.all.forEach((meal) => {
 
    mealTemplate = `
 
<div class="menu-item">

<div class="item-img">
<img src="${meal.img}" alt="">

</div>

<div class="item-info">

    <h4><span class="name">${meal.name}</span> <span class="price">${meal.price}</span></h4>

    <p class="desc">
    ${meal.desc}
    </p>
</div>
</div>

`;


 container.innerHTML += mealTemplate;

});

}

init();



// menu items
function menuItems(items){

    container.innerHTML ="";
    
items.forEach((meal) => {
 
    mealTemplate = `
 
<div class="menu-item">

<div class="item-img">
<img src="${meal.img}" alt="">

</div>

<div class="item-info">

    <h4><span class="name">${meal.name}</span> <span class="price">${meal.price}</span></h4>

    <p class="desc">
    ${meal.desc}
    </p>
</div>
</div>
 
 `;

 container.innerHTML += mealTemplate;

});

}

// all 
all.addEventListener("click",function(){
console.log("all",container) ;

menuItems(menu.all);

});


//breakfast
breakfast.addEventListener("click",function(){
console.log("breakfast") ;
menuItems(menu.breakfast);
   
});

//lunch
lunch.addEventListener("click",function(){
console.log("lunch") ;
menuItems(menu.lunch);    

});

//shakes
shakes.addEventListener("click",function(){
console.log("shakes") ;
menuItems(menu.shakes);
});

//dinner
dinner.addEventListener("click",function(){
console.log("dinner") ;
menuItems(menu.dinner);
});