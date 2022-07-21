import { handleHover } from "./modules/Hover.js"

const cards = document.querySelectorAll('.project')

cards.forEach(card => {
  card.addEventListener('mouseenter', e => {
    e.preventDefault

    handleHover()
  })
});
