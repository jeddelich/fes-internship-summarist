"use client";

import styles from "./AudioPlayer.module.css";
import { useEffect, useRef, useState } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { RiForward10Fill, RiReplay10Fill } from "react-icons/ri";
import { useAudio } from "@/context/AudioContext";
import { formatTime } from "@/utils/formatTime";

function AudioPlayer({ img, title, author, audio }) {
  const audioRef = useRef(null);
  const { duration, setDuration } = useAudio()
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

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

  function handleSeek(e) {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }

  useEffect(() => {
    function handleKeyDown(e) {
        if (e.code === "ArrowRight") {
            forwards()
        }

        if (e.code === "ArrowLeft") {
            backwards()
        }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
        window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

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
          onTimeUpdate={() => {
            if (!isSeeking) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
          onLoadedMetadata={() => setDuration(audioRef.current.duration)}
          onEnded={() => {setIsPlaying(false); setCurrentTime(0)}}
        ></audio>
        <div className={styles.time}>{formatTime(currentTime)}</div>
        <input
          className={styles.progress}
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onMouseDown={() => setIsSeeking(true)}
          onMouseUp={() => setIsSeeking(false)}
          onTouchStart={() => setIsSeeking(true)}
          onTouchEnd={() => setIsSeeking(false)}
          onChange={handleSeek}
        />
        <div className={styles.time}>{formatTime(duration)}</div>
      </div>
    </div>
  );
}

export default AudioPlayer;
