import { Accommodation } from '@/app/apartamentos/interfaces';
import { TImagePropsArray } from '@/types';

export type TSearcherCard = TImagePropsArray & {
  id: number;
  title: string;
  description: string;
  bedroom: number;
  bathroom: number;
  size: string;
  maxHuesped: number;
};

export const searcherCard = [
  {
    accommodationid: '100',
    slug: 'atico-en-puerto-deportivo-con-vistas-al-mar',
    accommodation: 'Ático en Puerto Deportivo con vistas al Mar',
    introductions: {
      en: 'Discover paradise by the sea in our incredible apartment in Marina Internacional, Torrevieja!',
      es: '¡Descubre el paraíso frente al mar en nuestro increíble apartamento en Marina Internacional, Torrevieja!',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/360215556_572928818383799_9174447404790276966_n_aj8dgu-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/359979326_1695642180885306_7405698003508188202_n_bgcpec-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/361072121_1031754531109228_8629428951624734545_n_wgwc3k-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/360039632_1520965311768775_4606381007455330764_n_ycaq6c-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/361138271_610899047891950_367908744151509995_n_pxryef-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/361066128_636970398403554_561876738283885733_n_c0rnhr-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/360400552_180333235032979_5699075598242530690_n_spigdw-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/360213387_631811875585944_1621400824524654042_n_fzfaul-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/360008202_801549578036726_6169730961137764044_n_ww1vhe-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 110,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 3, // Assuming category 1 is for "Apartment"
      },
    ],
    aviabookid: 1001, // This is a placeholder, needs real value
    public_cleaning_price: 50, // This is a placeholder, needs real value
    descriptions: {
      en: "With 2 bedrooms and 2 bathrooms, this penthouse on the 7th floor offers impressive panoramic views from its balcony. Enjoy the sea breeze and spectacular views of the marina. Plus, you'll be close to the center, with everything within reach for an unforgettable experience!",
      es: 'Con 2 habitaciones y 2 baños, este ático en el piso 7 te ofrece vistas panorámicas impresionantes desde su balcón. Disfruta de la brisa marina y las espectaculares vistas al puerto deportivo. Además, estarás cerca del centro, ¡todo a tu alcance para una experiencia inolvidable!',
    },
    location: {
      city: 'Torrevieja',
      country: 'Spain',
      latitude: 37.9751, // This is a placeholder, needs real coordinates
      longitude: -0.6821, // This is a placeholder, needs real coordinates
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Sea view',
        DYGAV_SPANISH: 'Vista al mar',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Balcony',
        DYGAV_SPANISH: 'Balcón',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near city center',
        DYGAV_SPANISH: 'Cerca del centro',
      },
    ],
  },
  {
    accommodationid: '200',
    slug: 'acogedor-bungalo-con-piscina-junto-al-mar',
    accommodation: 'Acogedor Bungaló con Piscina junto al Mar',
    introductions: {
      en: 'Looking to escape the hustle and bustle of the city and enjoy a relaxing experience? We have the perfect place for you.',
      es: '¿Buscas escapar del bullicio de la ciudad y disfrutar de una experiencia relajante? Tenemos el lugar perfecto para ti.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/358164003_616836260514525_6130452333073894116_n_lfktie-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/357665262_2493730587451207_3086372307213685087_n_h0ktc7-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/357811598_151932394520550_5669952163850957986_n_ph2qwr-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/358209824_829828245171925_4783886145726477741_n_ie6xiq-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/358175685_996040444706518_4239722135066224993_n_puvj2g-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/357806951_267957925831163_2832505463717771563_n_v6zjk7-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/358071568_1612450865931982_7167264244323856166_n_kas8qb-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/357658828_957185835612281_3393154098048999728_n_wwgufj-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Dormitorio',
      },
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 90,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 4,
    categories: [
      {
        category_id: 3, // Assuming category 2 is for "Bungalow"
      },
    ],
    aviabookid: 1002, // This is a placeholder, needs real value
    public_cleaning_price: 50, // This is a placeholder, needs real value
    descriptions: {
      en: "Our bungalow with a pool offers an idyllic getaway amidst the natural beauty of Dehesa de Campoamor, just minutes from the vibrant city of Torrevieja. The bungalow features a cozy bedroom, decorated with modern artwork that gives it an exclusive and unique atmosphere. Wake up each morning and enjoy views of the garden from the comfort of your bed. Tranquility and privacy are guaranteed in this oasis. The garden is simply spectacular, with spacious green areas where you can relax, read a book, or simply delight in nature. But that's not all: the crown jewel is our impressive pool. Immerse yourself in its crystal-clear, refreshing waters, relax under the Mediterranean sun, or enjoy a refreshing drink by the pool. It's the perfect place to rest and enjoy unforgettable moments with your loved ones. In addition to the property's amenities, the location is unbeatable. We are just minutes from the beautiful Campoamor beach, where you can enjoy the sun and sea in a peaceful setting. You'll also have easy access to Torrevieja's attractions and services, such as restaurants, bars, shops, and much more.",
      es: 'Nuestro bungalow con piscina te ofrece una escapada idílica en medio de la belleza natural de la Dehesa de Campoamor, a solo unos minutos de la vibrante ciudad de Torrevieja. El bungalow cuenta con una acogedora habitación, decorada con muchos cuadros modernos que le dan una atmósfera exclusiva y única. Despierta cada mañana y disfruta de las vistas al jardín desde la comodidad de tu cama. La tranquilidad y privacidad están garantizadas en este oasis. El jardín es simplemente espectacular, con amplios espacios verdes donde podrás relajarte, leer un libro o simplemente deleitarte con la naturaleza. Pero eso no es todo: la joya de la corona es nuestra impresionante piscina. Sumérgete en sus aguas cristalinas y refrescantes, relájate bajo el sol mediterráneo o disfruta de una refrescante bebida junto a la piscina. Es el lugar perfecto para descansar y disfrutar de momentos inolvidables con tus seres queridos. Además de las comodidades de la propiedad, la ubicación es inmejorable. Estamos a solo unos minutos de la hermosa playa de Campoamor, donde podrás disfrutar del sol y el mar en un entorno tranquilo. También tendrás fácil acceso a las atracciones y servicios de Torrevieja, como restaurantes, bares, tiendas y mucho más.',
    },
    location: {
      city: 'Dehesa de Campoamor',
      country: 'Spain',
      latitude: 37.9158, // This is a placeholder, needs real coordinates
      longitude: -0.7411, // This is a placeholder, needs real coordinates
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Swimming pool',
        DYGAV_SPANISH: 'Piscina',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Garden',
        DYGAV_SPANISH: 'Jardín',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near beach',
        DYGAV_SPANISH: 'Cerca de la playa',
      },
    ],
  },
  {
    accommodationid: '300',
    slug: 'apartamento-en-el-centro-ubicacion-inmejorable',
    accommodation: 'Apartamento en el Centro: Ubicación inmejorable',
    introductions: {
      en: 'Enjoy sunny holidays in our cozy one-bedroom gem in the heart of Torrevieja with easy access to attractions, shops, restaurants, and dreamy white sand beaches.',
      es: 'Disfruta de unas vacaciones soleadas en nuestra acogedora joya de un dormitorio en el corazón de Torrevieja. Aquí encontrarás fácil acceso a atracciones, tiendas, restaurantes y playas de ensueño de arena blanca.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356261652_3037507509877302_5325402422896813490_n_wojl6k-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356416317_285953863844639_5168474264959699144_n_tw2mu1-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356265936_6548793485158648_2760430652149921419_n_mzlcba-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355905321_601649915400501_4627385904143650431_n_ackmrf-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356069544_283612164120370_5210225710094288699_n_s6cbcv-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355905321_236016995957818_2402960585356146924_n_vnier4-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355846265_1906296246435913_294380608627486919_n_rnxipk-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355866350_793826018941406_3115561986811254420_n_rniugr-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356230509_139699245763451_61727248857118520_n_jrg7cr-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355996735_785918643080668_4699798086633163591_n_amnyrx-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 90,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 4,
    categories: [
      {
        category_id: 3, // Assuming category 1 is for "Apartment"
      },
    ],
    aviabookid: 1003, // This is a placeholder, needs real value
    public_cleaning_price: 50, // This is a placeholder, needs real value
    descriptions: {
      en: "Enjoy sunny holidays in our cozy one-bedroom gem in the heart of Torrevieja. Here you'll find easy access to attractions, shops, restaurants, and dreamy white sand beaches. Relax in our bright living room, stylishly decorated and equipped with all modern conveniences to make you feel at home. In the elegant master bedroom you'll find a comfortable bed to ensure a restful sleep and spacious closets to keep your belongings in order. Our fully equipped kitchen with modern appliances and kitchenware will allow you to prepare your favorite dishes with ease. We even have a dining corner to enjoy your culinary creations! Discover Torrevieja's main attractions, from restaurants offering delicious local and international cuisine to beautiful beaches where you can relax, swim and enjoy water sports. Immerse yourself in Torrevieja's vibrant nightlife and rich cultural offerings. Explore the promenade, visit the marina and be captivated by the charm of the local market and the exciting events and festivals held throughout the year. Don't wait any longer and book your stay now in our one-bedroom apartment in the center of Torrevieja! Enjoy all that the Costa Blanca has to offer: relaxing beaches, urban exploration and unforgettable moments. Come and create unforgettable memories with us!",
      es: 'Disfruta de unas vacaciones soleadas en nuestra acogedora joya de un dormitorio en el corazón de Torrevieja. Aquí encontrarás fácil acceso a atracciones, tiendas, restaurantes y playas de ensueño de arena blanca. Relájate en nuestra sala de estar luminosa, decorada con estilo y equipada con todas las comodidades modernas para hacerte sentir como en casa. En la elegante habitación principal encontrarás una cama cómoda para asegurar un sueño reparador y armarios espaciosos para guardar tus pertenencias con orden. Nuestra cocina totalmente equipada con electrodomésticos modernos y utensilios de cocina te permitirá preparar tus platos favoritos con facilidad. ¡Incluso tenemos un rincón de comedor para disfrutar de tus creaciones culinarias! Descubre las principales atracciones de Torrevieja, desde restaurantes que ofrecen una deliciosa cocina local e internacional hasta las hermosas playas donde podrás relajarte, nadar y practicar deportes acuáticos. Sumérgete en la vibrante vida nocturna y la rica oferta cultural de Torrevieja. Explora el paseo marítimo, visita el puerto deportivo y déjate cautivar por el encanto del mercado local y los emocionantes eventos y festivales que se celebran durante todo el año. ¡No esperes más y reserva ahora tu estancia en nuestro apartamento de una habitación en el centro de Torrevieja! Disfruta de todo lo que la Costa Blanca tiene para ofrecerte: playas relajantes, exploración urbana y momentos inolvidables. ¡Ven y crea recuerdos inolvidables con nosotros!',
    },
    location: {
      city: 'Torrevieja',
      country: 'Spain',
      latitude: 37.9769, // This is a placeholder, needs real coordinates
      longitude: -0.6831, // This is a placeholder, needs real coordinates
    },
    features: [
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'City center',
        DYGAV_SPANISH: 'Centro de la ciudad',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near beach',
        DYGAV_SPANISH: 'Cerca de la playa',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Modern decor',
        DYGAV_SPANISH: 'Decoración moderna',
      },
    ],
  },
  {
    accommodationid: '400',
    slug: 'apartamento-en-playa-mata',
    accommodation: 'Apartamento en Playa Mata',
    introductions: {
      en: 'Have breakfast looking at the sea and fall asleep listening to the waves. Just a few steps from the beach!',
      es: 'Desayuna mirando al mar y duérmete escuchando las olas. ¡A solo unos pocos pasos de la playa!',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355839377_277022834825257_5631064041754347647_n_rwgpl9-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355625484_596935062625202_7601431500463831824_n_efr4oo-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355866359_2297216433805754_2155375534857422522_n_mljwtl-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355821149_583121537358615_496649574429769641_n_gwgkpl-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355642437_242417201849767_4013316603351107480_n_pnbojq-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355982516_220864964175859_4072592782709097123_n_a4ucps-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355827277_968572924358307_7514379261927243798_n_lex7x1-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355569114_797845241932058_8693599522789763200_n_nb3kr7-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355571502_276823644882360_6874180226793336035_n_osud8e-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355692619_1477373419761234_2464716469814400152_n_zebd0h-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 3,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 90,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 4,
    categories: [
      {
        category_id: 3, // Assuming category 1 is for "Apartment"
      },
    ],
    aviabookid: 1004, // This is a placeholder, needs real value
    public_cleaning_price: 50, // This is a placeholder, needs real value
    descriptions: {
      en: 'Have breakfast looking at the sea and fall asleep listening to the waves. While others stress about finding parking, just finish your toast and juice - you only need a few steps to reach the beach. In the afternoons, enjoy the coolness of the sea breeze, and bring a light jacket as you might need it during terrace nights. My recommendation? Wake up early at least one day to see the sunrise. This bright and fresh apartment is on the first floor. All three bedrooms face outside. It features a terrace-balcony accessible from the dining room and bedroom with sea views. The bathroom and kitchen are fully equipped. On the ground floor, you have a private terrace, ideal for fresh evening dinners, which also has an outdoor shower to rinse off when you return from the beach. You can walk to the supermarket, pharmacy, and doctor. Of course, to the beach and dozens of restaurants, and even to natural sites like Parque del Molino and the Dunes of Guardamar. If you want, you can forget about the car! (Although I recommend it to reach the Natural Park of the Lagoons of Torrevieja and La Mata, just 5 minutes away). Experience living by the sea and enjoy everything it has to offer!',
      es: 'Desayuna mirando al mar y duérmete escuchando las olas. Mientras el resto de humanos se agobia buscando aparcamiento, tú termínate las tostadas y el zumo... que solo necesitas unos pocos pasos para llegar a la playa. Por las tardes disfruta del frescor de la brisa marina, y trae una chaquetilla, que puede que la necesites en las noches de terraza. ¿Mi recomendación? Que al menos un día te levantes a tiempo de ver amanecer. Apartamento luminoso y fresco, en primera planta. Los tres dormitorios son exteriores. Terraza-balcón con acceso desde comedor y dormitorio con vistas al mar. Baño y cocina completamente equipados. En planta baja tienes una terracita privada, ideal para cenas a la fresca, y en la que también cuentas con una ducha exterior para aclararte cuando llegas de la playa. Terraza privada en planta baja con ducha exterior. Puedes ir caminando al super, a la farmacia y al médico. Por supuesto a la playa, y a decenas de restaurantes, e incluso a parajes naturales como el Parque del Molino y las Dunas de Guardamar. Si quieres, ¡puedes olvidarte del coche! (Aunque te lo recomiendo para llegar al Paraje Natural de las Lagunas de Torrevieja y la Mata, a 5 minutos). ¡Vive la experiencia de vivir junto al mar y disfruta de todo lo que ofrece!',
    },
    location: {
      city: 'La Mata, Torrevieja',
      country: 'Spain',
      latitude: 37.9832, // This is a placeholder, needs real coordinates
      longitude: -0.6584, // This is a placeholder, needs real coordinates
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Sea view',
        DYGAV_SPANISH: 'Vista al mar',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Terrace',
        DYGAV_SPANISH: 'Terraza',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Beachfront',
        DYGAV_SPANISH: 'Primera línea de playa',
      },
      {
        CATEGORY_EN: 'Exterior',
        CATEGORY_ES: 'Exterior',
        DYGAV_ENGLISH: 'Outdoor shower',
        DYGAV_SPANISH: 'Ducha exterior',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Walking distance to amenities',
        DYGAV_SPANISH: 'Servicios a distancia caminando',
      },
    ],
  },
  {
    accommodationid: '500',
    slug: 'apartamento-plaza-del-ayuntamiento-torrevieja',
    accommodation: 'Apartamento Plaza del Ayuntamiento Torrevieja',
    introductions: {
      en: 'Welcome to our exclusive apartment in Town Hall Square in Torrevieja, just 200 meters from the sea!',
      es: '¡Bienvenido a nuestro exclusivo piso en la Plaza del Ayuntamiento en Torrevieja, a solo 200 metros del mar!',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355871521_2352028871646012_1364603506285862344_n_fahq4k-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355840222_1617075832109631_5705936545059326589_n_irljxj-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/354803929_586623450171544_74377877471137664_n_caklv6-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355425254_181386181319334_2203436108574430518_n_wfqjji-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355708051_982390276129476_889252614238741693_n_hdvlf4-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355868822_3089409318020829_7900497983944573914_n_mt2pwp-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355981843_975091560194225_5909095246241865015_n_zp8tm4-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355654279_595844349198704_5284302476182459048_n_lpynw2-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 110,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 3, // Assuming category 1 is for "Apartment"
      },
    ],
    aviabookid: 1005, // This is a placeholder, needs real value
    public_cleaning_price: 50, // This is a placeholder, needs real value
    descriptions: {
      en: "Welcome to our exclusive apartment in Town Hall Square in Torrevieja! This magnificent apartment, located just 200 meters from the sea, offers you the opportunity to enjoy an exceptional stay in one of the most privileged places in the city. With its modern and elegant design, you will immerse yourself in an atmosphere of luxury and comfort. The apartment has been recently renovated to offer you a contemporary and sophisticated experience. Every detail has been carefully selected to ensure your comfort and satisfaction. From the elegant furniture to the high-quality finishes, you will feel like you're in an oasis of tranquility and style. The main bedroom, exquisitely decorated, will provide you with a haven of peace and rest. The comfortable bed and quality sheets will allow you to enjoy a restful night's sleep after a day exploring the wonders of Torrevieja. Additionally, the paintings by the best contemporary artists that adorn the walls will add a touch of beauty and sophistication to the ambiance. The living room is the perfect place to relax and enjoy unforgettable moments. The spacious living area invites you to rest on the comfortable sofas while enjoying the tranquility and charm of the Town Hall Square. You'll also have a modern flat-screen TV to entertain you during your leisure time. The fully equipped kitchen will give you the possibility to prepare your own gourmet meals. The state-of-the-art appliances and kitchen utensils will allow you to delight in creating delicious dishes. You will also find a dining area where you can enjoy your culinary creations in an elegant and cozy environment. The location of the apartment is simply unbeatable. You will be surrounded by a wide variety of restaurants, shops, and tourist attractions. Just 200 meters from the sea, you can enjoy beautiful sandy beaches and relaxing walks by the sea.",
      es: '¡Bienvenido a nuestro exclusivo piso en la Plaza del Ayuntamiento en Torrevieja! Este magnífico piso, ubicado a solo 200 metros del mar, te brinda la oportunidad de disfrutar de una estancia excepcional en uno de los lugares más privilegiados de la ciudad. Con su diseño moderno y elegante, te sumergirás en un ambiente de lujo y confort. El piso ha sido recientemente reformado para ofrecerte una experiencia contemporánea y sofisticada. Cada detalle ha sido cuidadosamente seleccionado para garantizar tu comodidad y satisfacción. Desde el mobiliario elegante hasta los acabados de alta calidad, te sentirás como en un oasis de tranquilidad y estilo. La habitación principal, exquisitamente decorada, te brindará un refugio de paz y descanso. La cama cómoda y las sábanas de calidad te permitirán disfrutar de una noche de sueño reparador después de un día explorando las maravillas de Torrevieja. Además, los cuadros de los mejores artistas contemporáneos que adornan las paredes añadirán un toque de belleza y sofisticación al ambiente. El salón es el lugar perfecto para relajarte y disfrutar de momentos inolvidables. La amplia sala de estar te invita a descansar en los cómodos sofás mientras disfrutas de la tranquilidad y el encanto de la Plaza del Ayuntamiento. Además, contarás con una moderna televisión de pantalla plana para entretenerte durante tus momentos de ocio. La cocina totalmente equipada te brindará la posibilidad de preparar tus propias comidas gourmet. Los electrodomésticos de última generación y los utensilios de cocina te permitirán deleitarte en la creación de platos deliciosos. También encontrarás una zona de comedor donde podrás disfrutar de tus creaciones culinarias en un ambiente elegante y acogedor. La ubicación del piso es simplemente inmejorable. Estarás rodeado de una gran variedad de restaurantes, tiendas y atracciones turísticas. A tan solo 200 metros del mar, podrás disfrutar de hermosas playas de arena y de paseos relajantes junto al mar.',
    },
    location: {
      city: 'Torrevieja',
      country: 'Spain',
      latitude: 37.9769, // This is a placeholder, needs real coordinates
      longitude: -0.6831, // This is a placeholder, needs real coordinates
    },
    features: [
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'City center',
        DYGAV_SPANISH: 'Centro de la ciudad',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near beach',
        DYGAV_SPANISH: 'Cerca del mar',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Modern decor',
        DYGAV_SPANISH: 'Decoración moderna',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Recently renovated',
        DYGAV_SPANISH: 'Recientemente reformado',
      },
    ],
  },
  {
    accommodationid: '600',
    slug: 'acogedor-hogar-unifamiliar-en-el-pueblo',
    accommodation: 'Acogedor Hogar Unifamiliar en el Pueblo',
    introductions: {
      en: 'Welcome to our charming two-bedroom family home in Formigal! This beautiful house is the perfect place to enjoy an unforgettable vacation in the impressive Formigal ski resort.',
      es: '¡Bienvenido a nuestra encantadora casa unifamiliar de dos habitaciones en Formigal! Esta hermosa casa es el lugar perfecto para disfrutar de unas vacaciones inolvidables en la impresionante estación de esquí de Formigal.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355430130_280997211130236_1141085529244107559_n_wiucxi-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355814353_1024757382018465_4405488325495599688_n_knk2gv-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355583468_1452975642128909_5630854050548497334_n_rlavfw-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355068501_267067119247610_8364540762576496413_n_ifb5vc-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356425492_5896092493833747_2201733375554832715_n_a98erj-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355831929_1434459924053800_5988222092432632472_n_ln0spm-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355425589_938067787492919_8695676043059305361_n_uyw0rz-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355427240_1456381365177152_357350901128856131_n_zohqyo-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 110,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 4, // Assuming category 3 is for "House"
      },
    ],
    aviabookid: 1006, // This is a placeholder, needs real value
    public_cleaning_price: 60, // This is a placeholder, needs real value
    descriptions: {
      en: "Welcome to our charming two-bedroom family home in Formigal! This beautiful house is the perfect place to enjoy an unforgettable vacation in the impressive Formigal ski resort. With its spacious design and privileged location, it provides all the comfort and convenience you need to relax and make the most of your stay. The house has been carefully decorated and renovated to offer you a cozy and modern atmosphere. It features two spacious bedrooms, each equipped with comfortable beds to ensure a restful sleep after a day full of excitement in the mountains. You'll also find spacious closets to store your belongings and keep everything organized during your stay. The bright living room is the ideal place to gather with friends and family. With comfortable sofas and a cozy fireplace, you can relax and enjoy pleasant moments together while contemplating the panoramic views of the mountains. The kitchen is fully equipped with everything necessary to prepare your favorite meals, from casual dishes to more elaborate dinners. The location of the house is simply unbeatable. It is conveniently located near the ski slopes, allowing you easy access to a wide variety of outdoor activities such as skiing, snowboarding, hiking, and much more. You'll also find shops, restaurants, and services within walking distance, making your stay even more comfortable and convenient. We invite you to enjoy a unique experience in our two-bedroom family home in Formigal! Whether you're looking for adventures in the snow or a peaceful getaway in the midst of nature, this is the perfect place to create unforgettable memories with your loved ones.",
      es: '¡Bienvenido a nuestra encantadora casa unifamiliar de dos habitaciones en Formigal! Esta hermosa casa es el lugar perfecto para disfrutar de unas vacaciones inolvidables en la impresionante estación de esquí de Formigal. Con su diseño espacioso y su ubicación privilegiada, te brinda todo el confort y la comodidad que necesitas para relajarte y disfrutar al máximo de tu estancia. La casa ha sido cuidadosamente decorada y renovada para ofrecerte un ambiente acogedor y moderno. Cuenta con dos amplias habitaciones, cada una de ellas equipada con cómodas camas para garantizar un descanso reparador después de un día lleno de emociones en la montaña. Además, encontrarás armarios espaciosos para almacenar tus pertenencias y mantener todo ordenado durante tu estancia. El luminoso salón es el lugar ideal para reunirse con amigos y familiares. Con cómodos sofás y una chimenea acogedora, podrás relajarte y disfrutar de agradables momentos juntos mientras contemplas las vistas panorámicas de las montañas. La cocina está totalmente equipada con todo lo necesario para preparar tus comidas favoritas, desde platos casuales hasta cenas más elaboradas. La ubicación de la casa es simplemente inmejorable. Está convenientemente situada cerca de las pistas de esquí, lo que te permite acceder fácilmente a una gran variedad de actividades al aire libre, como esquí, snowboard, senderismo y mucho más. Además, encontrarás tiendas, restaurantes y servicios a poca distancia a pie, lo que hace que tu estancia sea aún más cómoda y conveniente. ¡Te invitamos a disfrutar de una experiencia única en nuestra casa unifamiliar de dos habitaciones en Formigal! Ya sea que estés buscando aventuras en la nieve o una escapada tranquila en medio de la naturaleza, este es el lugar perfecto para crear recuerdos inolvidables junto a tus seres queridos.',
    },
    location: {
      city: 'Formigal',
      country: 'Spain',
      latitude: 42.7633, // This is a placeholder, needs real coordinates
      longitude: -0.3993, // This is a placeholder, needs real coordinates
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Fireplace',
        DYGAV_SPANISH: 'Chimenea',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near ski slopes',
        DYGAV_SPANISH: 'Cerca de pistas de esquí',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Mountain views',
        DYGAV_SPANISH: 'Vistas a la montaña',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Walking distance to amenities',
        DYGAV_SPANISH: 'Servicios a distancia caminando',
      },
    ],
  },
  {
    accommodationid: '700',
    slug: 'impresionante-villa-con-piscina-y-jardin-privados',
    accommodation: 'Impresionante Villa con Piscina y Jardín privados',
    introductions: {
      en: 'This impressive two-bedroom, two-bathroom accommodation is the perfect place for an unforgettable vacation on the Costa Blanca. With 180 m² of space, you will enjoy luxury, comfort, and fun all in one place.',
      es: 'Este impresionante alojamiento de dos habitaciones y dos baños es el lugar perfecto para unas vacaciones inolvidables en la Costa Blanca. Con 180 m2 de espacio, disfrutarás de lujo, comodidad y diversión en un solo lugar.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355641850_280997574398133_3464358442456365658_n_xbyqph-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356138312_966995954502066_7107395930396351234_n_dndem8-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355868825_288295670305866_5087031943428774334_n_gvrlpf-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356219242_569974251978791_7759528373137684052_n_hu86zt-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355623456_290359240107113_51296518052805429_n_yunjod-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355479777_645604877157895_4159822538848815565_n_flpool-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355473289_586751303575875_6792417749607082307_n_m8yu7s-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355418829_650432043778921_2049309261363687190_n_rqbro8-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355706819_221475644150992_7964929518659699549_n_aaxuuu-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355432223_985171855852187_5411095870191443220_n_ukkqwi-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 180,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 3, // Assuming category 4 is for "Villa"
      },
    ],
    aviabookid: 1007, // Following the sequential pattern
    public_cleaning_price: 60, // Appropriate price for a larger property
    descriptions: {
      en: "This impressive two-bedroom, two-bathroom accommodation is the perfect place for an unforgettable vacation on the Costa Blanca. With 180 m² of space, you will enjoy luxury, comfort, and fun all in one place. Every detail of our villa has been carefully designed to offer you an exceptional experience. The spacious bedrooms feature comfortable beds and built-in wardrobes, providing you with a cozy space to rest and relax. The elegant bathrooms are equipped with spacious showers and high-quality finishes. The fully equipped kitchen allows you to prepare your favorite meals with ease, while the spacious living room invites you to relax on its comfortable sofas and enjoy moments of entertainment. Plus, high-speed internet connection keeps you connected at all times. But that's not all. Our villa also features a magnificent private garden with a refreshing pool, where you can sunbathe and take a dip whenever you wish. Additionally, the barbecue area allows you to organize delicious outdoor meals and enjoy pleasant evenings with your loved ones. Located in Dehesa de Campoamor, you'll be surrounded by beautiful landscapes and just a short distance from the golden sandy beaches of the coast. You'll also find a wide selection of restaurants, shops, and activities to complement your stay. Don't miss the opportunity to experience an unforgettable vacation in our villa in Dehesa de Campoamor! Book now and discover the perfect balance between luxury, comfort, and fun on the Costa Blanca.",
      es: 'Este impresionante alojamiento de dos habitaciones y dos baños es el lugar perfecto para unas vacaciones inolvidables en la Costa Blanca. Con 180 m2 de espacio, disfrutarás de lujo, comodidad y diversión en un solo lugar. Cada detalle de nuestro chalet ha sido cuidadosamente diseñado para ofrecerte una experiencia excepcional. Las amplias habitaciones cuentan con camas cómodas y armarios empotrados, brindándote un espacio acogedor para descansar y relajarte. Los elegantes baños están equipados con duchas amplias y acabados de alta calidad. La cocina totalmente equipada te permite preparar tus comidas favoritas con facilidad, mientras que el espacioso salón te invita a relajarte en sus cómodos sofás y disfrutar de momentos de entretenimiento. Además, la conexión a internet de alta velocidad te mantiene conectado en todo momento. Pero eso no es todo. Nuestro chalet también cuenta con un magnífico jardín privado con una refrescante piscina, donde podrás tomar el sol y darte un chapuzón siempre que lo desees. Además, la barbacoa te permite organizar deliciosas comidas al aire libre y disfrutar de agradables veladas con tus seres queridos. Ubicado en Dehesa de Campoamor, estarás rodeado de hermosos paisajes y a poca distancia de las playas de arena dorada de la costa. Además, encontrarás una amplia selección de restaurantes, tiendas y actividades para complementar tu estancia. ¡No pierdas la oportunidad de vivir unas vacaciones inolvidables en nuestro chalet en Dehesa de Campoamor! Reserva ahora y descubre el equilibrio perfecto entre lujo, comodidad y diversión en la Costa Blanca.',
    },
    location: {
      city: 'Dehesa de Campoamor',
      country: 'Spain',
      latitude: 37.9158, // Using same coordinates as property #2 since it's in the same area
      longitude: -0.7411,
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Swimming pool',
        DYGAV_SPANISH: 'Piscina',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Private garden',
        DYGAV_SPANISH: 'Jardín privado',
      },
      {
        CATEGORY_EN: 'Exterior',
        CATEGORY_ES: 'Exterior',
        DYGAV_ENGLISH: 'Barbecue',
        DYGAV_SPANISH: 'Barbacoa',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'High-speed internet',
        DYGAV_SPANISH: 'Internet de alta velocidad',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near beach',
        DYGAV_SPANISH: 'Cerca de la playa',
      },
    ],
  },
  {
    accommodationid: '800',
    slug: 'casa-unifamiliar-con-piscina-jacuzzi-y-sauna',
    accommodation: 'Casa Unifamiliar con Piscina, Jacuzzi y Sauna.',
    introductions: {
      en: 'Discover luxury and tranquility in our family home in Torrevieja! This impressive residence offers a unique experience of comfort and relaxation with 2 bedrooms, 2 bathrooms, and a private pool.',
      es: '¡Descubre el lujo y la tranquilidad en nuestra casa unifamiliar en Torrevieja! Esta impresionante residencia te ofrece una experiencia única de confort y relajación. Con 2 habitaciones, 2 baños y una piscina privada, encontrarás todo lo que necesitas para unas vacaciones inolvidables.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646229_978699073472215_3211535062379828664_n_ivvytx-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355692617_2253954531477355_7806048174137064307_n_rxwpib-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355063470_173121715568229_6083701798772673336_n_ipcsjk-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355818718_1620606185100099_7501423605725107994_n_mgq7bb-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355427236_230760486390736_8911219464606180674_n_h3gi4o-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355344507_604569261658216_6375026979987795306_n_ovpkfm-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/354640296_828229741626967_1904076646856246503_n_ftvkax-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355422643_1034958491222853_6322719721927190964_n_dqpsnm-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355690197_280556977685503_5416447852470806219_n_f86qmy-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355464099_3473824216239260_1851089902207079710_n_ujf5bh-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 120,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 3, // Assuming category 3 is for "House"
      },
    ],
    aviabookid: 1008, // Following the sequential pattern
    public_cleaning_price: 60, // Appropriate price for a property with sauna and jacuzzi
    descriptions: {
      en: "Discover luxury and tranquility in our family home in Torrevieja! This impressive residence offers a unique experience of comfort and relaxation. With 2 bedrooms, 2 bathrooms, and a private pool, you'll find everything you need for an unforgettable vacation. Immerse yourself in the serenity of our lush garden and enjoy peaceful moments by the pool. Additionally, you can pamper yourself in our bathroom with sauna and jacuzzi, where you can relax and release tension. The interior of the house is carefully designed to provide maximum comfort. The bedrooms are spacious and cozy, and the bathrooms are equipped with modern amenities. The fully equipped kitchen will allow you to prepare delicious meals, and the living room invites you to relax in a welcoming atmosphere. The location of the house is ideal, just a few minutes away from the beautiful beaches of La Zenia. Enjoy walks along the seashore, water activities, and the beauty of the coastal landscape. Don't miss the opportunity to experience luxury in our family home in Torrevieja! Book now and let yourself be enveloped by the tranquility and comfort that this incredible place has to offer.",
      es: '¡Descubre el lujo y la tranquilidad en nuestra casa unifamiliar en Torrevieja! Esta impresionante residencia te ofrece una experiencia única de confort y relajación. Con 2 habitaciones, 2 baños y una piscina privada, encontrarás todo lo que necesitas para unas vacaciones inolvidables. Sumérgete en la serenidad de nuestro jardín exuberante y disfruta de momentos de paz en la piscina. Además, podrás mimarte en nuestro baño con sauna y jacuzzi, donde podrás relajarte y liberar tensiones. El interior de la casa está cuidadosamente diseñado para brindarte el máximo confort. Las habitaciones son espaciosas y acogedoras, y los baños están equipados con modernas comodidades. La cocina totalmente equipada te permitirá preparar deliciosas comidas y el salón te invita a relajarte en un ambiente acogedor. La ubicación de la casa es ideal, a solo unos minutos de distancia de las hermosas playas de La Zenia. Disfruta de paseos por la orilla del mar, actividades acuáticas y la belleza del paisaje costero. ¡No pierdas la oportunidad de vivir una experiencia de lujo en nuestra casa unifamiliar en Torrevieja! Reserva ahora y déjate envolver por la tranquilidad y el confort que este increíble lugar tiene para ofrecer.',
    },
    location: {
      city: 'Torrevieja',
      country: 'Spain',
      latitude: 37.9751, // Using similar coordinates to property #1 since it's also in Torrevieja
      longitude: -0.6821,
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Swimming pool',
        DYGAV_SPANISH: 'Piscina',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Jacuzzi',
        DYGAV_SPANISH: 'Jacuzzi',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Sauna',
        DYGAV_SPANISH: 'Sauna',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Private garden',
        DYGAV_SPANISH: 'Jardín privado',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near beach',
        DYGAV_SPANISH: 'Cerca de la playa',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near La Zenia',
        DYGAV_SPANISH: 'Cerca de La Zenia',
      },
    ],
  },
  {
    accommodationid: '900',
    slug: 'apartamento-a-5-minutos-de-las-pistas-de-esqui',
    accommodation: 'Apartamento a 5 Minutos de las Pistas de Esquí',
    introductions: {
      en: 'This cozy one-bedroom, one-bathroom retreat is the perfect place for your vacation at the impressive ski resort. Located in a peaceful setting surrounded by mountain landscapes.',
      es: 'Este acogedor refugio de una habitación y un baño es el lugar perfecto para tus vacaciones en la impresionante estación de esquí. Situado en un entorno tranquilo y rodeado de paisajes montañosos.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355836176_590054213232762_3943679031032072619_n_xzmk2m-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355847971_1880039672376238_6517939227860399550_n_ecodli-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355483891_963161754832072_4735839979510556448_n_ekgzx1-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355696532_2596073970546340_3724391736266281989_n_zbkwih-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355404418_1478446232903035_8579213394037655194_n_z3crjh-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 1,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 120,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 4, // Assuming category 1 is for "Apartment"
      },
    ],
    aviabookid: 1009, // Following the sequential pattern
    public_cleaning_price: 55, // Appropriate price for a ski resort apartment
    descriptions: {
      en: "This cozy one-bedroom, one-bathroom retreat is the perfect place for your vacation at the impressive ski resort. Located in a peaceful setting surrounded by mountain landscapes, it will provide you with a relaxing and welcoming space after a day full of adventures in the snow. We have recently renovated the apartment, creating a modern and elegant atmosphere that blends with the rustic charm of the mountain. In the living room, you can enjoy the warmth of the fireplace, relax by the fire, and delight in a cup of hot chocolate. The kitchen is fully equipped so you can prepare your favorite meals, from comforting breakfasts to delicious dinners. The master bedroom features a comfortable bed that will ensure a peaceful and revitalizing rest before your next adventure in the mountains. The bathroom has also been renovated, offering modern amenities. Additionally, the location of the apartment is privileged. Just a few steps away, you'll find shops, restaurants, and bars, as well as easy access to ski slopes and hiking trails. During the summer, you can enjoy exciting outdoor activities such as hiking, mountain biking, and panoramic walks. Come and enjoy an unforgettable stay in our cozy apartment in Formigal! Whether you desire a vacation full of winter sports or a summer getaway surrounded by nature, this is the perfect place to relax and enjoy everything Formigal has to offer.",
      es: 'Este acogedor refugio de una habitación y un baño es el lugar perfecto para tus vacaciones en la impresionante estación de esquí. Situado en un entorno tranquilo y rodeado de paisajes montañosos, te brindará un espacio relajante y acogedor después de un día lleno de aventuras en la nieve. Hemos renovado recientemente el apartamento, creando una atmósfera moderna y elegante que se fusiona con el encanto rústico de la montaña. En la sala de estar, podrás disfrutar de la calidez de la chimenea, relajarte junto al fuego y deleitarte con una taza de chocolate caliente. La cocina está completamente equipada para que puedas preparar tus comidas favoritas, desde desayunos reconfortantes hasta cenas deliciosas. La habitación principal cuenta con una cómoda cama que te asegurará un descanso tranquilo y revitalizante antes de tu próxima aventura en las montañas. El baño también ha sido renovado, ofreciendo comodidades modernas. Además, la ubicación del apartamento es privilegiada. A pocos pasos encontrarás tiendas, restaurantes y bares, así como un fácil acceso a las pistas de esquí y rutas de senderismo. Durante el verano, podrás disfrutar de emocionantes actividades al aire libre, como senderismo, ciclismo de montaña y paseos panorámicos. ¡Ven y disfruta de una estancia inolvidable en nuestro acogedor apartamento en Formigal! Ya sea que desees unas vacaciones llenas de deportes de invierno o una escapada de verano rodeado de naturaleza, este es el lugar perfecto para relajarte y disfrutar de todo lo que Formigal tiene para ofrecer.',
    },
    location: {
      city: 'Formigal',
      country: 'Spain',
      latitude: 42.7633, // Using same coordinates as property #6 since it's in Formigal
      longitude: -0.3993,
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Fireplace',
        DYGAV_SPANISH: 'Chimenea',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near ski slopes',
        DYGAV_SPANISH: 'Cerca de pistas de esquí',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Recently renovated',
        DYGAV_SPANISH: 'Recientemente renovado',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Walking distance to amenities',
        DYGAV_SPANISH: 'Servicios a distancia caminando',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Mountain views',
        DYGAV_SPANISH: 'Vistas a la montaña',
      },
    ],
  },
  {
    accommodationid: '1000',
    slug: 'lujosa-villa-a-25-metros-de-la-playa',
    accommodation: 'Lujosa Villa a 25 Metros de la Playa',
    introductions: {
      en: 'Discover a luxury and privacy experience in our incredible villa in Campoamor! This impressive residence offers the perfect escape by the Mediterranean Sea, just 25 meters from the beach.',
      es: '¡Descubre una experiencia de lujo y privacidad en nuestra increíble villa en Campoamor! Esta impresionante residencia te brinda el escape perfecto junto al mar Mediterráneo, a solo 25 metros de la playa.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355492989_235730605893546_4078222916753933298_n_s3v9pt-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356001006_279421291145679_2409904504043162319_n_i0dqsw-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355422640_3451555125093322_6759075052409299737_n_nim8ab-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355425118_923250638737171_8785221048883006890_n_k07acm-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646220_570146251862841_1832270979189602918_n_vsutwo-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356065190_1245539462797825_3531810908971649656_n_j96zyh-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355424245_601200055168275_741180618599423093_n_awdv20-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355875923_3512805052265801_1359838667751147010_n_rwsdrp-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355572360_530199342511940_3941818391126366308_n_rzymmp-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355611536_276804908350822_6708390744594234866_n_lf7krw-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 120,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 3, // Assuming category 4 is for "Villa"
      },
    ],
    aviabookid: 1010, // Following the sequential pattern
    public_cleaning_price: 65, // Appropriate price for a luxury beachfront villa
    descriptions: {
      en: "Discover a luxury and privacy experience in our incredible villa in Campoamor! This impressive residence offers the perfect escape by the Mediterranean Sea. Immerse yourself in the elegance and comfort of this spacious villa, where every detail has been carefully designed for your comfort and satisfaction. Enjoy unforgettable moments in its generous and charming spaces, with a blend of modern style and traditional details. And best of all, just steps away from the beautiful beaches of Campoamor. With 2 bedrooms and 2 bathrooms, this luxurious villa offers ample space for up to 6 guests. The elegant interior design combines modern amenities with Mediterranean charm to create a welcoming and sophisticated atmosphere. The fully equipped kitchen allows you to prepare delicious meals, while the spacious living room opens onto a beautiful terrace where you can enjoy the sea breeze. Located just 25 meters from the beach, you'll have the perfect opportunity to enjoy the golden sands and crystal-clear waters of the Mediterranean. The area also offers a variety of restaurants, shops, and recreational activities to complement your stay. Don't miss the opportunity to live a unique experience in our dream villa! Book now and let yourself be carried away by the serenity and luxury that this magnificent property has to offer.",
      es: '¡Descubre una experiencia de lujo y privacidad en nuestra increíble villa en Campoamor! Esta impresionante residencia te brinda el escape perfecto junto al mar Mediterráneo. Sumérgete en la elegancia y el confort de esta amplia villa, donde cada detalle ha sido cuidadosamente diseñado para tu comodidad y satisfacción. Disfruta de momentos inolvidables en sus espacios generosos y encantadores, con una mezcla de estilo moderno y detalles tradicionales. Y lo mejor de todo, a solo pasos de las hermosas playas de Campoamor. Con 2 dormitorios y 2 baños, esta lujosa villa ofrece amplio espacio para hasta 6 huéspedes. El elegante diseño interior combina comodidades modernas con el encanto mediterráneo para crear una atmósfera acogedora y sofisticada. La cocina totalmente equipada te permite preparar deliciosas comidas, mientras que el espacioso salón se abre a una hermosa terraza donde podrás disfrutar de la brisa marina. Ubicada a solo 25 metros de la playa, tendrás la oportunidad perfecta para disfrutar de las arenas doradas y las aguas cristalinas del Mediterráneo. La zona también ofrece una variedad de restaurantes, tiendas y actividades recreativas para complementar tu estancia. ¡No pierdas la oportunidad de vivir una experiencia única en nuestra villa de ensueño! Reserva ahora y déjate llevar por la serenidad y el lujo que esta magnífica propiedad tiene para ofrecer.',
    },
    location: {
      city: 'Dehesa de Campoamor',
      country: 'Spain',
      latitude: 37.9158, // Using same coordinates as other Campoamor properties
      longitude: -0.7411,
    },
    features: [
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Beachfront',
        DYGAV_SPANISH: 'Primera línea de playa',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Luxury design',
        DYGAV_SPANISH: 'Diseño de lujo',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Terrace',
        DYGAV_SPANISH: 'Terraza',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Sea view',
        DYGAV_SPANISH: 'Vista al mar',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near amenities',
        DYGAV_SPANISH: 'Cerca de servicios',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Modern and traditional blend',
        DYGAV_SPANISH: 'Mezcla de moderno y tradicional',
      },
    ],
  },
  {
    accommodationid: '1100',
    slug: 'acogedor-apartamento-con-vistas-a-la-estacion',
    accommodation: 'Acogedor Apartamento con Vistas a la Estación',
    introductions: {
      en: 'Welcome to our cozy apartment in Formigal! Our charming one-bedroom, one-bathroom retreat is the perfect place for your getaway to the impressive Formigal ski resort.',
      es: '¡Bienvenido a nuestro acogedor apartamento en Formigal! Nuestro encantador apartamento de una habitación y un baño es el lugar perfecto para tu escapada a la impresionante estación de esquí de Formigal.',
    },
    images: [
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355654309_967393687842062_5383398994089253426_n_cweozq-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355440298_2257427171314412_7768611103272005075_n_jnaq0j-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355688505_1333450887257589_7304347441923218224_n_rzjbpd-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355839375_245351358241062_9158799373956269562_n_dpiwpe-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/356082677_3614045672162527_909751428554707146_n_oekrwn-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355682038_1414512785786148_656324142823795535_n_ahzwcy-1.jpg',
        orientation: 'landscape',
      },
      {
        url: 'https://multimedia.dygav.es/wp-content/uploads/2024/04/355432225_640962387946157_3323673929698089464_n_moxszs-1.jpg',
        orientation: 'landscape',
      },
    ],
    main_features: [
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Habitaciones',
      },
      {
        VALUE: 2,
        DYGAV_SPANISH: 'Baños',
      },
      {
        VALUE: 120,
        DYGAV_SPANISH: 'Superficie',
      },
    ],
    capacity: 6,
    categories: [
      {
        category_id: 4, // Assuming category 1 is for "Apartment"
      },
    ],
    aviabookid: 1011, // Following the sequential pattern
    public_cleaning_price: 55, // Appropriate price for a mountain ski resort apartment
    descriptions: {
      en: "Welcome to our cozy apartment in Formigal! Our charming one-bedroom, one-bathroom retreat is the perfect place for your getaway to the impressive Formigal ski resort. Recently renovated, it offers a modern and cozy atmosphere that will make you feel right at home. The living room is spacious and bright, ideal for relaxing by the warm fireplace after an exciting day on the slopes. The fireplace creates a perfect ambiance for those cold mountain evenings. The kitchen is fully equipped, allowing you to prepare your favorite meals without any hassle! The master bedroom is elegantly decorated, and the bed is super comfortable for a full night's rest after your mountain adventures. The apartment's location is unbeatable, close to shops, restaurants, and bars. You'll also be just a few steps away from the ski slopes, making it convenient for winter sports enthusiasts. During the summer, enjoy outdoor activities like hiking and biking through the beautiful Pyrenees landscape. Experience an unforgettable stay in our mountain retreat in Formigal! Book now and get ready for unforgettable moments in this spectacular setting. We're waiting for you in our mountain refuge in Formigal!",
      es: '¡Bienvenido a nuestro acogedor apartamento en Formigal! Nuestro encantador apartamento de una habitación y un baño es el lugar perfecto para tu escapada a la impresionante estación de esquí de Formigal. Recientemente reformado, ofrece un ambiente moderno y acogedor que te hará sentir como en casa. La sala de estar es amplia y luminosa, ideal para relajarte junto a la cálida chimenea después de un emocionante día en las pistas. La cocina está totalmente equipada, ¡prepara tus comidas favoritas! La habitación principal está elegantemente decorada y la cama es súper cómoda para un descanso pleno. La ubicación del apartamento es inmejorable, cerca de tiendas, restaurantes y bares. Además, estarás a pocos pasos de las pistas de esquí. Durante el verano, disfruta de actividades al aire libre como senderismo y paseos en bicicleta. ¡Vive una experiencia inolvidable en los Pirineos! ¡Reserva ahora y prepárate para vivir momentos inolvidables en este entorno espectacular! ¡Te esperamos en nuestro refugio de montaña en Formigal!',
    },
    location: {
      city: 'Formigal',
      country: 'Spain',
      latitude: 42.7633, // Using same coordinates as other Formigal properties
      longitude: -0.3993,
    },
    features: [
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Fireplace',
        DYGAV_SPANISH: 'Chimenea',
      },
      {
        CATEGORY_EN: 'Interior',
        CATEGORY_ES: 'Interior',
        DYGAV_ENGLISH: 'Fully equipped kitchen',
        DYGAV_SPANISH: 'Cocina totalmente equipada',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Near ski slopes',
        DYGAV_SPANISH: 'Cerca de pistas de esquí',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Recently renovated',
        DYGAV_SPANISH: 'Recientemente reformado',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Walking distance to amenities',
        DYGAV_SPANISH: 'Servicios a distancia caminando',
      },
      {
        CATEGORY_EN: 'General',
        CATEGORY_ES: 'General',
        DYGAV_ENGLISH: 'Mountain views',
        DYGAV_SPANISH: 'Vistas a la montaña',
      },
      {
        CATEGORY_EN: 'Location',
        CATEGORY_ES: 'Ubicación',
        DYGAV_ENGLISH: 'Views of the ski resort',
        DYGAV_SPANISH: 'Vistas a la estación de esquí',
      },
    ],
  },
];
