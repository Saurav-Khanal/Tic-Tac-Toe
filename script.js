let button = document.querySelectorAll("button");
button.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    if (e.target.textContent !== "") {
      return;
    }
    if (e.target.textContent === "") {
      e.target.textContent = "X";
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
  });
});
