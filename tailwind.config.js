import Badge from './src/Components/Badge';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        Container: '1240px',
        NavContainer: '1280px',
        BrowsContainer: '1180px',
        PolicyContainer: '1335px',
        ContactContainer: '1060px',
      },
      fontFamily: {
        Pop : 'Poppins'      
      },
      colors: {
        h1Text: '#333333',
        PText: '#666666',
        Protext: '#3A3A3A',
        Badgebg: '#E97171',
        Badgebg2: '#2ec1ac',
        productbg: '#f4f5f7',
        protext2: '#898989',
        protext3: '#B0B0B0',
        Hovertext1: '#B88E2F',
        ExploreBG: '#fcf8f3',
        ExploreText: '#616161',
        Border: '#eeeeee',
        Footer: '#9F9F9F',
        fooBorder: '#D9D9D9',
        Filterbg: '#f9f1e7',
        PagiBG: '#b88e2f',
        PolicyBG: '#faf3ea',
        policytext: '#242424',
        starbg: '#ffc700',
        colorbg: '#816dfa',
      },
      backgroundImage: {
        BannerBG: "url('src/assets/BannerBG.png')",
        
      }
    },
  },
  plugins: [],
}

