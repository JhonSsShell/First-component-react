/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Incluir todos los archivos desde js a ts
    './src/components/**/*.{js,ts,jsx,tsx}', // Incluir todos los componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

