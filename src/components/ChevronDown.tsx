'use client';

import { motion } from 'framer-motion';

export default function ChevronDown({
  className,
  whileHover,
}: {
  className: string;
  whileHover: any;
}) {
  return (
    <>
      <motion.svg
        whileHover={whileHover}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </>
  );
}
