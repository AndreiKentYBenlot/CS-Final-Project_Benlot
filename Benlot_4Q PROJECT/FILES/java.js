// a cool message for the user🔥🔥🫰
alert("Feel free to answer this simple test! This is about the organization's SDGs: 3 (Good Health and Well-being), 6 (Clean Water and Sanitation), 14 (Life Below Water)");

// Quiz Data (helpful for the other functions)
const quizData = [
    {
        question: "How does improving water waste management contribute to SDG 3 (Good Health and Well-being)?",
        choices: ["A. By increasing electricity consumption", "B. By reducing the prevalence of waterborne diseases", "C. By promoting unhealthy dietary habits", "D. By encouraging the use of chemical fertilizers"],
        correct: 1
    },
    {
        question: "What is a key strategy for achieving SDG 6 (Clean Water and Sanitation) through water waste management?",
        choices: ["A. Discharging untreated wastewater into rivers", "B. Promoting water reuse and recycling", "C. Increasing industrial water consumption", "D. Ignoring water leakages and inefficiencies"],
        correct: 1
    },
    {
        question: "How does reducing marine pollution contribute to SDG 14 (Life Below Water)?",
        choices: ["A. By increasing plastic production", "B. By protecting marine ecosystems and biodiversity", "C. By encouraging overfishing", "D. By dumping hazardous waste into oceans"],
        correct: 1
    },
    {
        question: "What is an effective practice for managing water waste in coastal areas to support SDG 14?",
        choices: ["A. Releasing untreated sewage into the sea", "B. Implementing sustainable aquaculture practices", "C. Increasing the use of single-use plastics", "D. Constructing artificial reefs using toxic materials"],
        correct: 1
    },
    {
        question: "How can improved wastewater treatment facilities contribute to achieving SDG 6?",
        choices: ["A. By reducing access to clean drinking water", "B. By promoting untreated water usage", "C. By ensuring safe and efficient disposal of wastewater", "D. By reducing water quality"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

// loading the first question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.innerText = quizData[currentQuestion].question;
    choicesElement.innerHTML = ""; 

    quizData[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("choice");
        button.onclick = () => checkAnswer(index, button);
        choicesElement.appendChild(button);
    });

    updateButtons();
}

// Checking of answers
function checkAnswer(choiceIndex, button) {
    const correctIndex = quizData[currentQuestion].correct;

    if (choiceIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
}

// Moving to next question (using 'next' button)
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// Submitting the quiz (using 'submit' button)
function submitQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").innerText = "Your Score: " +score+ " out of " +quizData.length;
}

// Restarting the quiz (using 'Restart Quiz' button)
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result-container").classList.add("hidden");
    loadQuestion();
}

// Update button visibility
function updateButtons() {
    document.getElementById("nextButton").style.display = currentQuestion < quizData.length - 1 ? "inline-block" : "none";
    document.getElementById("submitButton").style.display = currentQuestion === quizData.length - 1 ? "inline-block" : "none";
}

// this  starts the quiz when the page loads
window.onload = loadQuestion;