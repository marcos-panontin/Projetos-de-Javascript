const slides = document.getElementsByClassName("carousel-item");
const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");
const totalSlides = slides.length;

let slidePosition = 0


// BUTTONS

prevBtn.addEventListener("click", moveToPrev);
nextBtn.addEventListener("click", moveToNext);

function hideAllSlides () {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden")
    }
}

function moveToNext(){
    hideAllSlides();
    // if on last slide, reset to slide 1
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    }
        else {
        slidePosition += 1;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrev(){
    hideAllSlides();
    // if on first slide, reset to slide 3
    if (slidePosition === 0){
        slidePosition = slides.length - 1;
    }
        else {
        slidePosition -= 1;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}
    