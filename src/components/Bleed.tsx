import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Bleed({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div className="bleed" ref={ref}>
      <motion.img
        src={src}
        alt={alt}
        style={{ scale, y }}
        loading="lazy"
      />
    </div>
  );
}
