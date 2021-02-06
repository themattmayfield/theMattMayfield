import ChevronDown from '../UI/ChevronDown'
import { motion } from "framer-motion"
import WordsFading from '../UI/WordsFading'
import { Link } from 'react-scroll';


export default function Hero() {

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

    const hoverAnimation = {
        scale: 1.2,
        transition: {
            type: "spring"
        }
    }

    return (
        <>
            <div className="bg-transparent my-view pt-16 px-8 lg:px-24 container max-w-7xl mx-auto flex flex-col justify-between"  id="hero">
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
                        className="text-matt-textdark dark:text-matt-textlight text-base lg:text-xl font-extralight pb-10 ">
                        <WordsFading />
                    </motion.p>
                    <Link to="about" spy={true} smooth={true}>
                        <motion.button
                            variants={AboutMeButton}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.07,
                                transition: {
                                    type: "spring"
                                }
                            }}
                            exit="hidden"
                            className=" rounded-full bg-yellow-900 py-2 px-6 text-white font-light focus:outline-none">
                            About Me
                            </motion.button>
                    </Link>
                </div>

                <motion.div
                    variants={chevronAnimation}
                    initial="hidden"
                    animate="visible" className="w-full flex justify-center h-10">
                    <Link to="about" spy={true} smooth={true}>
                        <ChevronDown whileHover={hoverAnimation} class="w-6 h-6 cursor-pointer text-yellow-900" />
                    </Link>
                </motion.div>
            </div>
        </>
    );
}