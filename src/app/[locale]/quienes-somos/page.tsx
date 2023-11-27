import { lazy, Suspense } from "react";
import styles from "./styles.module.css"
import { quienesSomosImages } from "../../constants"
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    params: { locale: string };
}

// import SwipeableTextMobileStepper from "@/components/Carrousel"

//const SwipeableTextMobileStepper = lazy(() => import("@/components/Carrousel"))

export default function QuienesSomosPage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale)

    const t = useTranslations('quienes_somos')

    return (
        <main className={styles.main}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}>
                {/* <Suspense fallback={<p>Loading...</p>}> */}
                    {/* <SwipeableTextMobileStepper images={quienesSomosImages} /> */}
                {/* </Suspense> */}
            </div>
            <article className={styles.article}>
                {t('article')}
            </article>
        </main>
    )
}