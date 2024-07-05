let twilightScore= 0;
let rainbowScore= 0;
let appleScore= 0;
let rarityScore=0;
let flutterScore =0;
let pinkieScore=0;
let questionCount= 0;





var result = document.getElementById("result");
var restart = document.getElementById("restart");
restart.addEventListener("click", restarted);









var q1a1 = document.getElementById("q1a1");
q1a1.addEventListener("click", rainbow)

var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener("click", flutter, twilight);

var q2a1 = document.getElementById("q2a1");
q2a1.addEventListener("click", apple);

var q2a2 = document.getElementById("q2a2");
q2a2.addEventListener("click", rarity);

var q3a1 = document.getElementById("q3a1");
q3a1.addEventListener("click", twilight);

var q3a2 = document.getElementById("q3a2");
q3a2.addEventListener("click", rainbow, pinkie);

var q4a1 = document.getElementById("q4a1");
q4a1.addEventListener("click", twilight);

var q4a2 = document.getElementById("q4a2");
q4a2.addEventListener("click", pinkie);

var q5a1 = document.getElementById("q5a1");
q5a1.addEventListener("click", apple, rainbow);

var q5a2 = document.getElementById("q5a2");
q5a2.addEventListener("click", flutter);

var q6a1 = document.getElementById("q6a1");
q6a1.addEventListener("click", rarity, twilight);

var q6a2 = document.getElementById("q6a2");
q6a2.addEventListener("click", pinkie);





function rainbow(){
rainbowScore += 1;
questionCount += 1;
console.log("questionCount="+ questionCount +"rainbowScore"+ rainbowScore);
  if (questionCount == 6) {
    console.log("Thank you for taking my quiz!")
    updateResult();

}
  }




function flutter(){
flutterScore += 1;
questionCount += 1;

console.log("questionCount="+ questionCount +"flutterScore"+ flutterScore);
  if (questionCount == 6) {
    console.log("Thank you for taking my quiz!")
    updateResult();
  }

  
 }

function apple(){
appleScore += 1;
questionCount += 1;

console.log("questionCount="+ questionCount +"rainbowScore"+ rainbowScore);
  if (questionCount == 6) {
    console.log("Thank you for taking my quiz!")
    updateResult();
  }


  
 }

function pinkie(){
pinkieScore += 1;
questionCount += 1;

console.log("questionCount="+ questionCount +"pinkieScore"+ pinkieScore);
  if (questionCount == 6) {
    console.log("Thank you for taking my quiz!")
    updateResult();
  }

 }

function rarity(){
rarityScore += 1;
questionCount += 1;

console.log("questionCount="+ questionCount +"rarityScore"+ rarityScore);
  if (questionCount == 6) {
    console.log("Thank you for taking my quiz!")
    updateResult();
  }

 }


function twilight(){
twilightScore += 1;
questionCount += 1;


console.log("questionCount="+ questionCount + "twilightScore"+ twilightScore);
  if (questionCount == 6) {
    console.log("Thank you for taking my quiz!")
    updateResult();
    };

  
}


function updateResult(){

  let highestScore = Math.max(twilightScore, rainbowScore, appleScore, rarityScore, flutterScore, pinkieScore);
  
  if (twilightScore == highestScore) {
  result.innerHTML+="Twilight Sparkle!";
  console.log("You are Twilight Sparkle!");
  } 
  
  if (rainbowScore == highestScore) {
    result.innerHTML +="Rainbow Dash!";
    console.log("You are Rainbow Dash!");
  }
  if (flutterScore == highestScore) {
    result.innerHTML +="Fluttershy!";
    console.log("You are Fluttershy!");
  }
  if (appleScore == highestScore) {
    result.innerHTML +="Applejack!";
    console.log("You are Applejack!");
  }
  if (pinkieScore == highestScore) {
    result.innerHTML +="Pinkie Pie!";
    console.log("You are Pinkie Pie!");
  }
  if (rarityScore == highestScore) {
    result.innerHTML +="Rarity!";
    console.log("You are Rarity");
  }

}


function restarted() {
  twilightScore=0;
  rainbowScore=0;
  flutterScore=0;
  appleScore=0;
  rarityScore=0;
  pinkieScore=0;
  questionCount=0;
  result.innerHTML="I am..."
  console.log("Scores are 0.")
}
