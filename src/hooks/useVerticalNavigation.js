import { useRef } from "react";
import { useSwipeable } from "react-swipeable";

export function useVerticalNavigation({ onNext, onPrev, canNext, canPrev }) {
  const locked = useRef(false);
  const wheelDelta = useRef(0);
  const lastDir = useRef(0);

  const lock = () => {
    locked.current = true;
  };

  const unlock = () => {
    locked.current = false;
  };

  const trigger = (dir) => {
    if (locked.current) return;

    if (dir === "next") {
      if (!canNext()) return;
      lock();
      onNext();
    } else {
      if (!canPrev()) return;
      lock();
      onPrev();
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => trigger("next"),
    onSwipedDown: () => trigger("prev"),
    trackTouch: true,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const onWheel = (e) => {
    if (locked.current) return;

    const dir = Math.sign(e.deltaY);
    if (dir !== lastDir.current) {
      wheelDelta.current = 0;
      lastDir.current = dir;
    }

    wheelDelta.current += e.deltaY;
    const threshold = e.deltaMode === 0 ? 80 : 120;
    if (Math.abs(wheelDelta.current) < threshold) return;

    wheelDelta.current > 0 ? trigger("next") : trigger("prev");
    wheelDelta.current = 0;
  };

  return { swipeHandlers, onWheel, unlock };
}
