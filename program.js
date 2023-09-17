var prevScroll = window.scrollY;
window.onscroll = function () {
  var currentScroll = window.scrollY;
  if (prevScroll > currentScroll) {
    document.getElementById("nav-bar").style.top = " 0px ";
  } else {
    document.getElementById("nav-bar").style.top = "-100px ";
  }
  prevScroll = currentScroll;
}



/* slider making*/


/*
// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.

const wrapper = document.querySelector('.cards-wrapper');
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
//   add a click event listener to each dot
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
//       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
});

*/


/*   Counter  */


function animateValue(id, start, end, duration) {
  var start = 0;
  var end = parseInt(document.getElementById(id).textContent, 10);
  var duration = 5000;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
animateValue("value1", 0, 0, 0)
animateValue("value2", 0, 0, 0)
animateValue("value3", 0, 0, 0)
animateValue("value4", 0, 0, 0);





/* ----------latest projest slides code-----*/

const wrapper = document.querySelector('.cards-wrapper');
const dots = document.querySelectorAll('.dot');
let activeDotNum = 0;
dots.forEach((dot, idx) => {
  dot.setAttribute('data-num', idx);

  dot.addEventListener('click', (e) => {

    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) {

      return;
    }
    else {

      let displayArea = wrapper.parentElement.clientWidth;
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX(' + pixels + 'px)';
      dots[activeDotNum].classList.remove('active');
      dots[clickedDotNum].classList.add('active');
      activeDotNum = clickedDotNum;
    }

  });
});



/*----------------testimonial slider code-------------*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let tdots = document.getElementsByClassName("tdot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < tdots.length; i++) {
    tdots[i].className = tdots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  tdots[slideIndex-1].className += " active";
}
