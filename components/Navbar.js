import useDarkMode from 'use-dark-mode';
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [navState, setNavState] = useState(false)

    const navItems = ['About Me', 'Portfolio', 'Contact', 'Coffee']

    const darkModeConfig = {
        classNameDark: 'dark',
        classNameLight: 'light'
    }
    const darkMode = useDarkMode(false, darkModeConfig);

    return (
        <>
            {/* Navbar Mobile*/}
            <nav className={"lg:hidden flex-col fixed z-50 w-full dark:bg-matt-nav bg-white top-0 flex  px-2 py-3 shadow-lg " + (navState ? 'h-screen' : '') }>
            <div className="container px-4 mx-auto w-full relative flex items-center justify-between ">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-gray-300 text-gray-600" href="/">
                            Matthew Mayfield
              </a>
                        <button onClick={() => setNavState(!navState)} className="text-yellow-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none">
                            {navState ? 
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          :
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
}
                        </button>
                    </div>
                    
<AnimatePresence initial={false}>
    {navState && <>
                    <motion.div 
                    initial={{ x: '-100%', opacity: 0}} 
                    animate={{ x: 0, opacity: 1 }}
                    exit={{height:0}} 
                    transition={{ duration: .3 }}
                    className="flex-1 container px-4 mx-auto flex items-center">
                    
                    
                        <div
                    className="flex flex-col h-full w-full" >
                        <ul className="space-y-4 flex flex-col h-full justify-center items-center list-none ">
                            
                            {navItems.map((items, i) => (
                                <motion.li 
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -50,
                                    },
                                    visible:(i) => ({
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: i * .05 + .3,
                                        },
                                    }),
                                }}
                                initial="hidden"                        
                                animate="visible"
                                exit={{opacity:0}} 
                    transition={{height:0,  duration: 0 }}
                                custom={i}
                                key={i}
                                className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer "><span className="ml-2">{items}</span></motion.li>                                
                            ))}
                            
                        </ul>
                        <motion.div 
                        exit={{height:0, opacity:0}} 
            transition={{ duration: 0 }}
            className="px-3 py-2 mx-auto text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2"><div>
                                {darkMode.value == true ?
                                    <>
                                        <button className="focus:outline-none text-2xl" onClick={darkMode.disable}>
                                            ☀
                                        </button> </>
                                    :
                                    <>
                                        <button className="focus:outline-none text-2xl" onClick={darkMode.enable}>
                                        🌙
                                        </button> 
                                        </>
                                        }
                            </div></span></motion.div>
                    </div>
                    
                </motion.div>
                </> }
                    
                </AnimatePresence>
                </nav>
            {/* End Navbar Mobile*/}




            {/* Navbar Desktop*/}
            <nav className="hidden fixed z-50 w-full dark:bg-matt-nav bg-white top-0 lg:flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-gray-300 text-gray-600 " href="/">
                            Matthew Mayfield
              </a>
                        <button onClick={() => setNavState(!navState)} className="text-yellow-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                        <div className="lg:flex flex-grow items-center" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2">About Me</span></li>
                            <li className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2">Portfolio</span></li>
                            <li className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2">Contact</span></li>
                            <li className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2">Coffee</span></li>
                            <li className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer"><span className="ml-2"><div>
                                {darkMode.value == true ?
                                    <>
                                        <button className="focus:outline-none text-2xl" onClick={darkMode.disable}>
                                            ☀
                                        </button> </>
                                    :
                                    <>
                                        <button className="focus:outline-none text-2xl" onClick={darkMode.enable}>
                                        🌙
                                        </button> 
                                        </>
                                        }
                            </div></span></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar Desktop*/}
        </>
    );
}