import Image from 'next/Image'
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen nosotros" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam tempora possimus beatae voluptas veritatis quisquam nostrum maiores ad, fuga at in ipsum aliquam nobis officia distinctio atque inventore explicabo. Ullam ipsam tempora possimus beatae voluptas veritatis quisquam nostrum maiores ad, fuga at in ipsum aliquam nobis officia distinctio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam tempora possimus beatae voluptas veritatis quisquam nostrum maiores ad, fuga at in ipsum aliquam nobis officia distinctio atque inventore explicabo. Ullam ipsam tempora possimus beatae voluptas veritatis quisquam nostrum maiores ad, fuga at in ipsum aliquam nobis officia distinctio.</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default Nosotros