import gsap from "../../node_modules/gsap/all.js"


export class Item {
  DOM = {
    el: null,
    item: null,
    slash: null,
    index: null,
    image: null
  }

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.slash = this.DOM.el.querySelector('.item__slash')
    this.DOM.index = this.DOM.el.querySelector('.item__index')
    this.DOM.image = this.DOM.el.querySelector('.item__middle-img')

    this.DOM.el.addEventListener('mouseenter', () => {
      gsap.killTweensOf(this.DOM.image)
      gsap.to([this.DOM.slash, this.DOM.index], {
        duration: 0.5,
        ease: 'power4',
        x: -50,
        opacity: 1
      })
    })
    this.DOM.el.addEventListener('mouseleave', () => {
      gsap.killTweensOf(this.DOM.image)
      gsap.to([this.DOM.slash, this.DOM.index], {
        duration: 0.5,
        ease: 'power4',
        x: 50,
        opacity: 0
      })
    })
  }
}
