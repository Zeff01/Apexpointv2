import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lubie: {},
        apexpoint: {},
        chlorelief: {
          chateaugreen: '#3db750',
          springwood: '#f2f3f2'
        },
      },
    },
  },
  plugins: [],
};
export default config;
