import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAEEDA',
        caramel: '#FAC775',
        amber: '#BA7517',
        amberDark: '#854F0B',
        cocoa: '#633806',
        espresso: '#412402',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(65,36,2,0.06), 0 2px 8px rgba(65,36,2,0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
