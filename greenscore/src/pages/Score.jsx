import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import InputForm from "../components/InputForm";
import ScoreOutput from "../components/ScoreOutput";
import Charts from "../components/Charts";
import ComparativeAnalysis from "../components/ComparativeAnalysis";
import ExplainabilityPanel from "../components/ExplainabilityPanel";

/* ✅ DEFAULT SCORE (initial screen shows 0s, not blank) */
const DEFAULT_SCORE_DATA = {
  energyConsumption: 0,
  carbonEmission: 0,
  score: 0,
  grade: "—",
  suggestions: [],

  // Advanced features
  alternatives: [],
  breakdown: null,
  explanation: "",
};

function Score() {
  const navigate = useNavigate();

  const [scoreData, setScoreData] = useState(DEFAULT_SCORE_DATA);
  const [showCelebration, setShowCelebration] = useState(false);

  /* 🎉 Handle score updates safely */
  const handleScoreGenerated = (data) => {
    const safeData = {
      energyConsumption: Number(data.energyConsumption) || 0,
      carbonEmission: Number(data.carbonEmission) || 0,
      score: Number(data.score) || 0,
      grade: data.grade || "—",
      suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],

      alternatives: Array.isArray(data.alternatives)
        ? data.alternatives
        : [],
      breakdown: data.breakdown || null,
      explanation: data.explanation || "",
    };

    setScoreData(safeData);

    // 🎉 Celebrate Grade A only
    if (safeData.grade === "A") {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 4000);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        background: "url('/bgimg.png') no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      {/* 🎉 GRADE A POPUP */}
      {showCelebration && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "relative",
              background: "linear-gradient(135deg, #4caf50, #81c784)",
              padding: "40px 60px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              minWidth: "420px",
            }}
          >
            {/* ❌ Close button */}
            <button
              onClick={() => setShowCelebration(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "14px",
                background: "rgba(255,255,255,0.25)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontSize: "18px",
                fontWeight: "800",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h1 style={{ color: "#ffffff", fontSize: "2.5rem" }}>
              🎉 Grade A!
            </h1>
            <p style={{ color: "#e8f5e9", fontSize: "1.2rem" }}>
              Outstanding energy efficiency.
              <br />
              This is how green software should be built.
            </p>
          </div>
        </div>
      )}

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          backgroundColor: "#ffffff",
          color: "#0a2818",
          border: "3px solid #ffffff",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "800",
          zIndex: 1000,
        }}
      >
        ← Back
      </button>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginTop: "80px", marginBottom: "40px" }}>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            fontWeight: "800",
            textShadow: "3px 3px 12px rgba(0,0,0,0.9)",
          }}
        >
          Carbon Efficiency Score
        </h2>
        <p
          style={{
            color: "#e8f5e9",
            fontSize: "1.1rem",
            fontWeight: "600",
            textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Measure and optimize your software's environmental impact
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* INPUT + SCORE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: "16px",
              padding: "32px",
              border: "2px solid rgba(0,0,0,1)",
            }}
          >
            <InputForm onScoreGenerated={handleScoreGenerated} />
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: "16px",
              padding: "32px",
              border: "2px solid rgba(0,0,0,1)",
            }}
          >
            <ScoreOutput scoreData={scoreData} />
          </div>
        </div>

        {/* CHARTS */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.25)",
            borderRadius: "16px",
            padding: "40px",
            border: "2px solid rgba(0,0,0,1)",
          }}
        >
          <Charts scoreData={scoreData} />
        </div>

        {/* EXPLAINABILITY */}
        {scoreData.breakdown && (
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: "16px",
              padding: "32px",
              border: "2px solid rgba(0,0,0,1)",
            }}
          >
            <ExplainabilityPanel
              breakdown={scoreData.breakdown}
              explanation={scoreData.explanation}
            />
          </div>
        )}

        {/* COMPARATIVE ANALYSIS */}
        {scoreData.alternatives.length > 0 && (
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.25)",
              borderRadius: "16px",
              padding: "32px",
              border: "2px solid rgba(0,0,0,1)",
              marginBottom: "40px",
            }}
          >
            <ComparativeAnalysis alternatives={scoreData.alternatives} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Score;
