module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Background Images
      backgroundImage: {
        'gradient-bg': "url('/public/assets/gradiant.svg')",
        'about-bg': "url('/public/assets/aboutBg.svg')",
      },
      
      // Custom Font Sizes
      fontSize: {
        'h1': ['80px', { lineHeight: '1.2', fontWeight: '600' }], 
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '600' }], 
        'p1': ['18px', { lineHeight: '1.2', fontWeight: '400' }], 
        'p2':['16px',  { lineHeight: '1.2', fontWeight: '400' }],
        'btn':['20px',  { lineHeight: '1.2', fontWeight: '500' }],
      },

      // Custom Font Families
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif']
      },

      // Custom Colors
      colors: {
        primary: '#0649E7',
        secondary: '#022183', 
        'custom-white': '#FEFEFE', 
        'soft-blue': '#EBF1FF', 
        'custom-black': '#101010',
        'elipse-bg':'#d9d9d94d',
        'success':"#4AD257",
         'custom-grey':"#BCBCBC"
      },


      // Border Radius
      borderRadius: {
        'rounded-corners':'20px'
      },
    },
  },
  plugins: [],
};
