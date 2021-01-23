import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
import DayNightToggle from './DayNightToggle'
import Link from 'next/link'

export default function NavbarFull(props) {
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

    const MainDivVarients = {
        open: { x: 0, opacity: 1, transition: { duration: .3 } },
        closed: { x: '-100%', opacity: 0 }
    }

    const NavItemsVarients = {
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
    }

    return (
        <>
        <AnimatePresence>
            {navState &&
                <>
                    <motion.div
                        variants={MainDivVarients}
                        animate={'open'}
                        exit={'closed'}
                        className="lg:hidden h-screen pt-16">

                        <div
                            className="flex flex-col h-full w-full" >
                            <ul className="space-y-6 flex flex-col h-full justify-center items-center list-none ">

                                {navItems.map((items, i) => (
                                    <motion.li
                                        variants={NavItemsVarients}
                                        initial="hidden"
                                        animate="visible"
                                        custom={i}
                                        key={i}
                                        className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-yellow-900 text-matt-textdark hover:text-yellow-900 cursor-pointer "><a href={items.path}><span className="ml-2">{items.text}</span></a></motion.li>
                                ))}

                            </ul>

                            <div className="px-3 py-4 mx-auto text-xs uppercase font-bold dark:text-matt-textlight dark:hover:text-yellow-900 text-matt-textdark hover:text-yellow-900 cursor-pointer"><span className="ml-2"><div className>
                                <DayNightToggle />
                            </div></span></div>
                        </div>

                    </motion.div>
                </>}
                </AnimatePresence>
        </>
    );
}