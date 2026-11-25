import { useEffect, useRef, useState } from 'react'
import { STATUS_LABELS } from '../data/content'
import Icon from './Icon'
import './ProjectGallery.css'

/** Modal screenshot viewer for a single project. Mount it to open; it calls onClose when dismissed. */
export default function ProjectGallery({ project, onClose }) {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(0)
  const { title, description, device, screenshots, tags, status, url } = project
  const count = screenshots.length
  const current = screenshots[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) {
      dialog.showModal()
    }
  }, [])

  const close = () => dialogRef.current?.close()
  const show = (next) => setIndex((next + count) % count)

  function handleKeyDown(event) {
    if (count < 2) return
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      show(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      show(index - 1)
    }
  }

  // Clicking the dimmed backdrop (the dialog element itself) closes the gallery.
  function handleClick(event) {
    if (event.target === event.currentTarget) {
      close()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={`gallery gallery-${device}`}
      aria-labelledby="gallery-title"
      onClose={onClose}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="gallery-panel">
        <header className="gallery-header">
          <div>
            <span className={`status-badge status-${status}`}>
              <span className="status-dot" aria-hidden="true"></span>
              {STATUS_LABELS[status]}
            </span>
            <h2 id="gallery-title">{title}</h2>
          </div>
          <button type="button" className="gallery-close" onClick={close} aria-label="Close gallery">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="gallery-body">
          <figure className="gallery-stage">
            <div className="gallery-frame">
              <img
                key={current.src}
                className="gallery-image"
                src={current.src}
                alt={`${title}: ${current.caption}`}
              />

              {count > 1 && (
                <>
                  <button
                    type="button"
                    className="gallery-nav gallery-prev"
                    onClick={() => show(index - 1)}
                    aria-label="Previous screenshot"
                  >
                    <Icon name="chevron-left" size={22} />
                  </button>
                  <button
                    type="button"
                    className="gallery-nav gallery-next"
                    onClick={() => show(index + 1)}
                    aria-label="Next screenshot"
                  >
                    <Icon name="chevron-right" size={22} />
                  </button>
                </>
              )}
            </div>

            <figcaption>
              <span>{current.caption}</span>
              {count > 1 && (
                <span className="gallery-count" aria-live="polite">
                  {index + 1} / {count}
                </span>
              )}
            </figcaption>

            {count > 1 && (
              <div className="gallery-thumbs" role="group" aria-label="Screenshots">
                {screenshots.map((shot, i) => (
                  <button
                    key={shot.src}
                    type="button"
                    className="gallery-thumb"
                    onClick={() => show(i)}
                    aria-label={`Show screenshot ${i + 1}: ${shot.caption}`}
                    aria-current={i === index ? 'true' : undefined}
                  >
                    <img src={shot.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </figure>

          <div className="gallery-info">
            <h3>About this project</h3>
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
            {url && (
              <a className="btn btn-primary" href={url} target="_blank" rel="noreferrer">
                View project
                <Icon name="arrow-up-right" size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}
