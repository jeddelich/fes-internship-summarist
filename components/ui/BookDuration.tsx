"use client";

import { useEffect, useRef, useState } from "react";
import { formatTime } from "@/utils/formatTime";

export default function BookDuration({ audioUrl }: { audioUrl: undefined | string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [audioUrl]);

  return (
    <>
      <audio ref={audioRef} src={audioUrl} preload="metadata" hidden />
      <span>{duration ? formatTime(duration) : "0:00"}</span>
    </>
  );
}