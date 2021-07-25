module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "bookmark-purple": "#5267df", 
        "bookmark-red": "#FA5959", 
        "bookmark-blue": "#242A45", 
        "bookmark-grey": "#9194A2", 
        "bookmark-white": "#f7f7f7", 
      }
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
