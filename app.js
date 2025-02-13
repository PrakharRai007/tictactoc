let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// now hum turn use karenge jaise ki suppose pehle player ke tap karne par x aata hai to dusre player ke tap karne se o aana chahiye jo ki neeche hai


let turnO = true; /* it means first turn of o if this is true then o print otherwise x print */

// now we apply winning pattern of the tic tac toe which are as follows

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// now humein ab box pe click karne se koi event listener lagana hoga jo ki box pe click karne pe koi activity kar ke dega jo ki game ke hisaab se O ya X hoga  


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {  /* if turn0 is equal to true then box.innerText = "O" */
            box.innerText = "O";
            turnO = false; /* for next chance it will false nahi to baar baar O hi print hoga */
        } else {
            box.innerText = "X";
            turnO = true; /* for next it will be true nahi to baar baar x hi print hoga */
        }
        box.disabled = true; /*it means box ko disable karega taaki same box pe dobara click karke value change n hoye */

        checkWinner(); /*jaise hi box me kch bhi tap hua waise hi check karega winner iska code neeche hai*/
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};





const showWinner = (winner) => {  /* winner is the player who won */
    msg.innerText = `Congratulation, Winner is ${winner}`; /* winner ka nname print karega */
    msgContainer.classList.remove("hide"); /* msg container show karega jo initally print nahi hoga */
    disableBoxes();
   };



const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
    
 if (pos1Val != "" && pos2Val != "" && pos3Val != "") { /* if all this value is empty then it means no one has won */ 
    if (pos1Val === pos2Val && pos2Val === pos3Val) {  /* if all these value is same it means someone is winner */
        showWinner(pos1Val);
    }

 }
}
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);








