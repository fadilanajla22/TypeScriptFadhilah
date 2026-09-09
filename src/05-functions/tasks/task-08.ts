/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];
const PassingScore = 75;

type submit = {
  student: string;
  submitted: boolean;
  score: number;
};
function getTotalStudents(submission: submit[]){
    return submission.length;
}
function getSubmitedCount(submission: submit[]) {
  return submission.filter(item => item.submitted === true).length;
}
function getMissingCount(submission: submit[]){
    return submission.filter(item => item.submitted === false).length;
}
function getPassedCount(submission: submit[]){
    return submission.filter(
        item => item.submitted === true && item.score >= PassingScore).length;
    
}
function getRevisionCount(submission: submit[]) {
    return submission.filter(item => item.submitted === true && item.score < PassingScore).length;
}
function getAverageScore(submission: submit[]) {
    const totalScore = submission.reduce((total, item) => total + item.score, 0);
    return totalScore / submission.length;
}

function getHighestScore(submission: submit[]) {
    return Math.max(...submission.map(item => item.score));
}

function getLowestScore(submission: submit[]) {
    return Math.min(...submission.map(item => item.score));
}
function displayReport(submission: submit[]) {
    console.log("===== ASSIGNMENT REPORT =====");
    console.log("Total students:", getTotalStudents(submission));
    console.log("Submitted assignments:", getSubmitedCount(submission));
    console.log("Missing assignments:", getMissingCount(submission));
    console.log("Passed students:", getPassedCount(submission));
    console.log("Students requiring revision:", getRevisionCount(submission));
    console.log("Average score:", getAverageScore(submission));
    console.log("Highest score:", getHighestScore(submission));
    console.log("Lowest score:", getLowestScore(submission));
}

displayReport(submissions);