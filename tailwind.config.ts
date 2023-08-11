import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FAFAFA',
      p900: '#BF350C',
      p800: '#D84215',
      p600: '#F4511E',
      p400: '#FF6F43',
      p200: '#FFAB91',
      black900: '#404040',
      black700: '#171717',
      gray300: '#D4D4D4',
      gray: '#737373',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        costaBlanca:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/1_j8qeqo.png')",
        pirineos:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367752/Dygav/11_uhpghg.png')",
        madrid:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367758/Dygav/15_kfihjl.png')",
      },
    },
  },
  plugins: [],
};
export default config;
