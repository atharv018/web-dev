let user=0;
let comp=0;
let final=0;

const userInput= document.querySelectorAll(".button");
const msg= document.querySelector("#result")

const genCompChoice= ()=> {
    const arr= ["rock", "paper", "sciccors"];
    let indx= Math.floor(Math.random()*3);
    return arr[indx];
}

const finalResult= (final)=>{
    if(final==1){
   msg.innerText= "WIN"
}else if(final==2){
    msg.innerText= "LOSS"
}else{
    msg.innerText= "DRAW. Try again"   
}
}

const scoreBoard= (final)=>{
    const userScore= document.querySelector("#user_score");
    const compScore= document.querySelector("#comp_score");
    if(final==1){
        user++;
       userScore.innerText= user;
     }else if(final==2){
        comp++;
         compScore.innerText= comp;
     }
}

const gameLogic= (id, indx)=>{
    console.log("user choose", id);
    genCompChoice();
    const compChoice= genCompChoice();
    console.log("computer choose", compChoice);
    if(id===compChoice){
        console.log("DRAW");
        final=0;
    }else if(id === "rock"  && compChoice === "sciccors"){
        console.log("WIN")
        final= 1;
    }else if(id === "paper" && compChoice === "rock"){
        console.log("Win")
        ;
        final= 1;
    }else if(id == "sciccors" && compChoice == "paper"){
        console.log("Win")
        ;
        final= 1;
    }else{
        console.log("loose")
        final= 2;
    }
    scoreBoard(final);
    finalResult(final);
}

userInput.forEach((button) =>{
button.addEventListener("click", ()=> {
   let id= button.getAttribute("id");   
    gameLogic(id);
})
})


