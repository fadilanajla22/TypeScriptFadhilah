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

function processScores(
    scores: number[],
    callback: (score: number) => string): string[] {
    const results: string[] = [];

    for (const score of scores) {
        results.push(callback(score));
    }
    return results;
}
// 1.  Determine whether each student passed. Passing grade is 70.
function checkPassed(score: number): string {
    if (score >= 70) {
        return `${score} - Passed`;
    } else {
        return `${score} - Failed`;
    }
}
// 2. Convert each score into a grade.
function convertGrade(score: number): string {
    if (score >= 90) {
        return `${score} - Grade A`;
    } else if (score >= 80) {
        return`${score} - Grade B`;
    } else if (score >= 70) {
        return `${score} - Grade C`;
    } else {
        return `${score} - Grade D`;
    }
}
// 3. Calculate a score after adding 5 bonus points.
function addBonus(score: number): string {
    const bonusScore = score + 5;
    return `${score} + 5 = ${bonusScore}`;
}
// 4. Determine whether the score is considered excellent.
function checkExcellent(score: number): string {
    if (score > 90) {
        return `${score} - Excellent`;
    } else {
        return `${score} - Reguler`;
    }
}
console.log("=== PASS / FAILED ===");
console.log(processScores(scores, checkPassed));

console.log("=== GRADE ===");
console.log(processScores(scores, convertGrade));

console.log("=== Bonus Score ===");
console.log(processScores(scores, addBonus));

console.log("=== EXCELLENT / REGULER ===");
console.log(processScores(scores, checkExcellent));