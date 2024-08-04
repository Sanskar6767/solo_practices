const images = document.querySelectorAll('.second>img')
const dots = document.querySelectorAll('.nav-dot');
console.log(dots);
const nextSlide = document.querySelector('#nextSlide');
const previousSlide = document.querySelector('#previousSlide');

function nextImage() {
    let currentActive;
    for(let i = 0; i < images.length; i++){
        if(images[i].classList.contains('active')){
            currentActive= i;
            images[i].classList.remove('active');
            break;
        }
    }
    let nextIndex = (currentActive + 1) % images.length; 

    images[nextIndex].classList.add('active');
    dotchanger(nextIndex);

}

function previousImage() {
    let currentActive;
    for(let i = 0; i < images.length; i++){
        if(images[i].classList.contains('active')){
            currentActive= i;
            images[i].classList.remove('active');
            break;
        }
    }
    let previousIndex = (currentActive - 1 + images.length) % images.length; 

    images[previousIndex].classList.add('active');
    dotchanger(previousIndex);

}

function dotchanger(current){
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove('present');
    }
    dots[current].classList.add('present');
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        let targetIndex = e.target.dataset.slideIndex; // Use dataset property
        console.log(targetIndex);
        for(let i = 0; i < images.length; i++){
            images[i].classList.remove('active');
        }
        dotchanger(targetIndex);
        images[targetIndex].classList.add('active');
    });
});

nextSlide.addEventListener('click', nextImage);
previousSlide.addEventListener('click', previousImage);
setInterval(nextImage, 3000);

