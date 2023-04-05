const ulHighScore = document.getElementById('high-scores');
var lastscore = window.localStorage.getItem('userScore') || "";
var userInitials = window.localStorage.getItem('userInitials') || "";
// either convert local storage to array or create one
var highScoreList = Array(window.localStorage.getItem('scoreList')) || [""];

ulHighScore.innerHTML = "";

// if cleared list or fist time through
if (ulHighScore.children.length == 1 && 
    highScoreList.length == 1 &&
    highScoreList[0].length == 0) {
    highScoreList.pop();
}

if (userInitials.length > 0 && lastscore.length > 0) {
    highScoreList.push(userInitials + " :     ---     : " + lastscore);
}

for (var i=0; i < highScoreList.length; i++) {
    var li = document.createElement("li");
    var el = highScoreList[i];
    var val = document.createTextNode(el);
    if (el.length > 0) {
        li.appendChild(val);
        ulHighScore.appendChild(li)
    }
}

window.localStorage.setItem('scoreList', highScoreList);
window.localStorage.setItem('userScore', '');
window.localStorage.setItem('userInitials', '');

function goBack() {
    window.location = "index.html";
}

function clearAll() {
    highScoreList = [];
    window.localStorage.setItem('scoreList', highScoreList);
    window.location.reload();
}

