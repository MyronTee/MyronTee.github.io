// Slide show section
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

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slides.length > 0){slides[slideIndex-1].style.display = "block";}
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}




// page 1 scrolling fade

//create array for all .js-scrolls
const scrollElements = document.querySelectorAll(".js-scroll");

// find and return whether the element is in view
// using the getBoundingClientRect().top method to get an element’s distance from the top of the page,
// and window.innerHeight or document.documentElement.clientHeight to get the height of the viewport.

const elementInView = (element, offset = 1) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / offset
  );
};

//check and return whether the element went out of view
const elementOutofView = (element) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// add .scrolled to the element class
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// remove .scrolled from the element class
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

// usage of whether to hide or display
// uses foreach to check thru
const handleScrollAnimation = () => {
  scrollElements.forEach((element) => {
    if (elementInView(element, 1.25)) {
      displayScrollElement(element);
    } else if (elementOutofView(element)) {
      hideScrollElement(element)
    }
  })
}

// event listener for when user scroll to run handler
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


// scrolling button
const scrollTop = function () {
  //generate html button element
  const scrollBtn = document.createElement("button");
  // creates arrow as text
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.style.top = window.scrollY + 20;
  //set id
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);

  // adds .show to display the button
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);

  // scrolls the webpage when the button is clicked
  const scrollWindow = function () {  
    window.scrollTo(0,0);
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();









