"use client";

import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

export default function AudioMetadataLoader({ audioUrl }: { audioUrl: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setDuration } = useAudio();

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
  }, [audioUrl, setDuration]);

  return <audio ref={audioRef} src={audioUrl} preload="metadata" hidden />;
}