// for the sidebar section
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
    sidebar.style.zIndex = 1;
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});

// for carousel section
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const circleNav = document.querySelector(".carousel__nav");
const dots = Array.from(circleNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


// arrange the slide to one another
const setSlidePosition = ((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})

slides.forEach(setSlidePosition);

// moving the slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slider");
    targetSlide.classList.add("current-slider");
}


// For the hidden class 
const hideArrows = (prevBtn, nextBtn, targetIndex, slides) => {
    if (targetIndex === 0) {
        prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    } else if (targetIndex == slides.length - 1) {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.add("is-hidden");
    } else {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }
}

// when we click the right arrow move to that side
nextBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slider");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = circleNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // moving to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideArrows(prevBtn, nextBtn, nextIndex, slides);
})

// when we click left arrow move to previous slide
prevBtn.addEventListener("click", (e) => {
        const currentSlide = track.querySelector(".current-slider");
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = circleNav.querySelector(".current-slide");
        const nextDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        // move to previous slide
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, nextDot);
        hideArrows(prevBtn, nextBtn, prevIndex, slides);
    })
    //
const updateDots = (curretDot, targetDot) => {
    curretDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

// for the circle navigation
circleNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    // console.log(currentTarget);
    if (!targetDot) return;
    const currentSlide = track.querySelector(".current-slider");
    const currentDot = circleNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideArrows(prevBtn, nextBtn, targetIndex, slides);

})