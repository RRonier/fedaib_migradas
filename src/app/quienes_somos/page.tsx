import SwipeableTextMobileStepper from "@/app/components/Carrousel"
import styles from "./styles.module.css"

export default function QuienesSomosPage() {
    return (
        <main className={styles.main}>
            <h2 className={styles.title}>Quienes somos</h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
            }}>
                <SwipeableTextMobileStepper />
            </div>
            <article className={styles.article}>
                Somos una organización que agrupa a asociaciones del colectivo inmigrante y, 
                fundamenta su accionar en  procesos de incidencia política a favor de los derechos 
                de todas las personas, haciendo énfasis en las personas inmigrantes, desde un enfoque 
                de deberes y derechos. Así mismo, el potenciar un espacio organizativo e institucional 
                propio desde lo político, social, económico y cultural que articule y represente tanto 
                ante las instituciones públicas y privadas como organizaciones de la sociedad civil 
                bizkaina y vasca, desde el respecto, la autonomía y la asociatividad de hombres y mujeres 
                del colectivo inmigrante y con ello tener influencia en el Territorio Histórico de Bizkaia.
            </article>
        </main>
    )
}