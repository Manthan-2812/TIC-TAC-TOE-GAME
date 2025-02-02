//STEP 1 =>
let boxes = document.querySelectorAll(".box");
let rstbtn=document.querySelector(".button");
let msg=document.querySelector("#msg");
let newgame=document.querySelector(".newbtn");
let container=document.querySelector(".msg-container");
let turnO= true;
//STEP 2 =>
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//STEP 7 => 
const resetgame=(box)=>{
    turnO=true;
    enableBoxes();
    container.classList.remove("hide");
    msg.innerText="";
    
   
}
//STEP 3 =>
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("THE BOX WAS CLICKED ");
       // box.innerText="HI";
        if(turnO===true){
            box.innerText="O"
           // box.style.backgroundColor="yellow";
            turnO=false;
        }else{
            box.innerText="X";
           // box.style.backgroundColor="white";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
//STEP 6 =>
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
       
    }
}
// STEP 5 =>
const showWinner=(winner)=>{
   msg.innerText= `CONGRATURATION,WINNER IS ${winner} `;
   container.classList.remove("hide");
   disableBoxes();
};
//STEP 4 => 
const checkWinner = () =>{
    for (let pattern of winpatterns){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
    

        
     if(pos1 !== "" && pos2 !== "" && pos3 !==""){
        if(pos1===pos2 && pos2===pos3){
            console.log("CONGRATULATIONS YOU WON",pos1);
            showWinner(pos1);
        }
     }
    }
}
//STEP 8 =>
newgame.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);