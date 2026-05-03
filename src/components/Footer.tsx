import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FULL = "Koh Samui, 2026";

export default function Footer() {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(FULL.slice(0, i));
      if (i >= FULL.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, [started]);

  return (
    <motion.footer
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, margin: "-100px" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="palm"
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        ~ おかえりなさい ~
      </motion.div>
      <h2>
        {typed}
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          style={{ marginLeft: 2 }}
        >
          |
        </motion.span>
      </h2>
      <p>5 days · 12 photos · 6 friends</p>
      <p>Plai Laem · Bo Put · Phangan · Pig Island</p>
      <div className="sig">— お疲れ様でした —</div>
      <div className="meta">PRESSED · 2026.05.03</div>
    </motion.footer>
  );
}
