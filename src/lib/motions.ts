// HERO
export const Hello = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: [10, 0],
    transition: {
      delay: 0.35,
      x: {
        duration: 0.35,
        repeat: 2,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
};

export const hypeTextAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.71,
      duration: 0.35,
    },
  },
};

export const AboutMeButton = {
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
        duration: 0.35,
        ease: "easeOut",
      },
    },
  },
};

export const chevronAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.06,
      y: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  },
};

export const hoverAnimation = {
  scale: 1.2,
  transition: {
    type: "spring",
  },
};

// NAVBAR
export const LogoVarientsMobile = {
  post: {
    opacity: 1,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: [7, 0],
    transition: {
      delay: 0.3,
      y: {
        duration: 0.3,
        repeat: 2,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
};

export const LogoVarientsDesktop = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: [10, 0],
    transition: {
      delay: 0.3,
      y: {
        duration: 0.3,
        repeat: 2,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
};

export const TimesAnimation = {
  scale: [1, 1, 1, 1, 1],
  rotate: [180, 0, 0, 0],
  transition: { duration: 3 },
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
};

export const ToggleAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: [10, 0],
    transition: {
      delay: 4 * 0.05 + 0.3,
      y: {
        duration: 4 * 0.05 + 0.3,
        repeat: 2,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
};

// NAVBARMODAL
export const MainDivVarients = {
  open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  closed: { x: "-100%", opacity: 0 },
};

// NAVITEMS
export const NavItemsVarients = {
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

// SOCIALS
export const SocialVarients = {
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
        repeat: 2,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  }),
};
