// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }
    });
}


// ===============================
// IMAGE CAROUSEL
// ===============================

const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

const slide = document.getElementById("slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

function showSlide(index) {

    if (!slide) return;

    slide.src = images[index];

    const dots =
        document.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= images.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });
}

if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        }

        showSlide(currentSlide);
    });
}

if (slide) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= images.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000);
}


// ===============================
// QUIZ DATA
// ===============================

const quizData = [
{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks Text Markup Language",
"Hyper Tool Markup Language"
],
answer:"Hyper Text Markup Language"
},
{
question:"Which language is used for styling webpages?",
options:["Python","CSS","HTML","Java"],
answer:"CSS"
},
{
question:"Which language adds interactivity?",
options:["JavaScript","HTML","SQL","XML"],
answer:"JavaScript"
},
{
question:"Which symbol is used for IDs in CSS?",
options:[".","#","*","&"],
answer:"#"
},
{
question:"Which company developed JavaScript?",
options:["Microsoft","Google","Netscape","IBM"],
answer:"Netscape"
},
{
question:"Which method selects an element by ID?",
options:[
"querySelector",
"getElementById",
"getElementsByClassName",
"selectById"
],
answer:"getElementById"
},
{
question:"Which keyword declares a variable?",
options:["var","define","create","int"],
answer:"var"
},
{
question:"Which HTML tag is used for links?",
options:["link","a","href","url"],
answer:"a"
},
{
question:"Which CSS property changes text color?",
options:[
"background",
"text-style",
"font",
"color"
],
answer:"color"
},
{
question:"What does DOM stand for?",
options:[
"Document Object Model",
"Data Object Model",
"Document Oriented Model",
"Display Object Management"
],
answer:"Document Object Model"
}
];


// ===============================
// QUIZ APP
// ===============================

const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

const nextQuestionBtn =
document.getElementById("nextQuestion");

const scoreEl =
document.getElementById("score");

const timerEl =
document.getElementById("timer");

const progressBar =
document.getElementById("progressBar");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

let timer;
let timeLeft = 15;

function startTimer() {

    clearInterval(timer);

    timeLeft = 15;

    if (timerEl) {
        timerEl.textContent = timeLeft;
    }

    timer = setInterval(() => {

        timeLeft--;

        if (timerEl) {
            timerEl.textContent = timeLeft;
        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            nextQuestion();
        }

    }, 1000);
}

function updateProgress() {

    if (!progressBar) return;

    const progress =
    (currentQuestion / quizData.length) * 100;

    progressBar.style.width =
    progress + "%";
}

function loadQuestion() {

    if (!questionEl || !optionsEl) return;

    startTimer();

    const q =
    quizData[currentQuestion];

    questionEl.textContent =
    q.question;

    optionsEl.innerHTML = "";

    selectedAnswer = "";

    q.options.forEach(option => {

        const btn =
        document.createElement("button");

        btn.textContent = option;

        btn.classList.add("option-btn");

        btn.addEventListener("click", () => {

            selectedAnswer = option;

            document
            .querySelectorAll(".option-btn")
            .forEach(button => {

                button.style.background = "";
                button.style.color = "";
            });

            btn.style.background =
            "#2563eb";

            btn.style.color =
            "#ffffff";
        });

        optionsEl.appendChild(btn);
    });

    updateProgress();
}

function nextQuestion() {

    if (
        selectedAnswer ===
        quizData[currentQuestion].answer
    ) {
        score++;
    }

    currentQuestion++;

    if (
        currentQuestion <
        quizData.length
    ) {

        loadQuestion();

    } else {

        showResult();
    }
}

function showResult() {

    clearInterval(timer);

    if (questionEl) {
        questionEl.textContent =
        "Quiz Completed 🎉";
    }

    if (optionsEl) {
        optionsEl.innerHTML = "";
    }

    if (nextQuestionBtn) {
        nextQuestionBtn.style.display =
        "none";
    }

    if (scoreEl) {

        scoreEl.innerHTML =
        `Your Score: ${score}/${quizData.length}`;
    }

    localStorage.setItem(
        "quizScore",
        score
    );

    if (progressBar) {
        progressBar.style.width = "100%";
    }
}

if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener(
        "click",
        nextQuestion
    );
}

if (questionEl) {
    loadQuestion();
}


// ===============================
// QUOTES JSON
// ===============================

const quoteBtn =
document.getElementById("quoteBtn");

const quoteText =
document.getElementById("quoteText");

async function getQuote() {

    try {

        const response =
        await fetch("quotes.json");

        if (!response.ok) {
            throw new Error(
                "Quotes file not found"
            );
        }

        const quotes =
        await response.json();

        const randomIndex =
        Math.floor(
            Math.random() * quotes.length
        );

        const quote =
        quotes[randomIndex];

        if (quoteText) {

            quoteText.innerHTML = `
            "${quote.quote}"
            <br><br>
            <strong>
            — ${quote.author}
            </strong>
            `;
        }

    } catch (error) {

        console.error(error);

        if (quoteText) {

            quoteText.textContent =
            "Unable to load quotes.";
        }
    }
}

if (quoteBtn) {

    quoteBtn.addEventListener(
        "click",
        getQuote
    );
}

if (quoteText) {
    getQuote();
}