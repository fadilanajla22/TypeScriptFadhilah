/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function analyzeScores(
    scores: number[],
    callback: (score: number) => string
): string[] {
    const results: string[] = [];

    for (const score of scores) {
        results.push(callback(score));
    }

    return results;
}

// 1. Determine Pass/Fail
function checkPassed(score: number): string {
    return score >= 70 ? "Passed" : "Failed";
}

// 2. Convert score into grade
function getGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "D";
    }
}

// 3. Add 5 bonus points
function addBonus(score: number): string {
    return String(score + 5);
}

// 4. Determine Excellent/Regular
function checkExcellent(score: number): string {
    return score > 90 ? "Excellent" : "Reguler";
}

// Menjalankan callback
console.log("Pass/Fail:", analyzeScores(scores, checkPassed));
console.log("Grades:", analyzeScores(scores, getGrade));
console.log("Bonus Scores:", analyzeScores(scores, addBonus));
console.log("Status:", analyzeScores(scores, checkExcellent));