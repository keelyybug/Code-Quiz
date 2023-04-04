var timeEl = document.querySelector("#timer");
var secondsLeft = 75;
var myTimer; 
var score = 0;
var scoreMod = 16.667;


function setTimer() {
    console.log('Enter setTimer');
    var timerInterval = setInterval(function(){
                            secondsLeft--;
                            timeEl.innerHTML = 'Timer 00:' + secondsLeft;
                            if (secondsLeft <= 0) {
                                clearInterval(timerInterval);
                                timeEl.innerHTML = secondsLeft;
                                alert("Time Is Up!!");
                            } 
                        }, 1000);
    
}
//function endQuiz() {
     //if(secondsLeft === 0)

//}

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
const startButton= document.getElementById('start');
const questionContainerEl = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex ;
const questionEl = document.getElementById('questions');
const answerButtonsElement = document.getElementById('answer-btns');
// const startWindow = document.querySelector('.first-window'); // not working ?
const startWindow = document.getElementsByClassName('first-window')[0]; // there is only one 'first-window'

startButton.addEventListener('click', startQuiz);

    //currentQuestionIndex++
//figure out ------------------------------------makes it go to next question
//}
function startQuiz(){
    setTimer();
    console.log('started');
    console.log(startWindow);

    startWindow.classList.add('hide'); // remove directions
    console.log('hidden');
    questionContainerEl.classList.remove('hide'); // show questions
    console.log('reveal');

    // document.getElementById('question-container').removeAttribute('hide');
    
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    console.log('math');
    setNextQuestion();
}

function showQuestion(questions) {
    // set question text
    questionEl.innerHTML = questions['question']
    // get answer buttons
    var listElements = answerButtonsElement.getElementsByClassName('answers');
    // set answers text
    for ( i=0; i < listElements.length; i++) {
        var itm = listElements[i];
        var ans = questions['answers'][i]['text']
        itm.firstChild.nodeValue = ans;
        clearStatusClass(itm);
    }
}

function setNextQuestion(){
    resetState();
    console.log('reset');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    console.log('shuffle');
}

function resetState() {
    var listElements = answerButtonsElement.getElementsByClassName('item');
        for ( i=0; i < listElements.length; i++) {
            var itm = listElements[i];
            itm.firstChild.nodeValue = "";
        }
}

function selectAnswer(index, element) {
    var currQuest = shuffledQuestions[currentQuestionIndex];
    var isCorrect =  currQuest['answers'][index]['correct'] == true;
    if (currentQuestionIndex < questions.length) {
        setStatusClass(element, isCorrect);
        if (isCorrect) {
            score += scoreMod;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) { setNextQuestion(); }
        }
    } 
    
    if (currentQuestionIndex == questions.length) {
        alert ("your Score" + Math.round(score)) //get rid of later
        window.location = "highscores.html";
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('corrct');
    } else {
        element.classList.add('wrong');
        secondsLeft -= 10;
    };
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
