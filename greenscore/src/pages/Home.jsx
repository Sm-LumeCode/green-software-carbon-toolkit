import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        color: "#22543D"
      }}
    >
      <h1>Green Software Carbon Efficiency Toolkit</h1>
      <p style={{ marginTop: "10px" }}>
        Simulated carbon scoring for software applications
      </p>

      <div style={{ marginTop: "25px" }}>
        <button
          className="button"
          onClick={() => navigate("/score")}
          style={{ marginRight: "10px" }}
        >
          Start Scoring
        </button>

        <button
          className="button"
          onClick={() => navigate("/about")}
        >
          About Us
        </button>
      </div>
    </div>
  );
}

export default Home;