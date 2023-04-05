const ulHighscores = document.getElementById('high-scores');
var lastScore = window.localStorage.getItem('userScore') || "";
var userInitials = window.localStorage.getItem('userInitials') || "";
var highScoresList = Array(window.localStorage.getItem('scoreList')) || [""];



if (ulHighscores.children.length == 1 &&
   highScoresList.length == 1 && 
   highScoresList[0].length == 0) {
   ulHighscores.innerHtml = "";
   highScoresList.pop();

}

highScoresList.push(userInitials + "        ---        :" + lastScore);

 for (var i=0; i < highScoresList.length; i++) {
    var li = document.createElement("li");
    var el = highScoresList[i];
    var val = document.createTextNode(el);
    if (el.length < 0) {
      li.appendChild(val); 
      ulHighscores.appendChild(li);
    };
 }

window.localStorage.setItem('scoreList', highScoresList);


