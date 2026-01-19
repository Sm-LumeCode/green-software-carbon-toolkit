function ExplainabilityPanel({ breakdown, explanation }) {
  if (!breakdown) return null;

  return (
    <div>
      <h3 style={{ fontWeight: "800", marginBottom: "12px" }}>
        🧠 Why This Score?
      </h3>

      <p style={{ marginBottom: "12px" }}>{explanation}</p>

      <ul style={{ lineHeight: "1.8" }}>
        <li><strong>Runtime Energy Contribution:</strong> {breakdown.runtimeEnergy}%</li>
        <li><strong>Infrastructure Choice:</strong> {breakdown.infrastructureChoice}%</li>
        <li><strong>Application Type:</strong> {breakdown.applicationType}%</li>
        <li><strong>Cloud Carbon Intensity:</strong> {breakdown.cloudCarbonIntensity}%</li>
      </ul>
    </div>
  );
}

export default ExplainabilityPanel;
