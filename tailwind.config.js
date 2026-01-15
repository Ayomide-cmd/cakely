/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Pacifico', 'cursive']
      },
      extend: {
        colors: {
          cakelyPrimary: '#FF7F50',
          cakelySecondary: '#FFDAB9',
          cakelyAccent: '#8B4513',
          cakelyBackground: '#FFF5EE'
        },
        height: {
          screen: '100dvh'
        },
        spacing: {
          18: '4.5rem',
          22: '5.5rem'
        }
      }
    },
    plugins: []
  };
  