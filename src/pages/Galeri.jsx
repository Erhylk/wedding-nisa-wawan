import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import { GALLERY_PHOTOS } from "../constants/data";

export default function Galeri() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <InvitoLayout className="bg-linear-to-b from-purple-200 via-pink-200 to-pink-100 bg-cover relative flex flex-col items-center py-12 px-4">
      <div className="absolute inset-0 bg-black/20" />

      <motion.h2
        className="text-4xl font-bold text-pink-700 mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Galeri
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 relative z-10 w-full max-w-6xl">
        {GALLERY_PHOTOS.map((photo, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // supaya klik foto tidak menutup modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </InvitoLayout>
  );
}
