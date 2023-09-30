var start = document.querySelector("#start")
var timerEl = document.getElementById("timer")
var question1 = document.getElementById("question-1-container")
var question2 = document.getElementById("question-2-container")
var question3 = document.getElementById("question-3-container")
var question4 = document.getElementById("question-4-container")
var end = document.getElementById("end")
var correct1 = document.querySelector(".correct1")
var correct2 = document.querySelector(".correct2")
var correct3 = document.querySelector(".correct3")
var correct4 = document.querySelector(".correct4")

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

correct1.addEventListener("click", function() {
    question1.classList.add("hide")
    question2.classList.remove("hide")
});

correct2.addEventListener("click", function() {
    question2.classList.add("hide")
    question3.classList.remove("hide")
});

correct3.addEventListener("click", function() {
    question3.classList.add("hide")
    question4.classList.remove("hide")
});

correct4.addEventListener("click", function() {
    question4.classList.add("hide")
    end.classList.remove("hide")
});