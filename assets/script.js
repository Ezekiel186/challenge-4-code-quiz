var start = document.querySelector("#start");
var timerEl = document.getElementById("timer");
var highscoreEl = document.getElementById("hs");
var question1 = document.getElementById("question-1-container");
var question2 = document.getElementById("question-2-container");
var question3 = document.getElementById("question-3-container");
var question4 = document.getElementById("question-4-container");
var end = document.getElementById("end");
var correct1 = document.querySelector(".correct1");
var correct2 = document.querySelector(".correct2");
var correct3 = document.querySelector(".correct3");
var correct4 = document.querySelector(".correct4");
var timeInterval;
var timeLeft;
var wrong = document.querySelectorAll(".wrong");
var submit = document.getElementById("submit");
var initials = document.getElementById("initials");
var popUP = document.getElementById("pop-up")
var popUPcorrect = document.getElementById("pop-up2")
// console.log(wrong);
start.addEventListener("click", function() {
    timer()
    start.classList.add("hide")
    question1.classList.remove("hide")
});

function timer() {
    timeLeft = 60;
    updateTime();
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            updateTime();
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            endscreen();
        } 
    }, 1000);
}

function updateTime() {
    timerEl.textContent = timeLeft;
}

correct1.addEventListener("click", function() {
    question1.classList.add("hide")
    question2.classList.remove("hide")
    popUPcorrect.classList.remove("hide")
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 1000);
});

correct2.addEventListener("click", function() {
    question2.classList.add("hide")
    question3.classList.remove("hide")
    popUPcorrect.classList.remove("hide")
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 1000);
});

correct3.addEventListener("click", function() {
    question3.classList.add("hide")
    question4.classList.remove("hide")
    popUPcorrect.classList.remove("hide")
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 1000);
});

correct4.addEventListener("click", function() {
    question4.classList.add("hide")
    end.classList.remove("hide")
    clearInterval(timeInterval);
    popUPcorrect.classList.remove("hide")
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 1000);
});



// wrong.addEventListener("click", function() {
//     timeLeft = timeLeft-5;
// });

for (var i=0; i < wrong.length; i++) {
    wrong[i].addEventListener("click", function() {
        timeLeft = timeLeft-5;
        popUP.classList.remove("hide")
        setTimeout(function() {
        popUP.classList.add("hide");
        }, 1000);
        // alert("Wrong Answer")

    });
}

function endscreen() {
    question1.classList.add("hide")
    question2.classList.add("hide")
    question3.classList.add("hide")
    question4.classList.add("hide")
    end.classList.remove("hide")
}

// submit.addEventListener("click", function() {
//     highscoreOnScreen()
// var highscore = submit.value + timeLeft;
//     localStorage.setItem("highscore", JSON.stringify(highscore));
    
//     function highscoreOnScreen() {
//     highscoreEl.textContent = highscore;
// }
// });

submit.addEventListener("click", function() {
    var highscore = initials.value + "= " + timeLeft + " seconds";
    highscoreEl.textContent = highscore;
    initials.value = "";
    localStorage.setItem("highscore", JSON.stringify(highscore));
//     var savedHighscore = localStorage.getItem("highscore");
// if (savedHighscore > highscore) {
//     highscoreEl.textContent = savedHighscore;
// } else if (savedHighscore >! highscore) {
//     highscoreEl.textContent = highscore;
// } else {
    // highscoreEl.textContent = "No highscore saved";
})

var savedHighscore = localStorage.getItem("highscore");
if (savedHighscore) {
    highscoreEl.textContent = savedHighscore;
} else {
    highscoreEl.textContent = "No scores saved";
}



