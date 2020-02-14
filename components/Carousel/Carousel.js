/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]

function CreateCarousel() {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = "<";
  carousel.appendChild(leftButton);
  images.forEach(function(imageSrc, index) {
    const image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("header-img");
    if (index === 0) {
      image.style.display = "flex";
    }
    carousel.appendChild(image);
  })
  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = ">";
  carousel.appendChild(rightButton);

  return carousel;
}

document.querySelector(".carousel-container").appendChild(CreateCarousel());

let currentImage = 0;
const allImages = document.querySelectorAll(".header-img");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
let maxReached = false;
console.log(allImages);
rightButton.addEventListener("click", function(event) {
  allImages.forEach(function(image, index) {
    console.log(image);
    if (index === (currentImage+1)) {
      image.style.display = "flex";
      allImages[index - 1].style.display = "none";
    }
    else if ((currentImage + 1) === (allImages.length)) {
      allImages[0].style.display = "flex";
      allImages[currentImage].style.display = "none";
      console.log(currentImage);
      maxReached = true;
    }
    if (index === (allImages.length - 1)) {
      if (maxReached === false) {
        currentImage++;
      }
      else {
        currentImage = 0;
        maxReached = false;
      }
      console.log(currentImage);
    }
  });
})

leftButton.addEventListener("click", function(event) {
  allImages.forEach(function(image, index) {
    console.log(image);
    if (index === (currentImage-1)) {
      image.style.display = "flex";
      allImages[index + 1].style.display = "none";
    }
    else if ((currentImage - 1) === -1) {
      allImages[allImages.length - 1].style.display = "flex";
      allImages[currentImage].style.display = "none";
      maxReached = true;
    }
    if (index === (allImages.length - 1)) {
      if (maxReached === false) {
        currentImage--;
      }
      else {
        currentImage = allImages.length - 1;
        maxReached = false;
      }
      console.log(currentImage);
    }
  });
})