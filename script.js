let r = "rock"
let p = "paper"
let s = "scissors"
let playerScore= 0
let computerScore= 0

   
function game() {
  let choice = Math.random()
  let computerSelection = choice
  let playerSelection = (prompt ("Rock, Paper, or Scissors?")).toLowerCase()
  let playRound = singleRound
  
  singleRound(playerSelection, computerSelection)
  getComputerChoice()
console.log(choice)
console.log(playerSelection)
console.log(computerSelection)}
 
  for (let playRound = 0; playRound < 5; playRound++){ 
    game()
    console.log(playerScore)
    console.log(computerScore)
   }
  
function Score(){
  if ((playerScore >= 3) && (playRound=5)) {alert ("You won the game!")}
  else if (computerScore >=3 && (playRound=5)) {alert ("You lose the game.")}
  else{
    alert ("Nobody wins. Try again!")
  }
}
Score()

function singleRound (playerSelection, computerSelection){
  console.log(playerSelection)
  console.log(computerSelection)
  let playerWin = "You win!"
  let computerWin = "You lose!"
  let tie = "It's a tie."
 
   if ((playerSelection == r && computerSelection > .666) || (playerSelection == p && computerSelection < .333) || (playerSelection == s && (computerSelection > .33 && computerSelection < .666) )) {
    playerScore++;
    alert (playerWin)}
  
   else if ((playerSelection == s && computerSelection < .333 ) || (playerSelection == r && (computerSelection >.33 && computerSelection <.666)) || (playerSelection == p && computerSelection > .666) ) {
    computerScore++;
    alert (computerWin)}

   else {
    alert (tie)

   console.log(playerScore)}}

function getComputerChoice(choice) {

  if (choice < .333) {
    return (r)}

  else if (choice > .666) {
    return (s)
  }
  else {
    return (p)}
console.log(getComputerChoice)}



  




  

// I'd recommend trying to break your functions out so that it is clear what they
// are responsible for - for example if you have a function for "get computer choice", I'd
// expect that it would generate it's random selection and _return_ the appropriate choice,
// either as a string like "rock" or a numeric value `.1` like you are above.

