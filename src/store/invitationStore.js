import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useInvitationStore = create(
  persist(
    (set) => ({
      guest: null,
      opened: false,
      musicEnabled: false,

      setGuest: (guest) => set({ guest }),
      setOpened: (opened) => set({ opened }),

      enableMusic: () => set({ musicEnabled: true }),
      disableMusic: () => set({ musicEnabled: false }),
      toggleMusic: () => set((s) => ({ musicEnabled: !s.musicEnabled })),
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
