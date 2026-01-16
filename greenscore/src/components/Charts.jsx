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
      {/* Environmental Impact Card */}
      <div style={{
        backgroundColor: "transparent",
        padding: "24px",
        borderRadius: "12px",
        border: "3px solid #4caf50"
      }}>
        <h3 style={{
          color: "#0a2818",
          fontSize: "1.3rem",
          marginBottom: "16px",
          fontWeight: "800",
          textShadow: "2px 2px 6px rgba(255, 255, 255, 1)"
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
              color: "#1b5e20", 
              fontWeight: "800", 
              fontSize: "0.9rem",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
            }}>
              Carbon Footprint
            </p>
            <p style={{ 
              color: "#0a2818", 
              fontSize: "1.5rem", 
              fontWeight: "900",
              textShadow: "2px 2px 6px rgba(255, 255, 255, 1)"
            }}>
              {scoreData ? scoreData.carbon.toFixed(2) : "--"} kg CO₂
            </p>
          </div>
          <div>
            <p style={{ 
              color: "#1b5e20", 
              fontWeight: "800", 
              fontSize: "0.9rem",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
            }}>
              Equivalent to
            </p>
            <p style={{ 
              color: "#0a2818", 
              fontSize: "1rem", 
              fontWeight: "700",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
            }}>
              {scoreData ? treesNeeded : "--"} tree(s) needed for offset
            </p>
          </div>
        </div>
      </div>

      {/* Energy Consumption Card */}
      <div style={{
        backgroundColor: "transparent",
        padding: "24px",
        borderRadius: "12px",
        border: "3px solid #ff9800"
      }}>
        <h3 style={{
          color: "#0a2818",
          fontSize: "1.3rem",
          marginBottom: "16px",
          fontWeight: "800",
          textShadow: "2px 2px 6px rgba(255, 255, 255, 1)"
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
              color: "#e65100", 
              fontWeight: "800", 
              fontSize: "0.9rem",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
            }}>
              Total Energy Used
            </p>
            <p style={{ 
              color: "#0a2818", 
              fontSize: "1.5rem", 
              fontWeight: "900",
              textShadow: "2px 2px 6px rgba(255, 255, 255, 1)"
            }}>
              {scoreData ? energyKwh : "--"} kWh
            </p>
          </div>
          <div>
            <p style={{ 
              color: "#e65100", 
              fontWeight: "800", 
              fontSize: "0.9rem",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
            }}>
              Peak Power Draw
            </p>
            <p style={{ 
              color: "#0a2818", 
              fontSize: "1rem", 
              fontWeight: "700",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
            }}>
              {scoreData ? peakPower : "--"} watts
            </p>
          </div>
        </div>
      </div>

      {/* Optimization Tips Card */}
      <div style={{
        backgroundColor: "transparent",
        padding: "24px",
        borderRadius: "12px",
        border: "3px solid #2196f3"
      }}>
        <h3 style={{
          color: "#0a2818",
          fontSize: "1.3rem",
          marginBottom: "16px",
          fontWeight: "800",
          textShadow: "2px 2px 6px rgba(255, 255, 255, 1)"
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
          <li style={{ 
            color: "#0a2818", 
            fontSize: "0.95rem", 
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
          }}>
            ✓ Optimize runtime efficiency
          </li>
          <li style={{ 
            color: "#0a2818", 
            fontSize: "0.95rem", 
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
          }}>
            ✓ Reduce memory allocation
          </li>
          <li style={{ 
            color: "#0a2818", 
            fontSize: "0.95rem", 
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
          }}>
            ✓ Use green cloud regions
          </li>
          <li style={{ 
            color: "#0a2818", 
            fontSize: "0.95rem", 
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 1)"
          }}>
            ✓ Cache frequently used data
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Charts;