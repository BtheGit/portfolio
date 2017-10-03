'use strict'

const buttonAbout = document.getElementById('button-about')
const buttonWork = document.getElementById('button-work')
const buttonContact = document.getElementById('button-contact')

const buttonReset = document.getElementById('button-reset')

const splashBG = document.getElementById('splash-bg')
const workContainer = document.getElementById('work-container')
const contactContainer = document.getElementById('contact-container')
const aboutContainer = document.getElementById('about-container')

const buttons = [buttonAbout, buttonWork, buttonContact, buttonReset]
const splashClasses = ['splash-top', 'splash-left', 'splash-right']
const containerClasses = [workContainer, contactContainer, aboutContainer]

buttonAbout.addEventListener('click', selectAbout)
buttonWork.addEventListener('click', selectWork)
buttonContact.addEventListener('click', selectContact)
buttonReset.addEventListener('click', selectReset)

function selectAbout(e) {
  toggleButtons()
  splashBG.classList.add('splash-left')
  aboutContainer.classList.add('active')
}

function selectWork(e) {
  toggleButtons()
  splashBG.classList.add('splash-right')
  workContainer.classList.add('active')
}

function selectContact(e) {
  toggleButtons()
  splashBG.classList.add('splash-top')
  contactContainer.classList.add('active')
}

function selectReset(e) {
  toggleButtons()
  resetSplash()
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