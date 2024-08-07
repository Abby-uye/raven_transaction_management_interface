/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#7F7D83',
        'custom-grayed': '#E4E4E7',
        'custom-purple': '#7000F6',
        'custom-black': '#0A090B',
        'custom-colourtext': '#09090B',
        'custom-placeholder-color': '#71717A',
        'custom-border-color': '#E4E4E7'

      },
      screens: {
        'iphone-14-pro-max': {'min': '430px', 'max': '767px'},


      },

    },
    plugins: [],
    corePlugins: {
      preflight: false,
    },

  }
}

