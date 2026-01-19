function ScoreOutput({ scoreData }) {
  if (!scoreData) return null;

  const energyConsumption =
    typeof scoreData.energyConsumption === "number"
      ? scoreData.energyConsumption
      : 0;

  const carbonEmission =
    typeof scoreData.carbonEmission === "number"
      ? scoreData.carbonEmission
      : 0;

  const score =
    typeof scoreData.score === "number"
      ? scoreData.score
      : 0;

  const grade = scoreData.grade || "—";

  const suggestions = Array.isArray(scoreData.suggestions)
    ? scoreData.suggestions
    : [];

  return (
    <div>
      <h3
        style={{
          color: "#ffffff",
          fontSize: "1.5rem",
          marginBottom: "20px",
          fontWeight: "800",
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9)",
          letterSpacing: "0.3px",
        }}
      >
        Score Output
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Energy Consumption */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "rgba(232, 245, 233, 0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            border: "3px solid #4caf50",
          }}
        >
          <p
            style={{
              color: "#1b5e20",
              fontSize: "0.9rem",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            Estimated Energy Consumption (Benchmark-based)
          </p>
          <p
            style={{
              color: "#0a2818",
              fontSize: "1.8rem",
              fontWeight: "900",
              margin: 0,
            }}
          >
            {energyConsumption.toFixed(2)}
          </p>
          <p style={{ color: "#1b5e20", fontSize: "0.85rem" }}>kWh</p>
        </div>

        {/* Carbon Emissions */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "rgba(255, 243, 224, 0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            border: "3px solid #ff9800",
          }}
        >
          <p
            style={{
              color: "#e65100",
              fontSize: "0.9rem",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            Estimated Carbon Emissions
          </p>
          <p
            style={{
              color: "#0a2818",
              fontSize: "1.8rem",
              fontWeight: "900",
              margin: 0,
            }}
          >
            {carbonEmission.toFixed(4)}
          </p>
          <p style={{ color: "#e65100", fontSize: "0.85rem" }}>kg CO₂e</p>
        </div>

        {/* Green Score */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "rgba(227, 242, 253, 0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            border: "3px solid #2196f3",
          }}
        >
          <p
            style={{
              color: "#0d47a1",
              fontSize: "0.9rem",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            Green Efficiency Score
          </p>
          <p
            style={{
              color: "#0a2818",
              fontSize: "1.8rem",
              fontWeight: "900",
              margin: 0,
            }}
          >
            {score} / 100
          </p>
          <p style={{ color: "#0d47a1", fontSize: "0.85rem" }}>
            Grade: {grade}
          </p>
        </div>

        {/* Suggestions */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "rgba(240, 240, 240, 0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            border: "3px solid #666666",
          }}
        >
          <p
            style={{
              color: "#333333",
              fontSize: "0.9rem",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            Optimization Suggestions
          </p>

          {suggestions.length === 0 ? (
            <p style={{ fontSize: "0.9rem" }}>
              No optimization suggestions available.
            </p>
          ) : (
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {suggestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Disclaimer */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(5px)",
            borderRadius: "10px",
            border: "2px solid rgba(255, 255, 255, 0.4)",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: "600",
              margin: 0,
              textAlign: "center",
            }}
          >
            This score is based on industry benchmark simulations, not direct
            hardware-level energy measurement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScoreOutput;
