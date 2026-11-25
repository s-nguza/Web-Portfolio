import { Link } from 'react-router'
import Icon from './Icon'
import Reveal from './Reveal'

/** "Up next" link shown at the bottom of a page to lead visitors to the next one. */
export default function PageLink({ to, label }) {
  return (
    <Reveal className="page-link-wrap">
      <Link to={to} className="page-link">
        <span className="page-link-kicker">Up next</span>
        <span className="page-link-label">
          {label}
          <Icon name="arrow-right" size={22} />
        </span>
      </Link>
    </Reveal>
  )
}
