import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   'sm': {'max': '640px'},    // Mobile screens
      //   'md': {'max': '767px'},    // Tablet screens
      //   'lg': {'max': '1023px'},   // Small desktop screens
      //   'xl': {'max': '1279px'},   // Large desktop screens
      // },
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
          chateaugreen: "#3db750",
          springwood: "#f2f3f2",
          "soft-gray": "#a8b8d0",
          "soft-green": "#4EE35A",
          "dark-green": "#315634",
          "soft-slate": "#708090",
        },
      },
    },
  },

  plugins: [],
};
export default config;
