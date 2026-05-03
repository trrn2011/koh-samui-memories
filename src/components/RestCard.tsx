import { motion } from "framer-motion";

type Props = {
  icon: string;
  title: string;
  lines: string[];
  tag: string;
};

export default function RestCard({ icon, title, lines, tag }: Props) {
  return (
    <motion.div
      className="rest"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="icon"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      <h3>{title}</h3>
      {lines.map((l, i) => (
        <p key={i}>{l}</p>
      ))}
      <p className="tag">{tag}</p>
    </motion.div>
  );
}
