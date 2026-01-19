function ComparativeAnalysis({ alternatives }) {
  if (!Array.isArray(alternatives) || alternatives.length === 0) return null;

  return (
    <div>
      <h3
        style={{
          color: "#ffffff",
          fontWeight: "800",
          fontSize: "1.4rem",
          textShadow: "3px 3px 10px rgba(0, 0, 0, 0.9)",
          marginBottom: "20px",
        }}
      >
        🔍 Comparative Analysis
      </h3>

      {alternatives.map((alt, idx) => {
        // FIX: Use carbonReduction (not carbonReductionPercent)
        const reduction =
          typeof alt.carbonReduction === "number" ? alt.carbonReduction : 0;

        return (
          <div
            key={idx}
            style={{
              marginTop: "16px",
              padding: "20px",
              borderRadius: "12px",
              border: "3px solid #4caf50",
              backgroundColor: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(5px)",
            }}
          >
            <p
              style={{
                color: "#0a2818",
                fontWeight: "800",
                fontSize: "1.1rem",
                marginBottom: "12px",
                textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)",
              }}
            >
              {alt.title}
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "12px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  Current Score
                </p>
                <p
                  style={{
                    color: "#0a2818",
                    fontSize: "1.4rem",
                    fontWeight: "900",
                    margin: 0,
                  }}
                >
                  {alt.currentScore}
                </p>
              </div>

              <div>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  Alternative Score
                </p>
                <p
                  style={{
                    color: "#0a2818",
                    fontSize: "1.4rem",
                    fontWeight: "900",
                    margin: 0,
                  }}
                >
                  {alt.alternativeScore}
                </p>
              </div>
            </div>

            <p
              style={{
                color: "#1b5e20",
                fontWeight: "800",
                fontSize: "1.1rem",
                marginBottom: "12px",
                textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)",
              }}
            >
              ↓ Carbon reduced by ≈{reduction}%
            </p>

            <p
              style={{
                color: "#0a2818",
                fontSize: "0.95rem",
                fontWeight: "600",
                lineHeight: "1.5",
                textShadow: "1px 1px 3px rgba(255, 255, 255, 0.9)",
              }}
            >
              <strong>Reason:</strong> {alt.reason}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ComparativeAnalysis;
