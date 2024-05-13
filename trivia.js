document.addEventListener("DOMContentLoaded", function() {
    const game1Button = document.getElementById("game1");
    const game2Button = document.getElementById("game2");

    game1Button.addEventListener("click", function() {
        startGame(1);
    });

    game2Button.addEventListener("click", function() {
        startGame(2);
    });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === "a") {
            revealAnswer();
        }
    });
});

function startGame(gameNumber) {
    const questions = gameNumber === 1 ? game1Questions : game2Questions;
    let score = 0;

    function displayQuestion(index) {
        const questionContainer = document.querySelector(".container");
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.textContent = questions[index].question;
        questionContainer.innerHTML = "";
        questionContainer.appendChild(questionDiv);

        questions[index].options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", function() {
                if (option === questions[index].answer) {
                    score++;
                }
                if (index < questions.length - 1) {
                    displayQuestion(index + 1);
                } else {
                    displayResult(score, questions.length);
                }
            });
            questionContainer.appendChild(button);
        });
    }

    function displayResult(score, totalQuestions) {
        const questionContainer = document.querySelector(".container");
        questionContainer.innerHTML = "";
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.textContent = `Your final score is: ${score}/${totalQuestions}`;
        questionContainer.appendChild(resultDiv);
    }

    displayQuestion(0);
}

function revealAnswer() {
    const currentQuestionDiv = document.querySelector(".question");
    if (currentQuestionDiv) {
        const currentQuestion = currentQuestionDiv.textContent;
        let answer;
        if (game1Questions.some(q => q.question === currentQuestion)) {
            answer = game1Questions.find(q => q.question === currentQuestion).answer;
        } else if (game2Questions.some(q => q.question === currentQuestion)) {
            answer = game2Questions.find(q => q.question === currentQuestion).answer;
        }
        if (answer) {
            const answerDiv = document.createElement("div");
            answerDiv.textContent = `The answer is: ${answer}`;
            currentQuestionDiv.appendChild(answerDiv);
        }
    }
}

const game1Questions = [
    {
        question: "Which Roblox game holds the record for the most concurrent players?",
        options: ["Adopt Me!", "Jailbreak", "MeepCity", "Brookhaven"],
        answer: "Adopt Me!"
    },
    {
        question: "Who is the CEO of Roblox Corporation?",
        options: ["David Baszucki", "Elon Musk", "Mark Zuckerberg", "Tim Sweeney"],
        answer: "David Baszucki"
    },
    {
        question: "What currency is used in Roblox?",
        options: ["Robux", "V-Bucks", "Coins", "Gems"],
        answer: "Robux"
    },
    {
        question: "Which of these is NOT a Roblox game development tool?",
        options: ["Unity", "Roblox Studio", "Lua scripting", "Terrain Editor"],
        answer: "Unity"
    },
    {
        question: "What is the name of the old premium membership in Roblox?",
        options: ["Roblox Premium", "Builders Club", "Robux Plus", "Turbo Membership"],
        answer: "Builders Club"
    }
];

const game2Questions = [
    {
        question: "Who is the developer of Guilty Gear Strive?",
        options: ["Arc System Works", "Capcom", "Bandai Namco", "Square Enix"],
        answer: "Arc System Works"
    },
    {
        question: "Which character is known as the protagonist of Guilty Gear Strive?",
        options: ["Sol Badguy", "Ky Kiske", "May", "Ramlethal Valentine"],
        answer: "Sol Badguy"
    },
    {
        question: "What is the name of the latest installment in the Guilty Gear series?",
        options: ["Guilty Gear Xrd REV 2", "Guilty Gear -Strive-", "Guilty Gear XX Accent Core Plus R", "Guilty Gear Isuka"],
        answer: "Guilty Gear -Strive-"
    },
    {
        question: "Which of these is NOT a gameplay mechanic in Guilty Gear Strive?",
        options: ["Roman Cancel", "Duel Phase", "Wall Break", "Gatling Combo"],
        answer: "Duel Phase"
    },
    {
        question: "Who is the composer of the music for Guilty Gear Strive?",
        options: ["Daisuke Ishiwatari", "Yoko Shimomura", "Nobuo Uematsu", "Mick Gordon"],
        answer: "Daisuke Ishiwatari"
    }
];
