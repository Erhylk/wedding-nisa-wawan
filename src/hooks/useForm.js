import { useEffect, useState } from "react";
import { GOOGLE_FORM, GOOGLE_SHEET_API } from "../constants/data";
import { useInvitationStore } from "../store/invitationStore";

export function useForm() {
  const guestName = useInvitationStore((s) => s.guest?.name);

  const [form, setForm] = useState({ message: "" });
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(true);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    fetch(GOOGLE_SHEET_API)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        console.error("Gagal memuat ucapan", err);
        setStatus({
          type: "error",
          message: "Gagal memuat data ucapan",
        });
      })
      .finally(() => {
        setLoadingMessages(false);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ message: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.message.trim()) {
      setStatus({
        type: "error",
        message: "Ucapan tidak boleh kosong",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const fd = new FormData();
      fd.append(GOOGLE_FORM.FIELDS.NAME, guestName || "Tamu Undangan");
      fd.append(GOOGLE_FORM.FIELDS.MESSAGE, form.message);

      await fetch(GOOGLE_FORM.ACTION_URL, {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });

      setMessages((prev) => [
        {
          name: guestName || "Tamu Undangan",
          message: form.message,
        },
        ...prev,
      ]);

      setForm({ message: "" });

      setStatus({
        type: "success",
        message: "Ucapan berhasil dikirim 🤍",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Gagal mengirim ucapan",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    guestName,
    form,
    messages,
    loading,
    loadingMessages,
    status,
    handleChange,
    handleSubmit,
    clearStatus: () => setStatus({ type: "", message: "" }),
  };
}
