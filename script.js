// ========================================
// RYNEX ZONE 🎮
// JAVASCRIPT — PART 1
// NAVIGATION + PLAYER + QUESTION SYSTEM
// ========================================


// ========================================
// SCREEN CONTROL
// ========================================

function hideAllScreens() {

    const screens = [
        "openingScreen",
        "homeScreen",
        "playerTypeScreen",
        "classScreen",
        "subjectScreen",
        "gameScreen",
        "quizScreen",
        "speedScreen",
        "resultScreen"
    ];

    screens.forEach(function(id) {

        const screen = document.getElementById(id);

        if (screen) {
            screen.style.display = "none";
        }

    });
}


// ========================================
// START
// ========================================

function startGame() {

    hideAllScreens();

    document.getElementById("homeScreen").style.display = "flex";

}


// ========================================
// HOME
// ========================================

function studentMode() {

    hideAllScreens();

    document.getElementById("playerTypeScreen").style.display = "flex";

}


function funMode() {

    hideAllScreens();

    document.getElementById("playerTypeScreen").style.display = "flex";

}


// ========================================
// PLAYER TYPE
// ========================================

let selectedPlayerType = "";

let selectedClass = "";

let selectedSubject = "";


function selectPlayerType(type) {

    selectedPlayerType = type;


    // SCHOOL
    if (type === "school") {

        hideAllScreens();

        document.getElementById("classScreen").style.display = "flex";

        return;
    }


    // COLLEGE
    if (type === "college") {

        hideAllScreens();

        const info =
            document.getElementById("gameInfo");

        if (info) {

            info.innerText =
                "🎓 College Mode • Choose your game!";
        }

        document.getElementById("gameScreen").style.display =
            "flex";

        return;
    }


    // GENERAL
    if (type === "general") {

        hideAllScreens();

        const info =
            document.getElementById("gameInfo");

        if (info) {

            info.innerText =
                "🌍 General Mode • Everyone Welcome!";
        }

        document.getElementById("gameScreen").style.display =
            "flex";

        return;
    }


    // FUN
    if (type === "fun") {

        hideAllScreens();

        const info =
            document.getElementById("gameInfo");

        if (info) {

            info.innerText =
                "🤣 Fun Mode • Let's Play!";
        }

        document.getElementById("gameScreen").style.display =
            "flex";

        return;
    }

}


// ========================================
// CLASS SELECTION
// ========================================

function selectClass(classNumber) {

    selectedClass = classNumber;

    hideAllScreens();


    const title =
        document.getElementById("selectedClassTitle");


    if (title) {

        title.innerText =
            "CLASS " +
            classNumber +
            " • CHOOSE YOUR SUBJECT";

    }


    document.getElementById("subjectScreen").style.display =
        "flex";

}


// ========================================
// SUBJECT SELECTION
// ========================================

function selectSubject(subject) {

    selectedSubject = subject;

    hideAllScreens();


    const info =
        document.getElementById("gameInfo");


    if (info) {

        if (selectedPlayerType === "school") {

            info.innerText =
                "🎓 Class " +
                selectedClass +
                " • " +
                selectedSubject;

        }

        else if (selectedPlayerType === "college") {

            info.innerText =
                "🎓 College • " +
                selectedSubject +
                " • Choose your game!";

        }

        else {

            info.innerText =
                selectedSubject +
                " • Ready for your challenge!";

        }

    }


    document.getElementById("gameScreen").style.display =
        "flex";

}


// ========================================
// QUESTION BANK 🧠
// ========================================

const questionBank = [

    // ==============================
    // GENERAL KNOWLEDGE
    // ==============================

    {
        subject: "General Knowledge",
        question: "What is the capital of India?",
        options: [
            "Mumbai",
            "New Delhi",
            "Kolkata",
            "Chennai"
        ],
        answer: "New Delhi"
    },


    {
        subject: "General Knowledge",
        question: "Which planet is known as the Red Planet?",
        options: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],
        answer: "Mars"
    },


    {
        subject: "General Knowledge",
        question: "How many days are there in a week?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: "7"
    },


    {
        subject: "General Knowledge",
        question: "Which animal is known as the King of the Jungle?",
        options: [
            "Tiger",
            "Lion",
            "Elephant",
            "Bear"
        ],
        answer: "Lion"
    },


    // ==============================
    // SCIENCE
    // ==============================

    {
        subject: "Science",
        question: "What gas do humans need for breathing?",
        options: [
            "Carbon Dioxide",
            "Oxygen",
            "Hydrogen",
            "Nitrogen"
        ],
        answer: "Oxygen"
    },


    {
        subject: "Science",
        question: "How many legs does a spider have?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        answer: "8"
    },


    {
        subject: "Science",
        question: "What is H₂O commonly called?",
        options: [
            "Salt",
            "Water",
            "Oxygen",
            "Hydrogen"
        ],
        answer: "Water"
    },


    {
        subject: "Science",
        question: "Which organ pumps blood around the human body?",
        options: [
            "Brain",
            "Lungs",
            "Heart",
            "Kidney"
        ],
        answer: "Heart"
    },


    // ==============================
    // MATHEMATICS
    // ==============================

    {
        subject: "Mathematics",
        question: "What is 7 × 8?",
        options: [
            "54",
            "56",
            "64",
            "48"
        ],
        answer: "56"
    },


    {
        subject: "Mathematics",
        question: "What is 100 ÷ 10?",
        options: [
            "5",
            "10",
            "20",
            "100"
        ],
        answer: "10"
    },


    {
        subject: "Mathematics",
        question: "What is 15 + 25?",
        options: [
            "30",
            "35",
            "40",
            "45"
        ],
        answer: "40"
    },


    // ==============================
    // ENGLISH
    // ==============================

    {
        subject: "English",
        question: "Which word is a noun?",
        options: [
            "Run",
            "Beautiful",
            "Book",
            "Quickly"
        ],
        answer: "Book"
    },


    {
        subject: "English",
        question: "What is the opposite of 'Hot'?",
        options: [
            "Warm",
            "Cold",
            "Fire",
            "Heat"
        ],
        answer: "Cold"
    },


    // ==============================
    // SOCIAL SCIENCE
    // ==============================

    {
        subject: "Social Science",
        question: "How many continents are there?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: "7"
    },


    {
        subject: "Social Science",
        question: "Which is the largest ocean?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: "Pacific Ocean"
    },


    // ==============================
    // COLLEGE QUESTIONS 🎓
    // ==============================

    {
        subject: "College General",
        question: "Which language is mainly used to structure web pages?",
        options: [
            "HTML",
            "Python",
            "SQL",
            "C++"
        ],
        answer: "HTML"
    },


    {
        subject: "College General",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        answer: "Central Processing Unit"
    },


    {
        subject: "College Science",
        question: "What is the basic unit of life?",
        options: [
            "Atom",
            "Cell",
            "Tissue",
            "Organ"
        ],
        answer: "Cell"
    },


    {
        subject: "College Mathematics",
        question: "What is the derivative of x²?",
        options: [
            "x",
            "2x",
            "x²",
            "2"
        ],
        answer: "2x"
    },


    {
        subject: "College English",
        question: "Which word is a synonym of 'rapid'?",
        options: [
            "Slow",
            "Fast",
            "Weak",
            "Late"
        ],
        answer: "Fast"
    },


    {
        subject: "College Social Science",
        question: "What is democracy?",
        options: [
            "Rule by one person",
            "Rule by the people",
            "Rule by the army",
            "Rule by a king"
        ],
        answer: "Rule by the people"
    }

];


// ========================================
// QUESTION VARIABLES
// ========================================

let quizQuestions = [];

let currentQuestionIndex = 0;

let quizScore = 0;


// ========================================
// SHUFFLE
// ========================================

function shuffleArray(array) {

    const shuffled = [...array];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }


    return shuffled;

}


// ========================================
// GET QUESTIONS
// ========================================

function getQuestionsForPlayer() {

    let availableQuestions = [];


    // COLLEGE
    if (selectedPlayerType === "college") {

        availableQuestions =
            questionBank.filter(function(item) {

                return item.subject.startsWith("College");

            });

    }


    // SCHOOL / GENERAL
    else {

        availableQuestions =
            questionBank.filter(function(item) {

                return item.subject === selectedSubject;

            });

    }


    // If not enough questions,
    // use all suitable questions

    if (availableQuestions.length < 5) {

        if (selectedPlayerType === "college") {

            availableQuestions =
                questionBank.filter(function(item) {

                    return item.subject.startsWith("College");

                });

        }

        else {

            availableQuestions =
                questionBank;

        }

    }


    return shuffleArray(
        availableQuestions
    );

}


// ========================================
// START QUIZ BATTLE
// ========================================

function startQuizBattle() {

    hideAllScreens();


    quizScore = 0;

    currentQuestionIndex = 0;


    quizQuestions =
        getQuestionsForPlayer()
        .slice(0, 5);


    document.getElementById("quizScreen").style.display =
        "flex";


    showQuestion();

}
// ========================================
// RYNEX ZONE 🎮
// JAVASCRIPT — PART 2A
// QUIZ SYSTEM + RESULT
// ========================================


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    const current =
        quizQuestions[currentQuestionIndex];

    if (!current) {
        finishQuiz();
        return;
    }

    const questionText =
        document.getElementById("questionText");

    const answerContainer =
        document.getElementById("answerContainer");

    const questionNumber =
        document.getElementById("quizQuestionNumber");

    const scoreText =
        document.getElementById("quizScore");

    const nextButton =
        document.getElementById("nextQuestionBtn");


    questionText.innerText =
        current.question;


    questionNumber.innerText =
        "QUESTION " +
        (currentQuestionIndex + 1) +
        " / " +
        quizQuestions.length;


    scoreText.innerText =
        "SCORE: " + quizScore;


    answerContainer.innerHTML = "";

    nextButton.style.display = "none";


    // CREATE ANSWER BUTTONS
    current.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.className =
            "answer-btn";

        button.type = "button";

        button.innerText =
            option;


        button.onclick = function() {

            checkAnswer(
                option,
                button
            );

        };


        answerContainer.appendChild(button);

    });


    // PROGRESS BAR
    const progress =
        document.getElementById(
            "quizProgressBar"
        );


    if (progress) {

        const percentage =
            (
                currentQuestionIndex /
                quizQuestions.length
            ) * 100;


        progress.style.width =
            percentage + "%";

    }

}


// ========================================
// CHECK ANSWER
// ========================================

function checkAnswer(
    selectedAnswer,
    selectedButton
) {

    const current =
        quizQuestions[currentQuestionIndex];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    // DISABLE ALL ANSWERS
    buttons.forEach(function(button) {

        button.disabled = true;

    });


    // CORRECT ANSWER
    if (
        selectedAnswer ===
        current.answer
    ) {

        quizScore++;


        selectedButton.classList.add(
            "correct-answer"
        );

    }


    // WRONG ANSWER
    else {

        selectedButton.classList.add(
            "wrong-answer"
        );


        // SHOW CORRECT ANSWER
        buttons.forEach(function(button) {

            if (
                button.innerText ===
                current.answer
            ) {

                button.classList.add(
                    "correct-answer"
                );

            }

        });

    }


    document.getElementById(
        "quizScore"
    ).innerText =
        "SCORE: " + quizScore;


    document.getElementById(
        "nextQuestionBtn"
    ).style.display =
        "block";

}


// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    currentQuestionIndex++;

    showQuestion();

}


// ========================================
// FINISH QUIZ 🏆
// ========================================

function finishQuiz() {

    hideAllScreens();


    const resultScreen =
        document.getElementById(
            "resultScreen"
        );


    if (resultScreen) {

        resultScreen.style.display =
            "flex";

    }


    const finalScore =
        document.getElementById(
            "finalScore"
        );


    if (finalScore) {

        finalScore.innerText =
            quizScore +
            " / " +
            quizQuestions.length;

    }


    const message =
        document.getElementById(
            "resultMessage"
        );


    if (!message) {
        return;
    }


    // PERFECT SCORE
    if (
        quizScore ===
        quizQuestions.length
    ) {

        message.innerText =
            "🏆 YOU WON! PERFECT SCORE! 🔥";

        createWinnerEffect();

    }


    // GOOD SCORE
    else if (
        quizScore >=
        Math.ceil(
            quizQuestions.length / 2
        )
    ) {

        message.innerText =
            "🎉 Great job! You are a Champion!";

    }


    // TRY AGAIN
    else {

        message.innerText =
            "💪 Nice try! Play again and beat your score!";

    }

}


// ========================================
// WINNER EFFECT 🏆✨
// ========================================

function createWinnerEffect() {

    const resultScreen =
        document.getElementById(
            "resultScreen"
        );


    if (!resultScreen) {
        return;
    }


    // PREVENT DUPLICATE WINNER
    if (
        document.getElementById(
            "winnerEffect"
        )
    ) {

        return;

    }


    const winner =
        document.createElement("div");


    winner.id =
        "winnerEffect";


    winner.innerHTML = `
        <div class="winner-trophy">🏆</div>

        <div class="winner-title">
            YOU WON!
        </div>

        <div class="winner-stars">
            ✨ ⭐ ✨
        </div>
    `;


    resultScreen.prepend(
        winner
    );

}


// ========================================
// PLAY AGAIN
// ========================================

function restartQuiz() {

    const winner =
        document.getElementById(
            "winnerEffect"
        );


    if (winner) {

        winner.remove();

    }


    startQuizBattle();

}


// ========================================
// BACK TO GAMES
// ========================================

function backToGames() {

    hideAllScreens();


    const winner =
        document.getElementById(
            "winnerEffect"
        );


    if (winner) {

        winner.remove();

    }


    document.getElementById(
        "gameScreen"
    ).style.display =
        "flex";

}
// ========================================
// RYNEX ZONE 🎮
// JAVASCRIPT — PART 2B
// SPEED ANSWER + OTHER GAMES + FINAL SETUP
// ========================================


// ========================================
// SPEED ANSWER ⚡
// ========================================

let speedQuestions = [];

let speedQuestionIndex = 0;

let speedScore = 0;

let speedTime = 10;

let speedTimerInterval = null;


// ========================================
// START SPEED ANSWER
// ========================================

function startSpeedAnswer() {

    hideAllScreens();

    speedQuestions =
        getQuestionsForPlayer().slice(0, 5);

    speedQuestionIndex = 0;

    speedScore = 0;

    document.getElementById(
        "speedScreen"
    ).style.display = "flex";

    showSpeedQuestion();
}


// ========================================
// SHOW SPEED QUESTION
// ========================================

function showSpeedQuestion() {

    clearInterval(
        speedTimerInterval
    );


    const current =
        speedQuestions[
            speedQuestionIndex
        ];


    if (!current) {

        finishSpeedGame();

        return;
    }


    document.getElementById(
        "speedQuestionNumber"
    ).innerText =
        "QUESTION " +
        (speedQuestionIndex + 1) +
        " / " +
        speedQuestions.length;


    document.getElementById(
        "speedScore"
    ).innerText =
        "SCORE: " +
        speedScore;


    document.getElementById(
        "speedQuestion"
    ).innerText =
        current.question;


    const container =
