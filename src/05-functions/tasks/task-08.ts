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

type Submit = {
  student: string;
  submitted: boolean;
  score: number;
};

// 1. Total students
function getTotalStudents(submissions: Submit[]): number {
    return submissions.length;
}

// 2. Submitted assignments
function getSubmittedAssignments(submissions: Submit[]): number {
    return submissions.filter(submission => submission.submitted).length;
}

// 3. Missing assignments
function getMissingAssignments(submissions: Submit[]): number {
    return submissions.filter(submission => !submission.submitted).length;
}

// 4. Passed students
function getPassedStudents(submissions: Submit[]): number {
    return submissions.filter(
        submission => submission.submitted && submission.score >= PassingScore
    ).length;
}

// 5. Students requiring revision
function getStudentsRequiringRevision(submissions: Submit[]): number {
    return submissions.filter(
        submission => submission.submitted && submission.score < PassingScore
    ).length;
}

// 6. Average score
function getAverageScore(submissions: Submit[]): number {
    const totalScore = submissions.reduce(
        (total, submission) => total + submission.score,
        0
    );

    return totalScore / submissions.length;
}

// 7. Highest score
function getHighestScore(submissions: Submit[]): number {
    return Math.max(...submissions.map(submission => submission.score));
}

// 8. Lowest score
function getLowestScore(submissions: Submit[]): number {
    return Math.min(...submissions.map(submission => submission.score));
}

// Void function: display report
function displayReport(submissions: Submit[]): void {
    console.log("Total Students:", getTotalStudents(submissions));
    console.log("Submitted Assignments:", getSubmittedAssignments(submissions));
    console.log("Missing Assignments:", getMissingAssignments(submissions));
    console.log("Passed Students:", getPassedStudents(submissions));
    console.log(
        "Students Requiring Revision:",
        getStudentsRequiringRevision(submissions)
    );
    console.log("Average Score:", getAverageScore(submissions));
    console.log("Highest Score:", getHighestScore(submissions));
    console.log("Lowest Score:", getLowestScore(submissions));
}

// Display report
displayReport(submissions);