const addBtn = document.querySelector(".btn");
const textInput = document.querySelector("input[type=text]");
const noftify = document.querySelector(".notify");
const list = document.querySelector("ul");
const msg= document.querySelector(".message");
const clearAll =document.querySelector(".clear-all .btn");


  


function notification(result,message)
{

    if(result === "success")
    {
        noftify.classList.remove("failure");
        noftify.classList.add("success");
        msg.innerText = message;

        setTimeout(function(){ 
              noftify.classList.remove("success");  
        },2500);


    }
    else{
        noftify.classList.remove("success");
        noftify.classList.add("failure");
        msg.innerText = message;
        
        setTimeout(function(){ 
            noftify.classList.remove("failure");  
      },2500);
    
    }


}




function editTodo(list)
{
  
let items=list.querySelectorAll("li");

console.log(items.length);

if(items.length > 0)
{
    items.forEach(item => {

        item.querySelector(".change .edit-btn").addEventListener("click",function(){

            addBtn.innerText = "Edit";
            textInput.value = item.innerText;
            item.remove();
        


           

        });
    });
}

}



function deleteTodo(list)
{
  
let items=list.querySelectorAll("li");

console.log(items.length);

if(items.length > 0)
{
    items.forEach(item => {

        item.querySelector(".change .delete-btn").addEventListener("click",function(){

            item.remove();
            
            notification("failure","Item Successfully deleted");

        });


    });

}





}

function createTodoList()
{
    
    let value = textInput.value;
    if(value === "")
    {
        notification("failure","Please Enter Something !");
        
    }
    else{
        textInput.value="";
        let newItem =  `  <li class="item">${value}
        <span class="change"> <i class="fas fa-edit edit-btn"></i> <i class="fas fa-trash delete-btn"> </i></span>   
        </li>
        `;
        list.innerHTML += newItem;

         if(addBtn.innerText === "Edit")
         {
             addBtn.innerText = "Add";
                notification("success","Item successfully updated");

         }
         else{
            notification("success","New item successfully added");

         }



           



         

        editTodo(list);
        deleteTodo(list);
    }



}



addBtn.addEventListener("click",function(){

    createTodoList();
});


textInput.addEventListener("keypress",function(e){

if(e.key === "Enter")
{
    createTodoList();
}

});


clearAll.addEventListener("click",function(){

list.innerHTML = "";
clearAll.style.opacity = "0";

notification("failure","Deleted all todos");
});



setInterval(() => {
    
    let items = document.querySelectorAll("li");

    let len =items.length;

    if(len > 0)
{
    clearAll.style.opacity = "1";
}
else{
    clearAll.style.opacity = "0";

}

}, 250);