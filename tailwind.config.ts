import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira-condensed': ['Saira Condensed', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        'Header-Desktop': '4em',
        'Header-Default':'2.5em',
        'Header-Mobile': '2em',
        'Caption-Default':'0.75em',
        'Caption-Mobile': '0.75em',
        'Caption-Desktop': '1em'
      },
      colors: {
        lubie: {
          "dark-blue": "#091A5A",
          "white-color": "#F4F4F4",
          "light-blue": "#B6CBE0",
          "navy-blue": "#275AB5",
          "green-light": "#7FF0C3",
        },
        apexpoint: {
          "grey-text": "#595959",
          "dark-orange": "#F29A38",
          "light-orange": "#F3E1B9",
          "green": "#40D63F",
        },
        chlorelief: {
          "chateaugreen": "#3db750",
          "springwood": "#0F5B33",
          "soft-gray": "#a8b8d0",
          "soft-green": "#419F59",
          "dark-green": "#0F5B33",
          "soft-slate": "#708090",
          "light-red": "#F4F4F4",
          "star-green":"#DEFFE6",
          "button": "#F07787",
          "pink": "#F07787"
        },
      },
    },
  },

  plugins: [],
};
export default config;
