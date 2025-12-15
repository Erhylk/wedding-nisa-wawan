import { motion } from "framer-motion";
import Countdown from "../components/CountDown";
import InvitoLayout from "../components/InvitoLayout";

export default function Acara() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <InvitoLayout
      className="bg-pink-600 bg-cover relative flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://wedding-pahmi-azizah.vercel.app/images/bg-wedding.jpg')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-black/20" />
      <motion.div
        className="absolute -right-20 -bottom-24 w-1/2 h-auto animate-sway transform scale-x-[-1]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Flower.png" />
      </motion.div>

      <motion.div
        className="absolute -left-20 -top-24 transform scale-x-[-1] w-1/2 h-auto animate-sway"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png" />
      </motion.div>

      <motion.div
        className="relative z-10 bg-black/40 backdrop-blur-md rounded-3xl shadow-lg lg:p-8 p-6 max-w-3xl w-full lg:mx-4 text-white"
        {...cardAnimation}
      >
        <h2 className="text-3xl font-bold text-pink-100 mb-6 text-center">
          Menuju Acara
        </h2>

        <Countdown />

        {/* Akad Nikah */}
        <div className="my-6">
          <h3 className="text-2xl font-semibold mb-2">Akad Nikah</h3>
          <p className="text-md mb-1">📆 Selasa, 12 Januari 2026</p>
          <p className="text-md mb-1">🕘 Waktu: 09.00 WIB</p>
          <p className="text-md mb-1">📍 Lokasi: Masjid Al-Hikmah</p>
          <p className="text-md mb-2">
            Doa dan sakralitas dalam prosesi akad nikah
          </p>
          <a
            href="https://goo.gl/maps/xxxxxxxxxxx" // ganti dengan link Google Maps
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
          >
            Lihat di Google Maps
          </a>
        </div>

        {/* Resepsi */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Resepsi / Jamuan</h3>
          <p className="text-md mb-1">📆 Selasa, 12 Januari 2026</p>
          <p className="text-md mb-1">🕚 Waktu: 11.00 – 14.00 WIB</p>
          <p className="text-md mb-1">📍 Lokasi: Gedung Serba Guna</p>
          <p className="text-md mb-2">
            Acara santai, ramah tamah, hiburan dan jamuan bagi para tamu
          </p>
          <a
            href="https://goo.gl/maps/yyyyyyyyyyy" // ganti dengan link Google Maps
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition"
          >
            Lihat di Google Maps
          </a>
        </div>
      </motion.div>
    </InvitoLayout>
  );
}
