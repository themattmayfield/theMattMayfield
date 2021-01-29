import { motion } from "framer-motion"
import DayNightToggle from './UI/DayNightToggle'
import React, { useState, useEffect } from 'react';
import NavItems from './Utils/NavItems'
export default function Navbar() {
    
    const [firstBounce, setFirstBounce] = useState(true)

    useEffect(() => {
        setTimeout(function() { 
            setFirstBounce(false)
        }, 3000);
    }, []);

    const LogoVarients = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        post: {
            opacity: 1,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: [10, 0],
            transition: {
                delay: .3,
                y: {
                    duration: .3,
                    yoyo: 2,
                    ease: "easeOut",
                  }
            }}
    }

    const ToggleAnimation = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        post: {
            opacity: 1,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: [10, 0],
            transition: {
                delay: 4 * .05 + .3,
                y: {
                    duration: 4 * .05 + .3,
                    yoyo: 2,
                    ease: "easeOut",
                  }
            },
        }
    }
    return (
        <>         
            <nav className="hidden fixed z-50 w-full dark:bg-matt-darknav bg-white top-0 lg:flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">                    
                        <motion.a 
                    variants={LogoVarients}
                    initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                     className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-matt-textlight text-matt-textdark " href="/">
                            Matthew Mayfield
              </motion.a>
                                     
                    </div>
                    <div className="lg:flex flex-grow items-center" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <NavItems animate={firstBounce ? "visible" : 'post'} />
                        <motion.li
                            variants={ToggleAnimation}
                            initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                             className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-matt-textlight dark:hover:text-yellow-900 text-matt-textdark hover:text-yellow-900 cursor-pointer">
                                 <span className="ml-2"><div><DayNightToggle /></div></span>
                          </motion.li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}