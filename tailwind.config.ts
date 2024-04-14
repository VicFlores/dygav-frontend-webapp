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
      gray: '#F5F5F5',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        heroContent:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/12_yxhpq1.png')",
        costaBlanca:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/1_j8qeqo.png')",
        pirineos:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/11_uhpghg.png')",
        madrid:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/15_kfihjl.png')",
        welcomeWorld:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_World_re_768g_afxop1-1.png')",
        digitalAparment:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Best_place_re_lne9_sn3p88-1.png')",
        aboutUsAviable:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/icon-image_gtwgyc-1.png')",
        brandContent:
          "url('https://multimedia.dygav.es/wp-content/uploads/2024/04/19_skargh.png')",
      },
    },
  },
  plugins: [],
};
export default config;
