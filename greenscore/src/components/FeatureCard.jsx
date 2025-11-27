import { Cpu, Gauge, Zap, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  cpu: <Cpu size={28} />,
  gauge: <Gauge size={28} />,
  zap: <Zap size={28} />,
  leaf: <Leaf size={28} />
};

export default function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ marginBottom: "8px" }}>{icons[icon]}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}
