import styles from "./page.module.css"

function page() {
  return (
    <div className={styles.page}>
        <section className={styles.landing}>
            <h1 className={styles.h1}>Get unlimited access to many amazing books to read</h1>
            <h2 className={styles.h2}>Turn ordinary moments into amazing learning opportunities</h2>
            <figure className={styles.imgWrapper}>
                <img src="/images/pricing-welcome.svg" className={styles.img} alt="" />
            </figure>
        </section>
    </div>
  )
}

export default page