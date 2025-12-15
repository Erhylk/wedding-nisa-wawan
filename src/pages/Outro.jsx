import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import { BRIDE_NICK_NAME, GROOM_NICK_NAME } from "../constants/data";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Outro() {
  return (
    <InvitoLayout className="relative flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#5f2c3a] via-[#3b1824] to-[#1f0d13]" />

      <motion.img
        src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Butterfly.png"
        className="absolute left-6 top-24 w-16 opacity-30"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Butterfly.png"
        className="absolute right-8 bottom-32 w-20 opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          rotate: [0, -12, 12, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl w-full px-6 text-center flex flex-col items-center gap-10"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.6 } },
        }}
      >
        <motion.div variants={FADE_UP}>
          <p className="text-sm tracking-widest text-neutral-300 mb-3">
            TERIMA KASIH ATAS DOA & KEHADIRANNYA
          </p>
          <h2 className="text-4xl lg:text-5xl font-dm-serif">
            Kami Menantikan Kehadiran
          </h2>
          <p className="mt-3 text-lg text-neutral-300">
            Bapak / Ibu / Saudara(i) sekalian
          </p>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          variants={FADE_UP}
        >
          <div className="absolute w-64 h-64 rounded-full border border-white/10" />
          <p className="text-7xl lg:text-8xl font-dancing tracking-widest">
            {GROOM_NICK_NAME.charAt(0)} & {BRIDE_NICK_NAME.charAt(0)}
          </p>
        </motion.div>

        <motion.div variants={FADE_UP}>
          <p className="text-neutral-300 leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara(i) berkenan hadir serta memberikan doa restu.
          </p>
        </motion.div>

        <motion.div
          variants={FADE_UP}
          className="pt-10 text-xs text-neutral-400"
        >
          Made with ❤️ by{" "}
          <span className="text-neutral-300">Invito Web Team</span>
        </motion.div>
      </motion.div>
    </InvitoLayout>
  );
}
