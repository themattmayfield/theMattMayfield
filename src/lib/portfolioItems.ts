const portfolioItems = [
  {
    id: 0,
    name: 'spotify',
    title: 'Spotify Dashboard',
    ImagePath: '/spotifydash.png',
    tech: ['Next.js', 'Tailwind'],
    alt: 'Picture of the author',
    description:
      'A dashboard for Spotify that allows you to view your listening history, top artists, top tracks, and more.',
    github: 'https://github.com/themattmayfield/SpotifyDashboard',
    url: 'https://www.spotifydash.com/',
  },
  {
    id: 1,
    name: 'sure',
    title: 'Sure Challenge',
    ImagePath: '/SURE_dark.png',
    tech: ['Next.js', 'Tailwind'],
    alt: 'Picture of the author',
    description:
      'A responsive web application built as part of a coding challenge. It showcases modern web development practices using Next.js and Tailwind CSS, demonstrating proficiency in creating user-friendly interfaces and implementing complex functionalities.',
    github: 'https://github.com/themattmayfield/Sure-Challenge',
    url: 'https://surechallenge.vercel.app/',
  },
  {
    id: 2,
    name: 'agape_media',
    title: 'Agape Media',
    ImagePath: '/agapemedia.png',
    tech: ['Next.js', 'Framer Motion'],
    alt: 'Picture of the author',
    description:
      'A dynamic website for Agape Media, featuring smooth animations and transitions powered by Framer Motion. This project demonstrates the ability to create engaging, interactive web experiences while maintaining optimal performance.',
    github: '',
    url: 'https://www.agapemedia.io/',
  },
  {
    id: 3,
    name: 'my_links',
    title: 'My Links',
    ImagePath: '/links.png',
    tech: ['Next.js', 'Tailwind'],
    alt: 'Picture of the author',
    description:
      'A personalized link aggregator site, similar to Linktree, built with Next.js and styled with Tailwind CSS. This project showcases the ability to create a clean, efficient, and customizable solution for sharing multiple links in one place.',
    github: '',
    url: 'https://links.themattmayfield.com/',
  },
  {
    id: 4,
    name: 'portfolio',
    title: 'This Portfolio',
    ImagePath: '/heroDark.png',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    alt: 'Picture of the author',
    description:
      'A personal portfolio website built with Next.js, featuring smooth animations with Framer Motion and styled using Tailwind CSS. This project demonstrates proficiency in modern web technologies and showcases a collection of personal projects and skills.',
    github: 'https://github.com/themattmayfield/theMattMayfield',
    url: '/',
  },
];

export type TPortfolioItems = typeof portfolioItems;

export default portfolioItems;
