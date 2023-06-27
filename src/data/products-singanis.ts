export interface Product {
    id: string;
    desc: string;
    namePainting?: string;
    srcImg: string[];
    title: string;
}


export const products: Product[] = [
    {
        id: 'singani-premium-1',
        title: 'Singani Premium',
        desc: `Singani Bohemia 56 Premium es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un doble destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. De gran bouquet y por su gran plenitud de sus aromas se aconseja consumirlo con hielo o en su coctel favorito.`,
        srcImg: [
            '/assets/singani/premiun-1.png',
            '/assets/painting/totem-de-las-alturas.jpg'
        ],
        namePainting: 'Totem de las alturas',
    },
    {
        id: 'singani-clasico-1',
        title: 'Singani Clasico',
        desc: `Singani Bohemia 56 Clásico es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. Ideal para consumirlo en combinación de coctelería, tanto con jugo de frutas y gaseosas.`,
        srcImg: [
            '/assets/singani/clasico-1.png',
            '/assets/painting/eco-e-imagen.jpg'
        ],
        namePainting: 'Eco e imagen',
    },
    {
        id: 'singani-premium-2',
        title: 'Singani Premium',
        desc: `Singani Bohemia 56 Premium es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un doble destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. De gran bouquet y por su gran plenitud de sus aromas se aconseja consumirlo con hielo o en su coctel favorito.`,
        srcImg: [
            '/assets/singani/premiun-2.png',
            '/assets/painting/abuelos-chiquitanos.jpg'
        ],
        namePainting: 'Abuelos chiquitanos'
    },
    {
        id: 'singani-clasico-2',
        title: 'Singani Clasico',
        desc: `Singani Bohemia 56 Clásico es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. Ideal para consumirlo en combinación de coctelería, tanto con jugo de frutas y gaseosas.`,
        srcImg: [
            '/assets/singani/clasico-2.png',
            '/assets/painting/taypi-pacenio-2.jpg'
        ],
        namePainting: 'Taypi paseño 2'
    },
    {
        id: 'singani-premium-3',
        title: 'Singani Premium',
        desc: `Singani Bohemia 56 Premium es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un doble destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. De gran bouquet y por su gran plenitud de sus aromas se aconseja consumirlo con hielo o en su coctel favorito.`,
        srcImg: [
            '/assets/singani/premiun-3.png',
            '/assets/painting/ancestros.jpg'
        ],
        namePainting: 'Ancestros'
    },
    {
        id: 'singani-premium-4',
        title: 'Singani Premium',
        desc: `Singani Bohemia 56 Premium es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un doble destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. De gran bouquet y por su gran plenitud de sus aromas se aconseja consumirlo con hielo o en su coctel favorito.`,
        srcImg: [
            '/assets/singani/premiun-4.png',
            '/assets/painting/cantares-de-mi-tierra.jpg'
        ],
        namePainting: 'Cantares de mi tierra'
    },
    {
        id: 'singani-premium-5',
        title: 'Singani Premium',
        desc: `Singani Bohemia 56 Premium es una bebida espirituosa boliviana comprometida en promocionar a toda expresión cultural y artística nacional; siendo un doble destilado de vino de las mejores uvas de la variedad de Moscatel de Alejandría, cultivadas a mas de 1.800 m.s.n.m. De gran bouquet y por su gran plenitud de sus aromas se aconseja consumirlo con hielo o en su coctel favorito.`,
        srcImg: [
            '/assets/singani/premiun-5.png',
            '/assets/painting/bolivia-magica.jpg'
        ],
        namePainting: 'Bolivia mágica'
    },
]