module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf7f3',
          100: '#f8efe9',
          200: '#f0d9ca',
          300: '#e6b890',
          400: '#d98f5a',
          500: '#b86437',
          600: '#8c4728',
          700: '#68351e',
          800: '#432316',
          900: '#23140c'
        },
        wood: {
          50: '#f8f3ef',
          100: '#efe3d8',
          200: '#dec0a2',
          300: '#cb8f5d',
          400: '#a86135',
          500: '#8c4d2c',
          600: '#6a3922',
          700: '#472615',
          800: '#2d170d'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(32, 19, 12, 0.08)'
      }
    }
  },
  plugins: []
};
