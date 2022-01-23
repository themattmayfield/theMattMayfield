import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navItems = [
  {
    text: "About",
    path: "about",
    id: 1,
  },
  {
    text: "Portfolio",
    path: "portfolio",
    id: 2,
  },
  {
    text: "Tracks",
    path: "tracks",
    id: 3,
  },
  {
    text: "Contact",
    path: "contact",
    id: 4,
  },
  {
    text: "Buy Me ☕",
    path: "https://ko-fi.com/P5P21JZUH",
    id: 5,
  },
];
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

export default function NavItems({ animate, setOpen }) {
  return (
    <>
      {navItems.map((items, i) =>
        items.id != 5 ? (
          <Link
            key={items.id}
            onClick={() => setOpen(false)}
            to={items.path}
            spy={true}
            smooth={true}
          >
            <motion.li
              variants={NavItemsVarients}
              initial="hidden"
              animate={animate}
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
              animate={animate}
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
