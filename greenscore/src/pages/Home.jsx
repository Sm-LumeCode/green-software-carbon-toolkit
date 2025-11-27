// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="page-container">

//       <h1 style={{ color: "#0f3d2e", fontSize: "2.5rem" }}>
//         Green Software Carbon Efficiency Toolkit
//       </h1>

//       <p style={{ color: "#0f3d2e", fontSize: "1.2rem", marginTop: "10px" }}>
//         Simulated carbon scoring for software applications
//       </p>

//       <div style={{ marginTop: "30px" }}>
//         <button
//           className="green-btn"
//           onClick={() => navigate("/score")}
//           style={{ marginRight: "10px" }}
//         >
//           Start Scoring
//         </button>

//         <button
//           className="green-btn"
//           onClick={() => navigate("/about")}
//         >
//           About Us
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="page-container" style={{ position: "relative", minHeight: "100vh" }}>
      


      {/* Main content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease"
      }}>
        


        <h1 style={{ 
          color: "#0a2818", 
          fontSize: "2.8rem",
          textShadow: "3px 3px 8px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.6)",
          marginBottom: "15px",
          fontWeight: "800"
        }}>
          Green Software Carbon Efficiency Toolkit
        </h1>

        <p style={{ 
          color: "#0f3d2e", 
          fontSize: "1.3rem", 
          marginTop: "10px",
          fontWeight: "600",
          textShadow: "2px 2px 6px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)"
        }}>
          Simulated carbon scoring for software applications
        </p>

        {/* Feature Cards */}
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
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              padding: "24px 34px",
              borderRadius: "16px",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 255, 255, 0.4)",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              minWidth: "160px",
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.8s ease ${feature.delay}`
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{feature.icon}</div>
              <div style={{ color: "#0a2818", fontWeight: "700", fontSize: "1rem" }}>
                {feature.text}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ marginTop: "30px" }}>
          <button
            className="green-btn"
            onClick={() => navigate("/score")}
            style={{ 
              marginRight: "15px",
              backgroundColor: "#0a2818",
              color: "white",
              border: "none",
              padding: "16px 36px",
              fontSize: "1.15rem",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "700",
              boxShadow: "0 8px 25px rgba(10, 40, 24, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 12px 30px rgba(10, 40, 24, 0.6), 0 0 25px rgba(255, 255, 255, 0.4)";
              e.target.style.backgroundColor = "#0f3d2e";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 25px rgba(10, 40, 24, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)";
              e.target.style.backgroundColor = "#0a2818";
            }}
          >
            Start Scoring →
          </button>

          <button
            className="green-btn"
            onClick={() => navigate("/about")}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              color: "#0a2818",
              border: "3px solid #0a2818",
              padding: "16px 36px",
              fontSize: "1.15rem",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "700",
              boxShadow: "0 8px 25px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 12px 30px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.4)";
              e.target.style.backgroundColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 25px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.3)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
            }}
          >
            About Us
          </button>
        </div>

        {/* Stats Section */}
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
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "12px",
              backdropFilter: "blur(5px)"
            }}>
              <div style={{
                fontSize: "2.2rem",
                fontWeight: "900",
                color: "#0a2818",
                textShadow: "2px 2px 8px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.8)"
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: "0.95rem",
                color: "#0f3d2e",
                fontWeight: "700",
                textShadow: "1px 1px 6px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 0.7)"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 2,
        color: "#0a2818",
        fontSize: "0.9rem",
        fontWeight: "700",
        textShadow: "2px 2px 6px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 0.7)"
      }}>
        Made with 💚 for a sustainable future
      </div>
    </div>
  );
}

export default Home;