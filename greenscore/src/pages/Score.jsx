import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import ScoreOutput from "../components/ScoreOutput";
import Charts from "../components/Charts";

function Score() {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 8,
      animationDelay: Math.random() * 5,
      size: 25 + Math.random() * 15
    }));
    setLeaves(generatedLeaves);
  }, []);

  const handleScoreGenerated = (data) => {
    setScoreData(data);
  };

  return (
    <div 
      style={{ 
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}
    >
      
      {/* {leaves.map((leaf) => (
        <div
          key={leaf.id}
          style={{
            position: "fixed",
            left: `${leaf.left}%`,
            top: "-50px",
            fontSize: `${leaf.size}px`,
            opacity: 0.6,
            animation: `fall ${leaf.animationDuration}s linear ${leaf.animationDelay}s infinite`,
            zIndex: 9999,
            pointerEvents: "none"
          }}
        >
          🌿
        </div>
      ))} */}

      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 0.6; }
            50% { opacity: 0.7; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
          }
          * { font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; }
        `}
      </style>
      
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
          fontSize: "1rem",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
          transition: "all 0.3s ease",
          zIndex: 1000,
          letterSpacing: "0.5px"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#e8f5e9";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.4)";
        }}
      >
        ← Back
      </button>

      <div style={{ textAlign: "center", marginTop: "80px", marginBottom: "40px" }}>
        <h2 style={{ 
          color: "#ffffff",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: "800",
          marginBottom: "10px",
          textShadow: "3px 3px 12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.6)",
          letterSpacing: "-0.5px"
        }}>
          Carbon Efficiency Score
        </h2>
        <p style={{
          color: "#e8f5e9",
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          fontWeight: "600",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
          letterSpacing: "0.3px"
        }}>
          Measure and optimize your software's environmental impact
        </p>
      </div>

      <div style={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          width: "100%"
        }}>
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            borderRadius: "16px",
            padding: "clamp(20px, 4vw, 32px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            border: "2px solid rgba(0, 0, 0, 1)",
            minHeight: "300px"
          }}>
            <InputForm onScoreGenerated={handleScoreGenerated} />
          </div>

          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            borderRadius: "16px",
            padding: "clamp(20px, 4vw, 32px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            border: "2px solid rgba(0, 0, 0, 1)",
            minHeight: "300px"
          }}>
            <ScoreOutput scoreData={scoreData} />
          </div>
        </div>

        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: "16px",
          padding: "clamp(24px, 5vw, 40px)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          border: "2px solid rgba(0, 0, 0, 1)",
          minHeight: "400px",
          marginBottom: "40px"
        }}>
          <Charts scoreData={scoreData} />
        </div>
      </div>
    </div>
  );
}

export default Score;