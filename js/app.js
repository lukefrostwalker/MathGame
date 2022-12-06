let box4 = document.querySelector("#box4");
let box3 = document.querySelector("#box3");
let box2 = document.querySelector("#box2");
let box1 = document.querySelector("#box1");
let question = document.querySelector("#question");
let wrong = document.querySelector("#wrong");
let correct = document.querySelector("#correct");
let gameOver = document.querySelector("#gameOver");
let timeRemainingValue = document.querySelector("#timeRemainingValue");
let timer = document.querySelector("#timer");
let scoreValue = document.querySelector("#scoreValue");
let startResetBtn = document.querySelector("#startReset");
startResetBtn.addEventListener("click", startReset);
// box1.addEventListener("click", box1Btn);


let isPlaying = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

function startReset() {
    if(isPlaying === true) {
        location.reload();
    } else {
        isPlaying = true;
        score = 0;
        scoreValue.innerHTML = score;
        timer.style.display = "block";
        timeRemaining = 60;
        timeRemainingValue.innerHTML = timeRemaining;
        gameOver.style.display = "none";
        startResetBtn.innerHTML = "Reset Game";
        startCountdown();
        genQA();
    }
}

for(i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function() {
        // alert("hello")
        console.log(box1.innerHTML)
        console.log(correctAnswer)
    
        if(isPlaying == true) {
            if(this.innerHTML == correctAnswer) {
                score++;
                scoreValue.innerHTML = score;
                wrong.style.display = "none";
                correct.style.display = "block";
                setTimeout(() => {
                    correct.style.display = "none";
                }, 1000);

                genQA();

            } else {
                correct.style.display = "none";
                wrong.style.display = "block";
                timeRemaining--;
                timeRemaining--;
                timeRemaining--;
                timeRemaining--;
                timeRemaining--;
                setTimeout(() => {
                    wrong.style.display = "none";
                }, 1000);
            }
        }
    }
    
}

function startCountdown() {
    action = setInterval (() => {
        timeRemaining -= 1;
        timeRemainingValue.innerHTML = timeRemaining
        if(timeRemaining === 0 || timeRemaining < 0) {
            stopTimer();
            gameOver.style.display = "block";
            gameOver.innerHTML = `<p> Game Over!</p><p> Your score is <strong style="color: black">${score}</strong>.</p>`;
            timer.style.display = "none";
            correct.style.display = "none";
            wrong.style.display = "none";
            box1.innerHTML = ""
            box2.innerHTML = ""
            box3.innerHTML = ""
            box4.innerHTML = ""
            isPlaying = false;
            startResetBtn.innerHTML = "Start Game";
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(action);
}

function genQA() {
    var x = Math.round(Math.random() * 9) + 1;
    var y = Math.round(Math.random() * 9) + 1;
    correctAnswer = x * y;
    question.innerHTML = x + " x " + y;
    var correctPosition = Math.round(Math.random() * 3) + 1;
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer

    var answers = [correctAnswer]; //0 1 3

    for(i = 1; i < 5; i++) {
        if(i != correctPosition) {
            var wrongAnswer;

            do {
                wrongAnswer = (Math.round(Math.random() * 9) + 1) * (Math.round(Math.random() * 9) + 1);
            } while(answers.indexOf(wrongAnswer)>-1)
            
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer)
        }
    } console.log(answers)
}
