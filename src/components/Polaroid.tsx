import { motion } from "framer-motion";
import type { StackPhoto } from "../data";

type Props = StackPhoto & { index: number; onOpen: () => void };

export default function Polaroid({
  src,
  caption,
  meta,
  variant,
  rot,
  tape,
  alt,
  index,
  onOpen,
}: Props) {
  const rotDeg = rot === "l" ? -1.4 : rot === "r" ? 1.6 : 0;

  return (
    <motion.button
      type="button"
      className={`polaroid ${variant ?? ""}`}
      onClick={onOpen}
      initial={{ opacity: 0, y: 32, rotate: rotDeg + (rot === "l" ? -3 : 3) }}
      whileInView={{ opacity: 1, y: 0, rotate: rotDeg }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ rotate: rotDeg + (rot === "l" ? -1.5 : 1.5), y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {tape ? <span className="tape" /> : null}
      <img src={src} alt={alt} loading="lazy" />
      <div className="cap">
        {caption}
        {meta ? <small>{meta}</small> : null}
      </div>
    </motion.button>
  );
}
