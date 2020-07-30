const btn = document.querySelector("button");
const input = document.querySelector("input");
const paras = document.querySelector(".paras");


btn.addEventListener("click",function(){


    
let x = Math.floor(Math.random()*paragraphs.length);
let y = Math.floor(Math.random()*paragraphs.length);



[paragraphs[x], paragraphs[y]] = [paragraphs[y], paragraphs[x]];

    let totalParas = input.value ;
    paras.innerHTML ="";
    if(totalParas <=5 && totalParas >=0)
    {
        
    for(let i=0; i<totalParas; i++)
    {
        let dummyText = `<p class="para">${paragraphs[i]}</p>`;
        paras.innerHTML += dummyText;
    }

    }
    else{

        paras.innerHTML +=`<p class="para">${paragraphs[0]}</p>`;
    }



});