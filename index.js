const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Start the slideshow
setInterval(nextImage, 3000); // Change image every 3 seconds

