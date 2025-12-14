import { useEffect, useState } from "react";

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(null); // null berarti belum tampil

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(targetDate) - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft(null); // hilang ketika waktunya habis
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
