import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
  chloreliefLogo: StaticImageData;
}

const Logo: React.FC<LogoProps> = ({ chloreliefLogo }) => {
  return (
    <Link href='/'>
      <Image className='h-8 w-auto' src={chloreliefLogo} alt='apexpoint' />
    </Link>
  );
};

export default Logo;
