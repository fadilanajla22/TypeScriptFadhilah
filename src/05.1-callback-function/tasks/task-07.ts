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

type Student = {
    name: string
    score: number
    attendance: number
}

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudents<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {
    return arr.map(callback);
}

console.log(processStudents(students, s => s.score >= 75 && s.attendance >= 90));

console.log(processStudents(students, s =>
    s.score >= 90 ? "Excellent" :
    s.score >= 75 ? "Good" : "Needs Improvement"
));

console.log(processStudents(students, s =>
    s.attendance >= 90 ? "Good Attendance" : "Poor Attendance"
));

console.log(processStudents(students, s =>
    s.score >= 90 && s.attendance >= 90 ? "Excellent" :
    s.score >= 75 && s.attendance >= 90 ? "Good" :
    s.score >= 75 ? "Improve Attendance" :
    "Improve Academic Performance"
));