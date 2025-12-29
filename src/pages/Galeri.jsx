import { useState, useRef } from "react";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import { GALLERY_PHOTOS } from "../constants/data";

export default function Galeri() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [x, setX] = useState(0);
  const sliderRef = useRef(null);

  // seamless infinite scroll (tanpa jeda)
  useAnimationFrame((_, delta) => {
    const speed = 0.07; // kecepatan
    setX((prev) => {
      if (!sliderRef.current) return prev;

      const width = sliderRef.current.scrollWidth / 2;
      const next = prev - delta * speed;

      return next <= -width ? 0 : next;
    });
  });

  return (
    <InvitoLayout
      className="relative flex flex-col items-center py-20 px-4 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Background%20Cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <motion.h2
        className="text-4xl font-bold text-pink-700 mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Galeri
      </motion.h2>

      {/* SLIDER */}
      <div className="relative w-full flex justify-center overflow-hidden z-10">
        <motion.div
          ref={sliderRef}
          className="flex gap-7"
          style={{ x }}
        >
          {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, i) => (
            <motion.div
              key={i}
              className="w-70 h-110 rounded-2xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ZOOM */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto}
              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </InvitoLayout>
  );
}
