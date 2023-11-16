import type { Config } from 'tailwindcss';

const config: Config = {
<<<<<<< HEAD
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
=======
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
>>>>>>> cd9dcbf (AP-19)
};
export default config;
