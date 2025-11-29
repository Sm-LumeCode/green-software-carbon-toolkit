import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FallingLeaves from "../components/FallingLeaves";
import "../styles/about.css";

const taglines = [
  "Software leaves a footprint. We make it visible.",
  "Software consumes energy. Greenscore reveals it.",
  "Software shapes the climate. Code it responsibly.",
  "Performance is power. Measure it.",
];

export default function About() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about">
      <FallingLeaves />

      {/* HERO */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Greenscore</h1>

        {/* MORPHING TAGLINE */}
        <motion.h2
          key={taglineIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {taglines[taglineIndex]}
        </motion.h2>
      </motion.section>

      {/* CONTENT SECTIONS */}
      <Section title="Why Greenscore Exists">
        Applications are scaling faster than responsibility.
        Servers expand. Clouds multiply. Memory grows silently.
        Yet carbon never appears in a terminal.
        <br /><br />
        Greenscore makes that hidden cost visible.
      </Section>

      <Section title="What It Really Does">
        It transforms runtime behavior into environmental signals.
        It compresses complex performance data into one clean efficiency grade.
        And it reveals where your software wastes power — clearly and instantly.
      </Section>

      <Section title="Who It's For">
        Engineers. Students. Architects. Researchers.
        Anyone who writes code and cares about its real-world cost.
      </Section>

      <Section title="The Experience">
        You enter a few numbers.
        The system responds with a footprint.
        <br /><br />
        No lectures. Just feedback.
        Like debugging — for the planet.
      </Section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Greenscore • Climate-aware software begins here.
      </motion.footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      className="block"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.section>
  );
}

