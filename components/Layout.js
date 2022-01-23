import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Navbar from "components/Navbar";
import NavbarModal from "components/NavbarModal";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  // FIX FOR VH ON MOBILE
  const changeVhVariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = typeof window !== "undefined" && window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    typeof document !== "undefined" &&
      document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  // Run the function to change the VH variable when the browser is resized
  useEffect(() => {
    // console.clear();
    // console.log("Hi SURE! Hope you enjoy 😀 - MATT");
    changeVhVariable();
  }, []);
  return (
    <>
      <Head>
        <title>Matt Mayfield | Portfolio</title>
        <meta
          property="og:title"
          content="👋🏿 Matt Mayfield | Portfolio"
          key="title"
        />
        <link rel="icon" href="/hand.png" />
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </Head>

      <div className={"bg-white dark:bg-matt-dark select-none min-h-full "}>
        {open ? <NavbarModal setOpen={setOpen} open={open} /> : null}
        <Navbar open={open} setOpen={setOpen} />

        <main
          className={
            "flex-1 transition-opacity " +
            (open ? "opacity-0" : "delay-300 duration-1000 opacity-100")
          }
        >
          {children}
        </main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
