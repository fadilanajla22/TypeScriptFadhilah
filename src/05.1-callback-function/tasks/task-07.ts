/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type Student = {
    name: string;
    score: number;
    attendance: number;
};

function processStudents<T>(
    data: Student[],
    action: (student: Student) => T
): T[] {
    const result: T[] = [];

    for (let i = 0; i < data.length; i++) {
        result.push(action(data[i]));
    }

    return result;
}

// Pass / Fail
function checkAcademicSuccess(student: Student): string {
    if (student.score >= 75 && student.attendance >= 90) {
        return "Pass";
    }

    return "Fail";
}

// Academic Performance
function checkPerformance(student: Student): string {
    if (student.score >= 90) {
        return "Excellent";
    }

    if (student.score >= 75) {
        return "Good";
    }

    return "Needs Improvement";
}

// Attendance
function checkAttendance(student: Student): string {
    if (student.attendance >= 90) {
        return "Good Attendance";
    }

    return "Poor Attendance";
}

// Recommendation
function giveRecommendation(student: Student): string {
    if (student.score < 75) {
        return "Improve Academic Performance";
    }

    if (student.attendance < 90) {
        return "Improve Attendance";
    }

    if (student.score >= 90) {
        return "Excellent";
    }

    return "Good";
}

console.log("Pass/Fail:", processStudents(students, checkAcademicSuccess));
console.log("Performance:", processStudents(students, checkPerformance));
console.log("Attendance:", processStudents(students, checkAttendance));
console.log("Recommendation:", processStudents(students, giveRecommendation));