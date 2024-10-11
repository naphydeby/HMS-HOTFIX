/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      scrollbar: {
        none: {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
      },
    },
  },
  plugins: [],
}

