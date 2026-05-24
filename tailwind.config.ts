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
        cream: '#FDE8E4',
        caramel: '#F4B8B4',
        amber: '#C8907A',
        amberDark: '#9B5A4A',
        cocoa: '#6B3020',
        espresso: '#3D1A0F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(61,26,15,0.07), 0 2px 8px rgba(200,144,122,0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
