import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import DayNightToggle from "components/DayNightToggle";
import NavItems from "./NavItems";
import { useLockBodyScroll } from "utils/hooks";

export default function NavbarFull({ open, setOpen }) {
  useLockBodyScroll();

  const MainDivVarients = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={MainDivVarients}
              animate={"open"}
              exit={"closed"}
              className="lg:hidden my-view fixed w-full z-10"
            >
              <div className="flex flex-col h-full relative w-full">
                <ul className="space-y-6 flex flex-col h-full justify-center items-center list-none ">
                  <NavItems setOpen={setOpen} animate={"visible"} />
                </ul>

                <div className="px-3 py-4 mx-auto text-xs uppercase font-bold dark:text-matt-textlight dark:hover:text-matt-orange text-matt-textdark hover:text-matt-orange cursor-pointer">
                  <span className="ml-2">
                    <DayNightToggle mobile={true} />
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
