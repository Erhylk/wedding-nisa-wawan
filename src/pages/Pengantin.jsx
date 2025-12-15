import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import {
  BRIDE_FATHER_NAME,
  BRIDE_FULL_NAME,
  BRIDE_MOTHER_NAME,
  GROOM_FATHER_NAME,
  GROOM_FULL_NAME,
  GROOM_MOTHER_NAME,
  GROOM_PHOTO,
  BRIDE_PHOTO,
} from "../constants/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const photoFloat = {
  animate: {
    y: [0, -4, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const nameReveal = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Pengantin() {
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
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg
                   lg:p-8 p-5 max-w-3xl mx-auto text-white flex flex-col gap-5 lg:gap-8 mt-16"
      >
        <motion.h2
          variants={itemUp}
          className="text-4xl font-semibold text-pink-100 font-dancing text-center"
        >
          Kami yang Berbahagia
        </motion.h2>

        {/* divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-white/40 w-24 mx-auto"
        />

        {/* Pengantin Pria */}
        <motion.div
          variants={itemUp}
          className="flex items-center gap-4 lg:gap-6"
        >
          <motion.img
            variants={photoFloat}
            animate="animate"
            src={GROOM_PHOTO}
            alt="Pengantin Pria"
            className="w-32 h-32 rounded-full object-cover border-2 border-white"
          />

          <div className="text-left">
            <motion.p
              variants={nameReveal}
              className="text-xl lg:text-3xl font-semibold tracking-wide"
            >
              {GROOM_FULL_NAME}
            </motion.p>
            <p className="text-xs lg:text-md pr-4">
              Putra dari Bapak {GROOM_FATHER_NAME} & Ibu {GROOM_MOTHER_NAME}
            </p>
          </div>
        </motion.div>

        {/* Pengantin Wanita */}
        <motion.div
          variants={itemUp}
          className="flex flex-row-reverse items-center gap-4 lg:gap-6"
        >
          <motion.img
            variants={photoFloat}
            animate="animate"
            src={BRIDE_PHOTO}
            alt="Pengantin Wanita"
            className="w-32 h-32 rounded-full object-cover border-2 border-white"
          />

          <div className="text-right">
            <motion.p
              variants={nameReveal}
              className="text-xl lg:text-3xl font-semibold tracking-wide"
            >
              {BRIDE_FULL_NAME}
            </motion.p>
            <p className="text-xs lg:text-md pl-4">
              Putri dari Bapak {BRIDE_FATHER_NAME} & Ibu {BRIDE_MOTHER_NAME}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </InvitoLayout>
  );
}
