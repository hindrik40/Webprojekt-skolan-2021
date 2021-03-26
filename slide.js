
 

const slideshow = document.querySelector("#slideshow");
var slideshowImages = document.querySelectorAll("#slideshow img");
let captionElement = document.querySelector("#caption");

function runSlideshow() {
  let intervalId = setInterval(function () {
    console.log("Tona ut bilden", lastImage);
    //Alla bilderna

    //Sista bilden
    var lastImage = slideshowImages[slideshowImages.length - 1];
    let nextImage = slideshowImages[slideshowImages.length -2]
    var caption = nextImage.getAttribute("data-caption");
    captionElement.innerText = caption;
    fadeOut(lastImage);
  }, 5000);
  return intervalId;
}
runSlideshow();

function moveImage(image) {
  image.remove();
  slideshow.prepend(image);
  image.style.opacity = 1;
  slideshowImages = document.querySelectorAll("#slideshow img");
  lastImage = slideshowImages[slideshowImages.length - 1];
}

function fadeOut(image) {
  let opacity = 1;
  let fadeOutId = setInterval(function () {
    image.style.opacity = opacity;
    if (opacity > 0) {
      opacity -= 0.01;
    } else {
      clearInterval(fadeOutId);
      opacity = 1;
      moveImage(image);
    }
  }, 1000 / 60);
}

