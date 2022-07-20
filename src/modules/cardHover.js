import gsap from 'gsap'

const handleHover = () => {
  gsap.set([".slash", ".index"],
    { opacity: 0 }
  )
  .to([".slash", ".index"],
    { opacity: 1 },
    0.20
  );
}

export default handleHover;
