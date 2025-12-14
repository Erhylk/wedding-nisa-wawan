import { useEffect, useState } from "react";

export function usePreloadAssets(assets = []) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!assets.length) {
      setReady(true);
      return;
    }

    let loaded = 0;

    const done = () => {
      loaded++;
      setProgress(Math.round((loaded / assets.length) * 100));
      if (loaded === assets.length) setReady(true);
    };

    assets.forEach((src) => {
      if (src.endsWith(".mp3")) {
        const audio = new Audio();
        audio.preload = "auto";
        audio.src = src;
        audio.oncanplaythrough = done;
        audio.onerror = done;
      } else {
        const img = new Image();
        img.src = src;
        img.onload = done;
        img.onerror = done;
      }
    });
  }, [assets]);

  return { progress, ready };
}
