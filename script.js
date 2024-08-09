let uwins = 0
let cwins = 0
const gameChoices = ['Bear', 'Ninja', 'Hunter'];
let repeat = 'y'

while (repeat == 'y'){
  //randomly generate computer choice from array
  let cchoice = gameChoices[Math.floor(Math.random() * (gameChoices.length))];

  //determine winner and add 1 to score
  var winner = "";  
  if (uchoice === cchoice){
    winner = "It's a tie!";
  }
  else if (uchoice === "Bear" && cchoice === "Ninja" || uchoice === "Ninja" && cchoice === "Hunter" || uchoice === "Hunter" && cchoice === "Bear"){
    winner = "The computer won!";
    cwins++;
  }
  else if (uchoice === "Bear" && cchoice === "Hunter" || uchoice === "Ninja" && cchoice === "Bear" || uchoice === "Hunter" && cchoice === "Ninja"){
    winner = "You won!";
    uwins++;
  }
  playAgain(); //function call for repeat value
}