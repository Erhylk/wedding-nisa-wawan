import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getGuestFromQuery } from "../utils/getGuestFromQuery";
import { useInvitationStore } from "../store/invitationStore";
import Verse from "../components/Verse";
import {
  BRIDE_NICK_NAME,
  GROOM_NICK_NAME,
  WEDDING_DATE,
} from "../constants/data";
import { formatSimpleWeddingDate } from "../utils/date";

export default function Envelope() {
  const navigate = useNavigate();

  const guest = useInvitationStore((s) => s.guest);
  const setGuest = useInvitationStore((s) => s.setGuest);
  const setOpened = useInvitationStore((s) => s.setOpened);
  const enableMusic = useInvitationStore((s) => s.enableMusic);

  useEffect(() => {
    const guestData = getGuestFromQuery();
    setGuest(guestData);
  }, [setGuest]);

  const openInvitation = async () => {
    setOpened(true);
    enableMusic();
    navigate("/invitation/intro", { replace: true }, 50);
  };

  return (
    <div className="w-screen h-screen mx-auto flex lg:flex-row lg:justify-between font-dm-serif">
      <Verse />

      <div
        className="relative flex flex-col justify-center items-center max-w-xl px-5 w-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Background%20Cover.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute top-16 flex flex-col justify-center items-center text-center text-pink-200">
          <p className="text-5xl lg:text-7xl tracking-widest hidden lg:block">
            {GROOM_NICK_NAME.charAt(0)} & {BRIDE_NICK_NAME.charAt(0)}
          </p>
          <p className="font-bold lg:text-4xl text-3xl text-neutral-100 px-4 py-1 mt-2 border-2 lg:border-none border-neutral-100">
            {formatSimpleWeddingDate(WEDDING_DATE)}
          </p>
        </div>

        <motion.div
          className="absolute -right-20 -top-20 w-1/2 h-auto animate-sway"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Floral.png" />
        </motion.div>

        <motion.div
          className="absolute -left-20 -bottom-20 w-1/2 h-auto animate-sway"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="https://raw.githubusercontent.com/Invitato/public/main/invitato.net/template-bayumeysya/Flower.png" />
        </motion.div>

        <motion.div
          className="lg:hidden text-center text-pink-200  pb-16 font-dancing relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-4xl font-bold">
            Nisa
            <span className="text-pink-200 text-3xl px-2"> &amp; </span>
            Wawan
          </p>
          <p className="text-2xl text-pink-100">are getting married</p>
        </motion.div>

        <motion.div
          className="bg-white/30 rounded-2xl shadow-xl py-6 px-3 text-center max-w-sm w-full relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-neutral-600 mb-2">Kepada Yth.</p>

          <h2 className="text-2xl font-semibold text-neutral-700">
            {guest?.name}
          </h2>

          {guest?.address && (
            <p className="text-xl text-neutral-500 mt-1">di {guest.address}</p>
          )}

          <motion.button
            onClick={openInvitation}
            type="button"
            className="font-bold mt-6 px-6 py-3 bg-pink-400 text-white rounded-full hover:cursor-pointer animate-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
