import { useState } from "react";

function InputForm({ onScoreGenerated }) {
  const [formData, setFormData] = useState({
    projectType: "frontend",
    projectSize: "small",
    cloud: "AWS",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async () => {
    if (!formData.projectType || !formData.projectSize || !formData.cloud) {
      alert("Please select all options");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Sending request with data:", formData);

      const res = await fetch("http://localhost:5000/api/score/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Backend error");
      }

      console.log("Score Result:", data);

      if (onScoreGenerated) {
        onScoreGenerated(data);
      }
    } catch (err) {
      console.error("Error generating score:", err);
      setError(err.message || "Failed to generate score");
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

      <h3
        style={{
          color: "#ffffff",
          fontSize: "1.5rem",
          marginBottom: "20px",
          fontWeight: "800",
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9)",
        }}
      >
        Sample Project Analyzer
      </h3>

      {error && (
        <div
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            border: "2px solid #ff0000",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "16px",
            color: "#ffffff",
            fontWeight: "700",
          }}
        >
          ⚠️ Error: {error}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* PROJECT TYPE */}
        <div>
          <label style={{ color: "#ffffff", fontWeight: "700" }}>
            Project Type
          </label>

          <select
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              border: "2px solid rgba(255, 255, 255, 0.6)",
              fontSize: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              color: "#0a2818",
              fontWeight: "600",
              width: "100%",
            }}
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="frontend">Frontend Web Application</option>
            <option value="backend">Backend API Service</option>
            <option value="fullstack">Full-Stack Web Application</option>
            <option value="ml">Machine Learning / AI Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="pipeline">Data Processing / Batch Job</option>
          </select>
        </div>

        {/* PROJECT WORKLOAD (SEMANTICALLY STRONG) */}
        <div>
          <label style={{ color: "#ffffff", fontWeight: "700" }}>
            Project Workload Profile
          </label>

          <select
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              border: "2px solid rgba(255, 255, 255, 0.6)",
              fontSize: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              color: "#0a2818",
              fontWeight: "600",
              width: "100%",
            }}
            name="projectSize"
            value={formData.projectSize}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="small">
              Low Workload (short runtime, light computation, infrequent use)
            </option>
            <option value="medium">
              Moderate Workload (steady usage, APIs + UI, periodic processing)
            </option>
            <option value="large">
              High Workload (long-running services, heavy data or compute usage)
            </option>
          </select>
        </div>

        {/* CLOUD */}
        <div>
          <label style={{ color: "#ffffff", fontWeight: "700" }}>
            Cloud Provider
          </label>

          <select
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              border: "2px solid rgba(255, 255, 255, 0.6)",
              fontSize: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              color: "#0a2818",
              fontWeight: "600",
              width: "100%",
            }}
            name="cloud"
            value={formData.cloud}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
            <option value="GCP">GCP</option>
          </select>
        </div>

        {/* BUTTON */}
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
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Generate Score"}
        </button>
      </div>
    </div>
  );
}

export default InputForm;
