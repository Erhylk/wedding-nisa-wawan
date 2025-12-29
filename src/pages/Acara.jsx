import { motion } from "framer-motion";
import Countdown from "../components/CountDown";
import InvitoLayout from "../components/InvitoLayout";
import { EVENTS, WEDDING_DATE } from "../constants/data";
import { formatWeddingDate } from "../utils/date";
import { title } from "framer-motion/client";

export default function Acara() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // easeOutExpo feel
      },
    },
  };

  return (
    <InvitoLayout
      className="bg-pink-600 bg-cover bg-center relative flex justify-center items-center"
      style={{
        backgroundImage:
        "url('/images/bg-acara.jpeg')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-black/20" />
      <motion.div
        className="absolute -right-20 -bottom-24 w-1/2 h-auto animate-sway transform scale-x-[-1] z-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Flower.png" />
      </motion.div>

      <motion.div
        className="absolute -left-20 -top-24 transform scale-x-[-1] w-1/2 h-auto animate-sway z-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png" />
      </motion.div>

      <motion.div
        className="relative bg-black/40 backdrop-blur-md rounded-3xl shadow-lg lg:p-8 p-6 max-w-3xl w-full lg:mx-4 text-white"
        {...cardAnimation}
      >
        <h2 className="text-3xl font-bold text-pink-100 mb-6 text-center">
          Menuju Acara
        </h2>

        <p className="text-center text-2xl my-4 text-white/90">
          📆 {formatWeddingDate(WEDDING_DATE)}
        </p>

        <Countdown />

        <motion.div
          className="flex flex-col gap-5 mt-6 mb-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {EVENTS.map((ev, i) => (
            <motion.section key={i} variants={item} className="relative">
              <h3 className="text-2xl font-semibold mb-3">{ev.title}</h3>

              <div className="space-y-1 lg:text-lg text-neutral-100">
                <p>🕘 {ev.time}</p>
                <p>📍 {ev.location}</p>
                <p>{ev.description}</p>
              </div>

             {ev.title === "Resepsi" && (
                <div className="flex justify-center">
                  <motion.a
                    href={ev.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
                  >
                    Lihat Lokasi
                  </motion.a>
                </div>
              )}

            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </InvitoLayout>
  );
}
