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
    <div className="card">
      <h3>Input Software Metrics</h3>

      <input
        className="input-box"
        name="loc"
        placeholder="Lines of Code"
        onChange={handleChange}
      />

      <input
        className="input-box"
        name="runtime"
        placeholder="Runtime (seconds)"
        onChange={handleChange}
      />

      <input
        className="input-box"
        name="memory"
        placeholder="Memory Usage (MB)"
        onChange={handleChange}
      />

      <select
        className="input-box"
        name="cloud"
        onChange={handleChange}
      >
        <option>AWS</option>
        <option>Azure</option>
        <option>GCP</option>
      </select>

      <button className="button" onClick={handleSubmit}>Generate Score</button>
    </div>
  );
}

export default InputForm;
