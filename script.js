const next = document.querySelector(".next")
const prev = document.querySelector(".previous")
let images = document.querySelectorAll(".img-container")
let dots = document.querySelectorAll(".dot")

let index = 0;

function showSlide(index) {
    // Loop through all images in the "images" array
    for (let j = 0; j < images.length; j++) {
      // If the current index (j) is equal to the parameter "index", display the image and change the dot color
      if (j === index) {
        images[j].style.display = "block";
        dots[j].style.backgroundColor = "#777";
      }
      // If the current index (j) is not equal to the parameter "i", hide the image and reset the dot color
      else {
        images[j].style.display = "none";
        dots[j].style.backgroundColor = "";
      }
    }
  }

  next.addEventListener("click", function() {
    index++;
    if (index >= images.length) {
        // Set "index" to 0
      index = 0;
    }
    showSlide(index);
  });
  
  prev.addEventListener("click", function() {
    index--;
    if (index < 0) {
      // Set "index" to the last index of the "images" array
      index = images.length - 1;
    }
    showSlide(index);
  });
  
  dots.forEach(function(dot, img_index) {
    dot.addEventListener("click", function() {
      // Set the variable "index" to the index of the dot that was clicked
      index = img_index;
      showSlide(index);
    });
  });

  showSlide(index);