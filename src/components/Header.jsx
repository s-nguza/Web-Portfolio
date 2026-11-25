import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Icon from './Icon'
import './Header.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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

  // Only the home page has the dark video hero behind the header.
  const overHero = pathname === '/' && !scrolled && !menuOpen
  const classes = ['site-header']
  if (!overHero) classes.push('is-solid')
  if (menuOpen) classes.push('is-menu-open')

  return (
    <header className={classes.join(' ')}>
      <Link className="brand" to="/" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          SN
        </span>
        <span className="brand-name">Siyabonga Nguza</span>
      </Link>

      <nav id="main-navigation" aria-label="Main navigation">
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
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
