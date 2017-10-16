'use strict'

const buttonAbout = document.getElementById('button-about')
const buttonWork = document.getElementById('button-work')
const buttonContact = document.getElementById('button-contact')

const buttonReset = document.getElementById('button-reset')

const splashBG = document.getElementById('splash-bg')
document.addEventListener('scroll', e => {console.log(e)})
const workContainer = document.getElementById('work-container')
const contactContainer = document.getElementById('contact-container')
const aboutContainer = document.getElementById('about-container')

const bokehField = bokehfy(splashBG);
bokehField.transparent(true);
resetBokeh();

const buttons = [buttonAbout, buttonWork, buttonContact, buttonReset]
const splashClasses = ['splash-top', 'splash-left', 'splash-right']
const containerClasses = [workContainer, contactContainer, aboutContainer]

buttonAbout.addEventListener('click', selectAbout)
buttonWork.addEventListener('click', selectWork)
buttonContact.addEventListener('click', selectContact)
buttonReset.addEventListener('click', selectReset)

function resetBokeh(){
  bokehField.density(50);
  bokehField.radius(120)
  bokehField.framerate(35)
  bokehField.halflife(750)
  bokehField.star('white')
}

function focusBokeh() {
  bokehField.density(15);
  bokehField.radius(50)
  bokehField.framerate(22)
  bokehField.halflife(500);
  bokehField.color('white')
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
}

function toggleButtons(e) {
  buttons.map(button => {
    button.classList.toggle('button-hidden')
  })
}




document.addEventListener('DOMContentLoaded', ()=> {
  console.log('%cWelcome to my portfolio!', "color: #00B0AE; font-size: 20px")
  console.log("I'm currently accepting offers for Frontend, Backend, or Full Stack positions.")
  console.log("I'm currently based in Washington DC but am open to relocate across America or Europe.")
  console.log("%cbrendanbeltz@gmail.com", "font-size: 20px; color: purple;")
  console.log("%c(571) 699-9612", "font-size: 19px; color: #AC02AC;")
})