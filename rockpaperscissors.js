const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  }
  else if (!userInput === "bomb" || !userInput === "rock" || !userInput === "paper" || !userInput === "scissors") {
    console.log("Use Rock, Paper or Scissors")
  }
  else if (userInput === "bomb") {
    console.log("You Won!");
  }
 
};

const getComputerChoice = () => {
  var compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
}
}

const determineWinner = (userChoice, computerChoice) => {
 if (userChoice === computerChoice) {
    return "This Game is a Tie";
 }
  if (userChoice === "rock"){
    if (computerChoice === "scissors") {
      return "User Wins";
    }
    else {
      return "Computer Wins";
    }
  }
  else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Computer Wins";
    }
    else {
      return "User Wins";
    }
  }
  else if (userChoice === "scissors"){
    if (computerChoice === "paper") {
      return "User Wins";
    }
    else {
      return "Computer Wins";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("User's Choice is: " + userChoice);
  console.log("Computer's Choice is: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
