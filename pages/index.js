import Head from 'next/head'
import Navbar from "../components/NavbarMobile";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarFull from "../components/NavbarFull";
import React, { useState } from 'react';
import Hero from '../components/Sections/Hero'
import AboutMe from '../components/Sections/AboutMe'
import Portfolio from '../components/Sections/Portfolio'
import Contact from '../components/Sections/Contact'


export default function Home() {

  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  const [navState, setNavState] = useState(false)

  const scrollHandler = () => {
    setNavState(!navState)
    !navState ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
  }

  return (
    <div className={"bg-white dark:bg-matt-dark select-none " + (navState ? 'h-screen' : 'h-full')}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>

      <Navbar navState={navState} scrollHandler={scrollHandler} />
      <NavbarFull navState={navState} />
      <NavbarDesktop />

      <div className={navState ? 'hidden' : ''}>
        <Hero />

        <AboutMe />

        <Portfolio />

        <Contact />
      </div>

    </div>
  )
}
