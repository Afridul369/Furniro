/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        NavContainer: '1280px',
        BrowsContainer: '1180px',
        Container: '1240px',
      },
      fontFamily: {
        Pop : 'Poppins'      
      },
      colors: {
        h1Text: '#333333',
        PText: '#666666',
      },
      backgroundImage: {
        BannerBG: "url('src/assets/BannerBG.png')",
        
      }
    },
  },
  plugins: [],
}

