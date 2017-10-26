'use strict'

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
  density: 30,
  framerate: 35,
  radius: 60,
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
    halflife: 900,
    dx:10,
    dy:0.2,
    star: 'white'
  })
}

function focusBokeh() {
  bokehField.settings({
    halflife: 800,
    dx:0.3,
    dy:5,
    color: 'white'
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
  splashClasses.map(className => {
    if (splashBG.classList.contains(className)){
      splashBG.classList.remove(className)
    }
  })
  containerClasses.map(className => {
    if (className.classList.contains('active')){
      className.classList.remove('active')
    }
  })
  workScrollable.scrollTop = 0
  workCards.forEach(card => card.classList.remove('visible'))
}

function toggleButtons(e) {
  buttons.map(button => {
    button.classList.toggle('button-hidden')
  })
}

function scrollCards() {
  const halfCardHeight = 350 / 2;
  const target = window.innerHeight - workScrollable.offsetTop - halfCardHeight
  workCards.forEach(el => {
    if (el.getBoundingClientRect().top < target) el.classList.add('visible')
  })
}


document.addEventListener('DOMContentLoaded', ()=> {
  console.log('%cWelcome to my portfolio!', "color: #00B0AE; font-size: 20px")
  console.log("I'm currently looking for an awesome Frontend, Backend, or Full Stack position.")
  console.log("I'm based in Washington DC but am open to relocate across America or Europe.")
  console.log("%cbrendanbeltz@gmail.com", "font-size: 20px; color: purple;")
  console.log("%c(571) 699-9612", "font-size: 19px; color: #AC02AC;")
})


// ##################### UTILITIES


function debounce(func, wait = 5, immediate) {
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