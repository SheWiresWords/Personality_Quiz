var pythonScore = 0;
var javaScore = 0;
var counter=0;
var result = document.getElementById("result");
var button = document.getElementById("restart");
button.addEventListener("click", resetFunction);

//buttons
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//modified event listners to change the background color
q1a1.addEventListener("click", function(){
    java();
    q1a1.style.backgroundColor = "yellowgreen";
});
q1a2.addEventListener("click", function(){
    python();
    q1a2.style.backgroundColor = "yellowgreen";
});


q2a1.addEventListener("click", function(){
    java();
    q2a1.style.backgroundColor = "yellowgreen";
});
q2a2.addEventListener("click", function(){
    python();
    q2a2.style.backgroundColor = "yellowgreen";
});


q3a1.addEventListener("click", function(){
    python();
    q3a1.style.backgroundColor = "yellowgreen";
});


q3a2.addEventListener("click", function(){
    java();
    q3a2.style.backgroundColor = "yellowgreen";
});


function java(){
   javaScore++;
   counter++;
  if(counter == 3){
     console.log("Quiz over");
     updateResult();
  }
}

function python(){
   pythonScore++;
   counter++;
  if(counter == 3){
     console.log("the quiz is done");
     updateResult();
  }
}


function updateResult() {
   if(pythonScore >= 2){
      console.log("You are a Python person!");
      result.innerHTML = "You are a Python person!";
   }
   else{
      console.log("You are a Java person!");
      result.innerHTML = "You are a Java person!";
   }
}

function resetFunction(){
   result.innerHTML = "Your result is...";
   pythonScore = 0;
   javaScore = 0;
   counter = 0;
   //reset all button colors
   q1a1.style.backgroundColor = "";
   q1a2.style.backgroundColor = "";
   q2a1.style.backgroundColor = "";
   q2a2.style.backgroundColor = "";
   q3a1.style.backgroundColor = "";
   q3a2.style.backgroundColor = "";

   console.log("Quiz reset");
}

/* Document is a DOM Object 
   Get element by id is a method
   element.interHTML accesses the property innerHTML
*/