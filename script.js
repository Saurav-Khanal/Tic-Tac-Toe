let button = document.querySelectorAll("button");
let win = document.getElementById("win");
let restart=document.getElementById("restart");
let gameOver = false;
button.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    if(gameOver){
        return;
    }
    if (e.target.textContent !== "") {
      return;
    }
    if (e.target.textContent === "") {
      e.target.textContent = "X";
    }
     let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winner = winningCombinations.some((combination) => {
      return (
        button[combination[0]].textContent === "X" &&
        button[combination[1]].textContent === "X" &&
        button[combination[2]].textContent === "X"
      );
    });
    if (winner) {
      return win.textContent = "Congratulation,You win";
    }
    let emptyButton = Array.from(button).filter((ele) => {
      return ele.textContent === "";
    });
    console.log(emptyButton);
    let emptyLength = emptyButton.length;
    console.log(emptyLength);
    if (emptyButton.length === 0) {
      return;
    }
    const randomNumber = Math.floor(Math.random() * emptyLength);
    console.log(randomNumber);
    emptyButton[randomNumber].textContent = "O";
    let computerWinner=winningCombinations.some((combination)=>{
        return(
        button[combination[0]].textContent === "O" &&
        button[combination[1]].textContent === "O" &&
        button[combination[2]].textContent === "O"
        )
    })
    if(computerWinner){
     win.textContent="Computer Win,You lose!"
     gameOver=true;
    }
  });
});

restart.addEventListener("click",()=>{
  window.location.reload();
})