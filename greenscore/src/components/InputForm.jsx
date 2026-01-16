import { useState } from "react";

function InputForm({ onScoreGenerated }) {
  const [formData, setFormData] = useState({
    loc: "",
    runtime: "",
    memory: "",
    cloud: "AWS",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validate inputs
    if (!formData.loc || !formData.runtime || !formData.memory) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    
    try {
      const res = await fetch("http://localhost:5000/api/score/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          runtime: parseFloat(formData.runtime),
          memory: parseFloat(formData.memory),
          loc: parseFloat(formData.loc),
          cloud: formData.cloud
        }),
      });

      const data = await res.json();
      console.log("Score Result:", data);

      // Pass data to parent component to update ScoreOutput
      if (onScoreGenerated) {
        onScoreGenerated(data);
      }
    } catch (error) {
      console.error("Error generating score:", error);
      alert("Failed to generate score. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <style>
        {`
          input::placeholder {
            color: #000000ff !important;
            opacity: 0.8;
          }
          select option {
            color: #0a2818;
            background-color: white;
          }
        `}
      </style>

      <h3 style={{
        color: "#ffffff",
        fontSize: "1.5rem",
        marginBottom: "20px",
        fontWeight: "800",
        textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9)",
        letterSpacing: "0.3px"
      }}>
        Input Software Metrics
      </h3>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
        <input
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid rgba(255, 255, 255, 0.6)",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
            color: "#0a2818",
            fontWeight: "600"
          }}
          type="number"
          name="loc"
          placeholder="Lines of Code"
          value={formData.loc}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#ffffff";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
        />

        <input
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid rgba(255, 255, 255, 0.6)",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
            color: "#0a2818",
            fontWeight: "600"
          }}
          type="number"
          name="runtime"
          placeholder="Runtime (seconds)"
          value={formData.runtime}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#ffffff";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
        />

        <input
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid rgba(255, 255, 255, 0.6)",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
            color: "#0a2818",
            fontWeight: "600"
          }}
          type="number"
          name="memory"
          placeholder="Memory Usage (MB)"
          value={formData.memory}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#ffffff";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
        />

        <select
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid rgba(255, 255, 255, 0.6)",
            fontSize: "1rem",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: "#0a2818",
            fontWeight: "600"
          }}
          name="cloud"
          value={formData.cloud}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#ffffff";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
        >
          <option value="AWS">AWS</option>
          <option value="Azure">Azure</option>
          <option value="GCP">GCP</option>
        </select>

        <button 
          style={{
            padding: "14px 24px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: loading ? "#cccccc" : "#ffffff",
            color: "#0a2818",
            fontSize: "1.05rem",
            fontWeight: "800",
            cursor: loading ? "not-allowed" : "pointer",
            marginTop: "8px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px"
          }}
          onClick={handleSubmit}
          disabled={loading}
          onMouseEnter={(e) => {
            if (!loading) {
              e.target.style.backgroundColor = "#e8f5e9";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.4)";
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
            }
          }}
        >
          {loading ? "Calculating..." : "Generate Score"}
        </button>
      </div>
    </div>
  );
}

export default InputForm;