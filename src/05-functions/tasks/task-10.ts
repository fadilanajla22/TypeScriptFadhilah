/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};
function getTotalEnrollments(enrollments: Enrollment[]): number {
    return enrollments.length;
}
function getCompletedEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(
        enrollment => enrollment.completed === true
    ).length;
}
function getIncompleteEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(
        enrollment => enrollment.completed === false
    ).length;
}
function getCompletionPercentage(enrollments: Enrollment[]): number {
    const total = getTotalEnrollments(enrollments);
    const completed = getCompletedEnrollments(enrollments);

    return (completed / total) * 100;
}
function getHighestScore(enrollments: Enrollment[]): number {
    return Math.max(
        ...enrollments.map(enrollment => enrollment.score)
    );
}
function getLowestScore(enrollments: Enrollment[]): number {
    return Math.min(...enrollments.map(enrollment => enrollment.score));
}
function getAverageScore(enrollments: Enrollment[]): number {
    const totalScore = enrollments.reduce(
        (total, enrollment) => total + enrollment.score,0);
    return totalScore / enrollments.length;
}
function getPassingStudents(enrollments: Enrollment[]): string[] {
    return enrollments
        .filter(enrollment => enrollment.score >= 75)
        .map(enrollment => enrollment.student);
}
function getStudentsByCourse(
    enrollments: Enrollment[],
    course: string
): number {
    return enrollments.filter(
        enrollment => enrollment.course === course
    ).length;
}
function getAverageScoreByCourse(
    enrollments: Enrollment[],
    course: string
): number {

    const courseEnrollments = enrollments.filter(
        enrollment => enrollment.course === course
    );

    const totalScore = courseEnrollments.reduce(
        (total, enrollment) => total + enrollment.score,
        0
    );

    return totalScore / courseEnrollments.length;
}
function getTotalLearningHours(
    enrollments: Enrollment[]
): number {

    const totalMinutes = enrollments.reduce(
        (total, enrollment) => total + enrollment.duration,
        0
    );

    return totalMinutes / 60;
}
function getAverageLearningDuration(
    enrollments: Enrollment[]
): number {

    const totalDuration = enrollments.reduce(
        (total, enrollment) => total + enrollment.duration,
        0
    );

    return totalDuration / enrollments.length;
}
function printCompletionStatistics(enrollments: Enrollment[]): void {
console.log("=== COMPLETION STATISTICS ===");
console.log("Total Enrollments:", getTotalEnrollments(enrollments));
console.log("Completed Enrollments:", getCompletedEnrollments(enrollments));
console.log("Incomplete Enrollments:", getIncompleteEnrollments(enrollments));
console.log("Completion Percentage:", getCompletionPercentage(enrollments).toFixed(2) + "%");
}
function printAcademicStatistics(enrollments: Enrollment[]): void {
console.log("\n=== ACADEMIC STATISTICS ===");
console.log("Highest Score:", getHighestScore(enrollments));
console.log("Lowest Score:",getLowestScore(enrollments));
console.log("Average Score:", getAverageScore(enrollments).toFixed(2));
console.log("Passing Students:",getPassingStudents(enrollments).join(", "));
}
function printCourseStatistics(enrollments: Enrollment[]): void {
console.log("\n=== COURSE STATISTICS ===");
console.log("TypeScript Students:",getStudentsByCourse(enrollments, "TypeScript"));
console.log("TypeScript Average Score:", getAverageScoreByCourse(enrollments, "TypeScript").toFixed(2));
console.log("Database Students:", getStudentsByCourse(enrollments, "Database"));
console.log("Database Average Score:", getAverageScoreByCourse(enrollments, "Database").toFixed(2));
console.log("Backend Students:", getStudentsByCourse(enrollments, "Backend"));
console.log("Backend Average Score:", getAverageScoreByCourse(enrollments, "Backend").toFixed(2));
}
function printLearningStatistics(enrollments: Enrollment[]): void {
console.log("\n=== LEARNING STATISTICS ===");
console.log("Total Learning Hours:", getTotalLearningHours(enrollments).toFixed(2));
console.log("Average Learning Duration:", getAverageLearningDuration(enrollments).toFixed(2), "minutes");
}
printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
printCourseStatistics(enrollments);
printLearningStatistics(enrollments);