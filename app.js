let level=0;
let started=false;
let gameSeq=[];
let userSeq=[];
let scores=[];

let btns=['red','green','orange','blue'];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
   if(started==false){
        console.log("game is started ");
        started=true;
        levelUp();
   }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranomIndex=Math.floor(Math.random()*3);
    let randClr=btns[ranomIndex];
    let ranBtn=document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    gameflash(ranBtn);
}
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];

}
function checkSeq(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);

        }
        
    }
    else{
        
        h2.innerHTML=`Game Over!! Your score was ${level}<br>Press any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#fff";
        },150)
        scores.push(level);
        console.log(Math.max(...scores));
        let maxScore=Math.max(...scores);
        
        
        h3.innerText=`Highest score is:${maxScore}`;
        reset();
    }
    
}




function btnPress(){
    console.log(this);
    let butn=this;
    userflash(butn);
    userSeq.push(this.id);
    console.log(userSeq);
    checkSeq(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
