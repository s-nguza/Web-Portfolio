import backgroundVideo from '../assets/12754230_3840_2160_30fps.mp4'
import { FOCUS_AREAS, SOCIAL } from '../data/content'
import Icon from './Icon'
import TypingText from './TypingText'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <video className="hero-video" autoPlay loop muted playsInline aria-hidden="true">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-badge">Hello, I&rsquo;m Siya</p>
        <h1>
          <span className="hero-gradient">Software Developer</span>
          <br />
          &amp; IT Professional
        </h1>
        <p className="hero-intro">
          I build digital solutions and explore
          <br />
          <TypingText words={FOCUS_AREAS} />
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
            <Icon name="arrow-right" size={18} />
          </a>
          <a className="btn btn-glass" href={SOCIAL.github} target="_blank" rel="noreferrer">
            <Icon name="code" size={18} />
            GitHub
          </a>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span></span>
      </a>
    </section>
  )
}
