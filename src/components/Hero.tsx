'use client';

import ChevronDown from '@/components/ChevronDown';
import { motion } from 'framer-motion';
import WordsFading from '@/components/WordsFading';
import { Link } from 'react-scroll';
import {
  Hello,
  hypeTextAnimation,
  AboutMeButton,
  chevronAnimation,
  hoverAnimation,
} from '@/lib/motions';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div
        className="bg-transparent my-view pt-16 container max-w-7xl mx-auto flex flex-col justify-between"
        id="hero"
      >
        <div />

        <div className="md:flex items-center justify-between px-8 lg:pl-24">
          <div className="space-y-2 flex-shrink-0">
            <motion.div variants={Hello} initial={'hidden'} animate={'visible'}>
              <h1 className="flex text-matt-textdark dark:text-matt-textlight text-5xl lg:text-7xl font-thin">
                Hello
                <motion.span
                  className="ml-1 cursor-pointer"
                  whileTap={{ scale: 0.3 }}
                >
                  👋🏿
                </motion.span>
                ,
              </h1>
              <h1 className="text-matt-textdark dark:text-matt-textlight text-5xl lg:text-7xl font-thin pb-4">
                I'm <span className="text-matt-orange font-light">Matthew</span>
              </h1>
            </motion.div>
            <motion.p
              variants={hypeTextAnimation}
              initial="hidden"
              animate="visible"
              className="text-matt-textdark dark:text-matt-textlight text-base lg:text-xl font-semibold w-full relative inline-block text-center italic transition ease-out duration-100 pb-10 "
            >
              <WordsFading />
            </motion.p>

            <Link to="about" spy={true} smooth={true}>
              <motion.button
                variants={AboutMeButton}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.07,
                  transition: {
                    type: 'spring',
                  },
                }}
                exit="hidden"
                className="mt-4 rounded-full bg-matt-orange py-2 px-6 text-white font-light focus:outline-none"
              >
                About Me
              </motion.button>
            </Link>
          </div>

          <div className="relative hidden md:block md:h-60 lg:h-96 w-full">
            <Image
              className="hidden md:block"
              src="/anidef.png"
              layout="fill"
              objectFit="contain"
              priority={true}
              alt="Anidef Logo"
            />
          </div>
        </div>

        <motion.div
          variants={chevronAnimation}
          initial="hidden"
          animate="visible"
          className="w-full flex justify-center h-10"
        >
          <Link to="about" spy={true} smooth={true}>
            <ChevronDown
              whileHover={hoverAnimation}
              className="w-6 h-6 cursor-pointer text-matt-orange"
            />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
