import { useState } from 'react'
import { PROJECTS, STATUS_LABELS } from '../data/content'
import Icon from './Icon'
import PageLink from './PageLink'
import ProjectGallery from './ProjectGallery'
import Reveal from './Reveal'
import './Projects.css'

function initials(title) {
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function ProjectMedia({ title, device, screenshots }) {
  if (screenshots.length === 0) {
    return (
      <div className="project-placeholder" aria-hidden="true">
        <span>{initials(title)}</span>
      </div>
    )
  }

  // Phone screenshots are shown side by side as a fanned row of devices.
  if (device === 'mobile') {
    return (
      <div className="project-phones">
        {screenshots.slice(0, 3).map((shot) => (
          <img key={shot.src} src={shot.src} alt="" loading="lazy" />
        ))}
      </div>
    )
  }

  return <img src={screenshots[0].src} alt="" loading="lazy" />
}

function ProjectCard({ project, onOpen }) {
  const { title, description, screenshots, tags, status, url } = project
  const hasGallery = screenshots.length > 0
  const isClickable = hasGallery || Boolean(url)

  let heading = title
  if (hasGallery) {
    heading = (
      <button type="button" className="project-open" onClick={onOpen} aria-haspopup="dialog">
        {title}
        <span className="visually-hidden">, view screenshots</span>
        <Icon name="expand" size={16} />
      </button>
    )
  } else if (url) {
    heading = (
      <a href={url} target="_blank" rel="noreferrer">
        {title}
        <Icon name="arrow-up-right" size={18} />
      </a>
    )
  }

  return (
    <article className={`project-card${isClickable ? ' is-clickable' : ''}`}>
      <div className="project-media">
        <ProjectMedia {...project} />
        <span className={`status-badge status-${status}`}>
          <span className="status-dot" aria-hidden="true"></span>
          {STATUS_LABELS[status]}
        </span>
        {hasGallery && (
          <span className="project-hint" aria-hidden="true">
            <Icon name="expand" size={16} />
            {screenshots.length > 1 ? `${screenshots.length} screenshots` : 'View screenshot'}
          </span>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{heading}</h3>
        <p>{description}</p>
        {tags.length > 0 && (
          <ul className="chip-list" aria-label={`${title} technologies`}>
            {tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="projects" className="section page">
      <title>Projects | Siyabonga Nguza</title>
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Featured projects</p>
          <h1>Things I&rsquo;ve built</h1>
          <p>
            A collection of projects where I turn ideas into practical solutions, explore new
            technologies and learn by building real-world applications. Click a project to see
            screenshots.
          </p>
        </Reveal>

        <ul className="projects-grid">
          {PROJECTS.map((project, index) => (
            <Reveal as="li" key={project.title} delay={(index % 2) * 120}>
              <ProjectCard project={project} onOpen={() => setOpenProject(project)} />
            </Reveal>
          ))}
        </ul>

        <PageLink to="/experience" label="Experience" />
      </div>

      {openProject && (
        <ProjectGallery
          key={openProject.title}
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  )
}
