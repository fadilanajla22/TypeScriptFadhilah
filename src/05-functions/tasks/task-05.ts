/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

// 1. Find highest score
function findHighest(scores: number[]): number {
    return Math.max(...scores);
}

// 2. Find lowest score
function findLowest(scores: number[]): number {
    return Math.min(...scores);
}

// 3. Find average score
function findAverage(scores: number[]): number {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// 4. Count passing students
function countPassing(scores: number[]): number {
    return scores.filter(score => score >= 75).length;
}

// Display complete report
function displayReport(scores: number[]): void {
    console.log("Highest Score:", findHighest(scores));
    console.log("Lowest Score:", findLowest(scores));
    console.log("Average Score:", findAverage(scores));
    console.log("Passing Students:", countPassing(scores));
}

// Call the function
displayReport(scores);