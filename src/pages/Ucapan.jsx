import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import { useForm } from "../hooks/useForm";

export default function FormUcapan() {
  const { form, messages, handleChange, handleSubmit } = useForm();

  return (
    <InvitoLayout
      className="bg-pink-100 relative flex flex-col justify-start items-center py-16 px-4"
      style={{ backgroundImage: "url('/images/bg-form.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <motion.h2
        className="text-3xl font-bold text-pink-800 mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ucapan & Doa
      </motion.h2>

      {/* List ucapan */}
      <motion.div
        className="relative z-10 w-full max-w-lg h-[50vh] overflow-y-auto mb-6 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {messages.length === 0 ? (
          <p className="text-gray-700 text-center py-8">Belum ada ucapan</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className="mb-3 p-2 rounded-lg bg-white/70 shadow-sm"
            >
              <p className="font-semibold text-pink-800">{msg.name}</p>
              <p className="text-gray-800">{msg.message}</p>
            </div>
          ))
        )}
      </motion.div>

      {/* Form input full width */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-lg flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama (opsional)"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tulis ucapan & doa"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none h-32 text-gray-800"
        />
        <button
          type="submit"
          className="mt-2 bg-pink-800 hover:bg-pink-600 text-white font-bold py-3 rounded-full transition"
        >
          Kirim Ucapan
        </button>
      </motion.form>
    </InvitoLayout>
  );
}
