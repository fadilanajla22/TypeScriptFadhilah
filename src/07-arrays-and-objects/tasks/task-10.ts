/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

// 1. Calculate each student's score
const studentResults = submissions.map(submission => {
    let correct = 0;

    submission.answers.forEach(answer => {
        const question = questions.find(
            question => question.id === answer.questionId
        );

        if (question && question.correctAnswer === answer.answer) {
            correct++;
        }
    });

    const wrong = submission.answers.length - correct;
    const score = correct * 25;

    return {
        student: submission.student,
        correct,
        wrong,
        score
    };
});


// 2. Determine each student's correct and wrong answers
const answerResults = studentResults.map(student => ({
    student: student.student,
    correct: student.correct,
    wrong: student.wrong
}));


// 3. Calculate the average score for each category
const categoryScores: Record<string, number[]> = {};

submissions.forEach(submission => {
    submission.answers.forEach(answer => {
        const question = questions.find(
            question => question.id === answer.questionId
        );

        if (question) {
            if (!categoryScores[question.category]) {
                categoryScores[question.category] = [];
            }

            const isCorrect =
                answer.answer === question.correctAnswer;

            categoryScores[question.category].push(
                isCorrect ? 25 : 0
            );
        }
    });
});

const categoryAverage = Object.entries(categoryScores).map(
    ([category, scores]) => ({
        category,
        averageScore:
            scores.reduce((total, score) => total + score, 0) /
            scores.length
    })
);


// 4. Generate final exam analytics
const totalStudents = studentResults.length;

const totalScore = studentResults.reduce(
    (total, student) => total + student.score,
    0
);

const averageScore = totalScore / totalStudents;

const highestScore = Math.max(
    ...studentResults.map(student => student.score)
);

const lowestScore = Math.min(
    ...studentResults.map(student => student.score)
);

const passedStudents = studentResults.filter(
    student => student.score >= 75
).length;

const failedStudents = studentResults.filter(
    student => student.score < 75
).length;

const passRate = (passedStudents / totalStudents) * 100;


const analytics = {
    totalStudents,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate: Number(passRate.toFixed(2))
};


// Output
console.log("1. Student Results:", studentResults);
console.log("2. Correct & Wrong:", answerResults);
console.log("3. Category Average:", categoryAverage);
console.log("4. Final Analytics:", analytics);