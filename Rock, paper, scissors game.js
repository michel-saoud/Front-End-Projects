console.log('hi');

const getUserChoice = function (userInput) {
   userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){return userInput}
   else {console.log('error, please try rock, paper or scissors')}
}

function getComputerChoice () {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){ 
    case 0 : 
      return 'rock'; 
    case 1 : 
      return 'paper';
    case 2 : 
      return 'scissors';
  }
  }

const determineWinner = (userChoice, computerChoice) => {

if (userChoice === computerChoice) { return 'it is a tie'}

if (userChoice === 'rock'){
  if (computerChoice === 'paper')
    {return 'sorry comuputer won'}
    else {return 'congratulations, you won'}}

if (userChoice === 'paper'){
  if (computerChoice === 'scissors')
    {return 'sorry comuputer won'}
    else {return 'congratulations, you won'}}

if (userChoice === 'scissors'){
  if (computerChoice === 'rock')
    {return 'sorry comuputer won'}
    else {return 'congratulations, you won'}}
}

const playGame = () => {
const userChoice = getUserChoice('paper');
const computerChoice = getComputerChoice();
console.log ('You threw: ' + userChoice);
console.log ('Computer threw: ' + computerChoice);
console.log (deternmineWinner(userChoice, computerChoice))
}




