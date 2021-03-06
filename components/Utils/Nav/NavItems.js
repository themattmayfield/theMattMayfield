import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import { useNavState, useNavStateUpdate } from './NavContext'

const navItems = [{
    text: 'About',
    path: 'about',
    id: 1
},
{
    text: 'Tracks',
    path: 'tracks',
    id: 2
},
{
    text: 'Contact',
    path: 'contact',
    id: 3
},
{
    text: 'Buy Me ☕',
    path: 'https://ko-fi.com/P5P21JZUH',
    id: 4
}]
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

export default function NavItems(props) {
    const navState = useNavState()
    const scrollHandler = useNavStateUpdate()
    
    return (
        <>
            {navItems.map((items, i) => (
               items.id != 4 ?
                <Link onClick={scrollHandler} to={items.path} spy={true} smooth={true}>
                    <motion.li
                        variants={NavItemsVarients}
                        initial="hidden"
                        animate={props.animate}
                        custom={i}
                        key={i}
                        className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-yellow-900 text-matt-textdark hover:text-yellow-900 cursor-pointer ">
                        <span className="ml-2">{items.text}</span>
                    </motion.li>
                </Link> 
                : 
                <a target="_blank" href={items.path}>
                    <motion.li
                        variants={NavItemsVarients}
                        initial="hidden"
                        animate={props.animate}
                        custom={i}
                        key={i}
                        className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-yellow-900 text-matt-textdark hover:text-yellow-900 cursor-pointer ">
                        <span className="ml-2">{items.text}</span>
                    </motion.li>
                    </a>
            
            ))}
        </>
    )
}