import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Siyabonga Nguza. Built with React &amp; Vite.</p>
        <button type="button" className="back-to-top" onClick={scrollToTop}>
          Back to top
          <Icon name="arrow-up" size={16} />
        </button>
      </div>
    </footer>
  )
}
