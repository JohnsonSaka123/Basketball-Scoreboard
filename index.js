

let scoreRightElementDisplay = document.getElementById("current-scoreRight");

let scoreLeftElementDisplay = document.getElementById("current-scoreLeft");


let currentScoreRight = 0;
let currentScoreLeft = 0;

// adding score to the left

function add1scoreLeft(){
  scoreLeftElementDisplay.textContent = currentScoreLeft +=1;
}
function add2scoreLeft(){
  scoreLeftElementDisplay.textContent = currentScoreLeft +=2;
}
function add3scoreLeft(){
  scoreLeftElementDisplay.textContent = currentScoreLeft +=3;
}

//adding score to the right

function add1scoreRight(){
  scoreRightElementDisplay.textContent = currentScoreRight +=1;
}
function add2scoreRight(){
  scoreRightElementDisplay.textContent = currentScoreRight +=2;
}

function add3scoreRight(){
  scoreRightElementDisplay.textContent = currentScoreRight +=3;
}

function clearScores(){
  scoreLeftElementDisplay.textContent = 0;
  scoreRightElementDisplay.textContent = 0;
  currentScoreRight = 0;
  currentScoreLeft = 0;
}