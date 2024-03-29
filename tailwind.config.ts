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
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649254/Dygav%20Images/Mix/12_yxhpq1_znqycz.png')",
        costaBlanca:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649263/Dygav%20Images/Mix/1_j8qeqo_kr6jg8.png')",
        pirineos:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649259/Dygav%20Images/Mix/11_uhpghg_jnnxph.webp')",
        madrid:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649256/Dygav%20Images/Mix/15_kfihjl_pdaort.png')",
        welcomeWorld:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649265/Dygav%20Images/Icons/undraw_World_re_768g_afxop1_b4k3ys.webp')",
        digitalAparment:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649280/Dygav%20Images/Icons/undraw_Best_place_re_lne9_sn3p88_fty0js.png')",
        aboutUsAviable:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649285/Dygav%20Images/Icons/icon-image_gtwgyc_tyl0td.webp')",
        brandContent:
          "url('https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649260/Dygav%20Images/Mix/19_skargh_fgpyuf.png')",
      },
    },
  },
  plugins: [],
};
export default config;
