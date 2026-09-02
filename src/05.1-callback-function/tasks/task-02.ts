/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (let i = 0; i < scores.length; i++) {
        callback(scores[i]);
    }
}

function printScore(score: number) {
    console.log(`scores: ${score}`);
}

function showGrade(score: number) {
    if (score >= 90) {
        console.log(`score: ${score} - Grade: A`);
    } else if (score >= 80) {
        console.log(`score: ${score} - Grade: B`);
    } else if (score >= 70) {
        console.log(`score: ${score} - Grade: C`);
    } else {
        console.log(`score: ${score} - Grdae: D`);
    }
}


// implementation of callback function
processScores(scores, printScore)
processScores(scores, showGrade)