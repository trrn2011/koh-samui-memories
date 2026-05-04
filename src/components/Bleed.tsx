import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Bleed({ src, alt, caption }: Props) {
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
      {caption ? <div className="bleed-cap">{caption}</div> : null}
    </div>
  );
}
