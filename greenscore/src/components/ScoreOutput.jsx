function ScoreOutput() {
  return (
    <div>
      <h3 style={{
        color: "#0a2818",
        fontSize: "1.5rem",
        marginBottom: "20px",
        fontWeight: "700"
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
          backgroundColor: "rgba(232, 245, 233, 0.5)",
          borderRadius: "10px",
          border: "2px solid rgba(47, 133, 90, 0.3)"
        }}>
          <p style={{
            color: "#2F855A",
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "8px"
          }}>
            Estimated Carbon Emission
          </p>
          <p style={{
            color: "#0a2818",
            fontSize: "1.8rem",
            fontWeight: "800",
            margin: 0
          }}>
            —
          </p>
          <p style={{
            color: "#2F855A",
            fontSize: "0.85rem",
            margin: "4px 0 0 0"
          }}>
            kg CO₂e
          </p>
        </div>

        {/* Efficiency Rating */}
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(255, 243, 224, 0.5)",
          borderRadius: "10px",
          border: "2px solid rgba(255, 152, 0, 0.3)"
        }}>
          <p style={{
            color: "#f57c00",
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "8px"
          }}>
            Efficiency Rating
          </p>
          <p style={{
            color: "#0a2818",
            fontSize: "1.8rem",
            fontWeight: "800",
            margin: 0
          }}>
            —
          </p>
          <p style={{
            color: "#f57c00",
            fontSize: "0.85rem",
            margin: "4px 0 0 0"
          }}>
            Grade: A-F
          </p>
        </div>

        {/* Suggestions */}
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(227, 242, 253, 0.5)",
          borderRadius: "10px",
          border: "2px solid rgba(33, 150, 243, 0.3)"
        }}>
          <p style={{
            color: "#1976d2",
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "8px"
          }}>
            Optimization Suggestions
          </p>
          <p style={{
            color: "#0a2818",
            fontSize: "0.95rem",
            fontWeight: "500",
            margin: 0,
            lineHeight: "1.5"
          }}>
            Generate a score to see personalized recommendations for reducing your carbon footprint.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScoreOutput;