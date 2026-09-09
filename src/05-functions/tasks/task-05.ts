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

function findHighestScore(scores: number[]): number {
  return Math.max(...scores);
}

function findLowestScore(scores: number[]): number {
  return Math.min(...scores);
}

function calculateAverage(scores: number[]): number {
  let total = 0;

  for (const score of scores) {
    total += score;
  }

  return total / scores.length;
}

function countPassingStudents(scores: number[]): number {
  let count = 0;

  for (const score of scores) {
    if (score >= 75) {
      count++;
    }
  }

  return count;
}

function printScoreReport(scores: number[]): void {
  console.log("=== Backend Development Score Report ===");
  console.log("Highest Score:", findHighestScore(scores));
  console.log("Lowest Score:", findLowestScore(scores));
  console.log("Average Score:", calculateAverage(scores));
  console.log("Passing Students:", countPassingStudents(scores));
}

printScoreReport(scores);