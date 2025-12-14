import { create } from "zustand";

export const useInvitationStore = create((set) => ({
  guest: {
    name: "Tamu Undangan",
    address: "Tempat",
  },
  opened: false,
  musicPlaying: true,

  setGuest: (guest) => set({ guest }),
  setOpened: (opened) => set({ opened }),
  toggleMusic: () => set((state) => ({ musicPlaying: !state.musicPlaying })),
}));
