import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { SOCIAL } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import './Contact.css'

const EMAILJS_PUBLIC_KEY = '9Z_sE9UYSgt4A7fcF'
const EMAILJS_SERVICE_ID = 'service_byxogbr'
const EMAILJS_TEMPLATE_ID = 'template_dbtpzsr'

const REASONS = ['Job Opportunity', 'Collaboration', 'Project Inquiry', 'General Question', 'Other']

const CONTACT_INFO = [
  { icon: 'pin', label: 'Location', value: 'Johannesburg, South Africa' },
  { icon: 'globe', label: 'Languages', value: 'English · Xhosa' },
  { icon: 'briefcase', label: 'LinkedIn', value: 'Connect on LinkedIn', href: SOCIAL.linkedin },
  { icon: 'code', label: 'GitHub', value: 'View GitHub profile', href: SOCIAL.github },
]

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setFormStatus('sending')

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      form.reset()
      setFormStatus('sent')
    } catch (error) {
      console.error('EmailJS error:', error)
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="section page">
      <title>Contact | Siyabonga Nguza</title>
      <div className="container contact-layout">
        <Reveal className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h1>
            Let&rsquo;s start a <span className="gradient-text">conversation</span>
          </h1>
          <p className="contact-lead">
            Whether you have a specific project in mind, a technical challenge, or just want to
            talk shop, I&rsquo;m all ears.
          </p>

          <ul className="contact-info">
            {CONTACT_INFO.map(({ icon, label, value, href }) => (
              <li key={label}>
                <span className="contact-icon">
                  <Icon name={icon} size={18} />
                </span>
                <div>
                  <p className="contact-info-label">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="card contact-card" delay={120}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="What should I call you?" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Where can I reach you?" autoComplete="email" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="reason">Reason</label>
              <select id="reason" name="reason" defaultValue="" required>
                <option value="" disabled>
                  What are you contacting me about?
                </option>
                {REASONS.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me what's on your mind"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending…' : 'Send message'}
              <Icon name="send" size={17} />
            </button>

            {formStatus === 'sent' && (
              <p className="form-status is-success" role="status">
                Thanks for reaching out. I&rsquo;ll get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="form-status is-error" role="alert">
                Something went wrong sending your message. Please try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
