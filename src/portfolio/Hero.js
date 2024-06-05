import React from 'react'
import { useTypewriter, cursor } from 'react-simple-typewriter'


const Hero = () => {

  const [typeEffect] = useTypewriter({
    words: ['Front-end Developer', 'Back-end Developer', 'Freelancer'],
    loop:{},
    typeSpeed: 100,
    delaySpeed: 40
  });
  return (
    <section
  id="hero"
  className="d-flex flex-column justify-content-center align-items-center"
>
  <div className="hero-container" data-aos="fade-in">
    <h1>Uyor Chimdi Ebulu</h1>
    <p style={{fontWeight: 'bold'}}>
      I'm{" "}
      <span style={{fontWeight: 'bold'}}>{typeEffect}</span>
    </p>
  </div>
</section>
  )
}

export default Hero