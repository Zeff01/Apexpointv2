import React, { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, ...rest }) => {
  const baseStyles = 'height-fit-content w-full';

  let additionalStyles = 'pt-20 px-6 md:px-10 lg:px-20 xl:px-24 2xl:px-32';

  if (id === 'store' || id === 'footer') {
    additionalStyles = 'px-0 pt-20';
  }

  const combinedClassName = `${baseStyles} ${additionalStyles} ${className}`.trim();

  return (
    <section id={id} className={combinedClassName} {...rest}>
      {children}
    </section>
  );
};

export default Section;
