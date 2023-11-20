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
          "white-color": "#FFFFFF",
          "light-blue": "#B6CBE0",
          "navy-blue": "#1C3079",
          "gray-white": "#F0F5F3",
          "green-light": "#7FF0C3",
        },
        apexpoint: {},
        chlorelief: {
          "primary-green": "#419F59",
          "secondary-green": "#3ADC4B",
          "primary-red": "#514E",
          "primary-gray": "#D9D9D9",
          "secondary-gray": "#787878",
        },
      },
    },
  },

  plugins: [],
};
export default config;
