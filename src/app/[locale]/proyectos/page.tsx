import TabPanelComponent from "@/components/tabpanel/TabPanel";
import styles from "./styles.module.css"
import { useTranslations, NextIntlClientProvider, useMessages, useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    params: { locale: string };
}

export default function Proyectos({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale)
    
    const t = useTranslations('proyectos')

    const translations = {
        titleProject: t('titleProject'),
        articleProject: t('articleProject'),
        entity: t('entity'),
        country: t('country'),
    }

    return (
        <main className={styles.main}>
            <h1>{t('pageTitle')}</h1>
            <p>{t('subtitle')}</p>
            {/* <div className={styles.proyectos}>
                <Image alt="could picture"
                    src="/assets/pexels-photo-1449638-edited.webp"
                    width={500} height={500} />
            </div> */}
            <TabPanelComponent translations={translations} />
        </main>
    )
}