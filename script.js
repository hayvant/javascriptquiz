var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

// Clock started 100sec given
function countdown() {
  document.getElementById('startBtn').addEventListener('click', function () {
    var timeLeft = 100;

  var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  })
  }

countdown();

//Questions, Choices, and Correct answers

    var questions = [ { 
        questions: 'Inside which HTML element do we put the JavaScript?',
        choices: ['script', ' scripting', 'js', 'java'],
        correct: 'script'
    },
    {
        questions: 'What does CSS stand for?',
        choices: ['Cascading style sheet', 'Creative style sheet', 'Colorful style sheet', 'Computer style sheet'],
        correct: 'Cascading style sheet'
    },
    {
        questions: 'Which operator is used to assign a value to a variable?',
        choices: ['+', '-', '=', '/'],
        correct: '='
    },
    {
        questions: 'The external JavaScript file must contain the <script> tag',
        choices: ['True', 'Flase'],
        correct: 'True'
    },
    {
        questions: 'How can you add a comment in a JavaScript?',
        choices: ['/*this is a comment*/', '//this is a comment', '**this is a comment**', '!-- this is a comment --'],
        correct: '//this is a comment'
    },
    {
        questions: 'What is the correct way to write a JavaScript array?',
        choices: ['var colors = "red", "green", "blue"', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'Var colors = [“red”, “blue”, “green”]', 'var colors = (1:"red", 2:"green", 3:"blue")'],
        correct: 'Var colors = [“red”, “blue”, “green”]'
    },
    {
        questions: 'How to write an IF statement in JavaScript?',
        choices: ['if (i==5)', 'if==()', '()if', 'if =>'],
        correct: 'if (i==5)'
    },
    {
        questions: 'How do you create a function in JavaScript?',
        choices: ['function = myFunction()', 'Fun MyFunction$= ', 'Function.Attr()', 'function myFunction()'],
        correct: 'function myFunction()'
    },
    ]


var i = 0
var playerScore = questions[i].correct 

function displayQuestion() {
    document.getElementById('questionmark').innerHTML = ''
    document.getElementById('choices').innerHTML = ''
    var questionmark = document.createElement('h1')

    questionmark.innerHTML = questions[i].questions
    document.getElementById('questionmark').appendChild(questionmark)

    for (let k = 0; k < questions[i].choices.length; k++) {
        var choice = document.createElement('button')
        choice.innerHTML = questions[i].choices[k]
        choice.addEventListener('click', checkAnswer)
        document.getElementById('choices').appendChild(choice)
    }
}

displayQuestion()

function gameOver() {
  questions.innerHTML = 'Thanks for playing, you got ' + playerScore.correct + ' answers correct! ' +
  'you made ' + playerScore.wrong + ' mistakes.';
  choices[i].innerHTML = '';
  // choices[1].innerHTML = '';
  // choices[2].innerHTML = '';
  // choices[3].innerHTML = '';
}

function checkAnswer() {
    if (this.innerHTML !== questions[i].correct) {
        // console.log('U GOT IT WRONG!!')
      var timeLeft = 100
      playerScore.wrong++;
      timeLeft -= 10
    } else if (questions[i + 1] !== undefined) {
        // console.log('U Got IT RIGHT!')
      playerScore.correct++;
      i++;
      displayQuestion();
    } else {
      playerScore.correct++;
      gameOver();
    }
  }

var button = document.getElementById('save')
var highScoreBtn = document.getElementById('showHighScore')

button.addEventListener('click', function(){
  document.getElementById('initials').value
  localStorage.setItem(document.getElementById('initials').value, playerScore)
})

highScoreBtn.addEventListener('click', function(){
  for (var key in localStorage){
  if (typeof localStorage[key] === 'string') {
    var pEl = document.createElement('p')
    pEl.innerHTML = "Name:" + key + 'Score: ' + localStorage[key]
    document.getElementById('highscores').appendChild(pEl)
  }
}
})