var start = document.querySelector("#start")
var timerEl = document.getElementById("timer")
var question1 = document.getElementById("question-1-container")

start.addEventListener("click", function() {
    timer()
    start.classList.add("hide")
    question1.classList.remove("hide")
});

function timer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}

function next() {

}

function selectAnswer() {

}