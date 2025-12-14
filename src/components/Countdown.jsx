import { WEDDING_DATE } from "../constants/data";
import { useCountdown } from "../hooks/useCountdown";

export default function Countdown() {
  const timeLeft = useCountdown(WEDDING_DATE);

  if (!timeLeft) return null;

  return (
    <div className="grid grid-cols-4 gap-3 justify-center text-center items-center text-xl font-semibold">
      <div className="border rounded-md py-2 px-2">
        <p className="text-4xl">{timeLeft.days}</p>
        <span className="text-sm">Hari</span>
      </div>
      <div className="border rounded-md py-2 px-2">
        <p className="text-4xl">{timeLeft.hours}</p>
        <span className="text-sm">Jam</span>
      </div>
      <div className="border rounded-md py-2 px-2">
        <p className="text-4xl">{timeLeft.minutes}</p>
        <span className="text-sm">Menit</span>
      </div>
      <div className="border rounded-md py-2 px-2">
        <p className="text-4xl">{timeLeft.seconds}</p>
        <span className="text-sm">Detik</span>
      </div>
    </div>
  );
}
