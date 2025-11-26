import { useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import ScoreOutput from "../components/ScoreOutput";
import Charts from "../components/Charts";

function Score() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", position: "relative" }}>
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "#2F855A",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        ← Back
      </button>

      <h2 style={{ marginTop: "50px", color: "#22543D" }}>
        Carbon Efficiency Score
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div style={{ flex: 1 }}>
          <InputForm />
        </div>

        <div style={{ flex: 1 }}>
          <ScoreOutput />
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Charts />
      </div>
    </div>
  );
}

export default Score;