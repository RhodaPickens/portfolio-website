// Hero
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'

export const heroIcons2 = [
  {
    icon: <GithubFillIcon />,
    link: "https://github.com/RhodaPickens",
  },
  {
    icon: <LinkedinBoxFillIcon />,
    link: "https://www.linkedin.com/in/rhoda-pickens/",
  },
];

// About

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />


// Skills

export const skillsData = [
  // Languages & Core
  {
    name: 'Java',
    icon: '/skills/java.png',
  },
  {
    name: 'Python',
    icon: '/skills/python.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'SQL',
    icon: '/skills/sql.png',
  },

  // Frameworks & Tools
  {
    name: 'Spring Boot',
    icon: '/skills/spring.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'Angular',
    icon: '/skills/angular.png',
  },

  // Infrastructure & Professional
  {
    name: 'AWS',
    icon: '/skills/aws.png',
  },
  {
    name: 'Docker',
    icon: '/skills/docker.png',
  },
  {
    name: 'Git',
    icon: '/skills/git.png',
  },
  {
    name: 'WordPress',
    icon: '/skills/wordpress.png',
  },
  {
    name: 'UX/UI',
    icon: '/skills/ux-ui.png',
  },
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
]


// Projects
export const projectsData = [
  {
    name: 'Landon Hotel',
    desc: 'Enhanced a Spring Boot/Angular app with multithreaded translations, multi-timezone messages, and multi-currency display. Containerized with Docker.',
    url: '/projects/landon-hotel.webp',
    tech: ['Java', 'Spring Boot', 'Angular'],
  },
  {
    name: 'Travel Agency Backend Migration',
    desc: 'Developed Spring Boot back end for a travel agency, integrated with existing Angular front end and MySQL database, featuring REST APIs, validation, and order tracking.',
    url: '/projects/travel-agency.png',
    tech: ['Java', 'Spring Boot', 'REST API', 'SQL'],
  },
  {
    name: 'Guitar Parts Inventory',
    desc: 'Web app for managing a guitar parts inventory with Spring Boot and Thymeleaf, featuring live validation, automated stock updates, and unit-tested functionality.',
    url: '/projects/guitar-parts.webp',
    tech: ['Spring Boot', 'HTML', 'CSS', 'Java'],
  },
  {
    name: 'Angular Interactive World Map',
    desc: 'Interactive world map built with Angular that lets users click countries to view data from the World Bank API, including capital, region, and income level.',
    url: '/projects/world-map.png',
    tech: ['Angular', 'HTML', 'CSS', 'JavaScript', 'REST API'],
  },
  {
    name: 'Texas Tourist Website',
    desc: 'A multi-page Texas state website designed and developed from Figma layouts into HTML/CSS, featuring a JavaScript-validated contact form.',
    url: '/projects/texas-state.webp',
    tech: ['Figma', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Island of Taniti',
    desc: 'Developed a tourist website for Taniti Island by mapping user journeys, building wireframes, and refining the interface based on peer usability insights.',
    url: '/projects/island-of-taniti.png',
    demoUrl: 'https://rhodajane.wixsite.com/the-island-of-taniti',
    tech: ['Figma'],
  },
  {
    name: 'Paradigm Pet Professionals',
    desc: 'Redesigned a website with Figma wireframes and a PowerPoint prototype to improve usability for pet owners.',
    url: '/projects/paradigm-pets-prototype.png',
    tech: ['Figma'],
  },
]

export const projectsButton = [
  'All',
  'Java',
  'Spring Boot',
  'Angular',
  'JavaScript',
  'REST API',
  'SQL',
  'HTML',
  'CSS',
  'Figma',
]

// Reviews
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/amy-c.webp',
    name: 'Amy C., Sure Leader Websites',
    comment:
      "When I hired Rhoda I was hoping to find someone who could get around a website and do a few changes. I was pleasantly surprised to find that Rhoda was highly skilled not only In web development but also in marketing and design as well. She understood what made a good user experience and how little things effected the conversion process. Plus she was really easy to work with and friendly to everyone. A real team player! I would highly recommend her. People like that are hard to find.",
  },
  {
    image: '/reviews/client-5.png',
    name: 'Tzvi S., Consulting Agency',
    comment:
      "Rhoda was easy to work with and did a great job. We only wish she had more time so we could give her larger projects!",
  },
  {
    image: '/reviews/client-1.png',
    name: 'Fred A., Website Owner',
    comment:
      "Rhoda takes the quality of her work seriously. Delivered milestones on time.",
  },
]


// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'


export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  },
]
