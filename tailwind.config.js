/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f4e35f",
        
"secondary": "#f4b49c",
        
"accent": "#ea7cc0",
        
"neutral": "#1f1b2c",
        
"base-100": "#322f37",
        
"info": "#2d9ce6",
        
"success": "#199f79",
        
"warning": "#dc8e18",
        
"error": "#e86974",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  plugins: [require("daisyui")],
}

