import './style.css'

import handleHover from './modules/cardHover.js'

console.log('hi')

const cards = document.querySelectorAll('.project')
cards.forEach(card => {
  card.addEventListener('mouseenter', e => {
    console.log('hover')
    handleHover();
  })
})
