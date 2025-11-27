import { motion } from "framer-motion";

export default function FallingLeaves() {
  const leaves = Array.from({ length: 18 });

  return (
    <div className="leaves">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          className="leaf"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -60,
            rotate: Math.random() * 360,
            opacity: 0.6
          }}
          animate={{
            y: window.innerHeight + 120,
            rotate: Math.random() * 720
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
        />
      ))}
    </div>
  );
}
