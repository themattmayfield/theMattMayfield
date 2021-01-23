import { motion } from "framer-motion"

export default function Times(props) {

    return (
        <>
            <motion.svg 
                            animate={props.animate}
                              className={props.class} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </motion.svg>
        </>
    );
}