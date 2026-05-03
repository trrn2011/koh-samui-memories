import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { photos } from "../data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const bodyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <header className="hero" ref={ref}>
      <motion.div
        className="hero-bg"
        style={{ y: bgY, scale: bgScale }}
      >
        <img src={photos.p5914} alt="Koh Samui" />
      </motion.div>
      <div className="hero-shade" />

      <div className="story-bar" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <i key={i}>
            <motion.span
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,255,255,.95)",
                transformOrigin: "left",
                display: "block",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: i === 0 ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            />
          </i>
        ))}
      </div>

      <motion.div
        className="top-meta"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span>
          <span className="dot" />
          Koh Samui
        </span>
        <span>2026 / 04 → 05</span>
      </motion.div>

      <motion.div
        className="hero-body"
        style={{ y: bodyY, opacity: bodyOpacity }}
      >
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span />
          SOUTHERN THAILAND
          <span />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Koh Samui
          <em>Memories</em>
        </motion.h1>

        <motion.div
          className="jp"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          サムイ島の旅　2026.4.30 → 5.4
        </motion.div>

        <motion.dl
          className="meta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { dt: "Villa", dd: "Plai Laem · Bo Put" },
            { dt: "Days", dd: "5 days / 4 nights" },
            { dt: "Crew", dd: "6 friends" },
            { dt: "Vibe", dd: "Full Moon · Cruise" },
          ].map((m) => (
            <div key={m.dt}>
              <dt>{m.dt}</dt>
              <dd>{m.dd}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.4 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        scroll ↓
      </motion.div>
    </header>
  );
}
