import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lubie: {},
        apexpoint: {},
        chlorelief: {
          green: '#419f59',
          red255: '#ed4d56',
          gray85: '#d9d9d9',
        },
      },
    },
  },
  plugins: [],
};
export default config;
