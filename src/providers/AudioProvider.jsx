import { useEffect, useRef, useCallback } from "react";
import { AudioContext } from "./AudioContext";
import { useInvitationStore } from "../store/invitationStore";

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);

  const opened = useInvitationStore((s) => s.opened);
  const musicEnabled = useInvitationStore((s) => s.musicEnabled);

  useEffect(() => {
    const audio = new Audio("/audio/bg-music.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const stopFade = useCallback(() => {
    if (fadeRef.current) {
      cancelAnimationFrame(fadeRef.current);
      fadeRef.current = null;
    }
  }, []);

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    stopFade();
    audio.play().catch(() => {});

    const step = () => {
      audio.volume = Math.min(audio.volume + 0.04, 1);
      if (audio.volume < 1) {
        fadeRef.current = requestAnimationFrame(step);
      }
    };
    step();
  }, [stopFade]);

  const fadeOut = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    stopFade();

    const step = () => {
      audio.volume = Math.max(audio.volume - 0.04, 0);
      if (audio.volume > 0) {
        fadeRef.current = requestAnimationFrame(step);
      } else {
        audio.pause();
      }
    };
    step();
  }, [stopFade]);

  useEffect(() => {
    if (!opened) return;
    musicEnabled ? fadeIn() : fadeOut();
  }, [opened, musicEnabled, fadeIn, fadeOut]);

  return (
    <AudioContext.Provider
      value={{
        fadeIn,
        fadeOut,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
