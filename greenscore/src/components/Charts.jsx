function Charts({ scoreData }) {
  if (!scoreData) return null;

  const energyConsumption =
    typeof scoreData.energyConsumption === "number"
      ? scoreData.energyConsumption
      : 0;

  const carbonEmission =
    typeof scoreData.carbonEmission === "number"
      ? scoreData.carbonEmission
      : 0;

  const treesNeeded = Math.ceil(carbonEmission / 0.02);
  const energyKwh = energyConsumption.toFixed(3);
  const peakPower = (energyConsumption * 100).toFixed(1);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        width: "100%",
      }}
    >
      {/* Environmental Impact Card */}
      <div
        style={{
          backgroundColor: "transparent",
          padding: "24px",
          borderRadius: "12px",
          border: "3px solid #4caf50",
        }}
      >
        <h3
          style={{
            color: "#0a2818",
            fontSize: "1.3rem",
            marginBottom: "16px",
            fontWeight: "800",
            textShadow: "2px 2px 6px rgba(255, 255, 255, 1)",
          }}
        >
          🌍 Environmental Impact
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <p
              style={{
                color: "#1b5e20",
                fontWeight: "800",
                fontSize: "0.9rem",
              }}
            >
              Carbon Footprint
            </p>
            <p
              style={{
                color: "#0a2818",
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
            >
              {carbonEmission.toFixed(4)} kg CO₂e
            </p>
          </div>

          <div>
            <p
              style={{
                color: "#1b5e20",
                fontWeight: "800",
                fontSize: "0.9rem",
              }}
            >
              Equivalent Offset
            </p>
            <p
              style={{
                color: "#0a2818",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              {treesNeeded} tree(s) required
            </p>
          </div>
        </div>
      </div>

      {/* Energy Consumption Card */}
      <div
        style={{
          backgroundColor: "transparent",
          padding: "24px",
          borderRadius: "12px",
          border: "3px solid #ff9800",
        }}
      >
        <h3
          style={{
            color: "#0a2818",
            fontSize: "1.3rem",
            marginBottom: "16px",
            fontWeight: "800",
          }}
        >
          ⚡ Energy Consumption
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <p
              style={{
                color: "#e65100",
                fontWeight: "800",
                fontSize: "0.9rem",
              }}
            >
              Total Energy Used
            </p>
            <p
              style={{
                color: "#0a2818",
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
            >
              {energyKwh} kWh
            </p>
          </div>

          <div>
            <p
              style={{
                color: "#e65100",
                fontWeight: "800",
                fontSize: "0.9rem",
              }}
            >
              Estimated Peak Power
            </p>
            <p
              style={{
                color: "#0a2818",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              {peakPower} watts
            </p>
          </div>
        </div>
      </div>

      {/* Optimization Tips Card */}
      <div
        style={{
          backgroundColor: "transparent",
          padding: "24px",
          borderRadius: "12px",
          border: "3px solid #2196f3",
        }}
      >
        <h3
          style={{
            color: "#0a2818",
            fontSize: "1.3rem",
            marginBottom: "16px",
            fontWeight: "800",
          }}
        >
          💡 Quick Tips
        </h3>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <li>✓ Reduce unnecessary background tasks</li>
          <li>✓ Optimize resource usage</li>
          <li>✓ Prefer low-carbon cloud regions</li>
          <li>✓ Cache frequently accessed data</li>
        </ul>
      </div>
    </div>
  );
}

export default Charts;
