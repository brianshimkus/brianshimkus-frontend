const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
				icon: ['Open Sans'],
			},
		},
	},
	variants: {
		extend: {},
	},
}
