import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr', 'eus'] as const;

export const pathnames = {
    '/': '/',
    '/proyectos': {
        en: '/projects',
        es: '/proyectos',
        fr: '/projets',
        eus: '/proiektuak'
    },
    '/que-hacemos': {
        en: '/what-we-do',
        es: '/que-hacemos',
        fr: '/que-faisons-nous',
        eus: '/zer-egiten-dugu'
    },
    '/quienes-somos': {
        en: '/who-we-are',
        es: '/quienes-somos',
        fr: '/qui-sommes-nous',
        eus: '/guri-buruz'
    }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
