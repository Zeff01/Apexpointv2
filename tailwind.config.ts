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
        lubie: {},
        apexpoint: {},
        chlorelief: {},
      },
    },
  },

  

  
  plugins: [],
};
export default config;
