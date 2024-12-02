/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#0A5EB0",
          
"secondary": "#006A67",
          
"accent": "#cf0000",
          
"neutral": "#1A1A1D",
          
"base-100": "#2A3335",
          
"info": "#006cd0",
          
"success": "#347928",
          
"warning": "#e39c00",
          
"error": "#FF2929",
          },
        },
      ],
    },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
};
