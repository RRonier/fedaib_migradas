"use client";
import styles from "./styles.module.css"
import { quienesSomosImages } from "../../constants"
import { useTranslations } from 'next-intl';
import SwipeableTextMobileStepper from "@/app/components/Carrousel"

export default function QuienesSomosPage() {
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
                <SwipeableTextMobileStepper images={quienesSomosImages} />
            </div>
            <article className={styles.article}>
                {t('article')}
            </article>
        </main>
    )
}