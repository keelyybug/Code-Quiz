const startButtonEl= document.querySelector('#start');
const questionContainerEl = document.getElementById('#question-container');
//let shuffledQuestions, currentQuestionIndex ;
const questionEl = document.querySelector('#questions');
const answerButtonsElement = document.querySelector('#answer-btns');
const startWindow = document.querySelector('.first-window');
startButtonEl.addEventListener('click', startQuiz);

    //currentQuestionIndex++
//figure out ------------------------------------makes it go to next question
//}
function startQuiz(){
    setTimer();
    console.log('started');
    console.log(startButtonEl);

    startWindow.classList.add('hide');
    console.log('hidden');

    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    console.log('math')

    document.getElementById('question-container').removeAttribute('hide');
    console.log('reveal');

    setNextQuestion();
}
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}
function setNextQuestion(){
    resetState()
    console.log('reset')
    showQuestion(shuffledQuestions[currentQuestionIndex])
    console.log('shuffle')
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild;
        (answerButtonsElement.firstChild);
    }
}

function selectAnswer(event) {
    const selectButton = event.target;
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement).forEach(button=> {
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        next
    };
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('corrct');
    } else{
        element.classList.add('wrong');
    };
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
