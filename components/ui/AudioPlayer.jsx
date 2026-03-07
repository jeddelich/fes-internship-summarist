"use client";

import styles from "./AudioPlayer.module.css";
import { useRef, useState } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";

function AudioPlayer({ img, title, author, audio }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleButton() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  function backwards() {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime -= 10;
  }

  function forwards() {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime += 10;
  }

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
      <div className={styles.audioWrapper}>
        <div className={styles.controls}>
          <button className={styles.buttonSmall} onClick={backwards}>
            <RiReplay10Fill className={styles.icon} />
          </button>
          <button className={styles.buttonBig} onClick={toggleButton}>
            {isPlaying ? (
              <FaCirclePause className={styles.icon} />
            ) : (
              <FaCirclePlay className={styles.icon} />
            )}
          </button>
          <button className={styles.buttonSmall} onClick={forwards}>
            <RiForward10Fill className={styles.icon} />
          </button>
        </div>
        <audio className={styles.audioBar} src={audio} ref={audioRef}></audio>
      </div>
    </div>
  );
}

export default AudioPlayer;
