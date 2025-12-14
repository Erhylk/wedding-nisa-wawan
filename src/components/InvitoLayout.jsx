import Verse from "./Verse";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

export default function InvitoLayout({ children, className, ...rest }) {
  const { unlock } = useOutletContext();

  return (
    <div className="w-screen h-screen mx-auto flex flex-1 lg:flex-row lg:justify-between">
      <Verse animated={false} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={unlock}
          className={cn("w-full max-w-xl h-full py-5 px-5", className)}
          {...rest}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
