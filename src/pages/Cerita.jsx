import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import InvitoLayout from "../components/InvitoLayout";
import { STORIES } from "../constants/data";

export default function Cerita() {
  const cardRefs = useRef([]);
  const [lineHeights, setLineHeights] = useState([]);

  useLayoutEffect(() => {
    const heights = cardRefs.current.map((ref) =>
      ref ? ref.offsetHeight + 16 /* mb-5 padding */ : 0
    );
    setLineHeights(heights);
  }, []);

  const containerVariants = {
    show: { transition: { staggerChildren: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <InvitoLayout
      className="bg-linear-to-b from-purple-200 via-pink-200 to-pink-100 flex flex-col justify-center items-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Background%20Cover.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 max-w-3xl w-full px-4 py-8 flex flex-col gap-16"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-pink-100 font-dm-serif text-center">
          💖 Kisah Cinta Kami
        </h2>

        <div className="relative flex flex-col items-center">
          {STORIES.map((ev, idx) => (
            <motion.div
              key={idx}
              className="relative flex w-full items-start"
              variants={itemVariants}
            >
              <div className="relative flex flex-col items-center">
                {/* Bullet */}
                <motion.div
                  className="w-5 h-5 bg-pink-600 rounded-full border-2 border-white z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Garis ke bawah */}
                {idx < STORIES.length - 1 && (
                  <motion.div
                    className="w-1 bg-pink-400"
                    initial={{ height: 0 }}
                    animate={{ height: lineHeights[idx] || 80 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </div>

              {/* Card info */}
              <motion.div
                ref={(el) => (cardRefs.current[idx] = el)}
                className="bg-white/50 backdrop-blur-md p-4 rounded-2xl shadow-md flex-1 ml-6 mb-5 text-left text-pink-800"
              >
                <p className="font-semibold text-lg">{ev.title}</p>
                <p className="text-sm text-neutral-800">{ev.date}</p>
                <p className="mt-1 text-neutral-700 text-sm">
                  {ev.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </InvitoLayout>
  );
}
