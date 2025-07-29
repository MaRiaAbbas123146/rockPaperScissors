let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "game draw. play again ";
  msg.style.backgroundColor = "indigo";
}

const gameWinner = (userWin, compchoice, userchoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you win. your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lost. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
}
const playGame = (userchoice) => {
  console.log("user choice=", userchoice);
  const compchoice = gencompChoice();
  console.log("computer choice=", compchoice);

  if (userchoice === compchoice) {
    //draw
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    gameWinner(userWin, compchoice, userchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id")
    // console.log("choice was clicked");
    playGame(userchoice);
  });
});
