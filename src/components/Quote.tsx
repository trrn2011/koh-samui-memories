import { motion } from "framer-motion";

export default function Quote({ text }: { text: string }) {
  const chars = Array.from(text);
  return (
    <p className="quote" aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: i * 0.025 }}
        >
          {c}
        </motion.span>
      ))}
    </p>
  );
}
