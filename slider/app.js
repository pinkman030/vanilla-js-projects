
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const img = document.querySelector(".img-box img");

const allImgs = [

    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-5.jpg",
];


let index=0; 

if(index <=0 )
        {
            
        prev.style.display= "none";

        }

next.addEventListener("click",function(){

    index++;

    console.log(index);
    if(index >= 4){

        if(index > 0 )
        {
            prev.style.display = "inline-block";
        }

        img.src = allImgs[4];
        
        next.style.display= "none";
        
    }
    else{
        if(index > 0 )
        {
            prev.style.display= "inline-block";
        
        }
        img.src = allImgs[index];

        
        next.style.display= "inline-block";

    }
});


prev.addEventListener("click",function(){

    
    index--;
    console.log(index);

    if(index <= 0){

        img.src = allImgs[0];
        prev.style.display= "none";
    
        if(index >=0 && index <= allImgs.length-1 )
    {
        
        next.style.display= "inline-block";

    }

    }
    else{
        img.src = allImgs[index];
        prev.style.display= "inline-block";
        
        if(index >=0 && index < allImgs.length-1 )
    {
        
        next.style.display= "inline-block";

    }


    }




});