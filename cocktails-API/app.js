const container = document.querySelector(".drinks-container");
const search = document.querySelector(".input-box input");
const drinkDetails = document.querySelector(".drink-details");
const logo = document.querySelector("header h1");

console.log(drinkDetails);


function noResults()
{

container.innerHTML = "";

container.innerHTML = `
<p class=no-result> No results found
<span style='font-size:20px;'>&#128533;</span></p>
` ;


}


function showAllDrinks(drinks){
console.log(drinks);
container.style.display = "flex";

drinkDetails.classList.remove("active");

container.innerHTML = "";
    for(let drink of drinks)
    {

        container.innerHTML +=`
        <div class="drink">
        <h3 class="name">${drink.strDrink}</h3>
        
         <img src="${drink.strDrinkThumb}" alt="${drink.idDrink}" class="item"> 

        </div>
        `;

      




    }

    const items = document.querySelectorAll(".item");

    console.log(items);

        items.forEach(item => {
            
        item.addEventListener("click",function(){
        console.log("clicked",item.alt);

        fetchDetails(item.alt);

        });

});


}

function fetchCocktails(searchItem){


        let value = searchItem;    
        value = value.trim();
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then((res)=>showAllDrinks(res.data.drinks))

        .catch((err)=>{
            console.log(err);
            noResults();

        })
    
}

function showDetails(drink)
{
    console.log(drink);
    container.style.display = "none";

let steps;

steps = drink.strInstructions === null  ? ''    :  `  <li>${drink.strInstructions}</li>`;
steps += drink.strInstructionsDE === null  ? '' : `<li>${drink.strInstructionsDE}</li>`;
steps += drink.strInstructionsES === null  ? '' : `<li>${drink.strInstructionsES}</li>`;
steps += drink.strInstructionsFR === null  ? '' : `<li>${drink.strInstructionsFR}</li>`;

let ingredients ="";
for(let i=1; i<15; i++)
{

    let str = "strIngredient"+i;
    console.log(drink[str]);

    ingredients += drink[str] === null || drink[str] === ""  ? '' :`<li>${drink[str]}</li>`;


}



    drinkDetails.classList.add("active");
search.value = drink.strDrink;
drinkDetails.innerHTML =`
<img src="${drink.strDrinkThumb}" alt="">

<div class="info">
    <h1>${drink.strDrink} </h1>
    <h3>Instructions :</h3>
    <ol class="steps">${steps}</ol>
    <h3>Ingredient :</h3>
    <ol class="ingredients">${ingredients}</ol>
    
</div>

`;



}




function fetchDetails(drinkID)
{

console.log(drinkID);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
        .then((res)=>showDetails(res.data.drinks[0]))

        .catch((err)=>{
            console.log(err);
            noResults();
        })

        
}


// init func


function init()
{
    const letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];

    let index= Math.floor(Math.random()*letters.length);
    
    let letter = letters[index];
    fetchCocktails(letter);
}

init();





// debounce function

const debounce = (func)=>{

let timeoutID;

return (...args)=>{

    
    if(timeoutID)
    {
        clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(()=>{

        func(...args);

    },1000)

}

}


// 
const onInput = (event )=>{

    fetchCocktails(event.target.value);    
}




search.addEventListener("input",debounce(onInput));

logo.addEventListener("click",function(){

init();
search.value= "";

});




