import { motion } from "framer-motion";
import { Link } from "react-scroll";
import navItems from "lib/navItems";

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
      delay: i * 0.05 + 0.3,
      y: {
        duration: i * 0.05 + 0.3,
        repeat: 2,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  }),
};

export default function NavItems({ animate, setOpen, desktop }) {
  return (
    <>
      {navItems.map((items, i) =>
        items.id != 5 ? (
          <Link
            onClick={() => (desktop ? null : setOpen(false))}
            key={items.id}
            to={items.path}
            spy={true}
            smooth={true}
          >
            <motion.li
              variants={NavItemsVarients}
              initial="hidden"
              animate={desktop ? "visible" : animate}
              custom={i}
              key={i}
              className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-matt-orange text-matt-textdark hover:text-matt-orange cursor-pointer "
            >
              <span className="ml-2">{items.text}</span>
            </motion.li>
          </Link>
        ) : (
          <a key={items.id} target="_blank" href={items.path}>
            <motion.li
              variants={NavItemsVarients}
              initial="hidden"
              animate={desktop ? "visible" : animate}
              custom={i}
              key={i}
              className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-matt-orange text-matt-textdark hover:text-matt-orange cursor-pointer "
            >
              <span className="ml-2">{items.text}</span>
            </motion.li>
          </a>
        )
      )}
    </>
  );
}
