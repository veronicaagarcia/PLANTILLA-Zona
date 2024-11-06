/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				COLOR1: "#A0AEC0",
				COLOR2: "#c1d149",
				COLOR3: "#556B2F",
				CBACKGROUND: "#FAF3DD"
			},
			fontFamily: {
        		heading: ['Libre Baskerville', 'serif'], // Fuente para títulos H1 y H2
    			sans: ['Montserrat', 'sans-serif'],       // Fuente principal para el texto
			},
			screens: {
				s: "470px", // Definir el nuevo breakpoint 's' a partir de 470px
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideUp: {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			  },
			animation: {
				fadeInUp: 'fadeInUp 0.5s ease forwards',
				slideUp: 'slideUp 1.5s ease-in-out',
			},
		},
	},
	plugins: [],
}
