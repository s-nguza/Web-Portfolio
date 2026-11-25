import portfolioImage from '../assets/image.png'
import snakeGameImage from '../assets/SnakeGame.png'
import trackerLogin from '../assets/tracker-ibooking/login.png'
import trackerOrders from '../assets/tracker-ibooking/orders.png'
import trackerRegister from '../assets/tracker-ibooking/register.png'

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

export const STATUS_LABELS = {
  'in-progress': 'In progress',
  completed: 'Completed',
}

// status: 'in-progress' | 'completed'
// device: 'desktop' | 'mobile' (controls how screenshots are framed)
// screenshots: shown in a gallery when the project card is clicked (first one is the cover)
// url: link to the repo or live demo (leave null to hide the link)
export const PROJECTS = [
  {
    title: 'Web Portfolio',
    description:
      'This site: a responsive personal portfolio built with React and Vite, with a light/dark theme, scroll animations and an EmailJS-powered contact form.',
    device: 'desktop',
    screenshots: [{ src: portfolioImage, caption: 'Home page' }],
    tags: ['React', 'Vite', 'CSS', 'EmailJS'],
    status: 'in-progress',
    url: null, // TODO: add the GitHub repo or live site link
  },
  {
    title: 'Tracker iBooking',
    description:
      'An order and queue management app for kasi food stores and restaurants. Businesses register their store, then track the day’s orders from confirmed to preparing, ready and done. Orders are sorted by when they must start so everything is ready on time, with kitchen capacity and wait times at a glance.',
    device: 'mobile',
    screenshots: [
      { src: trackerLogin, caption: 'Staff log in' },
      { src: trackerRegister, caption: 'Register your business' },
      { src: trackerOrders, caption: 'Today’s orders dashboard' },
    ],
    tags: [], // TODO: add the technologies used, e.g. ['React', 'Node.js']
    status: 'in-progress',
    url: null, // TODO: add the GitHub repo or live site link
  },
  {
    title: 'Snake Game',
    description:
      'A classic Snake game developed in Java. Players control a snake, collect apples and avoid obstacles while progressing through multiple levels of increasing difficulty.',
    device: 'desktop',
    screenshots: [{ src: snakeGameImage, caption: 'Gameplay' }],
    tags: ['Java'],
    status: 'completed',
    url: null, // TODO: add the GitHub repo link
  },
  {
    title: 'Sneaker Store',
    // TODO: write a one or two sentence description and add tags + screenshots.
    description: 'Description coming soon.',
    device: 'desktop',
    screenshots: [],
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
