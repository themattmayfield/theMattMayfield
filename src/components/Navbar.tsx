'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Bars from '@/components/Bars';
import Times from '@/components/Times';
import { Link } from 'react-scroll';
import DayNightToggle from '@/components/DayNightToggle';
import NavItems from '@/components/NavItems';
import {
  LogoVarientsMobile,
  LogoVarientsDesktop,
  TimesAnimation,
  ToggleAnimation,
} from '@/lib/motions';

export default function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [headerBounce, setHeaderBounce] = useState(true);

  setTimeout(() => {
    setHeaderBounce(false);
  }, 1000);

  return (
    <>
      {/* MOBILE */}
      <nav
        className={
          'lg:hidden fixed z-50 w-full dark:bg-matt-darknav bg-white px-2 py-3 shadow h-16'
        }
      >
        <div className="px-4 mx-auto w-full relative flex items-center justify-between ">
          <Link to={'hero'} spy={true} smooth={true}>
            <motion.p
              variants={LogoVarientsMobile}
              initial="post"
              animate={headerBounce ? 'visible' : 'post'}
              className="cursor-pointer text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-matt-textlight text-matt-textdark"
            >
              Matthew Mayfield
            </motion.p>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-matt-orange cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
          >
            {open ? (
              <Times animate={TimesAnimation} className="w-6 h-6" />
            ) : (
              <Bars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* DESKTOP */}
      <nav className="hidden fixed z-50 w-full dark:bg-matt-darknav bg-white opacity-95 top-0 lg:flex flex-wrap items-center justify-between px-2 navbar-expand-lg shadow h-16">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to={'hero'} spy={true} smooth={true}>
              <motion.p
                variants={LogoVarientsDesktop}
                initial="hidden"
                animate="visible"
                className="cursor-pointer text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-matt-textlight text-matt-textdark "
              >
                Matthew Mayfield
              </motion.p>
            </Link>
          </div>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavItems animate="visible" desktop />
            </ul>

            <motion.div
              variants={ToggleAnimation}
              initial="hidden"
              animate="visible"
              className="flex ml-2"
            >
              <DayNightToggle mobile={false} />
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}
