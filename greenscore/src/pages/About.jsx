import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        padding: "80px 20px",
        textAlign: "center",
        color: "#22543D"
      }}
    >
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

      <h2>About This Project</h2>

      <p style={{ marginTop: "20px", maxWidth: "700px", margin: "auto" }}>
        This Phase-1 prototype simulates the scoring flow, UI, and dashboard layout 
        for a green software carbon-efficiency toolkit. The current version serves 
        as a demonstration of how inputs, score display, and visual components will 
        behave. Phase-2 will expand this into a fully functional carbon-measurement 
        system using runtime metrics, cloud energy factors, and industry-accepted 
        sustainability models.
      </p>
    </div>
  );
}

export default About;