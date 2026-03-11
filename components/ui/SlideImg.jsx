"use client";

import { useState } from "react";
import styles from "./Carousel.module.css";

function SlideImg({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.imgWrapper}>
      {!loaded && <div className={styles.imgSkeleton}></div>}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${styles.bookImg} ${loaded ? styles.show : styles.hide}`}
      />
    </div>
  );
}

export default SlideImg;