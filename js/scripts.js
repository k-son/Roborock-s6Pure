"use strict";

///// VARIABLES

// 04 Pure
const textSection04 = document.querySelector('.s6Pure__04-Pure__text');
const imageSection04 = document.querySelector('.s6Pure__04-Pure__image');
const iconsSection04 = document.querySelectorAll('.s6Pure__04-Pure__icon');

// 05 Fold
const foldsSection05 = document.querySelectorAll('.s6Pure__05-Folds__fold');

// 06 Suction
const h2Suction06 = document.querySelector('.s6Pure__06-Suction h2');
const paraSuction06 = document.querySelector('.s6Pure__06-Suction p');
const rpmSuction06 = document.querySelector('.s6Pure__06-Suction span');

// 07 Voice
const h2Voice07 = document.querySelector('.s6Pure__07-Voice__text h2');
const paraVoice07 = document.querySelector('.s6Pure__07-Voice__text p');
const bubblesVoice07 = document.querySelectorAll('.s6Pure__07-Voice__text-bubble');
const alexaVoice07 = document.querySelector('.s6Pure__07-Voice__alexa');

// 08 Allergens 
const h2Allergens08 = document.querySelector('.s6Pure__08-Allergens__text h2');
const paraAllergens08 = document.querySelector('.s6Pure__08-Allergens__text p');
const iconsAllergens08 = document.querySelectorAll('.s6Pure__08-Allergens__icon');

// 10 Vacuum
const h2Vacuum10 = document.querySelector('.s6Pure__10-Vacuum__text h2');
const paraVacuum10 = document.querySelector('.s6Pure__10-Vacuum__text p');
const iconVacuum10 = document.querySelector('.s6Pure__10-Vacuum__icon');



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
    textSection04.classList.add('translateUpAndShow');
  } else {
    textSection04.classList.remove('translateUpAndShow');
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
     el.classList.add('translateUpAndShow');
   } else {
     el.classList.remove('translateUpAndShow');
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
/// ** END OF: 05 Folds **


/// *** 06 Suction ***
const slideUpHeading_Section06Suction = throttled(200, function() {
  if (ifElementScrolledUpIntoView(h2Suction06, 10)) {
    h2Suction06.classList.add('slideUp-Suction');
  } else {
    h2Suction06.classList.remove('slideUp-Suction');
  }
});

window.addEventListener('scroll', slideUpHeading_Section06Suction);


const slideUpParaAndSpan_Section06Suction = throttled(200, function() {
  if (ifElementScrolledUpIntoView(paraSuction06, 10)) {
    paraSuction06.classList.add('slideUp-Suction');
    rpmSuction06.classList.add('slideUp-rpm-Suction');
  } else {
    paraSuction06.classList.remove('slideUp-Suction');
    rpmSuction06.classList.remove('slideUp-rpm-Suction');
  }
});

window.addEventListener('scroll', slideUpParaAndSpan_Section06Suction);
/// ** END OF: 06 Suction **


/// *** 07 Voice ***
const slideUpHeading_Section07Voice = throttled(200, function() {
  if (ifElementScrolledUpIntoView(h2Voice07, 10)) {
    h2Voice07.classList.add('translateUpAndShow');
  } else {
    h2Voice07.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpHeading_Section07Voice);


const slideUpPara_Section07Voice = throttled(200, function() {
  if (ifElementScrolledUpIntoView(paraVoice07, 10)) {
    paraVoice07.classList.add('translateUpAndShow');
  } else {
    paraVoice07.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpPara_Section07Voice);


const slideUpBubbles_Section07Voice = throttled(200, function() {
  bubblesVoice07.forEach(el => {
    if (ifElementScrolledUpIntoView(el, 10)) {
      el.classList.add('translateUpAndShowBubbles-Voice');
    } else {
      el.classList.remove('translateUpAndShowBubbles-Voice');
    }
  })
});

window.addEventListener('scroll', slideUpBubbles_Section07Voice);


const slideUpAlexa_Section07Voice = throttled(200, function() {
  if (ifElementScrolledUpIntoView(alexaVoice07, 10)) {
    alexaVoice07.classList.add('translateUpAndShow');
  } else {
    alexaVoice07.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpAlexa_Section07Voice);
/// ** END OF: 07 Voice **


/// *** 08 Allergens ***
const slideUpHeading_Section08Allergens = throttled(200, function() {
  if (ifElementScrolledUpIntoView(h2Allergens08, 10)) {
    h2Allergens08.classList.add('translateUpAndShow');
  } else {
    h2Allergens08.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpHeading_Section08Allergens);


const slideUpPara_Section08Allergens = throttled(200, function() {
  if (ifElementScrolledUpIntoView(paraAllergens08, 10)) {
    paraAllergens08.classList.add('translateUpAndShow');
  } else {
    paraAllergens08.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpPara_Section08Allergens);


const slideUpIcons_Section08Allergens = throttled(200, function() {
  iconsAllergens08.forEach(el => {
    if (ifElementScrolledUpIntoView(el, 10)) {
      el.classList.add('translateUpAndShow');
    } else {
      el.classList.remove('translateUpAndShow');
    }
  })
});

window.addEventListener('scroll', slideUpIcons_Section08Allergens);
/// ** END OF: 08 Allergens **


/// *** 10 Vacuum ***
const slideUpHeading_Section10Vacuum = throttled(200, function() {
  if (ifElementScrolledUpIntoView(h2Vacuum10, 10)) {
    h2Vacuum10.classList.add('translateUpAndShow');
  } else {
    h2Vacuum10.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpHeading_Section10Vacuum);


const slideUpPara_Section10Vacuum = throttled(200, function() {
  if (ifElementScrolledUpIntoView(paraVacuum10, 10)) {
    paraVacuum10.classList.add('translateUpAndShow');
  } else {
    paraVacuum10.classList.remove('translateUpAndShow');
  }
});

window.addEventListener('scroll', slideUpPara_Section10Vacuum);


const slideUpIcon_Section10Vacuum = throttled(200, function() {
  if (ifElementScrolledUpIntoView(iconVacuum10, 1)) {
    iconVacuum10.classList.add('translateUp-Icon-SectionVacuum');
  } else {
    iconVacuum10.classList.remove('translateUp-Icon-SectionVacuum');
  }
});

window.addEventListener('scroll', slideUpIcon_Section10Vacuum);
/// ** END OF: 10 Vacuum **