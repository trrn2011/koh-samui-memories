import { AnimatePresence, motion } from "framer-motion";

export default function Boot({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="palm"
            animate={{ rotate: [-6, 6, -6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            🌴
          </motion.div>
          <div className="label">loading memories…</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
