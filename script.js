// NOTE: These variables are being defined a single time when this file is executed.
// Importantly, that means that when you call `choice` later in this file, it will
// only ever surface the value that was returned the first time.
let choice = Math.random();
let r = "rock";
let p = "paper";
let s = "scissors";

const computerSelection = choice

// NOTE: This function is only spanning two lines, because of the `}` after 
// `choice` below. Is that intentional?
function getComputerChoice(choice) {
  return choice}
  console.log (choice)

  if (choice < .333) {
    alert (r)}

  else if (choice > .666) {
    alert (s)
  }
  else {
    alert (p)}


let playerSelection = (prompt ("Rock, Paper, or Scissors?")).toLowerCase()
// I don't think that the variables below are being used?
let rock = .1
let paper= .5
let scissors = .8
console.log(playerSelection)

// Similar to the above, this function only spans the following two lines because
// of the closing `}` after `winner`. I would expect this to error out, since it
// does not look like `winner` is being defined anywhere?
function singleRound (playerSelection, computerSelection){
   return winner}
  
    if ((playerSelection == r && computerSelection > .666) || (playerSelection == p && computerSelection < .333) || (playerSelection == s && (computerSelection > .33 && computerSelection < .666) )) {
     alert ("You win!!!")}
   
    else if ((playerSelection == s && computerSelection < .333 ) || (playerSelection == r && (computerSelection >.33 && computerSelection <.666)) || (playerSelection == p && computerSelection > .666) ) {
     alert ("You lose. Better luck next time.")}

    else {
     alert ("It's a tie!")
    }
  console.log(computerSelection)

// I'd recommend trying to break your functions out so that it is clear what they
// are responsible for - for example if you have a function for "get computer choice", I'd
// expect that it would generate it's random selection and _return_ the appropriate choice,
// either as a string like "rock" or a numeric value `.1` like you are above.
