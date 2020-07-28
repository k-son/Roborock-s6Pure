"use strict";

///// VARIABLES

// 04 Pure
const textSection04 = document.querySelector('.s6Pure__04-Pure__text');
const imageSection04 = document.querySelector('.s6Pure__04-Pure__image');
const iconsSection04 = document.querySelectorAll('.s6Pure__04-Pure__icon');

// 05 Fold
const foldsSection05 = document.querySelectorAll('.s6Pure__05-Folds__fold');



///// REUSABLE FUNCTIONS

function throttled(delay, fn) {
  let lastCall = 0;

  return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
          return;
      }
      lastCall = now;
      return fn(...args);
  }
}

function debounced(delay, fn) {
  let timerId;

  return function (...args) {
      if (timerId) {
          clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
          fn(...args);
          timerId = null;
      }, delay);
  }
}

function isElementInViewport(el) {
  if (el) {
    const rect = el.getBoundingClientRect();

    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
}

function isElementFullyInViewport(el) {
  if (el) {
    const position = el.getBoundingClientRect();

    return (
      (position.top >= 0 && position.bottom <= window.innerHeight)
    );
  }
}

// checks if element has emerged from the bottom certain number of pixels
function ifElementScrolledUpIntoView(el, pixels) {
  if (el) {
    const position = el.getBoundingClientRect();

    return (
      (position.top >= 0 && position.top <= (window.innerHeight - pixels) 
      || (position.top < 0))
    );
  }
}



///// MAIN SCRIPTS 

/// *** 04 Pure ***
const slideUpText_Section04Pure = throttled(200, function() {
  if (ifElementScrolledUpIntoView(textSection04, 200)) {
    textSection04.classList.add('slideUpAndShow');
  } else {
    textSection04.classList.remove('slideUpAndShow');
  }
});

window.addEventListener('scroll', slideUpText_Section04Pure);


const slideRightImage_Section04Pure = throttled(300, function() {
  if (ifElementScrolledUpIntoView(imageSection04, 100)) {
    imageSection04.classList.add('marginLeft0');
  } else {
    imageSection04.classList.remove('marginLeft0');
  }
})

window.addEventListener('scroll', slideRightImage_Section04Pure);


iconsSection04.forEach(el => {
 const slideUpIcon = throttled(200, function() {
   if (ifElementScrolledUpIntoView(el, 100)) {
     el.classList.add('slideUpAndShow');
   } else {
     el.classList.remove('slideUpAndShow');
   }
 });
 window.addEventListener('scroll', slideUpIcon);
})
/// ** END OF: 04 Pure **


/// *** 05 Folds ***
const foldsFade1 = throttled(200, function() {
  for (let i=1; i<foldsSection05.length; i++) {
    if (ifElementScrolledUpIntoView(foldsSection05[i], 300)) {
      foldsSection05[i-1].classList.add('foldFade-1');
    } else {
      foldsSection05[i-1].classList.remove('foldFade-1');
    }
  }
});

window.addEventListener('scroll', foldsFade1);


const foldsFade2 = throttled(200, function() {
  for (let i=1; i<foldsSection05.length; i++) {
    if (ifElementScrolledUpIntoView(foldsSection05[i], 450)) {
      foldsSection05[i-1].classList.add('foldFade-2');
    } else {
      foldsSection05[i-1].classList.remove('foldFade-2');
    }
  }
});

window.addEventListener('scroll', foldsFade2);


const foldsFade3 = throttled(200, function() {
  for (let i=1; i<foldsSection05.length; i++) {
    if (isElementFullyInViewport(foldsSection05[i])) {
      foldsSection05[i-1].classList.add('foldFade-3');
    } else {
      foldsSection05[i-1].classList.remove('foldFade-3');
    }
  }
});

window.addEventListener('scroll', foldsFade3);