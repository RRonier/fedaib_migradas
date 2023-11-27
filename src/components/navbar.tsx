import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import { useTranslations } from 'next-intl';
import Container from '@mui/material/Container';
import CustomToolbar from './customToolbar';

// const CustomToolbar = React.lazy(() => import ('./customToolbar'));

export function NavBar() {
    const t = useTranslations('navbar')
    interface Page {
        name: string;
        url: "/proyectos" | "/que-hacemos" | "/quienes-somos" | "/";
    }

    const pages: Page[] = [
        { name: t('proyectos'), url: '/proyectos' },
        { name: t('que_hacemos'), url: '/que-hacemos' },
        { name: t('quienes_somos'), url: '/quienes-somos' },
        // { name: t('contacto'), url: '/contacto' },
        // { name: t('nuestras_actividades'), url: '/nuestras-actividades' }
    ]

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <CustomToolbar pages={pages} />
            </Container>
        </AppBar>
    );
}
