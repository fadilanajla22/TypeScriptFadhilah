import { log } from "node:console";

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
    for (const score of scores){
        callback(score);
    }
    // implementation
}

function printScore(score: number): void {
    console.log(`Score: ${score}`);
    // implementation
}

function showGrade(score: number): void {
    if (score >= 90){
        console.log(`Score: ${score} - Grade: A`);
    } else if (score >= 80) {
        console.log(`Score: ${score} - Grade: B`);
    } else if (score >= 70) {
        console.log(`Score: ${score} - Grade: C`);
    } else {
        console.log(`Score: ${score} - Grade: D`);
    }
    // implementation
}


// implementation of callback function
processScores(scores, printScore)
processScores(scores, showGrade)