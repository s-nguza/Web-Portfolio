import { useEffect, useState } from 'react'

export default function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const word = words[wordIndex]

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    let delay = deleting ? 45 : 90

    if (!deleting && length === word.length) {
      delay = 1800
    } else if (deleting && length === 0) {
      delay = 400
    }

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true)
      } else if (deleting && length === 0) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      } else {
        setLength((current) => current + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [deleting, length, reduceMotion, word, words.length])

  if (reduceMotion) {
    return <span className="typed-text">{words.join(', ')}</span>
  }

  return (
    <>
      <span className="visually-hidden">{words.join(', ')}</span>
      <span className="typed-text" aria-hidden="true">
        {word.slice(0, length)}
        <span className="typed-cursor"></span>
      </span>
    </>
  )
}
