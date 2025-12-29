import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import { BRIDE_NICK_NAME, GROOM_NICK_NAME } from "../constants/data";

export default function Salam() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const textFade = (delay = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
  });

  return (
    <InvitoLayout
      className="relative flex flex-col justify-end items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dredlmtfm/image/upload/v1765717873/Salam_ir7dt9.jpg')",
      }}
    >
      {/* Shape + Bunga */}
      <motion.div
        className="relative w-full max-w-3xl bg-black/10 backdrop-blur-md rounded-3xl p-6 mx-4 mb-2 text-center text-white"
        {...cardAnimation}
      >
        {/* Bunga kanan */}
        <motion.div
          className="absolute -right-17 top-0 w-40 opacity-30 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png"
            alt=""
          />
        </motion.div>

        {/* Bunga kiri */}
        <motion.div
          className="absolute -left-20 bottom-0 w-36 opacity-30 pointer-events-none animate-sway"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Flower.png"
            alt=""
          />
        </motion.div>

        {/* Teks fade in */}
        <motion.p
          className="text-base mb-1 font-light"
          {...textFade(0.3)}
        >
          Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir dalam hari bahagia kami. Terima kasih atas segala
          ucapan, doa, dan perhatian yang diberikan. Sampai jumpa di hari
          bahagia kami.
        </motion.p>

        <motion.p
          className="text-4xl font-dancing font-bold"
          {...textFade(0.6)}
        >
          {BRIDE_NICK_NAME}
          <span className="text-pink-200 text-3xl px-2"> &amp; </span>
          {GROOM_NICK_NAME}
        </motion.p>

        <motion.p
          className="text-sm"
          {...textFade(0.9)}
        >
          beserta keluarga
        </motion.p>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mb-4 text-white text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        With Love ❤️ Eril
      </motion.div>
    </InvitoLayout>
  );
}
