export const textAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 2, x: 0, transition: { staggerChildren: 0.5 }, repeat: 0 },
};

export const ImageAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 }, repeat: 0 },
};

export const AboutImage = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 }, repeat: 0 },
};
export const AboutText = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 2, x: 0, transition: { delay: 0.2, duration: 0.5 }, repeat: 0 },
};

export const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { staggerChildren: 1 }, repeat: 0 },
};

export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 1 }, repeat: 0 },
};
export const childrenVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 1 }, repeat: 0 },
};

export const headerAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.5 },
    repeat: 0,
  },
};

export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      repeat: 0,
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
      repeat: 0,
    },
  },
};
