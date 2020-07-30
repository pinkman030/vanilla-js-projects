// alert("working js");

const container = document.querySelector(".container");
const name = document.querySelector(".user-info h4");
const post = document.querySelector(".user-info span");
const pic = document.querySelector(".user-info img");
const review = document.querySelector(".review-body p");



const allReviews = [

    {
        name:"Prathmesh Dongrikar",
        pic :"images/person-1.png",
        post:"web developer",
        review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rerum itaque labore neque tenetur odit ex debitis quae aperiam! Molestias, modi tempore! Eaque, pariatur? Porro, illum voluptatem. Architecto, nulla magni."
    },
    {
        name:"Atharva Sawant",
        pic :"images/person-2.png",
        post:"app developer",
        review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rerum itaque labore neque tenetur odit ex debitis quae "
    },
    {
        name:"Jenny Patil",
        pic :"images/person-3.png",
        post:"web designer",
        review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rerum itaque labore neque tenetur odit ex debitislla magni."
    },
    {
        name:"Sonali Dongrikar",
        pic :"images/person-4.png",
        post:"Software tester",
        review:"Lorem, ipsum dolor  adipisicing elit. Optio rerum itaque labore neque tenetur odit ex debitis quae aperiam! Molestias, modi tempore! Eaque, pariatur? Porro, illum voluptatem. Architecto, nulla magni."
    },
    {
        name:"Nikhil Dhadve",
        pic :"images/person-5.png",
        post:"CEO of Google",
        review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rerum itaque labore neque teneturtis quae aperiam! Molestias, modi tempore! Eaque, pariatur? Porro, illum voluptatem. Architecto, nulla magni."
    }

];




function displayReview(person)
{
    alldetails = [name , post, pic,review];
    for (let el of alldetails) {
        el.innerHTML = "";
    }

    name.textContent = person.name;
    post.textContent = person.post;
    pic.src = person.pic;
    review.textContent= person.review;
    
}


// on button click display user
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const random = document.querySelector("#surprise-btn")

let i =0;
next.addEventListener("click",function(){

    let length = allReviews.length;
   i=++i;

if(i===length)
{
    i=0;
}

    console.log(length,i);

    displayReview(allReviews[i]);

});


prev.addEventListener("click",function(){

    
    let length = allReviews.length;
   i=--i;

if(i<0)
{
    i=length-1;
}

    console.log(length,i);

    displayReview(allReviews[i]);

});



function randomIndex()

{
    let index= Math.floor(Math.random()*allReviews.length);

    let currReview=i;

if(index === currReview)
{
console.log(index,currReview);

   return randomIndex();
}
else{
    return index;

}

}

random.addEventListener("click",function(){

i = randomIndex();

displayReview(allReviews[i]);
    console.log("random user",i);
});
