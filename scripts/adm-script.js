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

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function open_sidebar() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("sidebar").style.width = "25%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("openav").style.display = "none";
}

function close_sidebar() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("openav").style.display = "inline-block";
}