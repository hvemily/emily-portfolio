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
    image: '/images/marquet_home.png',
    caption: 'Project thumbnail',
    live: 'https://marquet-co.netlify.app/',
    repo: 'https://github.com/NoroffFEU/jsfw-2025-v1-emilys-jsfw',
    article: `This project is built as part of a frontend development course assignment with the goal of applying React knowledge to build a functioning and styled eCommerce store. The tech stack used here is React, React Router, Vite, Ts, Tailwind and Vitest for unit testing.`,
  },
  {
    slug: 'semester-project-2',
    title: 'Semester Project 2',
    teaser: 'A full-featured app from brief to delivery – planning, design, API integration.',
    thumbnail: '/images/verite-bg.jpg',
    image: '/images/verite_login.png',
    caption: 'Project thumbnail',
    live: 'https://veriteauctions.netlify.app/',
    repo: 'https://github.com/hvemily/SP2',
    article: `Vérité Auctions is an online platform where users can list items for bidding and place bids on other listings. The project is a part of the Noroff Frontend Development Semester Project 2, and focuses on building a frontend application that interacts with the Noroff Auction API. Tech stacks used here are HTML, CSS and JS. `,
  },]
