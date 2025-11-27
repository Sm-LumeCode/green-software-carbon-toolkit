// import { useNavigate } from "react-router-dom";
// import InputForm from "../components/InputForm";
// import ScoreOutput from "../components/ScoreOutput";
// import Charts from "../components/Charts";

// function Score() {
//   const navigate = useNavigate();

//   return (
//     <div style={{ padding: "40px", position: "relative" }}>
      
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/")}
//         style={{
//           position: "absolute",
//           top: "10px",
//           left: "10px",
//           backgroundColor: "#2F855A",
//           color: "white",
//           border: "none",
//           padding: "8px 14px",
//           borderRadius: "6px",
//           cursor: "pointer",
//           fontWeight: "bold"
//         }}
//       >
//         ← Back
//       </button>

//       <h2 style={{ marginTop: "50px", color: "#22543D" }}>
//         Carbon Efficiency Score
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           marginTop: "20px"
//         }}
//       >
//         <div style={{ flex: 1 }}>
//           <InputForm />
//         </div>

//         <div style={{ flex: 1 }}>
//           <ScoreOutput />
//         </div>
//       </div>

//       <div style={{ marginTop: "30px" }}>
//         <Charts />
//       </div>
//     </div>
//   );
// }

// export default Score;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputForm from "../components/InputForm";
import ScoreOutput from "../components/ScoreOutput";
import Charts from "../components/Charts";

function Score() {
  const navigate = useNavigate();

  return (
    <div 
      style={{ 
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          backgroundColor: "#0a2818",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "1rem",
          boxShadow: "0 4px 15px rgba(10, 40, 24, 0.4), 0 0 15px rgba(255, 255, 255, 0.3)",
          transition: "all 0.3s ease",
          zIndex: 1000
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#0f3d2e";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 20px rgba(10, 40, 24, 0.5), 0 0 20px rgba(255, 255, 255, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#0a2818";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 15px rgba(10, 40, 24, 0.4), 0 0 15px rgba(255, 255, 255, 0.3)";
        }}
      >
        ← Back
      </button>

      {/* Header Section */}
      <div style={{ 
        textAlign: "center", 
        marginTop: "80px",
        marginBottom: "40px"
      }}>
        <h2 style={{ 
          color: "#0a2818",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: "800",
          marginBottom: "10px",
          textShadow: "3px 3px 8px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.6)"
        }}>
          Carbon Efficiency Score
        </h2>
        <p style={{
          color: "#0f3d2e",
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          fontWeight: "600",
          textShadow: "2px 2px 6px rgba(255, 255, 255, 0.9), 0 0 15px rgba(255, 255, 255, 0.5)"
        }}>
          Measure and optimize your software's environmental impact
        </p>
      </div>

      {/* Main Content Container */}
      <div style={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        
        {/* Input and Output Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            width: "100%"
          }}
        >
          {/* Input Form Card */}
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "clamp(20px, 4vw, 32px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12), 0 0 20px rgba(255, 255, 255, 0.4)",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            minHeight: "300px"
          }}>
            <InputForm />
          </div>

          {/* Score Output Card */}
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "clamp(20px, 4vw, 32px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12), 0 0 20px rgba(255, 255, 255, 0.4)",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            minHeight: "300px"
          }}>
            <ScoreOutput />
          </div>
        </div>

        {/* Charts Section - Full Width */}
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "clamp(24px, 5vw, 40px)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12), 0 0 20px rgba(255, 255, 255, 0.4)",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          minHeight: "400px",
          marginBottom: "40px"
        }}>
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default Score;