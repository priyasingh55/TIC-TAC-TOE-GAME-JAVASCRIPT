let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset-btn");

// 0 1 2
// 3 4 5
// 6 7 8

let winningPattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

let turnO=true;
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO === true){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;

    checkWinner();
  })
});

// winner check krenege
const checkWinner=()=>{
  for(let pattern of winningPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val !="" && pos2val != "" && pos3val != ""){
      if(pos1val == pos2val && pos2val == pos3val){
        showWinner(pos1val);
      }
    }
  }
};

// winner show krenege
const showWinner=(winner)=>{
  msgContainer.innerText=`Congratulations !! winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBox();

}

// value ko hatane ke liye
const disabledBox=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
// reset krne ke baad enable ho input
const enabledBox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
// reset krne kr liye
const resetGame=()=>{
  boxes.disabled=true;
  enabledBox();
  msgContainer.classList.add("hide");
};

// reset button kaam karane ke liye

resetBtn.addEventListener("click",resetGame);