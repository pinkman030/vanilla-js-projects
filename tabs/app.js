const btns = document.querySelectorAll(".btn");
const history = document.querySelector("#history");
const vision = document.querySelector("#vision");
const goals = document.querySelector("#goals");
const para = document.querySelector(".para");


for(let btn of btns)
{

    btn.addEventListener("click",function(){
        for(let btn of btns)
        {   

        btn.classList.remove("active-btn");
            
        }

       
        btn.classList.add("active-btn");
    });

}

let tag = 'History';

let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam. Et facere officia ullam distinctio sit, provident exercitationem quis voluptates esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam. Et fatio sit, provident exercitationem quis voluptates esse.';

function addContent(tag,content)
{

    para.innerHTML =`
    <h3>${tag}</h3>
    <p>
        ${content}
    </p>

    `;

}

addContent(tag,content);


history.addEventListener("click",function(){

console.log("history");
content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam. Et facere officia ullam distinctio sit, provident exercitationem quis voluptates esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam. Et fatio sit, provident exercitationem quis voluptates esse.';

addContent("History",content);

});


vision.addEventListener("click",function(){

    console.log("vision");
    content ='Et facere officia ullam distinctio sit, provident exercitationem quis voluptates esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam. Et faonsectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam.consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam.';
addContent("Vision",content);
    
    });


    
goals.addEventListener("click",function(){

    console.log("goals");
    content =' amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullamEt facere officia ullam distinctio sit, provident exercitationem quis voluptates esse.Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam.consectetur adipisicing elit. Ratione dolor maxime sapiente eos itaque quibusdam earum aspernatur et ullam.';
addContent("Goals",content);
    
    });