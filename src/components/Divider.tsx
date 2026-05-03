import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="divider" aria-hidden>
      <motion.span
        className="line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
      />
      <span>· · ·</span>
      <motion.span
        className="line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}
