import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Navbar from "../Utils/Nav/NavbarMobile";
import NavbarDesktop from "../Utils/Nav/NavbarDesktop";
import NavbarFull from "../Utils/Nav/NavbarFull";
import { useNavState, useNavStateUpdate } from '../Utils/Nav/NavContext'

export default function Layout({ children }) {


  // FIX FOR VH ON MOBILE
  const changeVhVariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = typeof window !== 'undefined' && window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    typeof document !== 'undefined' &&
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Run the function to change the VH variable when the browser is resized
  useEffect(() => {
    changeVhVariable();
  }, []);

  const navState = useNavState()
  return (
      <div className={"bg-white dark:bg-matt-dark select-none flex flex-col min-h-full w-full"}> 
      {/* <SEO /> */}
      {/* <Navbar notOnePageSection={notOnePageSection} /> */}
      <Head>
        <title>👋🏿 Matt Mayfield | Portfolio</title>
        <meta property="og:title" content="👋🏿 Matt Mayfield | Portfolio" key="title" />
        <link rel="icon" href="/favicon.ico" />        
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>

      <Navbar />
      <NavbarFull />
      <NavbarDesktop />
      <main className={"flex flex-col flex-1 transition-opacity " + (navState ? 'opacity-0' : 'delay-300 duration-1000 opacity-100')}>
        {children}
        </main>
      </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};