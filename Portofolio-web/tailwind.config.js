// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ovo: ["Ovo", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
