interface CityData {
  [key: string]: {
    title: string;
    subtitle: string;
  };
}

export const cityData: CityData = {
  Torrevieja: {
    title: 'Torrevieja: Un Encanto Mediterráneo',
    subtitle:
      'Explora con nosotros Torrevieja, un destino lleno de sol, playas y cultura en la Costa Blanca.',
  },
  Benidorm: {
    title: 'Benidorm: Innovación y Diversión',
    subtitle:
      'Conoce Benidorm, una ciudad única donde la modernidad se encuentra con el esplendor del Mediterráneo.',
  },
  Alicante: {
    title: 'Alicante: Tradición y Modernidad',
    subtitle:
      'Descubre Alicante, una ciudad que combina historia, playas y una vibrante vida urbana.',
  },
  'Santa Pola': {
    title: 'Santa Pola: Historia y Cultura',
    subtitle:
      'Ciudad en donde encontrarás un destino lleno de historia, naturaleza y cultura.',
  },
};
