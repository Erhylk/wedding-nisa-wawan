import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";

export default function Lokasi() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const heartbeat = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <InvitoLayout
      className="bg-pink-500 bg-cover relative flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Background%20Cover.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="relative z-10 bg-black/40 backdrop-blur-md rounded-3xl shadow-lg p-6 max-w-3xl w-full text-white"
        {...cardAnimation}
      >
        {/* ❤️ Judul Heartbeat */}
        <motion.h2
          className="text-3xl font-bold text-pink-100 mb-6 text-center"
        >
          Lokasi Resepsi
        </motion.h2>

        {/* 🌫️ Maps Fade In */}
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <div className="w-full h-64 rounded-2xl overflow-hidden mb-4">
            <iframe
              title="Lokasi Acara"
              src="https://www.google.com/maps?q=-5.336264,120.218866&z=17&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center">
            {/* ✨ Sparkle Button */}
            <motion.a
              href="https://www.google.com/maps?q=-5.336264,120.218866"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2 bg-pink-400 text-white rounded-full font-medium"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                variants={{
                  rest: { x: "-100%" },
                  hover: {
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  },
                }}
              />
              <span className="relative z-10">
                Buka di Google Maps
              </span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </InvitoLayout>
  );
}
