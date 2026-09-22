import { useEffect, useRef, useState } from 'react'
import backgroundVideo from './assets/12754230_3840_2160_30fps.mp4'
import portfolioImage from './assets/image.png'
import snakeGameImage from './assets/SnakeGame.png'
import './App.css'

function App() {
  const [messageSent, setMessageSent] = useState(false)
  const aboutSectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const aboutSection = aboutSectionRef.current

    if (!aboutSection) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        aboutSection.classList.toggle('is-visible', entry.isIntersecting)
      },
      { rootMargin: '0px 0px -25% 0px', threshold: 0.2 },
    )

    observer.observe(aboutSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timeline = timelineRef.current

    if (!timeline) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        timeline.classList.toggle('is-visible', entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    observer.observe(timeline)

    return () => observer.disconnect()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    setMessageSent(true)
  }

  return (
    <>
      <header id="top" className="site-header">
        <a className="site-name" href="#top">
          Siyabonga Nguza
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
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

      <section ref={aboutSectionRef} id="about" className="about-section">
        <div className="about-heading">
          <p className="section-label">ABOUT</p>
          <h2>Technology should solve real problems.</h2>
        </div>

        <div className="about-cards">
          <article className="about-card about-copy">
            <h3>About Me</h3>
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
            <p>I’m naturally curious and always looking to learn something new. I enjoy taking complex problems, 
              breaking them down into smaller pieces, and turning ideas into practical solutions. As I continue developing my career, 
              I’m interested in the intersection of software development, cloud, cybersecurity, AI, and digital products, while continuously
              building my skills through real-world projects and hands-on experience.</p>
          </article>

          <article className="about-card technical-skills">
            <h3>Technical Skills</h3>
            <div className="skill-category">
              <h4>Programming</h4>
              <p>Java · Python · JavaScript<br />SQL · HTML · CSS</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks &amp; Tools</h4>
              <p>React · Spring Boot<br />Git · Docker · Postman</p>
            </div>
            <div className="skill-category">
              <h4>Cloud &amp; Systems</h4>
              <p>Azure · AWS · Linux<br />REST APIs · Networking</p>
            </div>
            <div className="skill-category">
              <h4>Cybersecurity</h4>
              <p>Security Fundamentals<br />Nmap · Linux · SIEM</p>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-heading">
          <p className="section-label">FEATURED PROJECTS</p>
          <p className="projects-intro">
            A collection of projects where I turn ideas into practical
            solutions, explore new technologies, strengthen my technical
            skills, and learn through building real-world applications
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-visual" aria-label="Web Portfolio screenshot">
              <img src={portfolioImage} alt="Web Portfolio screenshot" className="project-image" />
            </div>
            <div className="project-details">
              <a href="#projects" className="project-title">
                Web-Portifolio <span aria-hidden="true">↗</span>
              </a>
              <p>Short description</p>
              <span className="project-status in-progress">
                <span className="project-dot" aria-hidden="true"></span>
                IN PROGRESS
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual" aria-label="Banking app screenshot placeholder">
              <span>SCREENSHOT {'{placeholder}'}</span>
            </div>
            <div className="project-details">
              <a href="#projects" className="project-title">
                Banking app <span aria-hidden="true">↗</span>
              </a>
              <p>Short description</p>
              <span className="project-status in-progress">
                <span className="project-dot" aria-hidden="true"></span>
                IN PROGRESS
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual" aria-label="Snake game screenshot">
              <img src={snakeGameImage} alt="Snake game screenshot" className="project-image" />
            </div>
            <div className="project-details">
              <a href="#projects" className="project-title">
                snakegame <span aria-hidden="true">↗</span>
              </a>
              <p>A classic Snake game developed in Java. The game challenges players to control a snake, collect apples, and avoid obstacles while progressing through multiple levels, each with increasing difficulty.</p>
              <span className="project-status completed">
                <span className="project-dot" aria-hidden="true"></span>
                Completed
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual" aria-label="Sneaker store screenshot placeholder">
              <span>SCREENSHOT {'{placeholder}'}</span>
            </div>
            <div className="project-details">
              <a href="#projects" className="project-title">
                Sneakerstore <span aria-hidden="true">↗</span>
              </a>
              <p>Short description</p>
              <span className="project-status in-progress">
                <span className="project-dot" aria-hidden="true"></span>
                IN PROGRESS
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="experience-heading">
          <p className="section-label">EXPERIENCE</p>
          <h2>My journey so far, building experience across software, technology and innovation.</h2>
        </div>

        <div ref={timelineRef} className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker">
              <span>2026</span>
              <i aria-hidden="true"></i>
            </div>
            <div className="experience-card">
              <h3>Compatible Automotive</h3>
              <p className="experience-role">Product Innovation Specialist Intern</p>
              <p className="experience-location">Woodmead, South Africa</p>
              <ul>
                <li>Product innovation</li>
                <li>Digital products</li>
                <li>Testing &amp; documentation</li>
              </ul>
              
              <ul>
                <p className="experience-company"><strong>YoungDeltas</strong></p>
              <li>Consultant &amp; Entrepreneurship</li></ul>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-marker">
              <span>2025</span>
              <i aria-hidden="true"></i>
            </div>
            <div className="experience-card">
              <h3>Consnet</h3>
              <p className="experience-role">Software Development Intern</p>
              <ul>
                <li>APIs</li>
                <li>Docker</li>
                <li>Middleware</li>
                <li>Testing</li>
              </ul>
            </div>
          </article>

          <div className="timeline-end">
            <span aria-hidden="true">↓</span>
            <p>What's next?</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="contact" className="contact-section">
        <div className="contact-panel">
          <div className="contact-compose">
            <div className="contact-intro">
              <p className="contact-label">CONTACT ME</p>
              <h2>Let's start a conversation</h2>
              <p>
                Whether you have a specific project in mind, a technical challenge,
                or just want to talk shop, I'm all ears.
              </p>
            </div>

            <div className="contact-details">
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="What I should call you" required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Where can I reach you" required />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about what's on your mind"
                  required
                ></textarea>

                <button type="submit">Send Message</button>
                {messageSent && (
                  <p className="form-status" role="status">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>

          <aside className="contact-information" aria-labelledby="contact-information-title">
            <h3 id="contact-information-title">Contact information</h3>
            <div className="contact-information-list">
              <div className="contact-information-item">
                <span className="contact-information-icon" aria-hidden="true">@</span>
                <div>
                  <p>Email</p>
                  <a href="#contact">Send email</a>
                </div>
              </div>
              <div className="contact-information-item">
                <span className="contact-information-icon" aria-hidden="true">&#9679;</span>
                <div>
                  <p>Location</p>
                  <span>South Africa, Johannesburg</span>
                </div>
              </div>
              <div className="contact-information-item">
                <span className="contact-information-icon" aria-hidden="true">&#9673;</span>
                <div>
                  <p>Languages</p>
                  <span>English &bull; Xhosa</span>
                </div>
              </div>
              <div className="contact-information-item">
                <span className="contact-information-icon" aria-hidden="true">in</span>
                <div>
                  <p>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/siyabonga-nguza-630434283/" target="_blank" rel="noreferrer">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="contact-information-item">
                <span className="contact-information-icon" aria-hidden="true">GH</span>
                <div>
                  <p>GitHub</p>
                  <a href="https://github.com/s-nguza" target="_blank" rel="noreferrer">
                    View GitHub profile
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default App
