import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { DayCover as DayCoverData } from "../data";

export default function DayCover({ data }: { data: DayCoverData }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div className="day-cover" ref={ref}>
      <motion.div className="cover-img" style={{ y, scale }}>
        <img src={data.src} alt={data.alt} />
      </motion.div>

      <motion.div
        className="badge"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {data.badge}
      </motion.div>

      <motion.div
        className="date-stamp"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.85, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {data.dateStamp}
      </motion.div>

      <motion.div
        className="title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>
          {data.titleA}
          <br />
          {data.titleEm ? <em>{data.titleB}</em> : data.titleB}
        </h2>
        <p>{data.sub}</p>
      </motion.div>
    </div>
  );
}
