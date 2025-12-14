import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useInvitationStore = create(
  persist(
    (set) => ({
      guest: null,
      opened: false,
      musicPlaying: true,

      setGuest: (guest) => set({ guest }),
      setOpened: (opened) => set({ opened }),
      toggleMusic: () =>
        set((state) => ({ musicPlaying: !state.musicPlaying })),
    }),
    {
      name: "invitation-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        guest: state.guest,
      }),
    }
  )
);
