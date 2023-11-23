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
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/12_yxhpq1.WebP')",
        costaBlanca:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/1_j8qeqo.WebP')",
        pirineos:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367752/Dygav/11_uhpghg.WebP')",
        madrid:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367758/Dygav/15_kfihjl.WebP')",
        welcomeWorld:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691789897/Dygav/undraw_World_re_768g_afxop1.WebP')",
        digitalAparment:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691789289/Dygav/undraw_Best_place_re_lne9_sn3p88.WebP')",
        aboutUsAviable:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691768615/Dygav/icon-image_gtwgyc.WebP')",
        brandContent:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1691367775/Dygav/19_skargh.WebP')",
        torrevieja:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1697903686/Dygav/torrevieja/2_jvslgl.WebP')",
        alicante:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1699488275/Dygav/Alicante/4_qzdyhb.WebP')",
        benidorm:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1699567156/Dygav/Benidorm/Copia_de_2_doz1la.WebP')",
          orihuela:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1699646545/Dygav/Orihuela/Copia_de_7_xhahz0.WebP')",
          orihuelaCosta:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1699647185/Dygav/Orihuela/Copia_de_8_fuequq.WebP')",
          guardamarSegura:
          "url('https://res.cloudinary.com/vicflores11/image/upload/v1700774784/Dygav/GuardamarDelSegura/4_fnp2ex.WebP')",
      },
    },
  },
  plugins: [],
};
export default config;
