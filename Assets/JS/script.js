const startButton= document.getElementById('start')
const questionContainerEl = document.getElementById('questions')
let shuffledQuestions, currentQuestionIndex
const questionEl = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers-btns')
startButton.addEventListener('click', startQuiz)
//addEventListener('click', () => {
   // currentQuestionIndex++
//figure out ------------------------------------makes it go to next question
//})

function startQuiz(){
    console.log('started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
 
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(event) {
    const selectButton = event.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement).forEach(button=> {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        next
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('corrct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which of the following are NOT JavaScript Data types?',
        answers: [
            {text:'1. String', correct: false},
            {text:'2. Boolean', correct: false},
            {text:'3. Class', correct: true},
            {text:'4. Object', correct: false}
        ]
    },
    {
        question: 'Where should your script.js be inbedded into your HTML?',
        answers: [
            {text:'1. Head', correct: false},
            {text:'2. Footer', correct: false},
            {text:'3. Within a Div', correct: true},
            {text:'4. At the end of the Body', correct: false}
        ]
    },
    {
        question: 'Which symbol is used to comment in JavaScript?',
        answers: [
            {text:'1. // ', correct: false},
            {text:'2. */ ', correct: false},
            {text:'3. +/ ', correct: true},
            {text:'4. ^/ ', correct: false}
        ]
    },
    {
        question: 'Which of the following can be used to call a JS Code Snippet?',
        answers: [
            {text:'1. Trigger Event', correct: false},
            {text:'2. Function/Method', correct: false},
            {text:'3. String', correct: true},
            {text:'4. ID', correct: false}
        ]
    },
    {
        question: 'What is the window object in JavaScript',
        answers: [
            {text:'1. The document root element object', correct: false},
            {text:'2. A frame around the root element object', correct: false},
            {text:'3. An interface to the browser window that holds global variables', correct: true},
            {text:'4. The browsers pop up', correct: false}
        ]
    },
    {
        question: 'Which of the following is the property that is triggered in response to JS error?',
        answers: [
            {text:'1. onexception', correct: false},
            {text:'2. onmessage', correct: false},
            {text:'3. onerror', correct: true},
            {text:'4. onclick', correct: false}
        ]
    }
]

//timer
var timeEl = document.getElementById("time");
var secondsLeft = 75;
var myTimer; 

function setTimer() {
    var timerInterval = setInterval(function(){
    secondsLeft--;
    if (secondsLeft === 0) {
    clearInterval(timerInterval);
    } 
    }, 1000);
    
}