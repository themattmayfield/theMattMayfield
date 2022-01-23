import { motion } from "framer-motion";
import React, { useState } from "react";
import Bars from "components/Bars";
import Times from "components/Times";
import { Link } from "react-scroll";

export default function Navbar({ open, setOpen }) {
  const [headerBounce, setHeaderBounce] = useState(true);

  setTimeout(() => {
    setHeaderBounce(false);
  }, 1000);

  const LogoVarients = {
    post: {
      opacity: 1,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: [7, 0],
      transition: {
        delay: 0.3,
        y: {
          duration: 0.3,
          repeat: 2,
          repeatType: "reverse",
          ease: "easeOut",
        },
      },
    },
  };

  const TimesAnimation = {
    scale: [1, 1, 1, 1, 1],
    rotate: [180, 0, 0, 0],
    transition: { duration: 3 },
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  };

  return (
    <>
      <nav
        className={
          "lg:hidden fixed z-50 w-full dark:bg-matt-darknav bg-white opacity-95 px-2 py-3 shadow h-16"
        }
      >
        <div className="px-4 mx-auto w-full relative flex items-center justify-between ">
          <Link to={"hero"} spy={true} smooth={true}>
            <motion.p
              variants={LogoVarients}
              initial="post"
              animate={headerBounce ? "visible" : "post"}
              className="cursor-pointer text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-matt-textlight text-matt-textdark"
            >
              Matthew Mayfield
            </motion.p>
          </Link>
          <button
            onClick={() => setOpen((prevState) => !prevState)}
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
    </>
  );
}
