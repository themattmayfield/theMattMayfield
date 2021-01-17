import Head from 'next/head'
import Navbar from "../components/Navbar";
import React, { useState } from 'react';

export default function Home() {
  const [navState, setNavState] = useState(false)

    const scrollHandler = () => {
      setNavState(!navState)      
    }

  return (
    <div className={"relative bg-gray-200 " + (navState ? 'h-screen overflow-hidden' : '')}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>
      <Navbar navState={navState} scrollHandler={scrollHandler} />
      
      <div className={"pt-16 " + (navState ? 'hidden' : '')}>
      <div className="h-64">heahehts</div>
      <div className="h-64">heahehts</div>
      <div className="h-64">heahehts</div>
      <div className="h-64">heahehts</div>
      </div>
      
    </div>
  )
}
