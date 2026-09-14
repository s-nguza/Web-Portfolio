import backgroundVideo from './assets/12754230_3840_2160_30fps.mp4'
import './App.css'

function App() {
  return (
    <>
      <header id="top" className="site-header">
        <a className="site-name" href="#top">
          Siyabonga Nguza
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="home-hero">
        <video
          className="home-video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="home-overlay"></div>
        <div className="home-content">
          <p className="eyebrow">HELLO, I'M SIYA</p>
          <h1>
            Software Developer
            <br />
            &amp; IT Professional
          </h1>
          <p className="intro">
            I build digital solutions and explore
            <br />
            software, cloud and cybersecurity.
          </p>
          <div className="hero-actions">
            <a className="hero-button primary" href="#projects">
              View my work
            </a>
            <a
              className="hero-button secondary"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="about" className="about-section">
        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>Technology should solve real problems.</h2>
          <div className="about-copy">
            <p>
              I'm Siya, a technology professional passionate about building useful
              digital solutions and understanding how technology can improve the way
              people work.
            </p>
            <p>
              My journey has taken me through software development, IT systems,
              cloud technologies and product innovation. I enjoy taking complex
              problems, breaking them down and turning them into practical solutions.
            </p>
            <p>
              I'm naturally curious about how things work. Whether I'm building a web
              application, working with APIs, exploring cloud infrastructure or
              learning about cybersecurity, I'm always looking for ways to improve my
              technical skills and understand the bigger picture behind the technology.
            </p>
          </div>
        </div>

        <div className="about-divider"></div>

        <div className="skills-group">
          <div className="programming-grid">
            <span>Java</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Spring Boot</span>
            <span>Azure</span>
            <span>AWS</span>
            <span>Git</span>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
