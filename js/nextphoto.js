let slideIndex = 1;
showSlides(slideIndex);

// Contrôles suivant/précédent
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Contrôles d'images miniatures
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].mySlides = dots[i].mySlides.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}
