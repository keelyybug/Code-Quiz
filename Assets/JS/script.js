var timeEl = document.querySelector("#timer");
var secondsLeft = 75;
var myTimer; 

function setTimer() {
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
    timeEl.innerHTML = secondsLeft;
    clearInterval(timerInterval)
    } 
    }, 1000);
    
}

const questions = [
    {      //1
        question: 'Which of the following are NOT JavaScript Data types?',
        answers: [
            {text:'1. String', correct: false},
            {text:'2. Boolean', correct: false},
            {text:'3. Class', correct: true},
            {text:'4. Object', correct: false}
        ]
    },
    {      //2
        question: 'Where should your script.js be inbedded into your HTML?',
        answers: [
            {text:'1. Head', correct: false},
            {text:'2. Footer', correct: false},
            {text:'3. Within a Div', correct: false},
            {text:'4. At the end of the Body', correct: true}
        ]
    },
    {     //3
        question: 'Which symbol is used to comment in JavaScript?',
        answers: [
            {text:'1. // ', correct: true},
            {text:'2. */ ', correct: false},
            {text:'3. +/ ', correct: false},
            {text:'4. ^/ ', correct: false}
        ]
    },
    {    //4
        question: 'Which of the following can be used to call a JS Code Snippet?',
        answers: [
            {text:'1. Trigger Event', correct: false},
            {text:'2. Function/Method', correct: true},
            {text:'3. String', correct: false},
            {text:'4. ID', correct: false}
        ]
    },
    {      //5
        question: 'What is the window object in JavaScript',
        answers: [
            {text:'1. The document root element object', correct: false},
            {text:'2. A frame around the root element object', correct: false},
            {text:'3. An interface to the browser window that holds global variables', correct: true},
            {text:'4. The browsers pop up', correct: false}
        ]
    },
    {      //6
        question: 'Which of the following is the property that is triggered in response to JS error?',
        answers: [
            {text:'1. onexception', correct: false},
            {text:'2. onmessage', correct: false},
            {text:'3. onerror', correct: true},
            {text:'4. onclick', correct: false}
        ]
    }
]
const startButton= document.querySelector('#start');
const questionContainerEl = document.getElementById('#question-container');
//let shuffledQuestions, currentQuestionIndex ;
const questionEl = document.querySelector('#questions');
const answerButtonsElement = document.querySelector('#answer-btns');
const startWindow = document.querySelector('.first-window');
startButton.addEventListener('click', startQuiz);

    //currentQuestionIndex++
//figure out ------------------------------------makes it go to next question
//}
function startQuiz(){
    setTimer();
    console.log('started');
    console.log(startButton);
    startWindow.classList.add('hide');
    console.log('hidden');
    document.getElementById('question-container').removeAttribute('hide');
    console.log('reveal');
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    console.log('math');
    setNextQuestion();
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function setNextQuestion(){
    resetState();
    console.log('reset');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    console.log('shuffle');
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild;
        (answerButtonsElement.firstChild);
    };
}

function selectAnswer(event) {
    const selectButton = event.target;
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement).forEach(button=> {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        setNextQuestion();
    };
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('corrct');
    } else {
        element.classList.add('wrong');
    };
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
