const quiz = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks"],
        answer: 0
    },
    {
        question: "CSS is used for?",
        options: ["Logic", "Styling", "Database"],
        answer: 1
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = quiz[current].question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    quiz[current].options.forEach((opt, index) => {
        optionsDiv.innerHTML += 
        `<input type="radio" name="option" value="${index}"> ${opt}<br>`;
    });
}

function nextQuestion() {
    let selected = document.querySelector('input[name="option"]:checked');
    if (selected && selected.value == quiz[current].answer) {
        score++;
    }

    current++;
    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Quiz Completed</h2><h3>Your Score: ${score}</h3>`;
    }
}

loadQuestion();
