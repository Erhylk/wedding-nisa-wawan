import { motion } from "framer-motion";
import InvitoLayout from "../components/InvitoLayout";
import { useForm } from "../hooks/useForm";
import FormAlert from "../components/FormAlert";

export default function FormUcapan() {
  const {
    guestName,
    form,
    messages,
    loading,
    loadingMessages,
    status,
    handleChange,
    handleSubmit,
    clearStatus,
  } = useForm();

  return (
    <>
      <InvitoLayout
        className="relative bg-cover bg-center flex flex-col justify-start items-center py-16 px-4"
        style={{
          backgroundImage:
          "url('/images/ucapan_1.jpeg')",
        }}
      >
        {/* 🔵 Background Blur */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/20" />

        {/* 🔴 Konten */}
        <div className="relative z-10 w-full">
        {/* isi konten kamu di sini */}
        </div>

        {/* <div className="absolute inset-0 bg-black/20" /> */}

        <motion.h2
          className="text-3xl font-bold text-pink-200 placeholder-pink-400 mb-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ucapan & Doa
        </motion.h2>

        {/* LIST UCAPAN */}
        <motion.div
          className="relative z-10 w-full max-w-lg h-[50vh] overflow-y-auto mb-6 px-2 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {loadingMessages ? (
            <p className="text-center text-gray-700 py-8">Memuat ucapan...</p>
          ) : messages.length === 0 ? (
            <p className="text-center text-gray-700 py-8">Belum ada ucapan</p>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/70 shadow-sm">
                <p className="font-semibold text-pink-600 placeholder-pink-400">{msg.name}</p>
                <p className="text-gray-800 text-sm">{msg.message}</p>
              </div>
            ))
          )}
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative z-10 w-full max-w-lg flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-white drop-shadow">
            Mengirim sebagai:{" "}
            <span className="font-semibold">
              {guestName || "Tamu Undangan"}
            </span>
          </p>

          <textarea
            value={form.message}
            onChange={handleChange}
            placeholder="Tulis ucapan & doa..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none h-32 text-gray-800"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-pink-800 hover:bg-pink-600 disabled:opacity-60 text-white font-bold py-3 rounded-full transition hover:cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? "Mengirim..." : "Kirim Ucapan"}
          </button>
        </motion.form>
      </InvitoLayout>

      <FormAlert status={status} onClose={clearStatus} />
    </>
  );
}
