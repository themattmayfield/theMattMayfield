import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import navItems from '@/lib/navItems';
import { NavItemsVarients } from '@/lib/motions';

export default function NavItems({
  animate,
  setOpen,
  desktop,
}: {
  animate: string;
  setOpen?: (open: boolean) => void;
  desktop?: boolean;
}) {
  return (
    <>
      {navItems.map((item, i) =>
        item.id !== 5 ? (
          <Link
            onClick={() => (desktop ? null : setOpen ? setOpen(false) : null)}
            key={item.id}
            to={item.path}
            spy={true}
            smooth={true}
          >
            <motion.li
              variants={NavItemsVarients}
              initial="hidden"
              animate={desktop ? 'visible' : animate}
              custom={i}
              key={i}
              className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-matt-orange text-matt-textdark hover:text-matt-orange cursor-pointer "
            >
              <span className="ml-2">{item.text}</span>
            </motion.li>
          </Link>
        ) : (
          <a key={item.id} target="_blank" href={item.path} rel="noreferrer">
            <motion.li
              variants={NavItemsVarients}
              initial="hidden"
              animate={desktop ? 'visible' : animate}
              custom={i}
              key={i}
              className="px-3 py-2 flex items-center text-sm uppercase font-bold dark:text-matt-textlight dark:hover:text-matt-orange text-matt-textdark hover:text-matt-orange cursor-pointer "
            >
              <span className="ml-2">{item.text}</span>
            </motion.li>
          </a>
        )
      )}
    </>
  );
}
