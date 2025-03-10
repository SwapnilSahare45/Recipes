/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Paths for your files
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          cream: "#FFF8E7", // Light Cream for background
          tomato: "#FF6347", // Tomato Red for header, footer, and highlights
          salmon: "#FFA07A", // Salmon Pink for secondary accents
          orange: "#FF4500", // Bright Orange for buttons
          charcoal: "#333333", // Dark Charcoal Gray for text
        },
      },
    },
  },
  plugins: [],
};
