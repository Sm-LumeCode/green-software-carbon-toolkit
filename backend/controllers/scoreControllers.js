function simulateCarbon(runtime, memory, loc) {
    // Simple formulae
    const energy = (runtime * memory * 0.001) + (loc * 0.0001);
    const carbon = energy * 0.5; // cloud factor

    // Simple rating
    let rating;
    if (carbon < 10) {
        rating = "A";
    } else if (carbon > 10 && carbon < 20) {
        rating = "B";
    } else if (carbon > 20 && carbon < 35) {
        rating = "C";
    } else {
        rating = "D";
    }

    // Conditional suggestions
    let suggestions = [];
    if (rating === "C" || rating === "D") {
        if (runtime * memory * 0.001 > 10) {
            suggestions.push("Optimize loops to reduce runtime");
        }
        if (memory > 500) {
            suggestions.push("Reduce memory usage");
        }
        if (loc > 1000) {
            suggestions.push("Remove unused code to reduce load");
        }

        if (suggestions.length === 0) {
            suggestions.push("Review your code for efficiency improvements.");
        }

        suggestions = suggestions.join(" and ");
    } else {
        suggestions = "Your code is efficient!";
    }

    return {
        runtime,
        memory,
        loc,
        energy,
        carbon,
        rating,
        suggestions
    };
}

// Export so routes can use it
module.exports = { simulateCarbon };