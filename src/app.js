import gsap from "../../node_modules/gsap/all.js"

const cards = document.querySelectorAll('.project')

const animation = () => {
  gsap.to([".slash", ".index"], {
    x: -50,
    opacity: 1,
    duration: 1
  });
}

cards.forEach(card => {
  const x = animation()
  card.addEventListener('mouseenter', () => {
    x.play()
  })
  card.addEventListener('mouseleave', () => {
    x.reverse()
  })
});
