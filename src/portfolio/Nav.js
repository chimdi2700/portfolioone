

const Nav = () => {
  return (
    <>
  <header id="header">
    <div className="d-flex flex-column">
      <div className="profile">
        <img
          src="assets/img/IMG-20240201-WA0089.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
        <h1 className="text-light">
          <a href="index.html">Uyor Chimdi Ebulu</a>
        </h1>
        <div className="social-links mt-3 text-center">
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
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <a href="#hero" className="nav-link scrollto active">
              <i className="bx bx-home" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto">
              <i className="bx bx-user" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <i className="bx bx-file-blank" /> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto">
              <i className="bx bx-book-content" /> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link scrollto">
              <i className="bx bx-server" /> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto">
              <i className="bx bx-envelope" /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* .nav-menu */}
    </div>
  </header>
  {/* End Header */}
</>

  )
}

export default Nav