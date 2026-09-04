/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

type Student = {
    id: number;
    name: string;
    answers: string[];
};

const correctAnswers = ["A", "B", "C", "A", "B"];

// 1. Calculate student score
function calculateScore(student: Student) {
    let correct = 0;

    student.answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            correct++;
        }
    });

    return correct * 20;
}

// Tambahkan score ke setiap student
const studentsWithScore = students.map(student => ({
    ...student,
    score: calculateScore(student)
}));

// 2. Get students that pass (> 70)
const passedStudents = studentsWithScore.filter(student => student.score > 70);

// 3. Find student with highest score
const highestStudent = studentsWithScore.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
});

// 4. Calculate class average score
const totalScore = studentsWithScore.reduce((total, student) => {
    return total + student.score;
}, 0);

const averageScore = totalScore / studentsWithScore.length;


// Output
console.log("Students with score:", studentsWithScore);
console.log("Passed students:", passedStudents);
console.log("Highest score:", highestStudent);
console.log("Class average:", averageScore);