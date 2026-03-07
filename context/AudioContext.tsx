import { createContext, useContext, useState } from "react";

type AudioContextType = {
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
audioUrl: string | null;
  setAudioUrl: React.Dispatch<React.SetStateAction<string | null>>;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  return (
    <AudioContext.Provider value={{ duration, setDuration, audioUrl, setAudioUrl }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
}