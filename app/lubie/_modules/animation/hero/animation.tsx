export const textAnimation = {
  hidden: { opacity: 0, x: 250 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.75 } },
};

export const headerAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.15, duration: 0.75 },
  },
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
