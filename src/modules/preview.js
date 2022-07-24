import gsap from "../../node_modules/gsap/all.js"


export class Preview {
  DOM = {
    el: null,
    left: null,
    image: null,
    right: null
  }

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.left = this.DOM.el.querySelector('.item__left')
    this.DOM.image = this.DOM.el.querySelector('.item__image')
    this.DOM.right = this.DOM.el.querySelector('.item__right')


    this.DOM.el.addEventListener('click', () => {
      gsap.killTweensOf([this.DOM.left, this.DOM.image, this.DOM.right])
      gsap.to(this.DOM.left, {
        duration: 0.5,
        ease: 'power4',
        y: 0
      })
      gsap.to(this.DOM.image, {
        duration: 0.5,
        ease: 'power4',
        width: 500
      })
      gsap.to(this.DOM.right, {
        duration: 0.5,
        ease: 'power4',
        width: 220
      })
    })
  }
}
