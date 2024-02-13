export const textAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, delay: { stagger: 0.5 } },
};

export const headerAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
