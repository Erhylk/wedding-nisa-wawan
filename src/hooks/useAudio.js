import { useRef, useCallback, useEffect } from "react";

export function useAudio(src = "/audio/bg-music.mp3") {
  const audioRef = useRef(null);

  // init sekali
  const init = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
    }
    return audioRef.current;
  }, [src]);

  const play = useCallback(() => {
    const audio = init();
    audio.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }, [init]);

  const pause = useCallback(() => audioRef.current?.pause(), []);
  const toggle = useCallback(() => {
    if (audioRef.current?.paused) play();
    else pause();
  }, [play, pause]);

  // cleanup
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  return { audioRef, play, pause, toggle };
}
