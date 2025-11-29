import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/* ================= FALLING LEAVES ================= */
function SubtleLeaves() {
  const leaves = Array.from({ length: 9 });

  return (
    <>
      {leaves.map((_, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            top: "-50px",
            fontSize: "30px",
            opacity: 0.6,
            animation: `fall ${12 + Math.random() * 8}s linear ${
              Math.random() * 4
            }s infinite`,
            zIndex: 1,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 6px rgba(120, 255, 170, 0.8))",
          }}
        >
          🍃🌿
        </div>
      ))}
    </>
  );
}

/* ================= ABOUT PAGE ================= */
function About() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className="page-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        paddingBottom: "120px",
      }}
    >
      <SubtleLeaves />

      <style>
        {`
          * { font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; }

          @keyframes carbonPulse {
            0% { box-shadow: 0 0 0 rgba(76, 175, 80, 0.0); }
            50% { box-shadow: 0 0 45px rgba(76, 175, 80, 0.7); }
            100% { box-shadow: 0 0 0 rgba(76, 175, 80, 0.0); }
          }

          @keyframes fall {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
            30% { opacity: 0.6; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s ease",
          textAlign: "center",
          paddingTop: "90px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* ================= HERO ================= */}
        <div
          style={{
            display: "inline-block",
            padding: "14px 30px",
            borderRadius: "20px",
            animation: "carbonPulse 3.5s ease-in-out infinite",
            marginBottom: "10px",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.2rem, 5vw, 3rem)",
              textShadow:
                "3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)",
              marginBottom: "6px",
              fontWeight: "900",
            }}
          >
            Greenscore
          </h1>
        </div>

        <p
          style={{
            color: "#e8f5e9",
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            fontWeight: "700",
            textShadow:
              "2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
            marginBottom: "10px",
          }}
        >
          Software leaves a footprint. We make it visible.
        </p>

        {/* ✅ EXTRA HERO PROMISE LINE */}
        <p
          style={{
            color: "#a5f3c6",
            fontSize: "0.95rem",
            fontWeight: "700",
            marginBottom: "55px",
            letterSpacing: "0.5px",
          }}
        >
          Turn performance metrics into climate-aware decisions.
        </p>

        {/* ============ BEFORE vs AFTER ============ */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            marginBottom: "45px",
          }}
        >
          <div style={ghostCardStyle}>
            <h3 style={ghostTitle}>Before Greenscore</h3>
            <ul style={ghostList}>
              <li>Hidden energy waste</li>
              <li>Guess-based optimization</li>
              <li>No carbon signal</li>
            </ul>
          </div>

          <div style={activeCardStyle}>
            <h3 style={activeTitle}>With Greenscore</h3>
            <ul style={activeList}>
              <li>Visible energy impact</li>
              <li>Targeted optimization</li>
              <li>Clear efficiency grade</li>
            </ul>
          </div>
        </div>

        {/* ✅ ONE-LINE FORMULA STRIP */}
        <div
          style={{
            margin: "0 auto 70px",
            maxWidth: "720px",
            backgroundColor: "rgba(76, 175, 80, 0.18)",
            border: "2px solid rgba(76,175,80,0.7)",
            borderRadius: "14px",
            padding: "14px 24px",
            color: "#ffffff",
            fontWeight: "900",
            letterSpacing: "1px",
            boxShadow: "0 0 25px rgba(76,175,80,0.7)",
          }}
        >
          Greenscore = Performance × Energy × Carbon
        </div>

        {/* ================= STORY BLOCKS ================= */}
        {[
          {
            title: "Why Greenscore Exists",
            text: `Applications are scaling faster than responsibility.
Servers expand. Clouds multiply. Memory grows silently.
Yet carbon never appears in a terminal.
Greenscore makes that hidden cost visible.`,
          },
          {
            title: "What It Really Does",
            text: `It transforms runtime behavior into environmental signals.
It compresses complex performance data into one clean efficiency grade.
And it reveals where your software wastes power — clearly and instantly.`,
          },
          {
            title: "Who It's For",
            text: `Engineers. Students. Architects. Researchers.
Anyone who writes code and cares about its real-world cost.`,
          },
          {
            title: "The Experience",
            text: `You enter a few numbers.
The system responds with a footprint.
No lectures. Just feedback.
Like debugging — for the planet.`,
          },
        ].map((block, i) => (
          <GlowCard key={i}>
            <h2 style={cardTitle}>{block.title}</h2>
            <p style={cardText}>{block.text}</p>
          </GlowCard>
        ))}

        {/* ✅ FUTURE DIRECTION BLOCK */}
        <GlowCard>
          <h2 style={cardTitle}>Future Direction</h2>
          <p style={cardText}>
            • Live cloud carbon APIs  
            • CI/CD pipeline integration  
            • Green deployment recommendations  
            • ML-based impact prediction  
          </p>
        </GlowCard>

        <button
          onClick={() => navigate("/")}
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.5)";
            e.target.style.backgroundColor = "#e8f5e9";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.4)";
            e.target.style.backgroundColor = "#ffffff";
          }}
        >
          ← Back to Home
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 2,
          color: "#ffffff",
          fontSize: "0.95rem",
          fontWeight: "800",
          textShadow:
            "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.6)",
        }}
      >
        Every commit has a cost. Greenscore helps you see it.
      </div>
    </div>
  );
}

/* ================= GLOW CARD ================= */
function GlowCard({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(14px)",
        padding: "28px 32px",
        borderRadius: "18px",
        maxWidth: "850px",
        margin: "0 auto 40px",
        color: "#ffffff",
        border: "2px solid rgba(255, 255, 255, 0.35)",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        boxShadow: hover
          ? "0 0 35px rgba(76, 175, 80, 0.9)"
          : "0 8px 32px rgba(0, 0, 0, 0.3)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s ease",
      }}
    >
      {children}
    </div>
  );
}

/* ================= SHARED STYLES ================= */
const cardTitle = {
  fontSize: "1.6rem",
  fontWeight: "900",
  marginBottom: "12px",
  color: "#ffffff",
};

const cardText = {
  fontSize: "1.05rem",
  lineHeight: "1.6",
  whiteSpace: "pre-line",
  fontWeight: "600",
  color: "#e8f5e9",
};

const ghostCardStyle = {
  backgroundColor: "rgba(255, 0, 0, 0.12)",
  border: "2px solid rgba(255, 80, 80, 0.9)",
  padding: "26px 30px",
  borderRadius: "18px",
  color: "#ffffff",
  minWidth: "260px",
  boxShadow: "0 0 28px rgba(255, 60, 60, 0.9)",
};

const ghostTitle = {
  fontWeight: "900",
  marginBottom: "12px",
  color: "#ff6b6b",
};

const ghostList = { listStyle: "none", padding: 0, lineHeight: "1.8" };

const activeCardStyle = {
  backgroundColor: "rgba(76, 175, 80, 0.25)",
  border: "2px solid rgba(76, 175, 80, 0.8)",
  padding: "26px 30px",
  borderRadius: "18px",
  color: "#fff",
  minWidth: "260px",
  boxShadow: "0 0 25px rgba(76, 175, 80, 0.8)",
};

const activeTitle = { fontWeight: "900", marginBottom: "12px" };
const activeList = { listStyle: "none", padding: 0, lineHeight: "1.8" };

const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "#ffffff",
  color: "#0a2818",
  border: "3px solid #ffffff",
  padding: "16px 36px",
  fontSize: "1.15rem",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "800",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
  transition: "all 0.3s ease",
  letterSpacing: "0.5px",
};

export default About;
