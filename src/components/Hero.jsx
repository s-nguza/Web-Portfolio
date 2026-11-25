import { Link } from 'react-router'
import backgroundVideo from '../assets/12754230_3840_2160_30fps.mp4'
import { FOCUS_AREAS } from '../data/content'
import Icon from './Icon'
import TypingText from './TypingText'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <title>Siyabonga Nguza | Software Developer &amp; IT Professional</title>
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
          <Link className="btn btn-primary" to="/projects">
            View my work
            <Icon name="arrow-right" size={18} />
          </Link>
          <Link className="btn btn-glass" to="/contact">
            <Icon name="mail" size={18} />
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
