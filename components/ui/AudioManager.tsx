"use client";

import { useAudio } from "@/context/AudioContext";
import AudioMetadataLoader from "./AudioMetaDataLoader";

export default function AudioManager() {
  const { audioUrl } = useAudio();

  if (!audioUrl) return null;

  return <AudioMetadataLoader audioUrl={audioUrl} />;
}