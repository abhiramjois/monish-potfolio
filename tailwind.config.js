import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				pixel: ['"Press Start 2P"', 'sans-serif'],
			},
		},
	},

	plugins: [typography],
};
