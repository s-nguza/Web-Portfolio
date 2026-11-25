import { Link } from 'react-router'
import Icon from './Icon'

export default function NotFound() {
  return (
    <section className="section page not-found">
      <title>Page not found | Siyabonga Nguza</title>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page doesn&rsquo;t exist.</h1>
        <p>The link may be broken, or the page may have moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
          <Icon name="arrow-right" size={18} />
        </Link>
      </div>
    </section>
  )
}
