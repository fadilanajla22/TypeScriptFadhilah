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

// 1. Total enrollments
function getTotalEnrollments(enrollments: Enrollment[]): number {
    return enrollments.length;
}

// 2. Completed enrollments
function getCompletedEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(enrollment => enrollment.completed).length;
}

// 3. Incomplete enrollments
function getIncompleteEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(enrollment => !enrollment.completed).length;
}

// 4. Completion percentage
function getCompletionPercentage(enrollments: Enrollment[]): number {
    return (
        getCompletedEnrollments(enrollments) /
        getTotalEnrollments(enrollments)
    ) * 100;
}

// 5. Highest score
function getHighestScore(enrollments: Enrollment[]): number {
    return Math.max(...enrollments.map(enrollment => enrollment.score));
}

// 6. Lowest score
function getLowestScore(enrollments: Enrollment[]): number {
    return Math.min(...enrollments.map(enrollment => enrollment.score));
}

// 7. Average score
function getAverageScore(enrollments: Enrollment[]): number {
    const totalScore = enrollments.reduce(
        (total, enrollment) => total + enrollment.score,
        0
    );

    return totalScore / getTotalEnrollments(enrollments);
}

// 8. Students with passing scores
function getPassingStudents(enrollments: Enrollment[]): number {
    return enrollments.filter(
        enrollment => enrollment.score >= 75
    ).length;
}

// 9. Number of students in each course
function getStudentsPerCourse(enrollments: Enrollment[]) {
    return {
        TypeScript: enrollments.filter(
            enrollment => enrollment.course === "TypeScript"
        ).length,

        Database: enrollments.filter(
            enrollment => enrollment.course === "Database"
        ).length,

        Backend: enrollments.filter(
            enrollment => enrollment.course === "Backend"
        ).length
    };
}

// 10. Average score for each course
function getAverageScorePerCourse(enrollments: Enrollment[]) {
    const typescript = enrollments.filter(
        enrollment => enrollment.course === "TypeScript"
    );

    const database = enrollments.filter(
        enrollment => enrollment.course === "Database"
    );

    const backend = enrollments.filter(
        enrollment => enrollment.course === "Backend"
    );

    return {
        TypeScript:
            typescript.reduce(
                (total, enrollment) => total + enrollment.score,
                0
            ) / typescript.length,

        Database:
            database.reduce(
                (total, enrollment) => total + enrollment.score,
                0
            ) / database.length,

        Backend:
            backend.reduce(
                (total, enrollment) => total + enrollment.score,
                0
            ) / backend.length
    };
}

// 11. Total learning hours
function getTotalLearningHours(enrollments: Enrollment[]): number {
    return enrollments.reduce(
        (total, enrollment) => total + enrollment.duration,
        0
    );
}

// 12. Average learning duration
function getAverageLearningDuration(enrollments: Enrollment[]): number {
    return (
        getTotalLearningHours(enrollments) /
        getTotalEnrollments(enrollments)
    );
}

// 13. Display completion and academic statistics
function printAcademicReport(enrollments: Enrollment[]): void {
    console.log("=== Completion Statistics ===");
    console.log("Total Enrollments:", getTotalEnrollments(enrollments));
    console.log(
        "Completed Enrollments:",
        getCompletedEnrollments(enrollments)
    );
    console.log(
        "Incomplete Enrollments:",
        getIncompleteEnrollments(enrollments)
    );
    console.log(
        "Completion Percentage:",
        getCompletionPercentage(enrollments) + "%"
    );

    console.log("\n=== Academic Statistics ===");
    console.log("Highest Score:", getHighestScore(enrollments));
    console.log("Lowest Score:", getLowestScore(enrollments));
    console.log("Average Score:", getAverageScore(enrollments));
    console.log(
        "Students With Passing Scores:",
        getPassingStudents(enrollments)
    );
}

// 14. Display course and learning statistics
function printCourseReport(enrollments: Enrollment[]): void {
    console.log("\n=== Course Statistics ===");
    console.log("Students Per Course:", getStudentsPerCourse(enrollments));
    console.log(
        "Average Score Per Course:",
        getAverageScorePerCourse(enrollments)
    );

    console.log("\n=== Learning Statistics ===");
    console.log(
        "Total Learning Hours:",
        getTotalLearningHours(enrollments)
    );
    console.log(
        "Average Learning Duration:",
        getAverageLearningDuration(enrollments)
    );
}

// Call void functions
printAcademicReport(enrollments);
printCourseReport(enrollments);