"use client"
import styles from "./page.module.css"
import { useTranslations } from 'next-intl';

export default function QueHacemosPage() {
    const t = useTranslations('que_hacemos')

    return (
        <main className={styles.main}>
            <h1>{t('title')}</h1>
            <ul className={styles.list}>
                <li className={styles.listElement}>{t("first_line")}</li>
                <li className={styles.listElement}>{t("second_line")}</li>
                <li className={styles.listElement}>{t("third_line")}</li>
                <li className={styles.listElement}>{t("fourth_line")}</li>
                <li className={styles.listElement}>{t("fifth_line")}</li>
                <li className={styles.listElement}>{t("sixth_line")}</li>
                <li className={styles.listElement}>{t("seventh_line")}</li>
                <li className={styles.listElement}>{t("eighth_line")}</li>
                <li className={styles.listElement}>{t("ninth_line")}</li>
                <li className={styles.listElement}>{t("tenth_line")}</li>
            </ul>
            <section style={{display: 'flex', marginTop: '20px'}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.2329753105782!2d-2.934247423844598!3d43.24653887112432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e2edc77e621%3A0x906b9cefdc463d72!2sSan%20Adrian%20Kalea%2C%2025%2C%2048003%20Bilbo%2C%20Bizkaia!5e0!3m2!1sen!2ses!4v1697671149873!5m2!1sen!2ses"
                    width="400" height="300"
                    style={{border: 0}} loading="lazy"></iframe>
                <section className={styles.address}>
                    <p>{t('find_us')}</p>
                    <address>{t('street')}</address>
                    <p>{t('phone')}:<em>+34 946 523 536</em></p>
                    <p>{t('cellphone')}: <em>+3 692 67 37 17</em></p>
                    <a href="mailto: fedaibinmigrabizkaia@gmail.com">fedaibinmigrabizkaia@gmail.com</a>
                </section>
            </section>
        </main>
    )
}