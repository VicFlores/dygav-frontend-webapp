import { TImagePropsArray } from '@/types';

export type TSearcherCard = TImagePropsArray & {
  id: number;
  imgSubtitle: string;
  title: string;
  description: string;
  subtitle: string;
  bedroom: number;
  bathroom: number;
  size: string;
  maxHuesped: number;
  price: number;
  cleanup: number;
  services: string[];
};

export const searcherCard: TSearcherCard[] = [
  {
    id: 1,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/360215556_572928818383799_9174447404790276966_n_aj8dgu-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/360215556_572928818383799_9174447404790276966_n_aj8dgu-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/359979326_1695642180885306_7405698003508188202_n_bgcpec-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/361072121_1031754531109228_8629428951624734545_n_wgwc3k-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/360039632_1520965311768775_4606381007455330764_n_ycaq6c-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/361138271_610899047891950_367908744151509995_n_pxryef-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/361066128_636970398403554_561876738283885733_n_c0rnhr-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/360400552_180333235032979_5699075598242530690_n_spigdw-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/360213387_631811875585944_1621400824524654042_n_fzfaul-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/360008202_801549578036726_6169730961137764044_n_ww1vhe-1.jpg',
    ],
    alt: 'Ático en Puerto Deportivo con vistas al Mar - Torrevieja',
    width: 340,
    height: 245,
    imgSubtitle: 'Torrevieja',
    title: 'Ático en Puerto Deportivo con vistas al Mar',
    description: `¡Descubre el paraíso frente al mar en nuestro increíble apartamento en Marina Internacional, Torrevieja! Con 2 habitaciones y 2 baños, este ático en el piso 7 te ofrece vistas panorámicas impresionantes desde su balcón. Disfruta de la brisa marina y las espectaculares vistas al puerto deportivo. Además, estarás cerca del centro, ¡todo a tu alcance para una experiencia inolvidable!`,
    subtitle:
      'Descubre el paraíso frente al mar en nuestro increíble apartamento en Marina Internacional, Torrevieja! Con 2 habitaciones y 2 baños, este ático en el piso 7 te ofrece vistas panorámicas impresionantes desde su balcón.',
    bedroom: 2,
    bathroom: 2,
    size: '110m²',
    maxHuesped: 6,
    price: 145,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Parking Cerca',
      'Piscina',
      'Jardín',
      'Vistas panorámicas del Mar',
      'Pista de Tenis',
    ],
  },
  {
    id: 2,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/358164003_616836260514525_6130452333073894116_n_lfktie-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/357665262_2493730587451207_3086372307213685087_n_h0ktc7-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/357811598_151932394520550_5669952163850957986_n_ph2qwr-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/358209824_829828245171925_4783886145726477741_n_ie6xiq-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/358175685_996040444706518_4239722135066224993_n_puvj2g-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/357806951_267957925831163_2832505463717771563_n_v6zjk7-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/358071568_1612450865931982_7167264244323856166_n_kas8qb-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/357658828_957185835612281_3393154098048999728_n_wwgufj-1.jpg',
    ],
    alt: 'Acogedor Bungaló con Piscina junto al Mar',
    width: 340,
    height: 245,
    imgSubtitle: 'Dehesa de Campoamor',
    title: 'Acogedor Bungaló con Piscina junto al Mar',
    description: `¿Buscas escapar del bullicio de la ciudad y disfrutar de una experiencia relajante? Tenemos el lugar perfecto para ti. Nuestro bungalow con piscina te ofrece una escapada idílica en medio de la belleza natural de la Dehesa de Campoamor, a solo unos minutos de la vibrante ciudad de Torrevieja.

    El bungalow cuenta con una acogedora habitación, decorada con muchos cuadros modernos que le dan una atmósfera exclusiva y única. Despierta cada mañana y disfruta de las vistas al jardín desde la comodidad de tu cama. La tranquilidad y privacidad están garantizadas en este oasis. El jardín es simplemente espectacular, con amplios espacios verdes donde podrás relajarte, leer un libro o simplemente deleitarte con la naturaleza.

    Pero eso no es todo: la joya de la corona es nuestra impresionante piscina. Sumérgete en sus aguas cristalinas y refrescantes, relájate bajo el sol mediterráneo o disfruta de una refrescante bebida junto a la piscina. Es el lugar perfecto para descansar y disfrutar de momentos inolvidables con tus seres queridos. 

    Además de las comodidades de la propiedad, la ubicación es inmejorable. Estamos a solo unos minutos de la hermosa playa de Campoamor, donde podrás disfrutar del sol y el mar en un entorno tranquilo. También tendrás fácil acceso a las atracciones y servicios de Torrevieja, como restaurantes, bares, tiendas y mucho más.

    Ven y descubre el auténtico encanto de la Costa Blanca. Nuestro bungalow con piscina te ofrece el equilibrio perfecto entre tranquilidad y entretenimiento. ¡Reserva ahora y déjate cautivar por la magia de la Dehesa de Campoamor y Torrevieja!
    `,
    subtitle:
      '¿Buscas escapar del bullicio de la ciudad y disfrutar de una experiencia relajante? Tenemos el lugar perfecto para ti. Nuestro bungalow con piscina te ofrece una escapada idílica en medio de la belleza natural de la Dehesa de Campoamor, a solo unos minutos de la vibrante ciudad de Torrevieja.',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
    maxHuesped: 4,
    price: 165,
    cleanup: 65,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Sauna',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Parking Cerca',
    ],
  },
  {
    id: 3,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356261652_3037507509877302_5325402422896813490_n_wojl6k-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356416317_285953863844639_5168474264959699144_n_tw2mu1-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356265936_6548793485158648_2760430652149921419_n_mzlcba-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355905321_601649915400501_4627385904143650431_n_ackmrf-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356069544_283612164120370_5210225710094288699_n_s6cbcv-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355905321_236016995957818_2402960585356146924_n_vnier4-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355846265_1906296246435913_294380608627486919_n_rnxipk-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355866350_793826018941406_3115561986811254420_n_rniugr-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356230509_139699245763451_61727248857118520_n_jrg7cr-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355996735_785918643080668_4699798086633163591_n_amnyrx-1.jpg',
    ],
    alt: 'Centro de Torrevieja',
    width: 340,
    height: 245,
    imgSubtitle: 'Torrevieja',
    title: 'Apartamento en el Centro: Ubicación inmejorable',
    description: `Disfruta de unas vacaciones soleadas en nuestra acogedora joya de un dormitorio en el corazón de Torrevieja. Aquí encontrarás fácil acceso a atracciones, tiendas, restaurantes y playas de ensueño de arena blanca.

    Relájate en nuestra sala de estar luminosa, decorada con estilo y equipada con todas las comodidades modernas para hacerte sentir como en casa.

    En la elegante habitación principal encontrarás una cama cómoda para asegurar un sueño reparador y armarios espaciosos para guardar tus pertenencias con orden.

    Nuestra cocina totalmente equipada con electrodomésticos modernos y utensilios de cocina te permitirá preparar tus platos favoritos con facilidad. ¡Incluso tenemos un rincón de comedor para disfrutar de tus creaciones culinarias!

    Descubre las principales atracciones de Torrevieja, desde restaurantes que ofrecen una deliciosa cocina local e internacional hasta las hermosas playas donde podrás relajarte, nadar y practicar deportes acuáticos.

    Sumérgete en la vibrante vida nocturna y la rica oferta cultural de Torrevieja. Explora el paseo marítimo, visita el puerto deportivo y déjate cautivar por el encanto del mercado local y los emocionantes eventos y festivales que se celebran durante todo el año.

    ¡No esperes más y reserva ahora tu estancia en nuestro apartamento de una habitación en el centro de Torrevieja! Disfruta de todo lo que la Costa Blanca tiene para ofrecerte: playas relajantes, exploración urbana y momentos inolvidables. ¡Ven y crea recuerdos inolvidables con nosotros!
    `,
    subtitle:
      'Disfruta de unas vacaciones soleadas en nuestra acogedora joya de un dormitorio en el corazón de Torrevieja. Aquí encontrarás fácil acceso a atracciones, tiendas, restaurantes y playas de ensueño de arena blanca.',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
    maxHuesped: 4,
    price: 110,
    cleanup: 65,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Balcón/Terraza',
      'Parking Cerca',
    ],
  },
  {
    id: 4,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355839377_277022834825257_5631064041754347647_n_rwgpl9-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355625484_596935062625202_7601431500463831824_n_efr4oo-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355866359_2297216433805754_2155375534857422522_n_mljwtl-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355821149_583121537358615_496649574429769641_n_gwgkpl-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355642437_242417201849767_4013316603351107480_n_pnbojq-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355982516_220864964175859_4072592782709097123_n_a4ucps-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355827277_968572924358307_7514379261927243798_n_lex7x1-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355569114_797845241932058_8693599522789763200_n_nb3kr7-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355571502_276823644882360_6874180226793336035_n_osud8e-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355692619_1477373419761234_2464716469814400152_n_zebd0h-1.jpg',
    ],
    alt: 'Centro de Torrevieja',
    width: 340,
    height: 245,
    imgSubtitle: 'Torrevieja',
    title: 'Apartamento en Playa Mata',
    description: `Desayuna mirando al mar y duérmete escuchando las olas.
    
    Mientras el resto de humanos se agobia buscando aparcamiento, tú termínate las tostadas y el zumo... que solo necesitas unos pocos pasos para llegar a la playa.
    
    Por las tardes disfruta del frescor de la brisa marina, y trae una chaquetilla, que puede que la necesites en las noches de terraza.
    
    ¿Mi recomendación? Que al menos un día te levantes a tiempo de ver amanecer.
    
    Apartamento luminoso y fresco, en primera planta. Los tres dormitorios son exteriores. Terraza-balcón con acceso desde comedor y dormitorio con vistas al mar. Baño y cocina completamente equipados. En planta baja tienes una terracita privada, ideal para cenas a la fresca, y en la que también cuentas con una ducha exterior para aclararte cuando llegas de la playa.
    
    Terraza privada en planta baja con ducha exterior.
    
    Puedes ir caminando al super, a la farmacia y al médico. Por supuesto a la playa, y a decenas de restaurantes, e incluso a parajes naturales como el Parque del Molino y las Dunas de Guardamar. Si quieres, ¡puedes olvidarte del coche! (Aunque te lo recomiendo para llegar al Paraje Natural de las Lagunas de Torrevieja y la Mata, a 5 minutos)
    
    ¡Vive la experiencia de vivir junto al mar y disfruta de todo lo que ofrece!`,
    subtitle: `Desayuna mirando al mar y duérmete escuchando las olas.
      Por las tardes disfruta del frescor de la brisa marina, y trae una chaquetilla, que puede que la necesites en las noches de terraza.`,
    bedroom: 3,
    bathroom: 1,
    size: '90m²',
    maxHuesped: 4,
    price: 110,
    cleanup: 65,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Balcón/Terraza',
      'Parking Cerca',
    ],
  },
  {
    id: 5,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355871521_2352028871646012_1364603506285862344_n_fahq4k-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355840222_1617075832109631_5705936545059326589_n_irljxj-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/354803929_586623450171544_74377877471137664_n_caklv6-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355425254_181386181319334_2203436108574430518_n_wfqjji-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355708051_982390276129476_889252614238741693_n_hdvlf4-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355868822_3089409318020829_7900497983944573914_n_mt2pwp-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355981843_975091560194225_5909095246241865015_n_zp8tm4-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355654279_595844349198704_5284302476182459048_n_lpynw2-1.jpg',
    ],
    alt: 'Apartamento Plaza del Ayuntamiento Torrevieja',
    width: 340,
    height: 245,
    imgSubtitle: 'Torrevieja',
    title: 'Apartamento Plaza del Ayuntamiento Torrevieja',
    description: `¡Bienvenido a nuestro exclusivo piso en la Plaza del Ayuntamiento en Torrevieja!
    
    Este magnífico piso, ubicado a solo 200 metros del mar, te brinda la oportunidad de disfrutar de una estancia excepcional en uno de los lugares más privilegiados de la ciudad. Con su diseño moderno y elegante, te sumergirás en un ambiente de lujo y confort.
    
    El piso ha sido recientemente reformado para ofrecerte una experiencia contemporánea y sofisticada. Cada detalle ha sido cuidadosamente seleccionado para garantizar tu comodidad y satisfacción. Desde el mobiliario elegante hasta los acabados de alta calidad, te sentirás como en un oasis de tranquilidad y estilo.
    
    La habitación principal, exquisitamente decorada, te brindará un refugio de paz y descanso. La cama cómoda y las sábanas de calidad te permitirán disfrutar de una noche de sueño reparador después de un día explorando las maravillas de Torrevieja. Además, los cuadros de los mejores artistas contemporáneos que adornan las paredes añadirán un toque de belleza y sofisticación al ambiente.
    
    El salón es el lugar perfecto para relajarte y disfrutar de momentos inolvidables. La amplia sala de estar te invita a descansar en los cómodos sofás mientras disfrutas de la tranquilidad y el encanto de la Plaza del Ayuntamiento. Además, contarás con una moderna televisión de pantalla plana para entretenerte durante tus momentos de ocio.
    
    La cocina totalmente equipada te brindará la posibilidad de preparar tus propias comidas gourmet. Los electrodomésticos de última generación y los utensilios de cocina te permitirán deleitarte en la creación de platos deliciosos. También encontrarás una zona de comedor donde podrás disfrutar de tus creaciones culinarias en un ambiente elegante y acogedor.
    
    La ubicación del piso es simplemente inmejorable. Estarás rodeado de una gran variedad de restaurantes, tiendas y atracciones turísticas. A tan solo 200 metros del mar, podrás disfrutar de hermosas playas de arena y de paseos relajantes junto al mar.`,
    subtitle: `¡Bienvenido a nuestro exclusivo piso en la Plaza del Ayuntamiento en Torrevieja!
      
      Este magnífico piso, ubicado a solo 200 metros del mar, te brinda la oportunidad de disfrutar de una estancia excepcional en uno de los lugares más privilegiados de la ciudad. Con su diseño moderno y elegante, te sumergirás en un ambiente de lujo y confort.`,
    bedroom: 2,
    bathroom: 1,
    size: '110m²',
    maxHuesped: 6,
    price: 130,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Parking Cerca',
    ],
  },
  {
    id: 6,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355430130_280997211130236_1141085529244107559_n_wiucxi-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355814353_1024757382018465_4405488325495599688_n_knk2gv-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355583468_1452975642128909_5630854050548497334_n_rlavfw-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355068501_267067119247610_8364540762576496413_n_ifb5vc-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356425492_5896092493833747_2201733375554832715_n_a98erj-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355831929_1434459924053800_5988222092432632472_n_ln0spm-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355425589_938067787492919_8695676043059305361_n_uyw0rz-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355427240_1456381365177152_357350901128856131_n_zohqyo-1.jpg',
    ],
    alt: 'Acogedor Hogar Unifamiliar en el Pueblo',
    width: 340,
    height: 245,
    imgSubtitle: 'Formigal',
    title: 'Acogedor Hogar Unifamiliar en el Pueblo',
    description: `¡Bienvenido a nuestra encantadora casa unifamiliar de dos habitaciones en Formigal!
    Esta hermosa casa es el lugar perfecto para disfrutar de unas vacaciones inolvidables en la impresionante estación de esquí de Formigal. Con su diseño espacioso y su ubicación privilegiada, te brinda todo el confort y la comodidad que necesitas para relajarte y disfrutar al máximo de tu estancia.
    
    La casa ha sido cuidadosamente decorada y renovada para ofrecerte un ambiente acogedor y moderno. Cuenta con dos amplias habitaciones, cada una de ellas equipada con cómodas camas para garantizar un descanso reparador después de un día lleno de emociones en la montaña. Además, encontrarás armarios espaciosos para almacenar tus pertenencias y mantener todo ordenado durante tu estancia.
    
    El luminoso salón es el lugar ideal para reunirse con amigos y familiares. Con cómodos sofás y una chimenea acogedora, podrás relajarte y disfrutar de agradables momentos juntos mientras contemplas las vistas panorámicas de las montañas. La cocina está totalmente equipada con todo lo necesario para preparar tus comidas favoritas, desde platos casuales hasta cenas más elaboradas.
    
    La ubicación de la casa es simplemente inmejorable. Está convenientemente situada cerca de las pistas de esquí, lo que te permite acceder fácilmente a una gran variedad de actividades al aire libre, como esquí, snowboard, senderismo y mucho más. Además, encontrarás tiendas, restaurantes y servicios a poca distancia a pie, lo que hace que tu estancia sea aún más cómoda y conveniente.
    
    ¡Te invitamos a disfrutar de una experiencia única en nuestra casa unifamiliar de dos habitaciones en Formigal! Ya sea que estés buscando aventuras en la nieve o una escapada tranquila en medio de la naturaleza, este es el lugar perfecto para crear recuerdos inolvidables junto a tus seres queridos.`,
    subtitle:
      'Esta hermosa casa es el lugar perfecto para disfrutar de unas vacaciones inolvidables en la impresionante estación de esquí de Formigal. Con su diseño espacioso y su ubicación privilegiada, te brinda todo el confort y la comodidad que necesitas para relajarte y disfrutar al máximo de tu estancia.',
    bedroom: 2,
    bathroom: 1,
    size: '110m²',
    maxHuesped: 6,
    price: 115,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Piscina',
      'BBQ',
      'Patio',
      'Balcón/Terraza',
    ],
  },
  {
    id: 7,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355641850_280997574398133_3464358442456365658_n_xbyqph-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356138312_966995954502066_7107395930396351234_n_dndem8-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355868825_288295670305866_5087031943428774334_n_gvrlpf-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356219242_569974251978791_7759528373137684052_n_hu86zt-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355623456_290359240107113_51296518052805429_n_yunjod-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355479777_645604877157895_4159822538848815565_n_flpool-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355473289_586751303575875_6792417749607082307_n_m8yu7s-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355418829_650432043778921_2049309261363687190_n_rqbro8-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355706819_221475644150992_7964929518659699549_n_aaxuuu-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355432223_985171855852187_5411095870191443220_n_ukkqwi-1.jpg',
    ],
    alt: 'Impresionante Villa con Piscina y Jardín privados.',
    width: 340,
    height: 245,
    imgSubtitle: 'Dehesa de Campoamor',
    title: 'Impresionante Villa con Piscina y Jardín privados.',
    description: `Este impresionante alojamiento de dos habitaciones y dos baños es el lugar perfecto para unas vacaciones inolvidables en la Costa Blanca. Con 180 m2 de espacio, disfrutarás de lujo, comodidad y diversión en un solo lugar.

    Cada detalle de nuestro chalet ha sido cuidadosamente diseñado para ofrecerte una experiencia excepcional. Las amplias habitaciones cuentan con camas cómodas y armarios empotrados, brindándote un espacio acogedor para descansar y relajarte. Los elegantes baños están equipados con duchas amplias y acabados de alta calidad.

    La cocina totalmente equipada te permite preparar tus comidas favoritas con facilidad, mientras que el espacioso salón te invita a relajarte en sus cómodos sofás y disfrutar de momentos de entretenimiento. Además, la conexión a internet de alta velocidad te mantiene conectado en todo momento.

    Pero eso no es todo. Nuestro chalet también cuenta con un magnífico jardín privado con una refrescante piscina, donde podrás tomar el sol y darte un chapuzón siempre que lo desees. Además, la barbacoa te permite organizar deliciosas comidas al aire libre y disfrutar de agradables veladas con tus seres queridos.

    Ubicado en Dehesa de Campoamor, estarás rodeado de hermosos paisajes y a poca distancia de las playas de arena dorada de la costa. Además, encontrarás una amplia selección de restaurantes, tiendas y actividades para complementar tu estancia.

    ¡No pierdas la oportunidad de vivir unas vacaciones inolvidables en nuestro chalet en Dehesa de Campoamor! Reserva ahora y descubre el equilibrio perfecto entre lujo, comodidad y diversión en la Costa Blanca.
    `,
    subtitle:
      'Este impresionante alojamiento de dos habitaciones y dos baños es el lugar perfecto para unas vacaciones inolvidables en la Costa Blanca. Con 180 m2 de espacio, disfrutarás de lujo, comodidad y diversión en un solo lugar.',
    bedroom: 2,
    bathroom: 1,
    size: '180m²',
    maxHuesped: 6,
    price: 115,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Piscina',
      'BBQ',
      'Patio',
      'Balcón/Terraza',
    ],
  },
  {
    id: 8,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646229_978699073472215_3211535062379828664_n_ivvytx-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355692617_2253954531477355_7806048174137064307_n_rxwpib-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355063470_173121715568229_6083701798772673336_n_ipcsjk-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355818718_1620606185100099_7501423605725107994_n_mgq7bb-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355427236_230760486390736_8911219464606180674_n_h3gi4o-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355344507_604569261658216_6375026979987795306_n_ovpkfm-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/354640296_828229741626967_1904076646856246503_n_ftvkax-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355422643_1034958491222853_6322719721927190964_n_dqpsnm-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355690197_280556977685503_5416447852470806219_n_f86qmy-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355464099_3473824216239260_1851089902207079710_n_ujf5bh-1.jpg',
    ],
    alt: 'Casa Unifamiliar con Piscina, Jacuzzi y Sauna.',
    width: 340,
    height: 245,
    imgSubtitle: 'Torrevieja',
    title: 'Casa Unifamiliar con Piscina, Jacuzzi y Sauna.',
    description: `¡Descubre el lujo y la tranquilidad en nuestra casa unifamiliar en Torrevieja! Esta impresionante residencia te ofrece una experiencia única de confort y relajación. Con 2 habitaciones, 2 baños y una piscina privada, encontrarás todo lo que necesitas para unas vacaciones inolvidables.
    
    Sumérgete en la serenidad de nuestro jardín exuberante y disfruta de momentos de paz en la piscina. Además, podrás mimarte en nuestro baño con sauna y jacuzzi, donde podrás relajarte y liberar tensiones. 
    
    El interior de la casa está cuidadosamente diseñado para brindarte el máximo confort. Las habitaciones son espaciosas y acogedoras, y los baños están equipados con modernas comodidades. La cocina totalmente equipada te permitirá preparar deliciosas comidas y el salón te invita a relajarte en un ambiente acogedor. 

    La ubicación de la casa es ideal, a solo unos minutos de distancia de las hermosas playas de La Zenia. Disfruta de paseos por la orilla del mar, actividades acuáticas y la belleza del paisaje costero.

    ¡No pierdas la oportunidad de vivir una experiencia de lujo en nuestra casa unifamiliar en Torrevieja! Reserva ahora y déjate envolver por la tranquilidad y el confort que este increíble lugar tiene para ofrecer.
    `,
    subtitle:
      '¡Descubre el lujo y la tranquilidad en nuestra casa unifamiliar en Torrevieja! Esta impresionante residencia te ofrece una experiencia única de confort y relajación. Con 2 habitaciones, 2 baños y una piscina privada',
    bedroom: 2,
    bathroom: 2,
    size: '120m²',
    maxHuesped: 6,
    price: 165,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Piscina',
      'Parking Cerca',
      'Jardín',
      'Garaje',
    ],
  },
  {
    id: 9,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355836176_590054213232762_3943679031032072619_n_xzmk2m-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355847971_1880039672376238_6517939227860399550_n_ecodli-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355483891_963161754832072_4735839979510556448_n_ekgzx1-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355696532_2596073970546340_3724391736266281989_n_zbkwih-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646222_114738238325104_1547719684700134939_n_gqw9gi-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355685221_2118361961831836_6950786842258877426_n_dixbho-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355456903_292879046549428_5070979686022284662_n_feauz6-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355404418_1478446232903035_8579213394037655194_n_z3crjh-1.jpg',
    ],
    alt: 'Apartamento a 5 Minutos de las Pistas de Esquí',
    width: 340,
    height: 245,
    imgSubtitle: 'Formigal',
    title: 'Apartamento a 5 Minutos de las Pistas de Esquí',
    description: `Este acogedor refugio de una habitación y un baño es el lugar perfecto para tus vacaciones en la impresionante estación de esquí. Situado en un entorno tranquilo y rodeado de paisajes montañosos, te brindará un espacio relajante y acogedor después de un día lleno de aventuras en la nieve.

    Hemos renovado recientemente el apartamento, creando una atmósfera moderna y elegante que se fusiona con el encanto rústico de la montaña. En la sala de estar, podrás disfrutar de la calidez de la chimenea, relajarte junto al fuego y deleitarte con una taza de chocolate caliente.

    La cocina está completamente equipada para que puedas preparar tus comidas favoritas, desde desayunos reconfortantes hasta cenas deliciosas. La habitación principal cuenta con una cómoda cama que te asegurará un descanso tranquilo y revitalizante antes de tu próxima aventura en las montañas. El baño también ha sido renovado, ofreciendo comodidades modernas.

    Además, la ubicación del apartamento es privilegiada. A pocos pasos encontrarás tiendas, restaurantes y bares, así como un fácil acceso a las pistas de esquí y rutas de senderismo. Durante el verano, podrás disfrutar de emocionantes actividades al aire libre, como senderismo, ciclismo de montaña y paseos panorámicos.

    ¡Ven y disfruta de una estancia inolvidable en nuestro acogedor apartamento en Formigal! Ya sea que desees unas vacaciones llenas de deportes de invierno o una escapada de verano rodeado de naturaleza, este es el lugar perfecto para relajarte y disfrutar de todo lo que Formigal tiene para ofrecer.
    `,
    subtitle:
      'Este acogedor refugio de una habitación y un baño es el lugar perfecto para tus vacaciones en la impresionante estación de esquí. Situado en un entorno tranquilo y rodeado de paisajes montañosos, te brindará un espacio relajante y acogedor después de un día lleno de aventuras en la nieve.',
    bedroom: 2,
    bathroom: 2,
    size: '120m²',
    maxHuesped: 6,
    price: 165,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Piscina',
      'Parking Cerca',
      'Jardín',
      'Garaje',
    ],
  },
  {
    id: 11,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355492989_235730605893546_4078222916753933298_n_s3v9pt-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356001006_279421291145679_2409904504043162319_n_i0dqsw-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355422640_3451555125093322_6759075052409299737_n_nim8ab-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355425118_923250638737171_8785221048883006890_n_k07acm-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355646220_570146251862841_1832270979189602918_n_vsutwo-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356065190_1245539462797825_3531810908971649656_n_j96zyh-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355424245_601200055168275_741180618599423093_n_awdv20-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355875923_3512805052265801_1359838667751147010_n_rwsdrp-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355572360_530199342511940_3941818391126366308_n_rzymmp-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355611536_276804908350822_6708390744594234866_n_lf7krw-1.jpg',
    ],
    alt: 'Lujosa Villa a 25 Metros de la Playa',
    width: 340,
    height: 245,
    imgSubtitle: 'Campoamor',
    title: 'Lujosa Villa a 25 Metros de la Playa',
    description: `¡Descubre una experiencia de lujo y privacidad en nuestra increíble villa en Campoamor!

    Esta impresionante residencia te brinda el escape perfecto junto al mar Mediterráneo.

    Sumérgete en la elegancia y el confort de esta amplia villa, donde cada detalle ha sido cuidadosamente diseñado para tu comodidad y satisfacción.

    Disfruta de momentos inolvidables en sus espacios generosos y encantadores, con una mezcla de estilo moderno y detalles tradicionales.

    Y lo mejor de todo, a solo pasos de las hermosas playas de Campoamor.

    ¡No pierdas la oportunidad de vivir una experiencia única en nuestra villa de ensueño!

    Reserva ahora y déjate llevar por la serenidad y el lujo que esta magnífica propiedad tiene para ofrecer.
    `,
    subtitle:
      '¡Descubre una experiencia de lujo y privacidad en nuestra increíble villa en Campoamor! Esta impresionante residencia te brinda el escape perfecto junto al mar Mediterráneo.',
    bedroom: 2,
    bathroom: 2,
    size: '120m²',
    maxHuesped: 6,
    price: 165,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Piscina',
      'Parking Cerca',
      'Jardín',
      'Garaje',
    ],
  },
  {
    id: 12,
    src: [
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355654309_967393687842062_5383398994089253426_n_cweozq-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355440298_2257427171314412_7768611103272005075_n_jnaq0j-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355688505_1333450887257589_7304347441923218224_n_rzjbpd-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355839375_245351358241062_9158799373956269562_n_dpiwpe-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/356082677_3614045672162527_909751428554707146_n_oekrwn-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355682038_1414512785786148_656324142823795535_n_ahzwcy-1.jpg',
      'https://multimedia.dygav.es/wp-content/uploads/2024/04/355432225_640962387946157_3323673929698089464_n_moxszs-1.jpg',
    ],
    alt: 'Acogedor Apartamento con Vistas a la Estación',
    width: 340,
    height: 245,
    imgSubtitle: 'Formigal',
    title: 'Acogedor Apartamento con Vistas a la Estación',
    description: `¡Bienvenido a nuestro acogedor apartamento en Formigal!
    
    Nuestro encantador apartamento de una habitación y un baño es el lugar perfecto para tu escapada a la impresionante estación de esquí de Formigal. Recientemente reformado, ofrece un ambiente moderno y acogedor que te hará sentir como en casa. 

    La sala de estar es amplia y luminosa, ideal para relajarte junto a la cálida chimenea después de un emocionante día en las pistas. La cocina está totalmente equipada, ¡prepara tus comidas favoritas! La habitación principal está elegantemente decorada y la cama es súper cómoda para un descanso pleno.

    La ubicación del apartamento es inmejorable, cerca de tiendas, restaurantes y bares. Además, estarás a pocos pasos de las pistas de esquí. Durante el verano, disfruta de actividades al aire libre como senderismo y paseos en bicicleta. ¡Vive una experiencia inolvidable en los Pirineos!

    ¡Reserva ahora y prepárate para vivir momentos inolvidables en este entorno espectacular! ¡Te esperamos en nuestro refugio de montaña en Formigal! 
    `,
    subtitle:
      '¡Bienvenido a nuestro acogedor apartamento en Formigal! Nuestro encantador apartamento de una habitación y un baño es el lugar perfecto para tu escapada a la impresionante estación de esquí de Formigal. Recientemente reformado, ofrece un ambiente moderno y acogedor que te hará sentir como en casa. ',
    bedroom: 2,
    bathroom: 2,
    size: '120m²',
    maxHuesped: 6,
    price: 165,
    cleanup: 75,
    services: [
      'Cocina Equipada',
      'Conexión WiFi de alta velocidad',
      'Aire Acondicionado',
      'Calefacción',
      'Lavaplatos',
      'Chimenea',
      'Hervidor de Agua',
      'Microondas',
      'Lavadora',
      'Nevera con congelador',
      'TV Pantalla Plana',
      'Tostadora',
      'Horno',
      'Nevera',
      'Gimnasio',
      'Cafetera',
      'Vajilla, cubiertos y cristalería',
      'Utensilios de Cocina',
      'Tazas, vasos y copas',
      'Secador de pelo',
      'Ascensor',
      'Batidora/Licuadora',
      'Cuna',
      'Piscina',
      'Parking Cerca',
      'Jardín',
      'Garaje',
    ],
  },
];
