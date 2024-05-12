let userwincount = 0;
let computerwincount = 0;

const choices = document.querySelector(".stackimages").querySelectorAll("img");
const resetbutton = document.querySelector(".resetgame");
const msg = document.querySelector(".finalmessge");
const Userscore = document.querySelector(".userscore");
const ComputerScore = document.querySelector(".computerscore");

const computerchoicefn = () => {
  const options = ["rock", "paper", "scissors"];
  const redx = Math.floor(Math.random() * 3);
  return options[redx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };

const showWinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userwincount += 1;
    Userscore.innerText = userwincount;
    msg.innerText = `You win! Your ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  }else{
    computerwincount += 1;
    ComputerScore.innerText = computerwincount;
    msg.innerText = `You lost. ${computerchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
}

function playgame(userchoice) {
  const computerchoice = computerchoicefn();

  if (userchoice === computerchoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissors" ? false : true;
    } else {
      userwin = computerchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, computerchoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

resetbutton.addEventListener("click", () => {
  window.location.reload();
});
