const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	darkMode : 'media',
	fontFamily: {
		sans: ['Jetbrains Mono', 'sans-serif'],
	  },
};

module.exports = config;
