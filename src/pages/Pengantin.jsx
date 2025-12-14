import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import {
  BRIDE_FATHER_NAME,
  BRIDE_FULL_NAME,
  BRIDE_MOTHER_NAME,
  GROOM_FATHER_NAME,
  GROOM_FULL_NAME,
  GROOM_MOTHER_NAME,
} from "../constants/data";

export default function Pengantin() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <InvitoLayout
      className="bg-neutral-200 bg-cover relative flex items-center"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Background%20Cover.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="absolute -right-20 top-4 w-1/2 h-auto z-20 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png" />
      </motion.div>

      <motion.div
        className="absolute left top-4 w-24 h-auto z-20 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          initial={{ x: -50, y: 0, rotate: 0 }}
          animate={{
            x: [0, 100, 200, 150, 250],
            y: [0, -30, 20, -10, 0],
            rotate: [0, 20, -20, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Butterfly.png"
        />
      </motion.div>

      <motion.div
        className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg lg:p-8 p-5 max-w-3xl mx-auto text-center text-white flex flex-col gap-8 mt-16"
        {...cardAnimation}
      >
        <h2 className="text-4xl font-bold text-pink-100 mb-2 font-dancing">
          Kami yang Berbahagia
        </h2>

        {/* Pengantin Pria */}
        <div className="flex-1 flex flex-row items-center gap-4 lg:gap-6">
          <img
            src="https://wedding-pahmi-azizah.vercel.app/_next/image?url=%2Fimages%2Fgrunge-left.png&w=1920&q=75"
            alt="Pengantin Pria"
            className="w-32 h-32 rounded-full object-cover border-2 border-white"
          />
          <div className="text-left text-white">
            <p className="lg:text-2xl text-xl font-bold">{GROOM_FULL_NAME}</p>
            <p className="lg:text-md text-sm pr-4">
              Putra dari Bapak {GROOM_FATHER_NAME} &amp; Ibu {GROOM_MOTHER_NAME}
            </p>
          </div>
        </div>

        {/* Pengantin Perempuan: teks kiri, foto kanan */}
        <div className="flex-1 flex flex-row-reverse items-center gap-4 lg:gap-6">
          <img
            src="https://wedding-pahmi-azizah.vercel.app/_next/image?url=%2Fimages%2Fgrunge-right.png&w=1920&q=75"
            alt="Pengantin Wanita"
            className="w-32 h-32 rounded-full object-cover border-2 border-white"
          />
          <div className="text-right text-white">
            <p className="lg:text-2xl text-xl font-bold">{BRIDE_FULL_NAME}</p>
            <p className="lg:text-md text-sm pl-4">
              Putri dari Bapak {BRIDE_FATHER_NAME} &amp; Ibu {BRIDE_MOTHER_NAME}
            </p>
          </div>
        </div>
      </motion.div>
    </InvitoLayout>
  );
}
