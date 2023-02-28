let r = "rock"
let p = "paper"
let s = "scissors"


   
function game() {
  let choice = Math.random()
  let computerSelection = choice
  let playerSelection = (prompt ("Rock, Paper, or Scissors?")).toLowerCase()
  
  singleRound(playerSelection, computerSelection)
  getComputerChoice()
console.log(choice)
console.log(playerSelection)
console.log(computerSelection)}
 
  for (let singleRound = 0; singleRound < 5; singleRound++)
  
game()

function singleRound (playerSelection, computerSelection){
  console.log(playerSelection)
  console.log(computerSelection)
 
   if ((playerSelection == r && computerSelection > .666) || (playerSelection == p && computerSelection < .333) || (playerSelection == s && (computerSelection > .33 && computerSelection < .666) )) {
    alert ("You win!!!")}
  
   else if ((playerSelection == s && computerSelection < .333 ) || (playerSelection == r && (computerSelection >.33 && computerSelection <.666)) || (playerSelection == p && computerSelection > .666) ) {
    alert ("You lose. Better luck next time.")}

   else {
    alert ("It's a tie!")

   }}

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

