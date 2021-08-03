import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { BackTop } from "antd";

const ScrollArrow = () => {
  return (
    <BackTop>
      <div className=" cursor-pointer bg-matt-orange rounded-full w-6 h-6 sm:h-8 sm:w-8 flex items-center justify-center">
        <FaChevronUp className="text-xs text-white dark:text-matt-textdark" />
      </div>
    </BackTop>
  );
};

export default ScrollArrow;
