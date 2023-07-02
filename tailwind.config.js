/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      font1: ['Rancho', "cursive"],
      font2: ['EB Garamond', "serif"],
      font3: ['Poppins', "sans-serif"],
      font4: ['Work Sans', "sans-serif"],
      font5: ['Monoton', 'cursive'],
      font6: ['Kablammo', 'cursive'],
      font7: ['Lobster Two', 'cursive'],


    },
    // extend: {
    //   animation: {
    //     'spin-slow': 'spin 3s linear infinite',
    //   }
    // }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4db5ff",

          "secondary": "#2c2c6c",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}