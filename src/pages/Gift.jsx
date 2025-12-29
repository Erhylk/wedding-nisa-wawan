import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";

export default function WeddingGift() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  return (
    <InvitoLayout className="bg-linear-to-b from-pink-200 via-neutral-300 to-pink-200 bg-center flex items-center justify-center overflow-hidden bg-cover relative">
      {/* Dekor */}
      <motion.div
        className="absolute -right-20 top-4 w-1/2 z-30 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png" />
      </motion.div>

      <motion.div
        className="absolute -left-20 top-1/2 w-2/5 translate-y-24 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Flower.png" />
      </motion.div>

      {/* Card */}
      <motion.div
        className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg lg:p-10 p-6 max-w-3xl w-full text-center flex flex-col gap-6"
        variants={cardVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-pink-700 font-dm-serif"
          variants={textVariants}
          custom={0.1}
        >
          Wedding Gift
        </motion.h2>

        <motion.p
          className="text-lg lg:text-xl text-neutral-600"
          variants={textVariants}
          custom={0.3}
        >
          Kehadiran dan doa restu Anda adalah kado terindah bagi kami. Namun,
          apabila ingin memberi tanda kasih, silakan melalui transfer ke
          rekening berikut:
        </motion.p>

        <motion.div
          className="bg-neutral-200 rounded-xl p-4 mt-4 text-yellow-900 font-semibold text-lg"
          variants={textVariants}
          custom={0.5}
        >
          <p>Bank: BCA</p>
          <p>Nomor Rekening: 1234567890</p>
          <p>Atas Nama: Barsan & Azizah</p>
        </motion.div>

        {/* ✨ Sparkle Button */}
        <motion.div
          className="flex justify-center mt-2"
          variants={textVariants}
          custom={0.6}
        >
          <motion.button
            className="relative overflow-hidden px-6 py-2 rounded-full bg-pink-500 text-white font-medium"
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
            <span className="relative z-10">Salin Nomor Rekening</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-2 text-sm text-pink-900"
          variants={textVariants}
          custom={0.8}
        >
          <p>❤️ Terima kasih atas doa dan perhatiannya</p>
        </motion.div>
      </motion.div>
    </InvitoLayout>
  );
}
