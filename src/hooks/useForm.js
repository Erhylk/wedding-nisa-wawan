import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GOOGLE_FORM, GOOGLE_SHEET_API } from "../constants/data";
import { useInvitationStore } from "../store/invitationStore";

export function useForm() {
  const guestName = useInvitationStore((s) => s.guest?.name);
  const queryClient = useQueryClient();

  const [form, setForm] = useState({ message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  /* =========================
   * FETCH UCAPAN (CACHE)
   * ========================= */
  const {
    data: messages = [],
    isLoading: loadingMessages,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await fetch(GOOGLE_SHEET_API);
      if (!res.ok) throw new Error("Fetch gagal");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // 5 menit fresh
    cacheTime: 1000 * 60 * 30, // 30 menit di cache
  });

  /* =========================
   * SUBMIT UCAPAN
   * ========================= */
  const mutation = useMutation({
    mutationFn: async (message) => {
      const fd = new FormData();
      fd.append(GOOGLE_FORM.FIELDS.NAME, guestName || "Tamu Undangan");
      fd.append(GOOGLE_FORM.FIELDS.MESSAGE, message);

      await fetch(GOOGLE_FORM.ACTION_URL, {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });

      return {
        name: guestName || "Tamu Undangan",
        message,
      };
    },

    // 🚀 optimistic update
    onMutate: async (message) => {
      await queryClient.cancelQueries({ queryKey: ["messages"] });

      const previous = queryClient.getQueryData(["messages"]);

      queryClient.setQueryData(["messages"], (old = []) => [
        {
          name: guestName || "Tamu Undangan",
          message,
        },
        ...old,
      ]);

      return { previous };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(["messages"], context.previous);
      setStatus({
        type: "error",
        message: "Gagal mengirim ucapan",
      });
    },

    onSuccess: () => {
      setForm({ message: "" });
      setStatus({
        type: "success",
        message: "Ucapan berhasil dikirim 🤍",
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  /* =========================
   * HANDLERS
   * ========================= */
  const handleChange = (e) => {
    setForm({ message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.message.trim()) {
      setStatus({
        type: "error",
        message: "Ucapan tidak boleh kosong",
      });
      return;
    }

    setStatus({ type: "", message: "" });
    mutation.mutate(form.message);
  };

  return {
    guestName,
    form,
    messages,
    loading: mutation.isPending,
    loadingMessages,
    status,
    handleChange,
    handleSubmit,
    clearStatus: () => setStatus({ type: "", message: "" }),
  };
}