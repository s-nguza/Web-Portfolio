import portfolioImage from '../assets/image.png'
import snakeGameImage from '../assets/SnakeGame.png'

// All editable site content lives here so the components stay presentational.

export const SOCIAL = {
  github: 'https://github.com/s-nguza',
  linkedin: 'https://www.linkedin.com/in/siyabonga-nguza-630434283/',
}

export const FOCUS_AREAS = ['software development', 'cloud computing', 'cybersecurity']

export const ABOUT_PARAGRAPHS = [
  "I'm Siya, a technology professional passionate about building useful digital solutions and understanding how technology can improve the way people work.",
  'My journey has taken me through software development, IT systems, cloud technologies and product innovation. I enjoy taking complex problems, breaking them down and turning them into practical solutions.',
  "I'm naturally curious and always looking to learn something new. As I continue developing my career, I'm interested in the intersection of software development, cloud, cybersecurity, AI and digital products, while continuously building my skills through real-world projects and hands-on experience.",
]

export const SKILLS = [
  { title: 'Programming', items: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { title: 'Frameworks & Tools', items: ['React', 'Spring Boot', 'Git', 'Docker', 'Postman'] },
  { title: 'Cloud & Systems', items: ['Azure', 'AWS', 'Linux', 'REST APIs', 'Networking'] },
  { title: 'Cybersecurity', items: ['Security Fundamentals', 'Nmap', 'Linux', 'SIEM'] },
]

// status: 'in-progress' | 'completed'
// url: link to the repo or live demo (leave null to show the card without a link)
export const PROJECTS = [
  {
    title: 'Web Portfolio',
    description:
      'This site: a responsive personal portfolio built with React and Vite, with a light/dark theme, scroll animations and an EmailJS-powered contact form.',
    image: portfolioImage,
    tags: ['React', 'Vite', 'CSS', 'EmailJS'],
    status: 'in-progress',
    url: null, // TODO: add the GitHub repo or live site link
  },
  {
    title: 'Banking App',
    // TODO: write a one or two sentence description and add tags + a screenshot.
    description: 'Description coming soon.',
    image: null,
    tags: [],
    status: 'in-progress',
    url: null,
  },
  {
    title: 'Snake Game',
    description:
      'A classic Snake game developed in Java. Players control a snake, collect apples and avoid obstacles while progressing through multiple levels of increasing difficulty.',
    image: snakeGameImage,
    tags: ['Java'],
    status: 'completed',
    url: null, // TODO: add the GitHub repo link
  },
  {
    title: 'Sneaker Store',
    // TODO: write a one or two sentence description and add tags + a screenshot.
    description: 'Description coming soon.',
    image: null,
    tags: [],
    status: 'in-progress',
    url: null,
  },
]

export const EXPERIENCE = [
  {
    year: '2026',
    company: 'Compatible Automotive',
    role: 'Product Innovation Specialist Intern',
    location: 'Woodmead, South Africa',
    highlights: ['Product innovation', 'Digital products', 'Testing & documentation'],
  },
  {
    year: '2026',
    company: 'YoungDeltas',
    role: 'Consultant & Entrepreneurship',
    highlights: [],
  },
  {
    year: '2025',
    company: 'Consnet',
    role: 'Software Development Intern',
    highlights: ['APIs', 'Docker', 'Middleware', 'Testing'],
  },
]
