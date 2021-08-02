import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Socials } from "../../utils/socials";
const SocialVarients = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: (i) => ({
    opacity: 1,
    y: [10, 0],
    transition: {
      delay: i * 0.05 + 0.3,
      y: {
        duration: i * 0.05 + 0.3,
        yoyo: 2,
        ease: "easeOut",
      },
    },
  }),
};

const SocialLink = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return Socials.map((social, i) => (
    <motion.a
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={SocialVarients}
      custom={i}
      key={i}
      className="no-underline rounded-full border-2 border-yellow-900 w-12 h-12 cursor-pointer flex items-center justify-center my-0"
      rel="noreferrer"
      target="_blank"
      aria-label={social.name}
      href={social.path}
    >
      {social.icon}
    </motion.a>
  ));
};

const Social = () => {
  return (
    <>
      <div className="flex items-center justify-center space-x-8">
        <SocialLink />
      </div>
    </>
  );
};

export default Social;
