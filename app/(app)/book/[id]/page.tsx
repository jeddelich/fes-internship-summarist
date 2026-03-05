import styles from "./page.module.css";

export default async function BookPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className={styles.bookPage}>
      <div className={styles.row}>
        <div className={styles.bookInfo}>
          <h1 className={styles.title}></h1>
          <h3 className={styles.author}></h3>
          <h2 className={styles.subtitle}></h2>
          <hr />
          <div className={styles.featuredInfo}>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>{/* icon */}</figure>
              <div className={styles.featureText}></div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>{/* icon */}</figure>
              <div className={styles.featureText}></div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>{/* icon */}</figure>
              <div className={styles.featureText}></div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.featureIconWrapper}>
                {/* icon */}
              </figure>
              <div className={styles.featureText}></div>
            </div>
          </div>
          <hr />
          <div className={styles.buttons}>
            <button className={styles.button}>
              <figure className={styles.buttonIconWrapper}>{/* icon */}</figure>
              <div className={styles.buttonText}></div>
            </button>
            <button className={styles.button}>
              <figure className={styles.buttonIconWrapper}>{/* icon */}</figure>
              <div className={styles.buttonText}></div>
            </button>
          </div>
          <div className={styles.bookmark}>
            <figure className={styles.bookmarkIconWrapper}>{/* icon */}</figure>
            <div className={styles.bookmarkText}>Add Title To My Library</div>
          </div>
          <div className={styles.description
          }>
            <div className={styles.header}>What's it about?</div>
            <div className={styles.tags}>
                <div className={styles.tag}></div>
                <div className={styles.tag}></div>
            </div>
            <div className={styles.para}></div>
            <div className={styles.header}>About the author</div>
            <div className={styles.para}></div>
          </div>
        </div>
        <figure className={styles.bookWrapper}>
          <img className={styles.book} src="" alt="" />
        </figure>
      </div>
    </div>
  );
}
