import React, { FunctionComponent, ReactNode } from 'react';
import { fadeInOutRightToLeft } from '@/components/animation/animation';
import { motion } from 'framer-motion';

export type InputRowProps = {
  children: ReactNode;
  className?: string;
};

const InputRow: FunctionComponent<InputRowProps> = ({ children, className }) => {
  return (
    <motion.div
      variants={fadeInOutRightToLeft}
      transition={{ duration: 0.5 }}
      className={`relative h-16 w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default InputRow;
