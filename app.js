gameSeq = [];
userSeq = [];

btns = ["red", "yellow", "green", "purple"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");
document.addEventListener("keypress", function() {
    if(started==false)
    {
        console.log("started");
        started=true;

        levelUp();
    }
    
});


function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}


function levelUp(btn)
{
    userSeq=[];
    level++;
    h2.innerText = `Level - ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    console.log(gameSeq);
    btnFlash(randBtn);    
}

function checkAns(idx)
{
    console.log("Curr Level : ",level);
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over!! Your Score is <b>${level-1}</b><br> Press any key to restart`;
        body.style.backgroundColor="red";
        setTimeout(function() {
            body.style.backgroundColor="black";
            reset();
        }, 250);
        
    }
}


function btnPress()
{
    let btn = this;
    btnFlash(btn);
   let  userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   
   checkAns(userSeq.length-1);

}



let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click", btnPress);
}


function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}