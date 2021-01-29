import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
import DayNightToggle from './UI/DayNightToggle'
import NavItems from './Utils/NavItems'
import { useNavState } from './Utils/NavContext'

export default function NavbarFull() {
    const navState = useNavState()

    const MainDivVarients = {
        open: { x: 0, opacity: 1, transition: { duration: .3 } },
        closed: { x: '-100%', opacity: 0 }
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
                            className="lg:hidden my-view fixed w-full">

                            <div
                                className="flex flex-col my-view relative w-full" >
                                <ul className="space-y-6 flex flex-col my-view justify-center items-center list-none ">
                                    <NavItems animate={'visible'} />
                                </ul>

                                <div className="px-3 py-4  mx-auto text-xs uppercase font-bold dark:text-matt-textlight dark:hover:text-yellow-900 text-matt-textdark hover:text-yellow-900 cursor-pointer"><span className="ml-2"><div className>
                                    <DayNightToggle />
                                </div></span></div>
                            </div>

                        </motion.div>
                    </>}
            </AnimatePresence>
        </>
    );
}