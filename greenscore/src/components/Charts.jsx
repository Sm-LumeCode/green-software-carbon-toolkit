function Charts({ scoreData }) {
  const treesNeeded = scoreData ? Math.ceil(scoreData.carbon / 0.02) : 0;
  const energyKwh = scoreData ? (scoreData.energy).toFixed(3) : 0;
  const peakPower = scoreData ? (scoreData.energy * 100).toFixed(1) : 0;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
      width: "100%"
    }}>
      <div style={{
        backgroundColor: "rgba(232, 245, 233, 0.3)",
        backdropFilter: "blur(5px)",
        padding: "24px",
        borderRadius: "12px",
        border: "2px solid rgba(47, 133, 90, 0.5)"
      }}>
        <h3 style={{
          color: "#ffffff",
          fontSize: "1.3rem",
          marginBottom: "16px",
          fontWeight: "700",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
        }}>
          🌍 Environmental Impact
        </h3>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
          <div>
            <p style={{ 
              color: "#a5d6a7", 
              fontWeight: "700", 
              fontSize: "0.9rem",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
            }}>
              Carbon Footprint
            </p>
            <p style={{ 
              color: "#ffffff", 
              fontSize: "1.5rem", 
              fontWeight: "800",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
            }}>
              {scoreData ? scoreData.carbon.toFixed(2) : "--"} kg CO₂
            </p>
          </div>
          <div>
            <p style={{ 
              color: "#a5d6a7", 
              fontWeight: "700", 
              fontSize: "0.9rem",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
            }}>
              Equivalent to
            </p>
            <p style={{ 
              color: "#ffffff", 
              fontSize: "1rem", 
              fontWeight: "600",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
            }}>
              {scoreData ? treesNeeded : "--"} tree(s) needed for offset
            </p>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: "rgba(255, 243, 224, 0.3)",
        backdropFilter: "blur(5px)",
        padding: "24px",
        borderRadius: "12px",
        border: "2px solid rgba(255, 152, 0, 0.5)"
      }}>
        <h3 style={{
          color: "#ffffff",
          fontSize: "1.3rem",
          marginBottom: "16px",
          fontWeight: "700",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
        }}>
          ⚡ Energy Consumption
        </h3>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
          <div>
            <p style={{ 
              color: "#ffcc80", 
              fontWeight: "700", 
              fontSize: "0.9rem",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
            }}>
              Total Energy Used
            </p>
            <p style={{ 
              color: "#ffffff", 
              fontSize: "1.5rem", 
              fontWeight: "800",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
            }}>
              {scoreData ? energyKwh : "--"} kWh
            </p>
          </div>
          <div>
            <p style={{ 
              color: "#ffcc80", 
              fontWeight: "700", 
              fontSize: "0.9rem",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
            }}>
              Peak Power Draw
            </p>
            <p style={{ 
              color: "#ffffff", 
              fontSize: "1rem", 
              fontWeight: "600",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
            }}>
              {scoreData ? peakPower : "--"} watts
            </p>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: "rgba(227, 242, 253, 0.3)",
        backdropFilter: "blur(5px)",
        padding: "24px",
        borderRadius: "12px",
        border: "2px solid rgba(33, 150, 243, 0.5)"
      }}>
        <h3 style={{
          color: "#ffffff",
          fontSize: "1.3rem",
          marginBottom: "16px",
          fontWeight: "700",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
        }}>
          💡 Quick Tips
        </h3>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          <li style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "600", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}>
            ✓ Optimize runtime efficiency
          </li>
          <li style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "600", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}>
            ✓ Reduce memory allocation
          </li>
          <li style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "600", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}>
            ✓ Use green cloud regions
          </li>
          <li style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: "600", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}>
            ✓ Cache frequently used data
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Charts;