 


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
 
    let msg = "";
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    if((h === 12 || h < 7) && session === "PM" )
    {   
        msg = "Good Afternoon, ";
          

    // greet.classList.remove("night-text");
    // nameinput.classList.remove("night-text");
    }
    else if((h  === 5 || h< 12) && session ==="AM" ){
    msg="Good Morning, ";
  

    // greet.classList.remove("night-text");
    // nameinput.classList.remove("night-text");
    
    // document.querySelector(".container").style.backgroundImage= "url(\'https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\')"   

    }
    else if((h  === 6 || h < 9) && session ==="PM"){
        msg="Good Evening, ";
  

        // greet.classList.remove("night-text");
        // nameinput.classList.remove("night-text");
    }
    else{
    msg="Good Night, ";

    currTime =document.querySelector(".myclock .time");
    // console.log(currTime);
    greet = document.querySelector(".msg");
    nameinput = document.querySelector(".msg  input");
    // console.log(nameinput);

    

    // greet.classList.add("night-text");
    // nameinput.classList.add("night-text");

// currTime.classList.add("night");


//      document.querySelector(".container").style.backgroundImage= "url(\'https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80\')"   
// |
    }

    let time = h + ":" + m;

    document.querySelector(".time").innerHTML =  `${time}<span class="session">${session}</span>`;
    document.querySelector(".greet").innerText = `${msg}`;
    
    setTimeout(showTime, 1000);



    // console.log(time);
}

showTime();



function showQuotes()
{

    let quotes =[

        "\" Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.\"  ― K\’wan",

        " \" Everything comes to him who hustles while he waits.\"― Thomas Edison",

        "\" Invest in your dreams. Grind now. Shine later.\"  – Unknown",
        
        "\" Some people want it to happen, some wish it would happen, others make it happen.\"  – Michael Jordan",
        
        "\" Great things are done by a series of small things brought together\"  – Vincent Van Gogh"

    ];


let randomindex = Math.floor(Math.random()*quotes.length);


document.querySelector(".quotes").innerHTML = `
<blockquote>
${quotes[randomindex]}
</blockquote>`;


setTimeout(showQuotes,20000);

}


showQuotes();