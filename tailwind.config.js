/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Path to your components
    './public/index.html', // Path to your HTML files
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors or extend the existing ones
        customBlue: '#5483b3',
        customGray: '#7da0ca',
        // ...other color variations
      },
    },
  },
  plugins: [
    // Include any additional plugins here if needed
    // Example: require('@tailwindcss/forms'),
  ],
};
