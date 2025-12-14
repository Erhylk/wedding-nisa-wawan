import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function FormAlert({ status, onClose }) {
  useEffect(() => {
    if (!status.message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [status, onClose]);

  return (
    <AnimatePresence>
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className={`fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm
            ${
              status.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
        >
          <span className="font-semibold block">
            {status.type === "success" ? "Berhasil" : "Gagal"}
          </span>
          <span className="opacity-90">{status.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
