import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lubie' : ['Ubuntu', 'Open Sans'],
       },
        colors: {
          lubie: {
        	'dark-blue': '#0A1950',
            'white' : '#FFFFFF',
            'sky-blue': '#B6CBE0',
             'gray-white' : '#F0F5F3',
             'green-light': '#7FF0C3',
          },
        apexpoint: {},
        chlorelief: {},
      },
    },
  },




  plugins: [],
};
export default config;
