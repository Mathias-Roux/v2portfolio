import gsap from "../../node_modules/gsap/all.js"

export const handleHover = () => {
  gsap.set([".slash", ".index"], {
    opacity: 0
  })
  gsap.to([".slash", ".index"], {
    opacity: 1
  })
}
