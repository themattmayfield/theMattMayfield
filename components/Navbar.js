import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
import DayNightToggle from './DayNightToggle'
import React, { useState, useEffect } from 'react';

export default function Navbar(props) {
    const navState = props.navState

    const navItems = [{
        text: 'About Me',
        path: '',
        id: 1
    },
    {
        text: 'Portfolio',
        path: '',
        id: 2
    },
    {
        text: 'Contact',
        path: '',
        id: 3
    },
    {
        text: 'Buy Me ☕',
        path: 'https://ko-fi.com/P5P21JZUH',
        id: 4
    }]
    
    const [firstBounce, setFirstBounce] = useState(true)

    useEffect(() => {
        setTimeout(function() { 
            setFirstBounce(false)
        }, 3000);
    }, []);

    return (
        <>
            {/* Navbar Mobile*/}
            
            <motion.nav className={"lg:hidden flex-col fixed z-50 w-full dark:bg-matt-darknav matt-lightnav flex  px-2 py-3 shadow " + (navState ? 'h-full overflow-hidden' : 'transition-height duration-0 delay-300 h-16')}>
                 <div className="container px-4 mx-auto w-full relative flex items-center justify-between ">
                 <AnimatePresence >
                    <motion.a 
                    variants={{
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
                            y: [6, 0],
                            transition: {
                                delay: .3,
                                y: {
                                    duration: .3,
                                    yoyo: 2,
                                    ease: "easeOut",
                                  }
                            }}
                    }}
                    initial="hidden"
                    animate={firstBounce ? 'visible' : 'post'}
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-gray-300 text-gray-600" href="/">
                        Matthew Mayfield
              </motion.a>
        </AnimatePresence>
                    <button onClick={props.scrollHandler} className="text-yellow-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none">
                        {navState ?
                       <AnimatePresence initial={false}>
                            <motion.svg 
                            animate={{
                                scale: [1, 1, 1, 1, 1],
                                rotate: [180, 0, 0, 0],
                                transition: {duration: 3},
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                              }}
                              className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </motion.svg>
                            </AnimatePresence>
                            :
                            <motion.svg 
                            
                              className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>
                            
                        }
                        
                    </button>
                </div>

                <AnimatePresence initial={false}>
                    {navState && 
                    <>
                        <motion.div
                        variants = {{
                            open: { x: 0, opacity: 1},
                            closed: { x: '-100%', opacity: 0 },
                          }}
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: { duration: .3 }}}
                            exit={{ x: '-100%', opacity: 0 }}
                            // animate={navState ? "open" : "closed"}
                            transition={{ duration: .3 }}
                            // initial="closed"
                            className="flex-1 container px-4 mx-auto flex items-center">


                            <div
                                className="flex flex-col h-full w-full" >
                                <ul className="space-y-6 flex flex-col h-full justify-center items-center list-none ">

                                    {navItems.map((items, i) => (
                                        <motion.li
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    y: -50,
                                                },
                                                visible: (i) => ({
                                                    opacity: 1,
                                                    y: [10, 0],
                                                    transition: {
                                                        delay: i * .05 + .3,
                                                        y: {
                                                            duration: i * .05 + .3,
                                                            yoyo: 2,
                                                            ease: "easeOut",
                                                          }
                                                    },
                                                }),
                                            }}
                                            initial="hidden"
                                            animate="visible"
                                            // exit={{ height: 0, opacity: 0 }}
                                            // transition={{ duration: 0 }}
                                            custom={i}
                                            key={i}
                                            className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer "><a href={items.path}><span className="ml-2">{items.text}</span></a></motion.li>
                                    ))}

                                </ul>

                                <div className="px-3 py-4 mx-auto text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2"><div className>
                                        <DayNightToggle  />                                        
                                    </div></span></div>
                            </div>

                        </motion.div>
                    </>}

                </AnimatePresence>
            </motion.nav>
            {/* End Navbar Mobile*/}




            {/* Navbar Desktop*/}
            <nav className="hidden fixed z-50 w-full dark:bg-matt-darknav bg-white top-0 lg:flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <AnimatePresence>
                        <motion.a 
                    variants={{
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
                    }}
                    initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                     className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-gray-300 text-gray-600 " href="/">
                            Matthew Mayfield
              </motion.a>
              </AnimatePresence>
                        <button onClick={() => setNavState(!navState)} className="text-yellow-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="lg:flex flex-grow items-center" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {navItems.map((items, i) => (
                            <AnimatePresence>
                            <motion.li
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: -50,
                                },
                                post: {
                                    opacity: 1,
                                    y: 0,
                                },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: [10, 0],
                                    transition: {
                                        delay: i * .05 + .3,
                                        y: {
                                            duration: i * .05 + .3,
                                            yoyo: 2,
                                            ease: "easeOut",
                                          }
                                    },
                                }),
                            }}
                            initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                            custom={i}
                            key={i}
                             className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><a href={items.path}><span className="ml-2">{items.text}</span></a></motion.li>
                             </AnimatePresence>
                        ))}
                            
                            <motion.li 
                    variants={{
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
                            }}
                    }}
                    initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                             className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer">
                                <span className="ml-2">
                                <div>
                                <DayNightToggle />
                            </div></span></motion.li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar Desktop*/}
        </>
    );
}