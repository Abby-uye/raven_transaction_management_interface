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
        'custom-black':'#0A090B',
        'custom-colourtext':'#09090B',
        'custom-placeholder-color':'#71717A',
      'custom-border-color':'#E4E4E7'

},
        boxShadow: {
          'custom': '2px 2px 4px rgba(0, 1, 2, 0.1',
        },
    },

  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },

}

