/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#28FFBB',
          dark: '#005440',
        },
        secondary: {
          DEFAULT: '#FFDE00',
          dark: '#9333EA',
        },
        error : "#F44336",
        background: '#282828',
        white: '#fff',
        gray: '#A7A7A7'
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        48: '48px',
        64: '64px',
      },
      maxWidth: {
        500: '500px',
      },
    },
  },
  plugins: [],
};
