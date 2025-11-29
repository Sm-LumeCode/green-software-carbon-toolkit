import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setFadeIn(true);
    
    const generatedLeaves = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 8,
      animationDelay: Math.random() * 5,
      size: 25 + Math.random() * 15
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="page-container" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      
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

      <div style={{
        position: "relative",
        zIndex: 2,
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease"
      }}>
        
        <h1 style={{ 
          color: "#ffffff", 
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          textShadow: "3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6)",
          marginBottom: "15px",
          fontWeight: "800",
          letterSpacing: "-0.5px"
        }}>
          Green Software Carbon Efficiency Toolkit
        </h1>

        <p style={{ 
          color: "#e8f5e9", 
          fontSize: "clamp(1rem, 3vw, 1.3rem)", 
          marginTop: "10px",
          fontWeight: "600",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
          letterSpacing: "0.3px"
        }}>
          Simulated carbon scoring for software applications
        </p>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}>
          {[
            { icon: "📊", text: "Real-time Metrics", delay: "0.2s" },
            { icon: "🌍", text: "Carbon Tracking", delay: "0.4s" },
            { icon: "⚡", text: "Energy Insights", delay: "0.6s" }
          ].map((feature, i) => (
            <div key={i} style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(12px)",
              padding: "24px 34px",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              minWidth: "160px",
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.8s ease ${feature.delay}`
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{feature.icon}</div>
              <div style={{ 
                color: "#ffffff", 
                fontWeight: "700", 
                fontSize: "1rem",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
              }}>
                {feature.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={() => navigate("/score")}
            style={{ 
              marginRight: "15px",
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
              letterSpacing: "0.5px"
            }}
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
            Start Scoring →
          </button>

          <button
          onClick={() => navigate("/about")}
          style={{
            marginLeft: "15px",
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
            letterSpacing: "0.5px"
          }}
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
          About Us
        </button>
        </div>

        <div style={{
          marginTop: "60px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {[
            { number: "100+", label: "Apps Analyzed" },
            { number: "2.5T", label: "CO₂ Tracked" },
            { number: "35%", label: "Avg. Reduction" }
          ].map((stat, i) => (
            <div key={i} style={{
              textAlign: "center",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)"
            }}>
              <div style={{
                fontSize: "2.2rem",
                fontWeight: "900",
                color: "#ffffff",
                textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)"
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: "0.95rem",
                color: "#e8f5e9",
                fontWeight: "700",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "20px",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 2,
        color: "#ffffff",
        fontSize: "0.9rem",
        fontWeight: "700",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.6)"
      }}>
        Made with 💚 for a sustainable future
      </div>
    </div>
  );
}

export default Home;