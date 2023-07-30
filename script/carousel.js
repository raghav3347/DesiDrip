const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBTN = document.querySelector("#prev-button");
const nextBTN = document.querySelector("#next-button");


let counter = 1;

// const size = window.innerWidth;

var size = carouselImages[counter].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//functions

function nextSlide() {
    if (counter > carouselImages.length-2){
        return
    } 
    size = carouselImages[counter].clientWidth;
    carouselSlide.style.transition = "transform 0.4s linear";
    counter++;
    carouselSlide.style.transform = 'translateX( ' + (-size * counter) + 'px)';
    clearInterval(timer)
    timer = window.setInterval(nextSlide, 5000) 
}

function prevSlide() {
    if (counter < 1){
        return
    }
    size = carouselImages[counter].clientWidth;
    carouselSlide.style.transition = "transform 0.4s linear";
    counter--;
    carouselSlide.style.transform = 'translateX( ' + (-size * counter) + 'px)';
    clearInterval(timer)
    timer = window.setInterval(nextSlide, 5000) 
}

//Button listeners

nextBTN.addEventListener('click', nextSlide)

prevBTN.addEventListener('click', prevSlide)

//To loop around

carouselSlide.addEventListener('transitionend', () =>{
    if (carouselImages[counter].id == "first-clone"){
        carouselSlide.style.transition = "none"
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id == "last-clone"){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})

//Next slide with timer

timer = window.setInterval(nextSlide, 5000)