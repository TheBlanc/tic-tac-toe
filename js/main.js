document.addEventListener('DOMContentLoaded', function() {

var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');

var res1 = document.querySelector('#res1');
var res2 = document.querySelector('#res2');
var res3 = document.querySelector('#res3');
var res4 = document.querySelector('#res4');
var res5 = document.querySelector('#res5');
var res6 = document.querySelector('#res6');
var res7 = document.querySelector('#res7');
var res8 = document.querySelector('#res8');
var res9 = document.querySelector('#res9');


var turn = '0';

var checkWin = function() {
  if (res1.innerText !== "" && res1.innerText === res2.innerText && res2.innerText === res3.innerText) {
    console.log(res1.innerText + ' WINS!');
  
  } else if (res4.innerText !== "" && res4.innerText === res5.innerText && res5.innerText === res6.innerText) {
    console.log(res4.innerText + ' WINS!');

  } else if (res7.innerText !== "" && res7.innerText === res8.innerText && res8.innerText === res9.innerText) {
    console.log(res7.innerText + ' WINS!');

  } else if (res1.innerText !== "" && res1.innerText === res4.innerText && res4.innerText === res7.innerText) {
    console.log(res1.innerText + ' WINS!');

  } else if (res2.innerText !== "" && res2.innerText === res5.innerText && res5.innerText === res8.innerText) {
    console.log(res2.innerText + ' WINS!');

  } else if (res3.innerText !== "" && res3.innerText === res6.innerText && res6.innerText === res9.innerText) {
    console.log(res3.innerText + ' WINS!');

  } else if (res1.innerText !== "" && res1.innerText === res5.innerText && res5.innerText === res9.innerText) {
    console.log(res1.innerText + ' WINS!');

  } else if (res3.innerText !== "" && res3.innerText === res5.innerText && res5.innerText === res7.innerText) {
    console.log(res3.innerText + ' WINS!');
  }
}

var draw = function() {
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
}




box1.addEventListener('click', draw);
box2.addEventListener('click', draw);
box3.addEventListener('click', draw);
box4.addEventListener('click', draw);
box5.addEventListener('click', draw);
box6.addEventListener('click', draw);
box7.addEventListener('click', draw);
box8.addEventListener('click', draw);
box9.addEventListener('click', draw);




















});
