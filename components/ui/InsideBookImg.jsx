import { useState } from "react";
import styles from "./InsideBookImg.module.css"

function InsideBookImg({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.bookWrapper}>
      {!loaded && <div className={styles.bookSkeleton}></div>}
      <img
        src={src}
        className={styles.book}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? "block" : "none" }}
        alt=""
      />
    </div>
  );
}

export default InsideBookImg;
