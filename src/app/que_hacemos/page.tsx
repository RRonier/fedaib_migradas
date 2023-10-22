import styles from "./page.module.css"

export default function QueHacemosPage() {
    return (
        <main className={styles.main}>
            <h1>QUE HACEMOS</h1>
            <ul className={styles.list}>
                <li className={styles.listElement}>Desarrollar propuestas de integración socioeconómica, cultural y política coordinando acciones en otras organizaciones que reivindican los derechos, deberes y obligaciones de las personas inmigrantes.</li>
                <li className={styles.listElement}>Promover el respeto de los derechos de las personas inmigrantes según los principios de los derechos humanos contemplados en los tratados internacionales, de la Unión Europea y del Estado Español.</li>
                <li className={styles.listElement}>Promover los deberes de las personas inmigrantes en la sociedad con la que conviven.</li>
                <li className={styles.listElement}>Potenciar a través de las asociaciones de inmigrantes el construir un espacio organizativo e institucional propio desde lo político, social, económico y cultural que articules y respete la organicidad de los hombres y mujeres inmigrantes.</li>
                <li className={styles.listElement}>Potenciar el respeto cultural y religioso de los hombres y mujeres inmigrantes que habitan y conviven en la comunidad vizcaína.</li>
                <li className={styles.listElement}>Fortalecer organizativa, institucional y técnicamente a las organizaciones de inmigrantes de Bizkaia.</li>
                <li className={styles.listElement}>Sensibilizar a la ciudadanía en general en relación a las potencialidades de la inmigración.</li>
                <li className={styles.listElement}>Hacer el seguimiento a las políticas, planes y programas de inmigración a nivel del estado español, Gobierno Vasco, Diputaciones (Alava, Guipúzcoa y Bizkaia) y Ayuntamientos de Bizkaia.</li>
                <li className={styles.listElement}>Aportar estrategias de incidencia política con otras iniciativas de organizaciones similares a nivel nacional, estatal e internacional.</li>
                <li className={styles.listElement}>Visibilizar a la mujer inmigrante como sujeto de pleno derecho.</li>
            </ul>
            <section style={{display: 'flex', marginTop: '20px'}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.2329753105782!2d-2.934247423844598!3d43.24653887112432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e2edc77e621%3A0x906b9cefdc463d72!2sSan%20Adrian%20Kalea%2C%2025%2C%2048003%20Bilbo%2C%20Bizkaia!5e0!3m2!1sen!2ses!4v1697671149873!5m2!1sen!2ses"
                    width="400" height="300"
                    style={{border: 0}} loading="lazy"></iframe>
                <section className={styles.address}>
                    <p>Donde encontrarnos?</p>
                    <address>Calle San Adrian 25 48003</address>
                    <p>Teléfono: <em>+34 946 523 536</em></p>
                    <p>Móvil: <em>+3 692 67 37 17</em></p>
                    <a href="mailto: fedaibinmigrabizkaia@gmail.com">fedaibinmigrabizkaia@gmail.com</a>
                </section>
            </section>
        </main>
    )
}