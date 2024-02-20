/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'red-hat-display': ['Red Hat Display', 'sans-serif'],
				'lexend': ['Lexend', 'sans-serif'],
			},

			colors: {
				primary: '#090B0E',
				secondary: '#FAFAFA',
				tertiary: '#2D74F3'
			}
		},
	},
	plugins: [],
}
