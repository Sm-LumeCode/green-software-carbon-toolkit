function CelebrationPopup({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "16px",
          padding: "32px 36px",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          border: "3px solid #4caf50",
        }}
      >
        <h2
          style={{
            color: "#1b5e20",
            fontWeight: "900",
            marginBottom: "12px",
          }}
        >
          🌱 Excellent Work!
        </h2>

        <p
          style={{
            color: "#2e7d32",
            fontSize: "1rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Your project achieved an <strong>A-grade</strong> for carbon
          efficiency. This means your architecture, runtime behavior, and
          infrastructure choices are well optimized.
        </p>

        <p
          style={{
            color: "#33691e",
            fontSize: "0.9rem",
            marginBottom: "28px",
          }}
        >
          Most projects don’t reach this level. You did.
        </p>

        <button
          onClick={onClose}
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "#ffffff",
            fontWeight: "800",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Nice 😌
        </button>
      </div>
    </div>
  );
}

export default CelebrationPopup;
