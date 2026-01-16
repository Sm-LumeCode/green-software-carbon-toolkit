function ScoreOutput({ scoreData }) {
  return (
    <div>
      <h3 style={{
        color: "#ffffff",
        fontSize: "1.5rem",
        marginBottom: "20px",
        fontWeight: "800",
        textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9)",
        letterSpacing: "0.3px"
      }}>
        Score Output
      </h3>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        {/* Carbon Emission */}
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(232, 245, 233, 0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
          border: "3px solid #4caf50"
        }}>
          <p style={{
            color: "#1b5e20",
            fontSize: "0.9rem",
            fontWeight: "800",
            marginBottom: "8px",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)"
          }}>
            Estimated Carbon Emission
          </p>
          <p style={{
            color: "#0a2818",
            fontSize: "1.8rem",
            fontWeight: "900",
            margin: 0,
            textShadow: "2px 2px 6px rgba(255, 255, 255, 0.9)"
          }}>
            {scoreData ? scoreData.carbon.toFixed(2) : "—"}
          </p>
          <p style={{
            color: "#1b5e20",
            fontSize: "0.85rem",
            margin: "4px 0 0 0",
            fontWeight: "700",
            textShadow: "1px 1px 3px rgba(255, 255, 255, 0.9)"
          }}>
            kg CO₂e
          </p>
        </div>

        {/* Efficiency Rating */}
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(255, 243, 224, 0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
          border: "3px solid #ff9800"
        }}>
          <p style={{
            color: "#e65100",
            fontSize: "0.9rem",
            fontWeight: "800",
            marginBottom: "8px",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)"
          }}>
            Efficiency Rating
          </p>
          <p style={{
            color: "#0a2818",
            fontSize: "1.8rem",
            fontWeight: "900",
            margin: 0,
            textShadow: "2px 2px 6px rgba(255, 255, 255, 0.9)"
          }}>
            {scoreData ? scoreData.rating : "—"}
          </p>
          <p style={{
            color: "#e65100",
            fontSize: "0.85rem",
            margin: "4px 0 0 0",
            fontWeight: "700",
            textShadow: "1px 1px 3px rgba(255, 255, 255, 0.9)"
          }}>
            Grade: A-D
          </p>
        </div>

        {/* Suggestions */}
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(227, 242, 253, 0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
          border: "3px solid #2196f3"
        }}>
          <p style={{
            color: "#0d47a1",
            fontSize: "0.9rem",
            fontWeight: "800",
            marginBottom: "8px",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)"
          }}>
            Optimization Suggestions
          </p>
          <p style={{
            color: "#0a2818",
            fontSize: "0.95rem",
            fontWeight: "700",
            margin: 0,
            lineHeight: "1.5",
            textShadow: "1px 1px 3px rgba(255, 255, 255, 0.9)"
          }}>
            {scoreData 
              ? scoreData.suggestions 
              : "Generate a score to see personalized recommendations for reducing your carbon footprint."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScoreOutput;