

const Main = () => {
  return (
    <>
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
            "Hi, I'm Uyor Chimdi Ebulu, a software developer with a passion for creating efficient and user-friendly applications. I specialize in web development, frontend and backend, and have a strong background in relevant technologies or languages like PHP, Javascript, Larabel, React, Jquery. My focus is on writing clean, maintainable code and continuously improving my skills to deliver high-quality software solutions. Whether it's collaborating with teams or solving complex problems, I thrive on turning ideas into reality through technology."
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/IMG-20240201-WA0089.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Front-end Developer &amp; Back-end Developer</h3>
              {/* <p className="fst-italic">
              Recent graduate of a rigorous software development boot camp with hands-on experience in full-stack web development. Proficient in modern programming languages and frameworks, and passionate about building scalable and efficient software solutions. Strong problem-solving skills, collaborative mindset, and a continuous learner eager to contribute to a dynamic development team.
              </p> */}
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>LinkedIn:</strong> <span>linkedin.com/in/uyor-chimdi </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>GitHub:</strong> <span>github.com/chimdi2700</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>+234 7033408011</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                      <span>Lagos, Nigeria</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {/* <li>
                      <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                      <span>30</span>
                    </li> */}
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>Bsc</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong> <span>chimdi2700@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
            Key Facts and Highlights
            </p>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Happy Clients</strong> 
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Projects</strong> 
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1453}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Hours Of Support</strong>
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="count-box">
                <i className="bi bi-people" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={32}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Hard Workers</strong> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Facts Section */}
      {/* ======= Skills Section ======= */}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            
          </div>
          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "100%" }}>
                    100%
                  </div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">65%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "65%" }}>
                    65%
                  </div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                Larabel <i className="val">65%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "65%" }}>
                    65%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="progress">
                <span className="skill">
                  PHP <i className="val">80%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Jquery <i className="val">70%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "70%" }}>
                    70%
                  </div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  React <i className="val">75%</i>
                </span>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "75%" }}>
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}
      {/* ======= Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Uyor Chimdi Ebulu</h4>
                <p>
                  <em>
                  "Hi, I'm Uyor Chimdi Ebulu, a software developer with a passion for creating efficient and user-friendly applications. I specialize in web development, frontend and backend, and have a strong background in relevant technologies or languages like PHP, Javascript, Larabel, React, Jquery. My focus is on writing clean, maintainable code and continuously improving my skills to deliver high-quality software solutions. Whether it's collaborating with teams or solving complex problems, I thrive on turning ideas into reality through technology."
                  </em>
                </p>
                <ul>
                  <li>35, Madam Okeshola Crescent, Idimu Road Ejigbo Lagos Nigeria</li>
                  <li>(+234) 733408011</li>
                  <li>chimdi2700@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Front-end Developer &amp; Back-end Developer</h4>
                
                <p>
                  <em>Moat Academy Boot Camp, Ikeja, Lagos</em>
                </p>
                <ul>
                  <li>Completed an intensive program focused on full-stack web development.</li>
                  <li>Gained proficiency in front-end and back-end development through hands-on projects and collaborative coding exercises.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Chemical Engineering (BSc.) </h4>
                <h5>Graduated: 2018</h5>
                <p>
                  <em>Michael Okpara University Of Agriculture Umudike, Abia State</em>
                </p>
                <p>
                Completed 5 years in Engineering.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Junior Web Developer</h4>
                <h5>2024 - Present</h5>
                <p>
                  <em>Lagos, Nigeria </em>
                </p>
                <ul>
                  <li>
                  Assisted in developing web applications
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and provide
                    counsel on all aspects of the project.
                  </li>
                  <li>
                  	Participated in code reviews and contributed to improving application performance.
                  </li>
                  <li>
                  Gained practical experience with version control systems and collaborative workflows.
                  </li>
                  <li>
                  Database Integration: connecting PHP with MySQL databases to store and retrieve data.
                  </li>
                  <li>
                  Using PHP frameworks like Laravel
                  </li>
                  <li>
                    Implementing advanced PHP features such as session management, authentication, and APIs.
                    </li>
                    <li>
                    Using tools like Trello to manage tasks and track progress.
                    </li>
                    <li>
                    Building and maintaining e-commerce platforms using PHP-based solutions. This includes handling payment gateways, product management, and performance optimization.
                    </li>
                    <li>
                    Debugging skills
                    </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/10.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/10.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/11.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/11.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/13.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/13.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/17.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/17.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/20.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/20.png"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
            WHAT I DO?
            HERE ARE SOME OF MY EXPERTISE
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
              <i className="fa-solid fa-lightbulb" />


              </div>
              <h4 className="title">
                <a href="">INNOVATIVE IDEAS</a>
              </h4>
              <p className="description">
              Often involve new methodologies, tools, frameworks, and applications that push the boundaries of what's possible in software engineering.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
              <i className="fa-solid fa-database" />

              </div>
              <h4 className="title">
                <a href="">SOFTWARE</a>
              </h4>
              <p className="description">
              Creating innovative and efficient software solutions
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
              <i className="fa-solid fa-laptop" />

              </div>
              <h4 className="title">
                <a href="">WEB DESIGN</a>
              </h4>
              <p className="description">
              Layout and Structure
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon">
                <i className="bi bi-binoculars" />
              </div>
              <h4 className="title">
                <a href="">RESPONSIVE DESIGN</a>
              </h4>
              <p className="description">
              Designing websites that adapt to different screen sizes and devices, providing an optimal viewing experience on desktops, tablets, and smartphones.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="icon">
                <i className="bi bi-brightness-high" />
              </div>
              <h4 className="title">
                <a href="">Typography</a>
              </h4>
              <p className="description">
              Selecting fonts and typefaces that are readable and aligned with the website’s overall aesthetic.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="icon">
                <i className="bi bi-calendar4-week" />
              </div>
              <h4 className="title">
                <a href="">Imagery and Graphics</a>
              </h4>
              <p className="description">
              Incorporating high-quality images, icons, and graphics to enhance the visual appeal and support the content.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    "We couldn't be happier with the website you developed for us. Their team was incredibly responsive and accommodating, making sure every aspect of the project aligned with our brand and goals. The custom features they integrated have streamlined our operations and enhanced our online presence significantly. Their expertise in modern web technologies and design trends ensured our site not only stands out but also offers a seamless user experience. The positive feedback from our customers has been overwhelming. Thank you, for your outstanding work!"

                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="assets/img/jar.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Oliver Jart</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>35, Madam Okeshola Crescent, Idimu Road Ejigbo Lagos Nigeria</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>chimdi2700@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+234 7033408011</p>
                </div>
                <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://web.facebook.com/chimdi.uyor" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="Chimdi2700@gmail.com" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="linkedin.com/in/uyor-chimdi" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action=""
                method=""
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required=""
                    defaultValue={""}
                  />
                </div>
                
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
    {/* End #main */}
  </>
  

  )
}

export default Main