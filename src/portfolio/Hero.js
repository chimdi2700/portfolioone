import React from 'react'
import { useTypewriter, cursor } from 'react-simple-typewriter'


const Hero = () => {

  const [typeEffect] = useTypewriter({
    words: ['Front-End Developer', 'Back-End Developer', 'Freelancer'],
    loop:{},
    typeSpeed: 200,
    delaySpeed: 100
  });
  return (
    <section
  id="hero"
  className="d-flex flex-column justify-content-center align-items-center"
>
  <div className="hero-container" data-aos="fade-in">
    <h1>Uyor Chimdi Ebulu</h1>
    <p style={{fontWeight: ''}}>
      I'm a{" "}
      <span style={{fontWeight: ''}}>{typeEffect}</span>
    </p>
  </div>
</section>
  )
}

export default Hero