import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import NavbarMobile from "../Nav/NavbarMobile";
import NavbarDesktop from "../Nav/NavbarDesktop";
import NavbarFull from "../Nav/NavbarFull";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

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
        {open ? <NavbarFull setOpen={setOpen} open={open} /> : null}
        <NavbarMobile open={open} setOpen={setOpen} />
        <NavbarDesktop />
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
