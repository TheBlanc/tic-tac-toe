document.addEventListener('DOMContentLoaded', function() {

var boxes = {
  '1': document.querySelector('#box1'),
  '2': document.querySelector('#box2'),
  '3': document.querySelector('#box3'),
  '4': document.querySelector('#box4'),
  '5': document.querySelector('#box5'),
  '6': document.querySelector('#box6'),
  '7': document.querySelector('#box7'),
  '8': document.querySelector('#box8'),
  '9': document.querySelector('#box9'),
}

var res = {
  '1': document.querySelector('#res1'),
  '2': document.querySelector('#res2'),
  '3': document.querySelector('#res3'),
  '4': document.querySelector('#res4'),
  '5': document.querySelector('#res5'),
  '6': document.querySelector('#res6'),
  '7': document.querySelector('#res7'),
  '8': document.querySelector('#res8'),
  '9': document.querySelector('#res9'),
}


var turn = '0';
var resultHeader;
var result = document.querySelector('.result');
var beer = document.querySelector('#beer')
var newgame = document.querySelector('#newgame')
var game = "ON";

var checkWin = function() {

  if (res1.innerText !== "" && res1.innerText === res2.innerText && res2.innerText === res3.innerText) {
    resultHeader = ("'" + res1.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res4.innerText !== "" && res4.innerText === res5.innerText && res5.innerText === res6.innerText) {
    resultHeader = ("'" + res4.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res7.innerText !== "" && res7.innerText === res8.innerText && res8.innerText === res9.innerText) {
    resultHeader = ("'" + res7.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res1.innerText !== "" && res1.innerText === res4.innerText && res4.innerText === res7.innerText) {
    resultHeader = ("'" + res1.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res2.innerText !== "" && res2.innerText === res5.innerText && res5.innerText === res8.innerText) {
    resultHeader = ("'" + res2.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res3.innerText !== "" && res3.innerText === res6.innerText && res6.innerText === res9.innerText) {
    resultHeader = ("'" + res3.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res1.innerText !== "" && res1.innerText === res5.innerText && res5.innerText === res9.innerText) {
    resultHeader = ("'" + res1.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();

  } else if (res3.innerText !== "" && res3.innerText === res5.innerText && res5.innerText === res7.innerText) {
    resultHeader = ("'" + res3.innerText + "'" + ' WINS!');
    result.innerText = resultHeader;
    gameOver();
  }

}

var draw = function() {
  // User's selection is drawn
  if (this.firstChild.innerText === "") {
    if (turn === 'X') {
      turn = 'O';
      this.firstChild.innerText = turn;
      checkWin();

    } else {
      turn = 'X';
      this.firstChild.innerText = turn;
      checkWin();
    }
  }
  // Computer's random selection is drawn if more than 1 spaces left
  if ( spaceLeft() > 1 && game === "ON") {
    setTimeout(function(){ computersMove(); }, 550);
  }
}

// Choose number between 1 and 9
function computersMove() {
  x = 1;
  while (x === 1) {
    randomSel = Math.ceil(Math.random() * 9);
    compTurn = randomSel.toString();

    if ( res[compTurn].innerText === "" ) {
      if (turn === 'X') {
        turn = 'O';
        res[compTurn].innerText = turn;
        checkWin();

      } else {
        turn = 'X';
        res[compTurn].innerText = turn;
        checkWin();
      }
      x = 0;
    }
  }
}

function spaceLeft() {
  spaces = 0
  Object.values(res).forEach( function(r) {
    if ( r.innerText === "" ) spaces++;
  });
  return spaces;
}

var startGame = function() {
  Object.values(boxes).forEach( function(box) {
    box.addEventListener('click', draw);
  });
}

startGame();

var gameOver = function() {
  beer.style.display = "inline-block"
  newgame.style.visibility = "visible"

  game = "OFF";
  Object.values(boxes).forEach( function(box) {
    box.removeEventListener('click', draw);
  });
}




















});
