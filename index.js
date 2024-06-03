let gameSeq=[];
let userSeq=[];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started== false){
        console.log("game is started");
        started = true;
    }
  levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelup(){
    userSeq= [];
    
level++;
h2.innerText=` level ${level}`;
let randIndx = Math.floor(Math.random()*3);
let randClr = btns[randIndx];
let randBtn = document.querySelector(`.${randClr}`);
gameSeq.push(randClr);
console.log(gameSeq);
gameFlash(randBtn);

}

function checkAns(idx){
    // console.log("curr level:",level);
    
    if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
      setTimeout(levelup,1000);
      }
    }else{ h2.innerHTML= `Game Over! your score was<b> ${level}</b> <br> Press any key to start.`;
   document.querySelector("body").style.backgroundColor = "red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";
   },150);
    reset();
}
       
    
}
function btnpress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
 gameSeq=[];
 userSeq=[];
 
 level = 0;

}