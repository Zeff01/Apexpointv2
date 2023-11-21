import type { Config } from 'tailwindcss';

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
          'dark-blue':"#0A1950",
        'white-color': "#FFFFFF",
        'light-blue': "#B6CBE0",
        'navy-blue': "#1C3079",
        'gray-white': '#F0F5F3',
        'green-light': "#7FF0C3",
      },
        apexpoint: {},
        chlorelief: {
          chateaugreen: '#3db750',
          springwood: '#f2f3f2',
		  'soft-gray': '#a8b8d0',
          'soft-green': '#4EE35A',
          'dark-green': '#315634',
          'soft-slate': '#708090',
        },
      },
    },
  },

	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
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
					'white-color': '#FFFFFF',
					'light-blue': '#B6CBE0',
					'navy-blue': '#1C3079',
					'gray-white': '#F0F5F3',
					'green-light': '#7FF0C3',
				},
				apexpoint: {
					'grey-text': '#595959',
					'dark-orange': '#F29A38',
					'light-orange': '#F3E1B9',
					green: '#40D63F',
				},
				chlorelief: {},
			},
		},
	},

	plugins: [],
};
export default config;
