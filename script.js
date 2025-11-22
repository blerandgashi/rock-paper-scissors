const rockPaperScissorsBtns = document.querySelectorAll(".choice-btn");
const rockPaperScissorsArr = ['rock', 'paper', 'scissors'];

rockPaperScissorsBtns.forEach(btns => {
  btns.addEventListener("click", function(){
    // Human part
    const rps = btns.dataset.choice;
    let playerChoice = document.querySelector("#player-choice");
    playerChoice.textContent = rps

    // Computer part
    let randomNumber = Math.floor(Math.random() * rockPaperScissorsArr.length);
    let computerChoice = document.querySelector("#computer-choice");
    computerChoice.textContent = rockPaperScissorsArr[randomNumber];
  })
})