import styles from "./footer.module.css"
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('footer')

    return (
        <footer className={styles.footer}>
            <p style={{fontSize: 'calc(15px + 0.390625vw)', textTransform: 'uppercase'}}>-{t('message')}-</p>
        </footer>
    )
}
