function normalize(value, max) {
    return Math.min(100, Math.round((value / max) * 100));
}

function simulateCarbon(runtime, memory, loc, cloud) {

    
    // Measure
    const runtimeScore = normalize(runtime, 300);
    const memoryScore = normalize(memory, 800);
    const cpuScore = normalize(loc, 1500);

    let cloudScore = 50;
    if (cloud === "AWS") cloudScore = 60;
    else if (cloud === "Azure") cloudScore = 45;
    else if (cloud === "GCP") cloudScore = 30;

    // Contributers
    const contributors = {
        cpu: cpuScore,
        memory: memoryScore,
        runtime: runtimeScore,
        cloud: cloudScore
    };

    // Weighted score
    const carbonScore = Math.round(
        cpuScore * 0.25 +
        memoryScore * 0.25 +
        runtimeScore * 0.35 +
        cloudScore * 0.15
    );

    // Grade
    let grade = "A";
    if (carbonScore > 40) grade = "B";
    if (carbonScore > 60) grade = "C";
    if (carbonScore > 80) grade = "D";

    
    // Suggestions
    const suggestions = [];

    if (runtimeScore > 60) {
        suggestions.push("Use caching, batching and reduce repeated API calls");
    }

    if (memoryScore > 60) {
        suggestions.push("Stream data instead of loading full datasets into memory");
    }

    if (cpuScore > 60) {
        suggestions.push("Refactor large functions and remove duplicate logic");
    }

    if (cloudScore > 50) {
        suggestions.push("Deploy on a low-carbon cloud region like GCP or Azure");
    }

    if (suggestions.length === 0) {
        suggestions.push("Your software design is efficient. Keep it up!");
    }

    // Outputs
    return {
        carbonScore,
        grade,
        contributors,
        suggestions
    };
}

module.exports = { simulateCarbon };

