import { useState } from "react";

function InputForm() {
  const [formData, setFormData] = useState({
    loc: "",
    runtime: "",
    memory: "",
    cloud: "AWS",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/score/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("Simulation Result:", data);
    alert("Score generated (logged in console).");
  };

  return (
    <div>
      <h3 style={{
        color: "#0a2818",
        fontSize: "1.5rem",
        marginBottom: "20px",
        fontWeight: "700",
        textShadow: "2px 2px 6px rgba(255, 255, 255, 0.9)"
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
            border: "2px solid #2F855A",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(5px)",
            color: "#0a2818",
            fontWeight: "600"
          }}
          name="loc"
          placeholder="Lines of Code"
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#0a2818";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#2F855A";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
          }}
        />

        <input
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid #2F855A",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(5px)",
            color: "#0a2818",
            fontWeight: "600"
          }}
          name="runtime"
          placeholder="Runtime (seconds)"
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#0a2818";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#2F855A";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
          }}
        />

        <input
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid #2F855A",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(5px)",
            color: "#0a2818",
            fontWeight: "600"
          }}
          name="memory"
          placeholder="Memory Usage (MB)"
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#0a2818";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#2F855A";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
          }}
        />

        <select
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "2px solid #2F855A",
            fontSize: "1rem",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(5px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: "#0a2818",
            fontWeight: "600"
          }}
          name="cloud"
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.borderColor = "#0a2818";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#2F855A";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
          }}
        >
          <option>AWS</option>
          <option>Azure</option>
          <option>GCP</option>
        </select>

        <button 
          style={{
            padding: "14px 24px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#0a2818",
            color: "white",
            fontSize: "1.05rem",
            fontWeight: "700",
            cursor: "pointer",
            marginTop: "8px",
            boxShadow: "0 4px 12px rgba(10, 40, 24, 0.3)",
            transition: "all 0.3s ease"
          }}
          onClick={handleSubmit}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0f3d2e";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 16px rgba(10, 40, 24, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#0a2818";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(10, 40, 24, 0.3)";
          }}
        >
          Generate Score
        </button>
      </div>
    </div>
  );
}

export default InputForm;