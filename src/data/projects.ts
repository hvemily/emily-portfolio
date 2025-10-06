export type Project = {
  slug: string;
  title: string;
  teaser: string;  
  thumbnail: string;
  image: string;
  caption?: string;
  live?: string;
  repo?: string;
  article: string;
};

export const projects: Project[] = [
  {
    slug: 'css-frameworks',
    title: 'CSS Frameworks - SOCI4L',
    teaser: 'A responsive site built to compare and apply a CSS framework with solid layout.',
    thumbnail: '/images/soci4l_login.png',
    image: '/images/soci4l_login.png',
    caption: 'Soci4l - a CSS frameworks project',
    live: 'https://main--soci4l.netlify.app/',
    repo: 'https://github.com/NoroffFEU/js2-ca-hvemily/tree/css-frameworks',
    article: `This project explores using a CSS framework to build a responsive layout quickly.
    It was buildt using Tailwind as the CSS framwork. If you wish to register to view the page, 
    just make up a e-mail account that ends with @stud.noroff.no`,
  },
  {
    slug: 'javascript-frameworks',
    title: 'JavaScript Frameworks',
    teaser: 'A SPA using a modern JS framework to fetch data, route pages, and manage state.',
    thumbnail: '/images/marquet_home.png',
    image: '/images/thumbnail_IMG_5041.webp',
    caption: 'Project thumbnail',
    live: 'https://marquetco.netlify.app/',
    repo: 'https://github.com/NoroffFEU/jsfw-2025-v1-emilys-jsfw',
    article: `Built with React + Vite...`,
  },
  {
    slug: 'semester-project-2',
    title: 'Semester Project 2',
    teaser: 'A full-featured app from brief to delivery – planning, design, API integration.',
    thumbnail: '/images/verite-bg.jpg',
    image: '/images/thumbnail_Attachment-1.webp',
    caption: 'Project thumbnail',
    live: 'https://veriteauctions.netlify.app/',
    repo: 'https://github.com/hvemily/SP2',
    article: `Capstone-style project covering planning, API integration, responsive UI...`,
  },

    {
    slug: 'semester-project-2',
    title: 'Semester Project 2',
    teaser: 'A full-featured app from brief to delivery – planning, design, API integration.',
    thumbnail: '/images/thumbnail_Attachment-1.webp',
    image: '/images/thumbnail_Attachment-1.webp',
    caption: 'Project thumbnail',
    live: 'https://your-live-link.example.com',
    repo: 'https://github.com/your-username/semester-project-2',
    article: `Capstone-style project covering planning, API integration, responsive UI...`,
  },

    {
    slug: 'semester-project-2',
    title: 'Semester Project 2',
    teaser: 'A full-featured app from brief to delivery – planning, design, API integration.',
    thumbnail: '/images/thumbnail_Attachment-1.webp',
    image: '/images/thumbnail_Attachment-1.webp',
    caption: 'Project thumbnail',
    live: 'https://your-live-link.example.com',
    repo: 'https://github.com/your-username/semester-project-2',
    article: `Capstone-style project covering planning, API integration, responsive UI...`,
  },

    {
    slug: 'semester-project-2',
    title: 'Semester Project 2',
    teaser: 'A full-featured app from brief to delivery – planning, design, API integration.',
    thumbnail: '/images/thumbnail_Attachment-1.webp',
    image: '/images/thumbnail_Attachment-1.webp',
    caption: 'Project thumbnail',
    live: 'https://your-live-link.example.com',
    repo: 'https://github.com/your-username/semester-project-2',
    article: `Capstone-style project covering planning, API integration, responsive UI...`,
  },
];
