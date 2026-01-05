import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Envelope from "./routes/Envelope";
import InvitationLayout from "./routes/Invitation";

import Intro from "./pages/Intro";
import { useInvitationStore } from "./store/invitationStore";
import Acara from "./pages/Acara";
import Pengantin from "./pages/Pengantin";
import Ucapan from "./pages/Ucapan";
import Galeri from "./pages/Galeri";
import { AudioProvider } from "./providers/AudioProvider";
import Cerita from "./pages/Cerita";
import WeddingGift from "./pages/Gift";
import Outro from "./pages/Outro";
import Lokasi from "./pages/Lokasi";
import Salam from "./pages/Salam";

/* 🔒 Portrait Lock */
function PortraitLock() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/invitation")) {
      if (screen.orientation?.lock) {
        screen.orientation.lock("portrait").catch(() => {});
      }
    }
  }, [location.pathname]);

  return null;
}

function InvitationGuard({ children }) {
  const opened = useInvitationStore((s) => s.opened);
  if (!opened) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <AudioProvider>
      <HashRouter>
        <PortraitLock />

        <Routes>
          <Route path="/" element={<Envelope />} />

          <Route
            path="/invitation"
            element={
              <InvitationGuard>
                <InvitationLayout />
              </InvitationGuard>
            }
          >
            <Route index element={<Navigate to="intro" replace />} />
            <Route path="intro" element={<Intro />} />
            <Route path="pengantin" element={<Pengantin />} />
            <Route path="acara" element={<Acara />} />
            <Route path="galeri" element={<Galeri />} />
            <Route path="cerita" element={<Cerita />} />
            <Route path="ucapan" element={<Ucapan />} />
            <Route path="gift" element={<WeddingGift />} />
            <Route path="lokasi" element={<Lokasi />} />
            <Route path="salam" element={<Salam />} />
            <Route path="outro" element={<Outro />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </AudioProvider>
  );
}
