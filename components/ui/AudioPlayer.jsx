import styles from "./AudioPlayer.module.css";

function AudioPlayer({ img, title, author }) {
  return (
    <div className={styles.audioPlayer}>
      <div className={styles.trackInfo}>
        <figure className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="" />
        </figure>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.author}>{author}</div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
