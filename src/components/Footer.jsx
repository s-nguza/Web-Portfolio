import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Siyabonga Nguza. Built with React &amp; Vite.</p>
        <a href="#home" className="back-to-top">
          Back to top
          <Icon name="arrow-up" size={16} />
        </a>
      </div>
    </footer>
  )
}
