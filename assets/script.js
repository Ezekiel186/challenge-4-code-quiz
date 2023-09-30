var start = document.querySelector("#start")
var timerEl = document.getElementById("timer")

start.addEventListener("click", function() {
    timer()
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
