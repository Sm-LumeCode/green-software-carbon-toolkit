// ==============================
// BENCHMARK DATA
// ==============================
const BENCHMARKS = {
  frontend: {
    small: { energy: 0.4, carbon: 0.02 },
    medium: { energy: 1.0, carbon: 0.06 },
    large: { energy: 2.5, carbon: 0.18 },
  },
  backend: {
    small: { energy: 0.8, carbon: 0.05 },
    medium: { energy: 2.2, carbon: 0.14 },
    large: { energy: 5.5, carbon: 0.35 },
  },
  fullstack: {
    small: { energy: 1.2, carbon: 0.07 },
    medium: { energy: 3.5, carbon: 0.2 },
    large: { energy: 8.5, carbon: 0.55 },
  },
  ml: {
    small: { energy: 3.0, carbon: 0.25 },
    medium: { energy: 9.0, carbon: 0.75 },
    large: { energy: 22.0, carbon: 1.9 },
  },
  mobile: {
    small: { energy: 0.6, carbon: 0.04 },
    medium: { energy: 1.6, carbon: 0.1 },
    large: { energy: 4.0, carbon: 0.28 },
  },
  pipeline: {
    small: { energy: 2.0, carbon: 0.18 },
    medium: { energy: 6.5, carbon: 0.6 },
    large: { energy: 15.0, carbon: 1.4 },
  },
};

// ==============================
// CLOUD CARBON FACTORS
// ==============================
const CLOUD_FACTORS = {
  AWS: 1.0,
  Azure: 0.95,
  GCP: 0.85,
};

// ==============================
// SCORE HELPERS
// ==============================
function computeScoreFromEnergy(energy) {
  const maxEnergy = 22;
  let score = Math.round(100 - (energy / maxEnergy) * 100);
  return Math.max(15, Math.min(score, 100));
}

function calculateGrade(score) {
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  if (score >= 40) return "D";
  return "E";
}

function computeReduction(baseCarbon, newCarbon) {
  if (baseCarbon <= 0) return 0;

  let percent = ((baseCarbon - newCarbon) / baseCarbon) * 100;
  percent = Math.round(percent);

  // Prevent meaningless 1–3% noise
  if (percent > 0 && percent < 5) percent = 5;

  return Math.max(0, percent);
}

// ==============================
// SUGGESTION ENGINE (NEVER EMPTY)
// ==============================
function generateSuggestions({ score, projectType }) {
  const s = [];

  if (score >= 85)
    s.push(
      "Excellent energy efficiency. Maintain architecture discipline as scale increases."
    );
  else if (score >= 70)
    s.push(
      "Good efficiency, but further optimization in infrastructure and runtime can improve sustainability."
    );
  else if (score >= 55)
    s.push(
      "Moderate efficiency. Focus on reducing runtime overhead and improving deployment efficiency."
    );
  else if (score >= 40)
    s.push(
      "High inefficiency detected. Address compute utilization and architectural bottlenecks."
    );
  else
    s.push(
      "Very high energy and carbon impact. A redesign is strongly recommended for sustainability."
    );

  if (projectType === "ml")
    s.push(
      "Apply model pruning, mixed precision, and batching to reduce computational cost."
    );

  if (projectType === "backend" || projectType === "pipeline")
    s.push(
      "Autoscaling and aggressive idle shutdown can significantly reduce wasted compute."
    );

  return s;
}

// ==============================
// MAIN CONTROLLER
// ==============================
function simulateCarbon(req, res) {
  try {
    const { projectType, projectSize, cloud } = req.body;

    if (
      !BENCHMARKS[projectType] ||
      !BENCHMARKS[projectType][projectSize]
    ) {
      return res.status(400).json({
        error: "Unsupported project type or size",
      });
    }

    const base = BENCHMARKS[projectType][projectSize];
    const cloudFactor = CLOUD_FACTORS[cloud] || 1.0;

    // ==============================
    // BASE METRICS
    // ==============================
    const energyConsumption = Number(
      (base.energy * cloudFactor).toFixed(2)
    );

    const carbonEmission = Number(
      (base.carbon * cloudFactor).toFixed(4)
    );

    const score = computeScoreFromEnergy(energyConsumption);
    const grade = calculateGrade(score);

    // ==============================
    // EXPLAINABILITY BREAKDOWN
    // ==============================
    const breakdown = {
      runtimeEnergy: 42,
      infrastructureChoice: 33,
      applicationType: 15,
      cloudCarbonIntensity: 10,
    };

    // ==============================
    // COMPARATIVE ANALYSIS (REAL)
    // ==============================
    const alternatives = [];
    const baseEnergy = energyConsumption;
    const baseCarbon = carbonEmission;

    // 1️⃣ Move to greener cloud
    if (cloud !== "GCP") {
      const e = Number((baseEnergy * CLOUD_FACTORS.GCP).toFixed(2));
      const c = Number((baseCarbon * CLOUD_FACTORS.GCP).toFixed(4));

      alternatives.push({
        title: `${projectType} on GCP`,
        currentScore: score,
        alternativeScore: computeScoreFromEnergy(e),
        carbonReduction: computeReduction(baseCarbon, c),
        reason:
          "GCP regions use a higher renewable energy mix, reducing carbon intensity without code changes.",
      });
    }

    // 2️⃣ Autoscaling
    {
      const e = Number((baseEnergy * 0.7).toFixed(2));
      const c = Number((baseCarbon * 0.65).toFixed(4));

      alternatives.push({
        title: "Autoscaling + idle shutdown",
        currentScore: score,
        alternativeScore: computeScoreFromEnergy(e),
        carbonReduction: computeReduction(baseCarbon, c),
        reason:
          "Dynamic scaling and idle shutdown eliminate wasted compute during low-traffic periods.",
      });
    }

    // 3️⃣ Architecture optimization
    {
      const e = Number((baseEnergy * 0.6).toFixed(2));
      const c = Number((baseCarbon * 0.6).toFixed(4));

      alternatives.push({
        title: "Optimized architecture & caching",
        currentScore: score,
        alternativeScore: computeScoreFromEnergy(e),
        carbonReduction: computeReduction(baseCarbon, c),
        reason:
          "Efficient data access and caching reduce redundant computation and energy usage.",
      });
    }

    // 4️⃣ ML-specific optimization
    if (projectType === "ml") {
      const e = Number((baseEnergy * 0.5).toFixed(2));
      const c = Number((baseCarbon * 0.5).toFixed(4));

      alternatives.push({
        title: "Model pruning & mixed precision",
        currentScore: score,
        alternativeScore: computeScoreFromEnergy(e),
        carbonReduction: computeReduction(baseCarbon, c),
        reason:
          "Reducing model complexity lowers floating-point operations while preserving accuracy.",
      });
    }

    // ==============================
    // FINAL RESPONSE
    // ==============================
    return res.json({
      energyConsumption,
      carbonEmission,
      score,
      grade,
      suggestions: generateSuggestions({ score, projectType }),
      breakdown,
      alternatives,
      explanation:
        "Score is computed from benchmark energy usage adjusted by cloud carbon intensity and application characteristics.",
    });
  } catch (err) {
    console.error("Simulation error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { simulateCarbon };
