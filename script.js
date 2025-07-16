var nyanCat = 0;
var grumpyCat = 0;
var popCat = 0;
var maxwellCat = 0;
var imgresult = document.getElementsByClassName("resultimg");
imgresult.src = "assets/glass-card.svg";
var counter = 0;
var answeredQuestions = new Set(); // Track which questions have been answered
var result = document.getElementById("result");
var button = document.getElementById("restart");
button.addEventListener("click", resetFunction);
const scrollers = document.querySelectorAll(".question");

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.question` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller_inner`
    const scrollerInner = scroller.querySelector(".scroller_inner");
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller_inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

// Get all images and add click event listeners
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".answer-choice img");

  images.forEach(function(img) {
    img.addEventListener("click", function() {
      const questionDiv = img.closest(".question");
      const questionId = questionDiv.id;

      // Check if this question has already been answered
      if (answeredQuestions.has(questionId)) {
        return; // Exit early if already answered
      }

      // Mark this question as answered
      answeredQuestions.add(questionId);

      // Add visual feedback to the clicked image
      img.style.border = "3px solid yellowgreen";
      img.style.borderRadius = "15px";

      // Disable other images in the same question
      const otherImages = questionDiv.querySelectorAll(".answer-choice img");
      otherImages.forEach(function(otherImg) {
        if (otherImg !== img) {
          otherImg.style.opacity = "0.5";
          otherImg.style.pointerEvents = "none";
        }
      });

      // Determine which answer was clicked and update scores
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


   // Reset all image styles
   const images = document.querySelectorAll(".answer-choice img");
   images.forEach(function(img) {
     img.style.border = "";
     img.style.borderRadius = "";
     img.style.opacity = "";
     img.style.pointerEvents = "";
   });

   console.log("Quiz reset");
}

/* Document is a DOM Object 
   Get element by id is a method
   element.interHTML accesses the property innerHTML
*/