import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  typeof window !== "undefined" &&
    window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className={` fixed w-full bottom-5 items-center h-10 justify-end pr-2 ${
        showScroll ? "flex" : "hidden"
      }`}
    >
      <Link to="hero" spy={true} smooth={true}>
        <div
          // onClick={() => scrollTop()}
          className="scrollTop cursor-pointer bg-matt-orange rounded-full w-6 h-6 flex items-center justify-center"
        >
          <FaChevronUp className="text-xs text-white dark:text-matt-textdark" />
        </div>
      </Link>
    </div>
  );
};

export default ScrollArrow;
