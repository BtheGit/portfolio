'use strict'

// ie11 polyfill for bokehfy support
if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };
}

const buttonAbout = document.getElementById('button-about')
const buttonWork = document.getElementById('button-work')
const buttonContact = document.getElementById('button-contact')

const buttonReset = document.getElementById('button-reset')

const splashBG = document.getElementById('splash-bg')
const workContainer = document.getElementById('work-container')
const contactContainer = document.getElementById('contact-container')
const aboutContainer = document.getElementById('about-container')

const workScrollable = document.getElementById('work-scrollable')
const workCards = document.querySelectorAll('.work-card')
workScrollable.addEventListener('scroll', debounce(scrollCards))

const bokehField = bokehfy({
  parent:splashBG,
  transparent: true,
});
resetBokeh();

const buttons = [buttonAbout, buttonWork, buttonContact, buttonReset]
const splashClasses = ['splash-top', 'splash-left', 'splash-right']
const containerClasses = [workContainer, contactContainer, aboutContainer]

buttonAbout.addEventListener('click', selectAbout)
buttonWork.addEventListener('click', selectWork)
buttonContact.addEventListener('click', selectContact)
buttonReset.addEventListener('click', selectReset)

function resetBokeh(){
  bokehField.settings({
    halflife: 1200,
    dx:5,
    dy:3,
    star: 'white',
    density: 45,
    framerate: 60,
    radius: 80,
    interactive: true,
  })
}

function focusBokeh() {
  bokehField.settings({
    halflife: 800,
    framerate: 25,
    density: 20,
    dx:0.3,
    dy:5,
    color: 'white',
    interactive: false,
  })  
}

function selectAbout(e) {
  focusBokeh()
  toggleButtons()
  splashBG.classList.add('splash-left')
  aboutContainer.classList.add('active')
}

function selectWork(e) {
  focusBokeh()
  toggleButtons()
  splashBG.classList.add('splash-right')
  workContainer.classList.add('active')
  setTimeout(scrollCards, 500)
}

function selectContact(e) {
  focusBokeh()
  toggleButtons()
  splashBG.classList.add('splash-top')
  contactContainer.classList.add('active')
}

function selectReset(e) {
  toggleButtons()
  resetSplash()
  resetBokeh()
}

function resetSplash(e) {
  splashClasses.map(function(className) {
    if (splashBG.classList.contains(className)){
      splashBG.classList.remove(className)
    }
  })
  containerClasses.map(function(className) {
    if (className.classList.contains('active')){
      className.classList.remove('active')
    }
  })
  workScrollable.scrollTop = 0
  workCards.forEach(function(card) { card.classList.remove('visible') })
}

function toggleButtons(e) {
  buttons.map(function(button) {
    button.classList.toggle('button-hidden')
  })
}

function scrollCards() {
  const halfCardHeight = 350 / 2;
  const target = window.innerHeight - workScrollable.offsetTop - halfCardHeight
  workCards.forEach(function(el) {
    if (el.getBoundingClientRect().top < target) el.classList.add('visible')
  })
}


document.addEventListener('DOMContentLoaded', function() {
  console.log('%cWelcome to my portfolio!', "color: #00B0AE; font-size: 20px")
  console.log("I specialize in modern Javascript and React/Redux.")
  console.log("I'm currently in Washington DC but am open to relocating.")
  console.log("%cbrendanbeltz@gmail.com", "font-size: 20px; color: purple;")
  console.log("%c(571) 699-9612", "font-size: 19px; color: #AC02AC;")
})


// ##################### UTILITIES


function debounce(func, wait, immediate) {
  wait = wait || 5;
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};