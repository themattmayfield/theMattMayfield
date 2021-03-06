import { motion } from "framer-motion"
import DayNightToggle from '../../UI/DayNightToggle'
import NavItems from './NavItemsDesktop'
export default function Navbar() {

    const LogoVarients = {
        hidden: {
            opacity: 0,
            y: -50,
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
            <nav className="hidden fixed z-50 w-full dark:bg-matt-darknav bg-white opacity-95 top-0 lg:flex flex-wrap items-center justify-between px-2 navbar-expand-lg shadow h-16">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">                    
                        <motion.a 
                    variants={LogoVarients}
                    initial="hidden"
                            animate="visible"
                     className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase dark:text-matt-textlight text-matt-textdark " href="/">
                            Matthew Mayfield
              </motion.a>
                                     
                    </div>
                    <div className="lg:flex flex-grow items-center" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <NavItems animate="visible" />
                        
                        </ul>

                        <motion.div
                            variants={ToggleAnimation}
                            initial="hidden"
                            animate="visible"
                             className="flex ml-2">                                     
                                         <DayNightToggle />
                          </motion.div>
                    </div>
                </div>
            </nav>
        </>
    );
}