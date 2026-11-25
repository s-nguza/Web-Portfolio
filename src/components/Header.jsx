import { useEffect, useState } from 'react'
import Icon from './Icon'
import './Header.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')

  // Switch from transparent-over-hero to frosted glass once the page scrolls.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Highlight the nav link for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const isDark = theme === 'dark'
  const classes = ['site-header']
  if (scrolled || menuOpen) classes.push('is-solid')
  if (menuOpen) classes.push('is-menu-open')

  return (
    <header className={classes.join(' ')}>
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          SN
        </span>
        <span className="brand-name">Siyabonga Nguza</span>
      </a>

      <nav id="main-navigation" aria-label="Main navigation">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? 'is-active' : undefined}
            aria-current={activeId === id ? 'true' : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="icon-button theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          title={isDark ? 'Light theme' : 'Dark theme'}
        >
          <Icon name={isDark ? 'sun' : 'moon'} size={18} />
        </button>

        <button
          type="button"
          className="icon-button menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
