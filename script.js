var nyanCat = 0;
var grumpyCat = 0;
var popCat = 0;
var maxwellCat = 0;
const imgresult = document.getElementById("resultimg");
imgresult.src = "assets/glass-card.svg";
var counter = 0;
var answeredQuestions = new Set(); // Track which questions have been answered
var result = document.getElementById("result");
var button = document.getElementById("restart");
button.addEventListener("click", resetFunction);
const scrollers = document.querySelectorAll(".question");

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller_inner");
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      //Notes from learning how to do this:
      //clone each item in array
      //add aria-hidden to it
      //add it to `scroller_inner
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".answer-choice img");

  images.forEach(function(img) {
    img.addEventListener("click", function() {
      const questionDiv = img.closest(".question");
      const questionId = questionDiv.id;

      //cgeck if this question already been answered
      if (answeredQuestions.has(questionId)) {
        return; 
      }
      answeredQuestions.add(questionId);

      //make green if answered
      img.style.border = "3px solid yellowgreen";
      img.style.borderRadius = "15px";
      
      const otherImages = questionDiv.querySelectorAll(".answer-choice img");
      otherImages.forEach(function(otherImg) {
        if (otherImg !== img) {
          otherImg.style.opacity = "0.5";
          otherImg.style.pointerEvents = "none";
        }
      });

      //quiz logic
      if (questionId === "q1") {
        if (img.alt.includes("Moon")) {
          grump();
        } else if (img.alt.includes("Cloud")) {
          nyan();
        } else if (img.alt.includes("Apple")) {
          popcat();
        }
      } else if (questionId === "q2") {
        if (img.alt.includes("Refresher")) {
          nyan();
        } else if (img.alt.includes("Kiwi")) {
          maxwell();
        } else if (img.alt.includes("Cucumber")) {
          grump();
        } else if (img.alt.includes("Cherry")) {
          popcat();
        }
      } else if (questionId === "q3") {
        if (img.alt.includes("Sun")) {
          maxwell();
        } else if (img.alt.includes("Cream")) {
          nyan();
        } else if (img.alt.includes("Grapefruit")) {
          popcat();
        } else if (img.alt.includes("Boba")) {
          grump();
        }
      } else if (questionId === "q4") {
        if (img.alt.includes("Chicken")) {
          nyan();
        } else if (img.alt.includes("Sushi")) {
          popcat();
        } else if (img.alt.includes("Bao")) {
          grump();
        } else if (img.alt.includes("Ramen")) {
          maxwell();
        }
      } else if (questionId === "q5") {
        if (img.alt.includes("Sundae")) {
          nyan();
        } else if (img.alt.includes("Jelly")) {
          maxwell();
        } else if (img.alt.includes("Parfait")) {
          grump();
        } else if (img.alt.includes("Shaved")) {
          popcat();
        } else if (img.alt.includes("Shining")) {
          maxwell();
        }
      } 
    });
  });
});

function grump(){
   grumpyCat++;
   counter++;
  if(counter == 5){
     console.log("Quiz over");
     updateResult();
  }
}

function nyan(){
   nyanCat++;
   counter++;
  if(counter == 5){
     console.log("the quiz is done");
     updateResult();
  }
}

function popcat(){
   popCat++;
   counter++;
  if(counter == 5){
     console.log("the quiz is done");
     updateResult();
  }
}

function maxwell(){
   maxwellCat++;
   counter++;
  if(counter == 5){
     console.log("the quiz is done");
     updateResult();
  }
}

function updateResult() {
   const maxScore = Math.max(nyanCat, grumpyCat, popCat, maxwellCat);

   if (nyanCat === maxScore) {
      console.log("You are Nyan Cat");
      result.innerHTML = "You are Nyan Cat";
      imgresult.src = "assets/Nyan_cat,jpg.webp";

   } else if (grumpyCat === maxScore) {
      console.log("You are Grumpy Cat!");
      result.innerHTML = "You are Grumpy Cat!";
      imgresult.src = "assets/proxy-image (4).jpg";

   } else if (popCat === maxScore) {
      console.log("You are Pop Cat");
      result.innerHTML = "You are Pop Cat";
      imgresult.src = "assets/PopCat.gif";
   } else {
      console.log("You are Maxwell");
      result.innerHTML = "You are Maxwell";
      imgresult.src = "assets/Maxwell.jpg";

   }
}

function resetFunction(){
   result.innerHTML = "Your result is...";
   nyanCat = 0;
   grumpyCat = 0;
   popCat = 0;
   maxwellCat = 0;
   counter = 0;
   answeredQuestions.clear();
   imgresult.src = "assets/glass-card.svg";


   //reset img stuff
   const images = document.querySelectorAll(".answer-choice img");
   images.forEach(function(img) {
     img.style.border = "";
     img.style.borderRadius = "";
     img.style.opacity = "";
     img.style.pointerEvents = "";
   });

   console.log("Quiz reset");
}
