import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import {
  BRIDE_NICK_NAME,
  GROOM_NICK_NAME,
  TEXT_INTRO,
} from "../constants/data";

export default function Intro() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <InvitoLayout
      className="bg-pink-200 bg-cover relative flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://wedding-pahmi-azizah.vercel.app/_next/image?url=%2Fimages%2Fbg-top.jpg&w=1920&q=75')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-opacity-20 bg-black/30" />

      <motion.div
        className="absolute -right-20 -top-20 w-1/2 h-auto animate-sway"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png" />
      </motion.div>

      <motion.div
        className="absolute -left-20 -bottom-20 w-1/2 h-auto animate-sway"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Flower.png" />
      </motion.div>

      <motion.div
        className="relative z-20 bg-stone-800/30 backdrop-blur-sm rounded-3xl shadow-lg p-8 max-w-md text-center text-white"
        {...cardAnimation}
      >
        <img
          className="h-14 w-auto mx-auto"
          src="https://wedding-pahmi-azizah.vercel.app/_next/image?url=%2Fimages%2Fbismillah.svg&w=1920&q=75"
          alt="bismillah"
        />

        <h2 className="lg:text-2xl text-xl font-medium text-pink-100 mb-4">
          Assalamu'alaikum wr. wb
        </h2>

        <p className="lg:text-lg">{TEXT_INTRO}</p>

        <p className="mt-6 text-pink-200 italic">
          {GROOM_NICK_NAME} &amp; {BRIDE_NICK_NAME}
        </p>
      </motion.div>
    </InvitoLayout>
  );
}
