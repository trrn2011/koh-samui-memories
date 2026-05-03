import { motion } from "framer-motion";
import type { ProgramItem } from "../data";

export default function Program({
  title,
  items,
}: {
  title: string;
  items: ProgramItem[];
}) {
  return (
    <motion.div
      className="program"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
          >
            <span className="t">{it.time}</span>
            <span>{it.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
