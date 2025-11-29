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
        <div style={{
          padding: "16px",
          backgroundColor: "rgba(232, 245, 233, 0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
          border: "2px solid rgba(47, 133, 90, 0.5)"
        }}>
          <p style={{
            color: "#a5d6a7",
            fontSize: "0.9rem",
            fontWeight: "700",
            marginBottom: "8px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
          }}>
            Estimated Carbon Emission
          </p>
          <p style={{
            color: "#ffffff",
            fontSize: "1.8rem",
            fontWeight: "800",
            margin: 0,
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
          }}>
            {scoreData ? scoreData.carbon.toFixed(2) : "—"}
          </p>
          <p style={{
            color: "#a5d6a7",
            fontSize: "0.85rem",
            margin: "4px 0 0 0",
            fontWeight: "600",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
          }}>
            kg CO₂e
          </p>
        </div>

        <div style={{
          padding: "16px",
          backgroundColor: "rgba(255, 243, 224, 0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
          border: "2px solid rgba(255, 152, 0, 0.5)"
        }}>
          <p style={{
            color: "#ffcc80",
            fontSize: "0.9rem",
            fontWeight: "700",
            marginBottom: "8px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
          }}>
            Efficiency Rating
          </p>
          <p style={{
            color: "#ffffff",
            fontSize: "1.8rem",
            fontWeight: "800",
            margin: 0,
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.9)"
          }}>
            {scoreData ? scoreData.rating : "—"}
          </p>
          <p style={{
            color: "#ffcc80",
            fontSize: "0.85rem",
            margin: "4px 0 0 0",
            fontWeight: "600",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
          }}>
            Grade: A-D
          </p>
        </div>

        <div style={{
          padding: "16px",
          backgroundColor: "rgba(227, 242, 253, 0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
          border: "2px solid rgba(33, 150, 243, 0.5)"
        }}>
          <p style={{
            color: "#90caf9",
            fontSize: "0.9rem",
            fontWeight: "700",
            marginBottom: "8px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
          }}>
            Optimization Suggestions
          </p>
          <p style={{
            color: "#ffffff",
            fontSize: "0.95rem",
            fontWeight: "600",
            margin: 0,
            lineHeight: "1.5",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
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