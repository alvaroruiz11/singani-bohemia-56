import { IconType } from 'react-icons';
import { AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';
export type Contact = {
  url: string;
  title: string;
  Icon: IconType;
};

export interface Artist {
  id?: string;
  name: string;
  biography?: string;
  contact?: Contact[];
}
export interface Paint {
  id: string;
  title: string;
  artist: Artist;
  description: string;
  method: string;
  location: string;
}

export const paints: Paint[] = [
  {
    id: 'totem-de-las-alturas',
    title: 'Totem De Las Alturas',
    location: 'Taller Artístico Atenea - Ciudad de Tarija - Bolvia',
    method: 'Acrílico',
    description:
      'La obra hace referencia inicialmente a la llama, el animal más emblemático de nuestro país. Su importancia radica y la vemos presente en el escudo de armas de Bolivia. Este noble animal ha servido  desde antiguos  tiempos para que los habitantes  de Bolivia subsistan, usando del animal, la carne, su fibra, incluso su calor cuando se quedaban a dormir a la intemperie en sus largos viajes. Y los de mente macabra e inconscientes usan los indefensos fetos para hacer trabajos oscuros. Estos altaneros camélidos adornan además las planicies del altiplano captando la atención  de turistas; aportan también al mantenimiento del ecosistema en el que habitan. La obra además representa  a la mujer con vestimenta típica de nuestro altiplano, vista en sus distintos momentos de su diario vivir,  cargando sobre sus espaldas  su aguayo con su niño o llevando alimentos o sus cosas personales; quizá dirigiéndose al mercado,  regresando a casa o camino a su lugar de trabajo,etc, Una parte muy importante  de la obra muestra una franja de tejido guaraní, para los que somos del sur de Bolivia representa a nuestros pueblos originarios, muchas veces olvidado dentro del ámbito nacional.',
    artist: {
      id: 'lilian-katterin-carvajal-solorzano',
      name: 'Lilian Katterin Carvajal Solorzano',
      biography:
        'Artista plástica, nacida en Tarija, con más de 11 años dedicados a la actividad artística y a la promoción de la cultura, con una serie de exposiciones pictóricas en Tarija, Bolivia y otros países, ejerce también la docencia en artes plásticas, en las áreas de dibujo y pintura en su propio taller artístico llamado Atenea, ubicado en la calle Bolívar #225 - Tarija.',
      contact: [
        {
          url: 'https://www.facebook.com/ateneamaterialartistico',
          title: 'Taller Artístico Cultural "Atenea"',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'ancestros',
    title: 'Ancestros',
    location: 'Casa de la Libertad - Ciudad de Sucre - Bolivia',
    method: 'Acrílico sobre madera',
    description:
      'Conociendo de dónde venimos, añorando a nuestros ancestros, venerando nuestro punto de partida, jamás perderemos nuestra meta, pues para dirigirnos a nuestro Norte, es preciso conocer bien nuestro Sur.',
    artist: {
      id: 'andres-kaliman',
      name: 'Andrés Kaliman',
      biography: `Estudios:
            -2019 “Pintura al óleo con espátula” Instituto Cultural Boliviano Alemán. Sucre-Bolivia\n
            Galardones:
            -2018 Ganador concurso “Juana Azurduy de Padilla” Especialidad pintura.
            - 2021 ganador del concurso Juana Azurduy de Padilla. Chuquisaca Bolivia.
            Exposiciones:
            -2018 Exposición pictórica “El color, Mi delirio” Salones “Alianza Francesa” Abril.
            -2019 Exposición conjunta “Colores de la naturaleza” Sala A.B.A.P. casa de la cultura. Junio.
            -2019 Exposición conjunta “Zona-Arte” Salón “Gildaro Antezana” Cochabamba. Agosto.
            - 2021 ganador del concurso Juana Azurduy de Padilla. Chuquisaca Bolivia.`,
      contact: [
        {
          url: 'https://www.facebook.com/andres.kaliman.31',
          title: 'Andrés Kaliman',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'taypi-pacenio-2',
    title: 'Taypi Paceño II',
    location: 'Ciudad de La Paz - Bolivia',
    method: 'Acrílico sobre lienzo',
    description:
      'Una obra representativa de las tradiciones paceñas, en el fondo se aprecia una cholita paceña abrigando a la montaña Illimani, y en la parte inferior de la obra se puede apreciar un pepino carnavalero, una ñatita (en aymara significa chata o sin nariz, creencia que les atribuyen a los cráneos la misión de cuidar su vivienda y cumplir favores que les piden los dueños de casa), una tanta guagua de todos santos y en el medio una antorcha encendida que representa al libertador paceño, Pedro Domingo Murillo.',
    artist: {
      id: 'megan-orosco',
      name: 'Megan Orosco',
      biography: `Tengo 21 años me considero una artista desde los 9, me enamoré del arte desde que vi a mi padre haciendo un dibujo en mi cuaderno, desde entonces inicié mi carrera de manera empírica, es así que el amor por el arte siempre ha estado presente en mi vida.
            Gané mi primera oportunidad para exponer mis pinturas a los 17 años en un concurso organizado por el FEVA obtuve una gran cantidad de apoyo de la gente y me dieron un lugar en el Chuquiago Marka en el año 2017.
            En el 2018 participé del Encuentro Raíces Latinoamericanas en el centro cultural Pipiripi gracias al apoyo del artista Ramiro López Massi y tuve como mentor al maestro Rubén Minutoli (Argentina).
            El mismo año gané el primer lugar en el concurso intercolegial  de pintura "Arturo Borda" organizado por la Honorable Alcaldía Municipal, con la obra titulada Taypi Paceño. ( Pintura en acrílico sobre lienzo).
            He tenido el honor de ser parte del equipo de "Cementerio de Elefantes" en varias intervenciones de murales, además de otras colaboraciones con diferentes artistas en La Paz.
            Realicé mi primer mural sola en mi colegio haciendo una versión ampliada de mi pintura ganadora, bajo la guía de mis mentores, colegas y amigos: Ramiro López Massi, Javier del Carpio Sempértegui, Jhonny Pari y Ponce, a quienes siempre agradeceré por acompañarme en mis primeros pasos en el muralismo.
            Participé de la exposición colectiva con el artista Franco Chávez y el colectivo "Travesuras" en el Museo Costumbrista. En los años 2019 y 2020.
            Encargada de talleres dirigido a los niños en la Feria Dominical del Prado gestión 2019. 
            Actualmente me encuentro estudiando la carrera de Artes Plásticas en la Universidad Mayor de San Andrés en el tercer año, siempre con ganas de seguir impulsando mi carrera artística y ser feliz.`,
      contact: [
        {
          url: 'https://www.facebook.com/meg.orosco.3',
          title: 'Meg Orosco',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'abuelos-chiquitanos',
    title: 'Abuelos Chiquitanos',
    location: 'San José de Chiquitos - Santa Cruz - Bolivia',
    method: 'Acrílico sobre lienzo',
    description:
      'Cuando llegaron los jesuitas a las tierras chiquitanas se encontraron con diferentes pueblos indígenas quienes se resistían a ser evangelizados, se quedaban fuera de los templos usando máscaras y bastones que son una sátira a los españoles. Posteriormente se produce una simbiosis con la religión católica, actualmente se usan las máscaras en las festividades de San José de Chiquitos en mayo y Santiago de Chiquitos en Julio, detrás de la máscara existe una mística que guarda la identidad de esta región, la personalidad peculiar amable y picaresca del personaje caracteriza a los pobladores. El abuelo chiquitano es un personaje que para mí tiene alma propia, se apoderó de mis lienzos y me llevó a recorrer diferentes lugares de Bolivia y el exterior para mostrar su cultura. Cada cuadro adopta una personalidad propia, su expresión, sus facciones y su mirada se van dando espontáneamente como si no tuviese control de los pinceles.',
    artist: {
      id: 'leoni-manrique-antequera',
      name: 'Leoni Manrique Antequera',
      biography: `Leoni, ciudadano del mundo desde 1976, artista visual, formado en la carrera de Artes Plásticas en la Universidad Mayor de San Andrés (La Paz). Sus obras son el reflejo de su investigación vivencial con las diferentes culturas, consciente de que es movido por una energía, busca el equilibrio entre los saberes ancestrales y lo moderno, su trabajo está inspirado en las identidades de los pueblos y la sabiduría de la naturaleza.
            Todas las experiencias de investigación, a través de la exploración de materiales, herramientas y técnicas disponibles, le brindan la libertad de crear, pasando de lo figurativo a lo abstracto y de lo académico a lo experimental. La pintura es su principal medio de expresión, pero también interactúa con otras áreas como la música, la danza, el teatro, el video, el arte digital e incluso la realidad aumentada, así es como su trabajo da como resultado producciones colaborativas que se presentan tanto en el contexto de un exposición, performance o instalación.
            Considera el arte como un estilo de vida, en sus 20 años de carrera realizó más de 50 exposiciones individuales y colectivas en Bolivia, Costa Rica, Uruguay, Brasil, Chile, Perú, Austria, Estados Unidos y Mozambique. Recibió reconocimientos al mérito pictórico, al aporte a la educación ambiental y al impulso artístico cultural en varios municipios de la ciudad de Santa Cruz de la Sierra. Es uno de los artífices y gestores del "festival Conservarte en Santiago de Chiquitos" y la "Larga Noche de Museos Chiquitania", su arte ha permitido rescatar y difundir la cultura de los pueblos dentro y fuera de sus regiones, su proyecto “Conciencia Chiquitana” es la consecuencia de su compromiso social ayudando a la conservación de los bosques y la cultura.`,
      contact: [
        {
          url: 'https://www.facebook.com/Leoni.Visual.Art',
          title: 'Leoni Visual Art',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'eco-e-imagen',
    title: 'Eco e Imagen',
    location: 'Ciudad de Tarija - Bolivia',
    method: 'Oleo',
    description:
      'Representación de la cultura tarijeña, plasmando en su fondo el cañón de la Angostura, zona vitivinícola por excelencia. También se puede apreciar tres chunchos, un racimo de uva y un chapaco tocando la tradicional caña con su vestimenta típica de sombrero y poncho rojo.',
    artist: {
      id: 'eugenia-viri-guaji',
      name: 'Eugenia Viri Guaji',
      biography: `Artista plástica beniana, estudios con Etelvina Peña y en el taller de pintura de Fernando fue distinguida en diferentes ocasiones por su labor en Beni, Tarija y La Paz.
            Exposición en Oruro, La Paz, Potosí , Santa Cruz, Trinidad, Tarija y exposiciones colectivas en Perú, Brasil y Argentina.`,
      contact: [
        {
          url: 'https://wa.me/59175707130',
          title: '+591-75707130',
          Icon: AiOutlineWhatsApp,
        },
      ],
    },
  },
  {
    id: 'cantares-de-mi-tierra',
    title: 'Cantares de mi Tierra',
    location: 'Ciudad de Tarija - Bolivia',
    method: 'Acrílico',
    description:
      'Obra pintada en un mes de abril, mes aniversario de Tarija, pensada en la alegría de compartir entre amigos, risas, música y baile, atesorando momentos que se van quedando por siempre en el alma.',
    artist: {
      id: 'patricia-herbas-herbas',
      name: 'Patricia Herbas Herbas',
      biography: `Me inicié en el arte de la pintura hace ocho años con Linda Da Costa, amiga y artista brasilera,  posteriormente fui experimentando de manera autodidacta, descubriendo nuevas técnicas, materiales, reciclando, etc. Para mí, la pintura marcó un antes y un después en la vida, es una forma de expresión tan bonita, generosa e ilimitada que tiene la virtud de abrir y transformar corazones, mentes y dar alma a los espacios, es cuestión de observar, experimentar, aprender, re aprender y disfrutar sin miedo…`,
      contact: [
        {
          url: 'https://www.facebook.com/pattyherbas',
          title: 'Patricia Herbas Herbas',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'bolivia-magica',
    title: 'Bolivia Mágica',
    location:
      'Academia Nacional de Bellas Artes "Hernando Siles" – Ciudad de La Paz – Bolivia',
    method: 'Mixta',
    description:
      'Bolivia cuenta con una riqueza pluricultural envidiable, es conocido que sus visitantes desean empaparse de ella en sus viajes que realizan a nuestro país. La obra refleja la a belleza de sus mujeres utilizando cada una su vestimenta típica o tradicional de su región, como ser los departamentos de Potosí, La Paz, Chuquisaca, Tarija y Santa Cruz. “Bolivia es Mágica.',
    artist: {
      id: 'milka-ines-ponce-subia',
      name: 'Milka Inés Ponce Subia',
      biography: `Nació en Potosí- Bolivia. Residiendo desde hace muchos años en la ciudad de La Paz. Donde desarrolla su labor docente, artística y de gestión cultural. Su formación artística comienza en el Bachillerato Artístico Melchor Pérez Holguín, en la ciudad de Potosí, continua sus estudios en la Universidad Pedagógica Mrcal. Sucre en la especialidad de Artes Plásticas, en Sucre-Bolivia, dedicándose a la docencia en diferentes instituciones educativas, al servicio de la niñez y la juventud. Actualmente se desempeña como docente de Dibujo y Pintura en una institución de formación artística. Se consolida como artista plástico participando en exposiciones individuales y colectivas a nivel nacional e internacional logrando que sus obras formen parte de colecciones particulares en Bolivia, Argentina y México, así también participando de varios Encuentros Internacionales de Muralismo. Es merecedora de varias distinciones como jurado de diferentes concursos nacionales de Artes Plásticas y reconocimientos como artista plástico y de gestión cultural, al fundar el colectivo Warmi Nayra, y realizar exposiciones donde se aglutinan artistas mujeres visibilizando su obra.`,
      contact: [
        {
          url: 'https://www.facebook.com/MilkaPonce.ArtVisual',
          title: 'Milka Ponce Artista Visual',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'potosi',
    title: 'Potosí',
    location: 'Ciudad de Potosí, Bolivia',
    method: 'Acrílico Sobre Lienzo',
    description:
      'La obra está especialmente diseñada para la etiqueta de Singani Bohemia 56 y explora el enigma del rostro del mascarón de la Casa de la Moneda. Presenta un rompecabezas relacionado con el mito que sugiere que el rostro podría ser el de Diego Huallpa, el descubridor accidental de plata en el cerro de Potosí.',
    artist: {
      id: 'samuel-martinez-bejarano',
      name: 'Samuel Martínez Bejarano ',
      biography: `Estudió Artes Plásticas en Potosí y Buenos Aires, ampliando su formación como pintor en Florencia, Italia. Perfeccionó su arte bajo la tutela del renombrado maestro italiano, Roberto Ferri, en Bolonia. Ha presentado exposiciones individuales de retratos en galerías de Venecia y Potosí, así como participado en exposiciones colectivas en galerías de Italia, España, Colombia y Bolivia. Sus retratos se encuentran en colecciones privadas en Bolivia y diversos países europeos, incluyendo Londres, Dubái y Estambul. Además, ha dejado su huella artística a través de varios murales monumentales en su ciudad natal de Potosí.`,
      contact: [
        {
          url: 'https://www.facebook.com/profile.php?id=100004588178550',
          title: 'Samuel Martinez Bejarano',
          Icon: AiFillFacebook,
        },
      ],
    },
  },
  {
    id: 'michura',
    title: 'Michura',
    location: 'Ciudad Tarija, Bolivia',
    method: 'Empaste con espátula en óleo sobre lienzo',
    description:
      'Tenía persiguiendo a este gatito desde mis anteriores vidas hasta que un día lo encontré atrapado en mis sueños y lo que hice fue liberarlo en un cuadro. La obra “Michura” muestra a un felino maravillado por la chura noche chapaca que es iluminada con colores de antaño por el brillo de la luna, su eterna compañera. El misterioso pensamiento de un Michi frente a la iglesia de San Roque, el templo del Santo Patrono de los perritos. Michura El michi de la chura',
    artist: {
      name: 'Roger Angulo Castañón  ',
    },
  },
];
