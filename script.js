'use strict';
// console.log(document.querySelector('.message').textContent);
let score = 20;
let no = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const displaymess = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displaymess('❌ No number!');
    // document.querySelector('.message').textContent = '❌ No number!';
    console.log(document.querySelector('.message').textContent);
  } else if (guess === no) {
    document.querySelector('.number').textContent = no;
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent =
        '🥇 Highscore:' + highscore;
    }
  } else if (guess != no) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = '💯 Score:' + score;
      displaymess(guess > no ? '📈 Too high!' : '📉 Too low!');
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = '💯 Score:' + 0;
    }
  }
  //   } else if (guess > no) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = '💯 Score:' + score;
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game';
  //       document.querySelector('.score').textContent = '💯 Score:' + 0;
  //     }
  //   } else if (guess < no) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = '💯 Score:' + score;
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game';
  //       document.querySelector('.score').textContent = '💯 Score:' + 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = '💯 Score:' + score;
  no = Math.trunc(Math.random() * 20) + 1;
  console.log(no);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
