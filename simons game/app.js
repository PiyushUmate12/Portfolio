let gameSequence =[];
let userSequence= [];
let btns =["yellow","red","green","blue"];
let iniHighScore = 0;
let started =false;
let level =0 ;
let body = document.querySelector("body");
let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");
h5.innerText =`High Score is ${iniHighScore}`;
let btn = document.querySelector(".btn");
 document.addEventListener("keypress",function(){
  if(started == false){
  console.log("Game started");
  started = true;

  levelUp();
  }
 });
  function overFlash(){
  body.classList.add("body");
  setTimeout(()=>{
    body.classList.remove("body");
  },250);
 }
 function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(()=>{
    btn.classList.remove("userFlash");
  },250);
 }
 function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },250);
 }
 function levelUp(){
   userSequence = [];
  level++;
  
  h4.innerText=`Level ${level}`;
  let randomNum = Math.floor(Math.random()*4);
  let randColor =btns[randomNum];
  let randBtn = document.querySelector(`.${randColor}`);
  gameFlash(randBtn);
  gameSequence.push(randColor) ;

  
 }

 function check(ind){
  if(userSequence[ind]===gameSequence[ind]){
   if(userSequence.length==gameSequence.length){
    setTimeout(levelUp,1000);
    
   }
  }
  else{
    h4.innerHTML = `Game over! Your Score is <b>${level} <br> Press Any Key To Start`;
    highScore = level;
    if(iniHighScore< highScore){
      h5.innerText = `High Score is ${highScore}`
      iniHighScore = highScore;
    }
    
     overFlash()
     reset();
     
  }



 }

 function btnPress(){
  let btn =this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
userSequence.push(userColor);
check(userSequence.length-1);

 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
  btn.addEventListener("click",btnPress);
 }
 function reset(){
  gameSequence =[];
   userSequence= [];
   started=false;
   level =0 ;
 }