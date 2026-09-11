/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

let highest = students[0].score;
let lowest = students[0].score;
let total = 0;

for (const student of students) {
    const score = student.score;

    total += score;

    if (score >= 90) {
        countA++;
    } else if (score >= 80) {
        countB++;
    } else if (score >= 70) {
        countC++;
    } else {
        countD++;
    }

    if (score > highest) {
        highest = score;
    }

    if (score < lowest) {
        lowest = score;
    }
}

const average = total / students.length;

console.log("A Students:", countA);
console.log("B Students:", countB);
console.log("C Students:", countC);
console.log("D Students:", countD);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average);