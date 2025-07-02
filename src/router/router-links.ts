interface RouterLink {
    path: string;
    title: string;
    to: string;
    visible: boolean;
}

export const routerLinks: RouterLink[] = [
    {
        path: '/',
        to: '/',
        title: 'Inicio',
        visible: true,
    },
    {
        path: '/nosotros',
        to: '/nosotros',
        title: 'Sobre Nosotros',
        visible: true,
    },
    {
        path: '/pinturas',
        to: '/pinturas',
        title: 'Pinturas',
        visible: true,
    },
    {
        path: '/botellas-personalizada',
        to: '/botellas-personalizada',
        title: 'Botellas Personalizadas',
        visible: true,
    },
]