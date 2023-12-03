let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function appearInfo1(){
  document.getElementById("info1").style.display="flex";
  document.getElementById("info2").style.display="none";
  document.getElementById("info3").style.display="none";
  document.getElementById("info4").style.display="none";
  document.getElementById("choice1").style.backgroundColor="white";
  document.getElementById("choice2").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice3").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice4").style.backgroundColor="rgb(244, 228, 209)";
}
function appearInfo2(){
  document.getElementById("info1").style.display="none";
  document.getElementById("info2").style.display="flex";
  document.getElementById("info3").style.display="none";
  document.getElementById("info4").style.display="none";
  document.getElementById("choice2").style.backgroundColor="white";
  document.getElementById("choice1").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice3").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice4").style.backgroundColor="rgb(244, 228, 209)";
}
function appearInfo3(){
  document.getElementById("info1").style.display="none";
  document.getElementById("info2").style.display="none";
  document.getElementById("info3").style.display="flex";
  document.getElementById("info4").style.display="none";
  document.getElementById("choice3").style.backgroundColor="white";
  document.getElementById("choice2").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice1").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice4").style.backgroundColor="rgb(244, 228, 209)";
}
function appearInfo4(){
  document.getElementById("info1").style.display="none";
  document.getElementById("info2").style.display="none";
  document.getElementById("info3").style.display="none";
  document.getElementById("info4").style.display="flex";
  document.getElementById("choice4").style.backgroundColor="white";
  document.getElementById("choice2").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice3").style.backgroundColor="rgb(244, 228, 209)";
  document.getElementById("choice1").style.backgroundColor="rgb(244, 228, 209)";
}
