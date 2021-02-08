import { useNavState, useNavStateUpdate } from './NavContext'
import { motion } from "framer-motion"
import React, { useState } from 'react';
import Bars from '../../UI/Bars'
import Times from '../../UI/Times'

export default function Navbar() {
    const navState = useNavState()
    const scrollHandler = useNavStateUpdate()

    const [headerBounce, setHeaderBounce] = useState(true)

    setTimeout(() => {
        setHeaderBounce(false)
    }, 1000)

    const LogoVarients = {
        post: {
            opacity: 1,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: [7, 0],
            transition: {
                delay: .3,
                y: {
                    duration: .3,
                    yoyo: 2,
                    ease: "easeOut",
                }
            }
        }
    }

    const TimesAnimation = {
        scale: [1, 1, 1, 1, 1],
        rotate: [180, 0, 0, 0],
        transition: { duration: 3 },
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }

    return (
        <>
            <nav className={"lg:hidden fixed z-50 w-full dark:bg-matt-darknav bg-white opacity-95 px-2 py-3 shadow h-16"}>
                <div className="px-4 mx-auto w-full relative flex items-center justify-between ">
                    <motion.a
                        variants={LogoVarients}
                        initial="post"
                        animate={headerBounce ? 'visible' : 'post'}
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-matt-textlight text-matt-textdark" href="/">
                        Matthew Mayfield
              </motion.a>
                    <button onClick={scrollHandler} className="text-yellow-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none">
                        {navState ?
                            <Times
                                animate={TimesAnimation}
                                class="w-6 h-6"
                            />
                            :
                            <Bars class="w-6 h-6" />
                        }

                    </button>
                </div>
            </nav>
        </>
    );
}