import { motion } from "framer-motion"

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
const Button = ({ children }) => (
  <motion.button whileHover={{
    scale: 1.07,
    transition: {
      type: "spring"
    }
  }}
    exit="hidden"
    className="rounded-full bg-yellow-900 py-2 px-6 text-white font-light focus:outline-none" >
    {children}
  </motion.button>
);

export default Button;