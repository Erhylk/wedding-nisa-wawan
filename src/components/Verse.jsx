import { motion } from "framer-motion";
import { BRIDE_NICK_NAME, GROOM_NICK_NAME } from "../constants/data";

export default function Verse({ animated = true }) {
  const TextWrapper = animated ? motion.div : "div";
  const ParagraphWrapper = animated ? motion.p : "p";

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const quoteAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.5, ease: "easeOut" },
  };

  return (
    <div
      className="relative w-full text-white bg-pink-200 hidden lg:block py-16 px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wedding-pahmi-azizah.vercel.app/_next/image?url=%2Fimages%2Fsquare.jpg&w=1920&q=75')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-black/50" />

      <TextWrapper
        className="text-pink-400 pb-16 font-dancing relative z-30"
        {...(animated ? textAnimation : {})}
      >
        <p className="text-6xl font-bold">
          {GROOM_NICK_NAME}
          <span className="text-pink-200 text-5xl px-2"> &amp; </span>
          {BRIDE_NICK_NAME}
        </p>
        <p className="text-4xl text-pink-100">are getting married</p>
      </TextWrapper>

      <ParagraphWrapper
        className="italic max-w-4xl z-30 relative"
        {...(animated ? quoteAnimation : {})}
      >
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang <span className="block pt-4"> --- (QS. Ar-Rum :21 )</span>
      </ParagraphWrapper>
    </div>
  );
}
