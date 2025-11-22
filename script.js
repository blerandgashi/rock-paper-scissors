const rockPaperScissorsBtns = document.querySelectorAll(".choice-btn");

const rockPaperScissorsArr = ['rock', 'paper', 'scissors'];

let playerScoreEl = document.querySelector("#player-score");
let computerScoreEl = document.querySelector("#computer-score");
let resultMsg = document.querySelector("#result-message");

let humanScore = 0;
let computerScore = 0;

let playerChoice = document.querySelector("#player-choice");
let computerChoiceEl = document.querySelector("#computer-choice");

rockPaperScissorsBtns.forEach(btns => {
  btns.addEventListener("click", function(){
    // Human part
    const rpsHuman = btns.dataset.choice;
    playerChoice.textContent = rpsHuman;

    // Computer part
    let randomNumber = Math.floor(Math.random() * rockPaperScissorsArr.length);
    const computerChoices = rockPaperScissorsArr[randomNumber];
    computerChoiceEl.textContent = computerChoices;

    if (rpsHuman === comupterChoices) {
      humanScore;
      computerScore;
    }else if (
      rpsHuman === 'rock' && computerChoices === 'scissors' ||
      rpsHuman === 'paper' && computerChoices === 'rock' ||
      rpsHuman === 'scissors' && computerChoices === 'paper'
    ) {
      humanScore++;
    }else{
      computerScore++;
    }
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
    
    getWinner();
  })
})

function getWinner(){
  if (humanScore === 10 && humanScore > computerScore) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = `
      <p>Human won the game!</p>
    `
    rockPaperScissorsBtns.forEach(btn => btn.disabled = true);
  }else if (computerScore === 10 && computerScore > humanScore) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = `
      <p>Computer won the game!</p>
    `
    rockPaperScissorsBtns.forEach(btn => btn.disabled = true);
  }else if (computerScore === 10 && humanScore === 10) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = `
      <p>The game ended in draw!</p>
    `
    rockPaperScissorsBtns.forEach(btn => btn.disabled = true);
  }
}

document.querySelector("#reset").addEventListener("click", function(){
  rockPaperScissorsBtns.forEach(btns => btns.disabled = false);
  
  playerChoice.textContent = "-";
  computerChoiceEl.textContent = "-";
  
  humanScore = 0;
  computerScore = 0;

  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";

  resultMsg.style.display = "none"
})