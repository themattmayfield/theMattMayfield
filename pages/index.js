import Head from 'next/head'
import Navbar from "../components/NavbarMobile";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarFull from "../components/NavbarFull";
import React, { useState } from 'react';
import Hero from '../components/Sections/Hero'
import AboutMe from '../components/Sections/AboutMe'
import Portfolio from '../components/Sections/Portfolio'
import Contact from '../components/Sections/Contact'

import { useNavState, useNavStateUpdate } from '../components/Utils/NavContext'

export default function Home() {
  const navState = useNavState()
  const scrollHandler = useNavStateUpdate()

  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  return (
    
      <div className={"bg-white dark:bg-matt-dark select-none flex flex-col"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>

      <Navbar navState={navState} scrollHandler={scrollHandler} />
      <NavbarFull navState={navState} />
      <NavbarDesktop />
      

      <div className={"transition-opacity  " + (navState ? 'opacity-0' : 'delay-300 duration-1000 opacity-100')}>
        <Hero />

        <AboutMe />

        <Portfolio />

        <Contact />
      </div>

    </div>
  )
}
