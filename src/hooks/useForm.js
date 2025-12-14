import { useState } from "react";

export function useForm() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [messages, setMessages] = useState([
    { name: "Budi", message: "Selamat menempuh hidup baru!" },
    { name: "Sari", message: "Semoga bahagia selalu!" },
    { name: "Budi", message: "Selamat menempuh hidup baru!" },
    { name: "Sari", message: "Semoga bahagia selalu!" },
    { name: "Budi", message: "Selamat menempuh hidup baru!" },
    { name: "Sari", message: "Semoga bahagia selalu!" },
    { name: "Budi", message: "Selamat menempuh hidup baru!" },
    { name: "Sari", message: "Semoga bahagia selalu!" },
    { name: "Budi", message: "Selamat menempuh hidup baru!" },
    { name: "Sari", message: "Semoga bahagia selalu!" },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.message) return;

    setMessages([
      ...messages,
      { name: form.name || "Tamu", message: form.message },
    ]);
    setForm({ name: "", message: "" });
  };

  return {
    form,
    messages,
    handleChange,
    handleSubmit,
  };
}
