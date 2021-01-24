import ChevronDown from '../UI/ChevronDown'
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';

export default function Hero() {

    const hypeText = [
        {
            text: 'Hero of the Web',
            id: 0
        },
        {
            text: 'Digital Architect',
            id: 1
        },
        {
            text: 'React Connoisseur',
            id: 1
        }
    ]

    const [currentHypeText, setcurrentHypeText] = useState(0)

    const hypeTextHandler = () => {
        setInterval(() => {
            hypeText[hypeText.length - 1].id === currentHypeText
                ? setcurrentHypeText(0)
                : setcurrentHypeText(currentHypeText + 1)
        }, 2500);
    }
    // hypeTextHandler()


    const Hello = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: [10, 0],
            transition: {
                delay: .35,
                x: {
                    duration: .35,
                    yoyo: 2,
                    ease: "easeOut",
                }
            },
        }
    }

    const hypeTextAnimation = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: .71,
                duration: .35,
            },
        }
    }

    const AboutMeButton = {
        hidden: {
            opacity: 0,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.06,
                y: {
                    duration: .35,
                    ease: "easeOut",
                }
            },
        }
    }

    const chevronAnimation = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.06,
                y: {
                    duration: .35,
                    ease: "easeOut",
                }
            },
        }
    }

    return (
        <>
            <div className="bg-transparent my-view pt-16 px-8 lg:px-24 container mx-auto flex flex-col justify-between">
                <div></div>

                <div className="space-y-2">
                    <motion.div
                        variants={Hello}
                        initial={"hidden"}
                        animate={"visible"}

                    >
                        <h1 className="text-matt-textdark dark:text-matt-textlight text-5xl lg:text-7xl font-thin">Hello 👋🏿 ,</h1>
                        <h1 className="text-matt-textdark dark:text-matt-textlight text-5xl lg:text-7xl font-thin pb-4">I'm <span className="text-yellow-900 font-light">Matthew</span></h1>
                    </motion.div>
                    <motion.p
                        variants={hypeTextAnimation}
                        initial="hidden"
                        animate="visible"
                        className="text-matt-textdark dark:text-matt-textlight text-base lg:text-xl font-extralight pb-10 ">{hypeText[currentHypeText].text}</motion.p>
                    <motion.button
                        variants={AboutMeButton}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="rounded-full bg-yellow-900 py-2 px-6 text-white font-light focus:outline-none">About Me</motion.button>
                </div>

                <motion.div
                    variants={chevronAnimation}
                    initial="hidden"
                    animate="visible" className="w-full flex justify-center h-10">
                    <ChevronDown class="w-6 h-6 cursor-pointer text-yellow-900" />
                </motion.div>
            </div>
        </>
    );
}