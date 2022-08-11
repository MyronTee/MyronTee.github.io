if(document.URL.includes("index.html"))
{
  // Slide show section
  var slideIndex = 1;
  showSlides(slideIndex);

  function showSlides() {
    var slides = document.getElementsByClassName("slides");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slides.length > 0) { slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
  }

  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];
  // Next/previous controls
  function plusSlides() {
    showSlides(slideIndex += 1);
  }
  function minusSlides() {
    showSlides(slideIndex -= 1);
  }
  prev.addEventListener('click', minusSlides);
  next.addEventListener('click', plusSlides);
}


// scrolling button
const scrollTop = function () {
  //generate html button element
  const scrollBtn = document.createElement("button");
  // creates arrow as text
  scrollBtn.innerHTML = "&uarr;";
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
    window.scrollTo(0, 0);
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//types.html specific js
if(document.URL.includes("types.html"))
{
  // Create New Div when clicked on existing Div
  var original = document.getElementsByClassName("flexpara")[0];
  var extension = document.getElementsByClassName("extension")[0];

  var original2 = document.getElementsByClassName("flexpara")[1];
  var extension2 = document.getElementsByClassName("extension")[1];

  var original3 = document.getElementsByClassName("flexpara")[2];
  var extension3 = document.getElementsByClassName("extension")[2];

  var temp = 0;
  
  function handler(){
    if (temp == 0)
    {
      extension.classList.remove("not-expanded");
      temp = 1;
    }
    else if (temp == 1)
    {
      extension.classList.add("not-expanded");
      temp = 0;
    }
  };

  function handler2(){
    if (temp == 0)
    {
      extension2.classList.remove("not-expanded");
      temp = 1;
    }
    else if (temp == 1)
    {
      extension2.classList.add("not-expanded");
      temp = 0;
    }
  };
  
  function handler3(){
    if (temp == 0)
    {
      extension3.classList.remove("not-expanded");
      temp = 1;
    }
    else if (temp == 1)
    {
      extension3.classList.add("not-expanded");
      temp = 0;
    }
  };

  original.addEventListener('click', handler);
  extension.addEventListener('click', handler);

  original2.addEventListener('click', handler2);
  extension2.addEventListener('click', handler2);

  original3.addEventListener('click', handler3);
  extension3.addEventListener('click', handler3);
}


if(document.URL.includes("parts.html"))
{
  var temp = 0;
  var changeimg = document.getElementsByClassName("add-part")[0];
  var bezel = document.getElementsByClassName("bezel")[0];
  var hands = document.getElementsByClassName("hands")[0];
  var dial = document.getElementsByClassName("dial")[0];
  var watchcase = document.getElementsByClassName("case")[0];
  var system = document.getElementsByClassName("system")[0];
  var crown = document.getElementsByClassName("crown")[0];


  var bezeltxt = document.getElementsByClassName("bezel-text")[0];
  var handstxt = document.getElementsByClassName("hands-text")[0];
  var dialtxt = document.getElementsByClassName("dial-text")[0];
  var watchcasetxt = document.getElementsByClassName("case-text")[0];
  var systemtxt = document.getElementsByClassName("system-text")[0];
  var crowntxt = document.getElementsByClassName("crown-text")[0];
  var casebacktxt = document.getElementsByClassName("caseback-text")[0];

  casebacktxt.classList.add("redisplay");
  function NextImg()
  {
    if (temp == 0)
    {
      crown.classList.add("seen");
      casebacktxt.classList.remove("redisplay");
      crowntxt.classList.add("redisplay");
      temp++;
    }
    else if (temp == 1)
    {
      system.classList.add("seen");
      crowntxt.classList.remove("redisplay");
      systemtxt.classList.add("redisplay");
      temp++;
    }
    else if (temp == 2)
    {
      watchcase.classList.add("seen");
      systemtxt.classList.remove("redisplay");
      watchcasetxt.classList.add("redisplay");
      temp++;
    }
    else if (temp == 3)
    {
      dial.classList.add("seen");
      watchcasetxt.classList.remove("redisplay");
      dialtxt.classList.add("redisplay");
      temp++;
    }
    else if (temp == 4)
    {
      hands.classList.add("seen");
      dialtxt.classList.remove("redisplay");
      handstxt.classList.add("redisplay");
      temp++;
    }
    else if (temp == 5)
    {
      bezel.classList.add("seen");
      handstxt.classList.remove("redisplay");
      bezeltxt.classList.add("redisplay");
      temp++;
      changeimg.innerHTML = "<b>Reset</b>"
    }
    else if (temp == 6)
    {
      temp = 0;
      crown.classList.remove("seen");
      system.classList.remove("seen");
      watchcase.classList.remove("seen");
      dial.classList.remove("seen");
      hands.classList.remove("seen");
      bezel.classList.remove("seen");
      bezeltxt.classList.remove("redisplay");
      casebacktxt.classList.add("redisplay");
      changeimg.innerHTML = "<b>Add Next Part</b>";
    }
  }

  changeimg.addEventListener('click', NextImg);
}


// scrolling fade

//create array for all .js-scrolls
const scrollElements = document.querySelectorAll(".js-scroll");
const MoveLeft = document.querySelectorAll(".move-left");
const MoveRight = document.querySelectorAll(".move-right");

// find and return whether the element is in view
// using the getBoundingClientRect().top method to get an element’s distance from the top of the page,
// and window.innerHeight or document.documentElement.clientHeight to get the height of the viewport.

const elementInView = (element) => {
  const elementTop = element.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight));
};

//check and return whether the element went out of view
const elementOutofView = (element) => {
  const elementTop = element.getBoundingClientRect().top;
  return (elementTop > window.innerHeight);
};

// add .scrolled to the element class
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// remove .scrolled from the element class
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};


// add .move-left to the element class
const MovetoLeft = (element) => {
  element.classList.add("move-left");
};

// remove .move-left from the element class
const resetLeft = (element) => {
  element.classList.remove("move-left");
};

// add .move-right to the element class
const MovetoRight = (element) => {
  element.classList.add("move-right");
};

// remove .move-right from the element class
const resetRight = (element) => {
  element.classList.remove("move-right");
};


// usage of whether to hide or display
// uses foreach to check thru
const handleScrollAnimation = () => {
  scrollElements.forEach((element) => {
    if (elementInView(element)) {
      displayScrollElement(element);
    } 
    else if (elementOutofView(element)) {
      hideScrollElement(element)
    }
  })
}

const MoveLeftScrollAnimation = () => {
  MoveLeft.forEach((element) => {
    if (elementInView(element)) {
      MovetoLeft(element);
    } 
    else if (elementOutofView(element)) {
      resetLeft(element)
    }
  })
}

const MoveRightScrollAnimation = () => {
  MoveRight.forEach((element) => {
    if (elementInView(element)) {
      MovetoRight(element);
    } 
    else if (elementOutofView(element)) {
      resetRight(element)
    }
  })
}



// event listener for when user scroll to run handler
window.addEventListener("scroll", () => {
  handleScrollAnimation();
  MoveLeftScrollAnimation();
  MoveRightScrollAnimation();
});
