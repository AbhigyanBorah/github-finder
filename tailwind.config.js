module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1ddcf9",
          
          "secondary": "#8f45b7",
                   
          "accent": "#d05fef",
                   
          "neutral": "#16191D",
                   
          "base-100": "#1f2937",
                   
          "info": "#61CFE5",
                   
          "success": "#58E9A5",
                   
          "warning": "#EEA659",
                   
          "error": "#F9394C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
