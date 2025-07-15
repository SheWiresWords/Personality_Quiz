var pythonScore = 0;
var javaScore = 0;
var counter=0;
var result = document.getElementId("reset")


//buttons
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", java);
q1a2.addEventListener("click", python);

q2a1.addEventListener("click", java);
q2a2.addEventListener("click", python);

q3a1.addEventListener("click", python);
q3a2.addEventListener("click", java);

function java(){
   javaScore++;
   questionCount++;
}

if(questionCount == 3){
   console.log("Quiz over");
   updateResult();
}

function python(){
   pythonScore++;
   questionCount++;
}

if(questionCount == 3){
   console.log("the quiz is done");
   updateResult();
}


function updateResult() {
   if(pythonScore >= 2){
      console.log("You are a Python person!");
      result.innerHTML("You are a Python person!")
   }
   else{
      console.log("You are a Java person!");
      result.innerHTML("You are a Java person!")
   }
}

/* Document is a DOM Object 
   Get element by id is a method
   element.interHTML accesses the property innerHTML
*/