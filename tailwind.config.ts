import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira-condensed': ['Saira Condensed', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        share: ['Share', 'sans-serif'],
      },
      fontSize: {
        'Header-Desktop': '2.5em',
        'Header-Default': '2em',
        'Header-Mobile': '1.5em',
        'Body-Desktop': '1.5em',
        'Body-Default': '1em',
        'Caption-Default': '0.75em',
        'Caption-Mobile': '0.75em',
        'Caption-Desktop': '1em',
      },
      colors: {
        lubie: {
          'dark-blue': '#091A5A',
          'white-color': '#F4F4F4',
          'light-blue': '#B6CBE0',
          'navy-blue': '#275AB5',
          'green-light': '#7FF0C3',
          'dark-green': '#57AD2E',
          'green-subtle': '#89C920',
          'neon-green': '#29ff00',
          'white-blue': '#f0f5f3',
          'soft-blue': '#6198FF',
          'nav-blue': '#C3D3E3',
        },
        apexpoint: {
          'grey-text': '#595959',
          'dark-orange': '#F29A38',
          'light-orange': '#F3E1B9',
          'nav-orange': '#f2ba66',
          green: '#40D63F',
        },
        chlorelief: {
          chateaugreen: '#3db750',
          springwood: '#0F5B33',
          'soft-gray': '#a8b8d0',
          'soft-green': '#419F59',
          'dark-green': '#106D3E',
          'soft-slate': '#708090',
          'light-red': '#F07787',
          'star-green': '#DEFFE6',
          button: '#F07787',
          pink: '#F07787',
        },
      },
    },
  },

  plugins: [],
};
export default config;
