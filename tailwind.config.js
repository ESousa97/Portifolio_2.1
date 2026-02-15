module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Aponta para os arquivos do React
  ],
  theme: {
    extend: {
      colors: {
        // Mapeia suas variáveis CSS aqui
        'blue-gradient': 'var(--color-blue)',
        'gray-gradient': 'var(--color-gray-one)',
        'silver-gradient': 'var(--color-silver)',
        'orange-gradient': 'var(--color-orange)',
        'gray-secondary': 'var(--color-gray-seconde)',
      },
    },
  },
  plugins: [],
};
