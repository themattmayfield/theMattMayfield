import { motion } from "framer-motion"
import DayNightToggle from './DayNightToggle'
import React, { useState, useEffect } from 'react';

export default function Navbar(props) {
    
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
    },
    {
        text: 'DayNightToggle',
        path: '',
        id: 5
    }]
    
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

    const NavItemsVarients = {
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
    }
    return (
        <>         
            <nav className="hidden fixed z-50 w-full dark:bg-matt-darknav bg-white top-0 lg:flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">                    
                        <motion.a 
                    variants={LogoVarients}
                    initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                     className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-gray-300 text-gray-600 " href="/">
                            Matthew Mayfield
              </motion.a>
                                     
                    </div>
                    <div className="lg:flex flex-grow items-center" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {navItems.map((items, i) => (
                            
                            <motion.li
                            variants={NavItemsVarients}
                            initial="hidden"
                            animate={firstBounce ? "visible" : 'post'}
                            custom={i}
                            key={i}
                             className="px-3 py-2 flex items-center text-xs uppercase font-bold dark:text-gray-300 dark:hover:text-yellow-800 text-gray-600 hover:text-yellow-900 cursor-pointer">
                                {i != 4 ? <a href={items.path}>
                                     <span className="ml-2">
                                     items.text 
                                     </span>
                                 </a>: <span className="ml-2"><div><DayNightToggle /></div></span> }
                                 </motion.li>                             
                             
                        ))}
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}