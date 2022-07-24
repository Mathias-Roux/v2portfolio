import gsap from "../../node_modules/gsap/all.js"


export class Item {
  DOM = {
    el: null,
    slash: null,
    index: null,
    imageInner: null
  }

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.slash = this.DOM.el.querySelector('.item__slash')
    this.DOM.index = this.DOM.el.querySelector('.item__index')
    this.DOM.imageInner = this.DOM.el.querySelector('.item__image-inner')

    this.DOM.el.addEventListener('mouseenter', () => {
      gsap.killTweensOf([this.DOM.slash, this.DOM.index, this.DOM.imageInner])
      gsap.to([this.DOM.slash, this.DOM.index], {
        duration: 0.5,
        ease: 'power4',
        x: -50,
        opacity: 1
      })
      gsap.to(this.DOM.imageInner, {
        duration: 0.5,
        ease: 'power4',
        scale: 1.2
      })
    })
    this.DOM.el.addEventListener('mouseleave', () => {
      gsap.killTweensOf([this.DOM.slash, this.DOM.index, this.DOM.imageInner])
      gsap.to([this.DOM.slash, this.DOM.index], {
        duration: 0.5,
        ease: 'power4',
        x: 50,
        opacity: 0
      })
      gsap.to(this.DOM.imageInner, {
        duration: 0.5,
        ease: 'power4',
        scale: 1
      })
    })
  }
}
