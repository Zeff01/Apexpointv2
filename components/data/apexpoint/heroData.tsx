import asset1 from '@/public/assets/svg/asset_1.svg';
import asset2 from '@/public/assets/svg/asset_2.svg';
import asset3 from '@/public/assets/svg/asset_3.svg';

import { StaticImageData } from 'next/image';

export type HeroData = {
  name: string;
  img?: { name: string; src: StaticImageData };
  url?: string;
};

export const heroData: HeroData[] = [
  {
    name: 'asset1',
    img: {
      name: 'chlorelief',
      src: asset1,
    },
    url: '/',
  },
  {
    name: 'asset2',
    img: {
      name: 'chlorelief',
      src: asset2,
    },
    url: '/',
  },
  {
    name: 'asset3',
    img: {
      name: 'chlorelief',
      src: asset3,
    },
    url: '/',
  },
];
