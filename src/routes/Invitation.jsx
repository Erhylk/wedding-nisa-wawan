import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SLIDES } from "../constants/slides";
import WebProgress from "../components/WebProgress";
import { useVerticalNavigation } from "../hooks/useVerticalNavigation";
import { useInvitationStore } from "../store/invitationStore";

export default function InvitationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const opened = useInvitationStore((s) => s.opened);
  const toggleMusic = useInvitationStore((s) => s.toggleMusic);
  const musicEnabled = useInvitationStore((s) => s.musicEnabled);

  const index = SLIDES.findIndex((s) => location.pathname.includes(s.path));

  const { swipeHandlers, onWheel, unlock } = useVerticalNavigation({
    onNext: () => navigate(SLIDES[index + 1].path),
    onPrev: () => navigate(SLIDES[index - 1].path),
    canNext: () => index < SLIDES.length - 1,
    canPrev: () => index > 0,
  });

  return (
    <div
      {...swipeHandlers}
      onWheel={onWheel}
      className="w-screen min-h-screen overflow-hidden bg-white text-neutral-900 font-dm-serif"
    >
      <WebProgress total={SLIDES.length} current={index} />
      <Outlet context={{ unlock }} />
      {opened && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-50"
        >
          <span className="text-xl">{musicEnabled ? "🎵" : "🔇"}</span>
        </button>
      )}
    </div>
  );
}
