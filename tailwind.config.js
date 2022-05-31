module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tan-100': '#F8F5F2',
        'brand-purple': '#8348FF',
        'brand-magenta': '#FE3AC6',
        'brand-yellow': '#FFE350',
        'brand-blue': '#4FF0FF',
        'brand-green': '#3EEE91',
        'brand-light': '#E9E9E9'
      },
      fontFamily: {
        'wm-sans': ['"DM Sans"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        termina: ['"termina"', 'sans-serif'],
        roc: ['"roc-grotesk"', 'sans-serif'],
        satoshi: ['"satoshi"', 'sans-serif']
      }
    }
  },
  plugins: []
};
