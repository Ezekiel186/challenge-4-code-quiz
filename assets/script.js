var start = document.querySelector("#start");
var timerEl = document.getElementById("timer");
var highscoreEl = document.getElementById("hs");
var question1 = document.getElementById("question-1-container");
var question2 = document.getElementById("question-2-container");
var question3 = document.getElementById("question-3-container");
var question4 = document.getElementById("question-4-container");
var end = document.getElementById("end");
var tick = document.querySelector(".tick");
var correct1 = document.querySelector(".correct1");
var correct2 = document.querySelector(".correct2");
var correct3 = document.querySelector(".correct3");
var correct4 = document.querySelector(".correct4");
var timeInterval;
var timeLeft;
// var wrong = document.querySelectorAll(".wrong");
var wrong1 = document.querySelectorAll(".wrong1");
var wrong2 = document.querySelectorAll(".wrong2");
var wrong3 = document.querySelectorAll(".wrong3");
var wrong4 = document.querySelectorAll(".wrong4");
var submit = document.getElementById("submit");
var initials = document.getElementById("initials");
var popUP = document.getElementById("pop-up");
var popUPcorrect = document.getElementById("pop-up2");
var wrongSound =  document.getElementById("wrongSound");
var correctSound =  document.getElementById("correctSound");

// console.log(wrong);
start.addEventListener("click", function() {
    timer()
    start.classList.add("hide")
    question1.classList.remove("hide")
    tick.classList.remove("hide")
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
    correctSound.currentTime = 0;
    correctSound.play();
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 500);
});

correct2.addEventListener("click", function() {
    question2.classList.add("hide")
    question3.classList.remove("hide")
    popUPcorrect.classList.remove("hide")
    correctSound.currentTime = 0;
    correctSound.play();
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 500);
});

correct3.addEventListener("click", function() {
    question3.classList.add("hide")
    question4.classList.remove("hide")
    popUPcorrect.classList.remove("hide")
    correctSound.currentTime = 0;
    correctSound.play();
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 500);
});

correct4.addEventListener("click", function() {
    question4.classList.add("hide")
    document.querySelector('.main-container').style.height = '10vh';
    end.classList.remove("hide")
    clearInterval(timeInterval);
    popUPcorrect.classList.remove("hide")
    correctSound.currentTime = 0;
    correctSound.play();
        setTimeout(function() {
        popUPcorrect.classList.add("hide");
        }, 500);
});



// wrong.addEventListener("click", function() {
//     timeLeft = timeLeft-5;
// });

// for (var i=0; i < wrong.length; i++) {
//     wrong[i].addEventListener("click", function() {
//         timeLeft = timeLeft-5;
//         popUP.classList.remove("hide")
//         setTimeout(function() {
//         popUP.classList.add("hide");
//         }, 500);
//         // alert("Wrong Answer")

//     });
// }

for (var i=0; i < wrong1.length; i++) {
    wrong1[i].addEventListener("click", function() {
        timeLeft = timeLeft-5;
        question1.classList.add("hide")
        question2.classList.remove("hide")
        popUP.classList.remove("hide")
        wrongSound.currentTime = 0;
        wrongSound.play();
        setTimeout(function() {
        popUP.classList.add("hide");
        }, 500);
        // alert("Wrong Answer")

    });
}

for (var i=0; i < wrong2.length; i++) {
    wrong2[i].addEventListener("click", function() {
        timeLeft = timeLeft-5;
        question2.classList.add("hide")
        question3.classList.remove("hide")
        popUP.classList.remove("hide")
        wrongSound.currentTime = 0;
        wrongSound.play();
        setTimeout(function() {
        popUP.classList.add("hide");
        }, 500);
        // alert("Wrong Answer")

    });
}

for (var i=0; i < wrong3.length; i++) {
    wrong3[i].addEventListener("click", function() {
        timeLeft = timeLeft-5;
        question3.classList.add("hide")
        question4.classList.remove("hide")
        popUP.classList.remove("hide")
        wrongSound.currentTime = 0;
        wrongSound.play();
        setTimeout(function() {
        popUP.classList.add("hide");
        }, 500);
        // alert("Wrong Answer")

    });
}

for (var i=0; i < wrong4.length; i++) {
    wrong4[i].addEventListener("click", function() {
        timeLeft = timeLeft-5;
        question4.classList.add("hide")
        document.querySelector('.main-container').style.height = '10vh';
        end.classList.remove("hide")
        popUP.classList.remove("hide")
        wrongSound.currentTime = 0;
        wrongSound.play();
        setTimeout(function() {
        popUP.classList.add("hide");
        clearInterval(timeInterval);
        }, 500);
        // alert("Wrong Answer")

    });
}


function endscreen() {
    question1.classList.add("hide")
    question2.classList.add("hide")
    question3.classList.add("hide")
    question4.classList.add("hide")
    document.querySelector('.main-container').style.height = '10vh';
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
    var highscore = initials.value + " = " + timeLeft + " seconds";
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



