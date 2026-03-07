"use client";

import styles from "./AudioPlayer.module.css";
import { useRef, useState } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";

function AudioPlayer({ img, title, author, audio }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? (duration - currentTime) * 100 : 0;

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
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime -= 10;
  }

  function forwards() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime += 10;
  }


  function formatTime(time) {
    if (!time) return "0:00"
    
    const minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60).toString().padStart(2, "0")

    return `${minutes}:${seconds}`
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
      <div className={styles.audioWrapper}>
        <audio
          className={styles.audioBar}
          src={audio}
          ref={audioRef}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        ></audio>
        <div className={styles.time}>{formatTime(currentTime)}</div>
        <input
          className={styles.progress}
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
              const audio = audioRef.current;
              if (!audio) return;
              audio.currentTime = e.target.value;
            }}
        />
        <div className={styles.time}>{formatTime(duration)}</div>
      </div>
    </div>
  );
}

export default AudioPlayer;
