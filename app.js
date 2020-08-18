/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var players = document.getElementsByClassName("player");
var currentPlayer = 0;  //? 0 -or- 1

var playerScores = [0,0];
var currentScore = 0;
var scoreLimit = 100;

var previousRoll;

function rndmRoll() {
  var diceCollection = [];
  var diceDisplay = document.getElementsByClassName("dice__die");
  for (var i = 0; i < 2; i++) {
    var rndmNum = Math.ceil(Math.random() * 6);
    diceCollection.push(rndmNum);
    diceDisplay[i].setAttribute("src", "./assets/dice-" + diceCollection[i]+".png");
  }
  return diceCollection;
}

function scoreCheck(score) {
  if (score >= scoreLimit) {
    alert("test");
    newGame();
  }
}

function nextTurn(p) {
  currentScore = 0;
  p.children[2].childNodes[3].textContent = currentScore;
  p.classList.toggle("active");
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  players[currentPlayer].classList.toggle("active"); //? Next Player
}

function newGame() {
  currentPlayer = 0;
  playerScores = [0, 0];
  currentScore = 0;
  previousRoll = undefined;

  for (var i = 0; i < players.length; i++) {
    players[i].children[1].textContent = 0;
    players[i].children[2].childNodes[3].textContent = 0;
    players[i].classList.remove("active");
  }

  players[0].classList.add("active");
}

document.querySelector(".dice").addEventListener("click", function() {
  var dice = rndmRoll();

  for (var i = 0; i < dice.length; i++) {
    if (dice[i] === 6 && previousRoll) {
      if (previousRoll[0] === 6 || previousRoll[1] === 6) {
        //* Erase player's global score, current score and change turns
        playerScores[currentPlayer] = 0;
        nextTurn(players[currentPlayer]);
        return;
      }
    }
    if (dice[i] === 1) {
      //* Erase player's current score and change turns
      nextTurn(players[currentPlayer]);
      return;
    }
  }

  previousRoll = dice;
  currentScore += dice[0] + dice[1];
  players[currentPlayer].children[2].childNodes[3].textContent = currentScore;
});

document.getElementById("max-score").addEventListener("blur", function(e) {
  var maxScore = e.target.value;
  if (maxScore > 0) {
    scoreLimit = maxScore;
  }
});

document.querySelector(".control__hold").addEventListener("click", function() {
  playerScores[currentPlayer] += currentScore;
  players[currentPlayer].children[1].textContent = playerScores[currentPlayer];

  scoreCheck(playerScores[currentPlayer]);
  nextTurn(players[currentPlayer]);
});

document.querySelector(".control__game").addEventListener("click", newGame);
