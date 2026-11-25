import { ABOUT_PARAGRAPHS, SKILLS } from '../data/content'
import Reveal from './Reveal'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">About</p>
          <h2>
            Technology should solve <span className="gradient-text">real problems.</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal as="article" className="card about-card">
            <h3>About me</h3>
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="article" className="card about-card" delay={120}>
            <h3>Technical skills</h3>
            <div className="skill-groups">
              {SKILLS.map(({ title, items }) => (
                <div key={title} className="skill-group">
                  <h4>{title}</h4>
                  <ul className="chip-list">
                    {items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
