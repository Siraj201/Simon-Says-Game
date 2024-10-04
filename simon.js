let user=[];
let game=[];
let btns=["green","red","purple","blue"];
let start=false;
let level=0;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
 
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }
});
function levelup(){
    user=[];
    level++;
    h4.innerText=(`level ${level}`);

     let randindx=Math.floor(Math.random()*3);
      let randcolor=btns[randindx];
      let randbtn=document.querySelector(`.${randcolor}`);
    game.push(randcolor);
    console.log(game);
     gameflash(randbtn);

}
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);
}
function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},100);
}

function checkans(idx){
    // let idx=level-1;
    if(user[idx]===game[idx]){
        if(user.length==game.length){
            setTimeout(levelup,1000);
        }
    }
    else{
         h4.innerHTML=`game over <br>your score was ${level} <br>press any key to start!`;
        document.querySelector("body").style.backgroundColor="red";
         setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
         },200);
         reset();
    }

}

function btnPress(){
    // console.log(this);
    let btn=this;
  
    userflash(btn);
   let usercolor=this.getAttribute("id");
   console.log(usercolor);
    user.push(usercolor);
    console.log("user",user);
    console.log("game",game);
    checkans(user.length-1);
}
let allbtns=document.querySelectorAll(".box");
for(let btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    user=[];
    game=[];
    level=0;
}
