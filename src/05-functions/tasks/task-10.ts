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

// 1. Total enrollments
function getTotalEnrollments(data: typeof enrollments): number {
    return data.length;
}

// 2. Completed enrollments
function getCompletedEnrollments(data: typeof enrollments): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].completed === true) {
            count++;
        }
    }

    return count;
}

// 3. Incomplete enrollments
function getIncompleteEnrollments(data: typeof enrollments): number {
    return getTotalEnrollments(data) - getCompletedEnrollments(data);
}

// 4. Completion percentage
function getCompletionPercentage(data: typeof enrollments): number {
    return (getCompletedEnrollments(data) / getTotalEnrollments(data)) * 100;
}

// 5. Highest score
function getHighestScore(data: typeof enrollments): number {
    let highest = data[0].score;

    for (let i = 1; i < data.length; i++) {
        if (data[i].score > highest) {
            highest = data[i].score;
        }
    }

    return highest;
}

// 6. Lowest score
function getLowestScore(data: typeof enrollments): number {
    let lowest = data[0].score;

    for (let i = 1; i < data.length; i++) {
        if (data[i].score < lowest) {
            lowest = data[i].score;
        }
    }

    return lowest;
}

// 7. Average score
function getAverageScore(data: typeof enrollments): number {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].score;
    }

    return total / getTotalEnrollments(data);
}

// 8. Students with passing scores
function getPassingStudents(data: typeof enrollments): string[] {
    let students: string[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].score >= 75) {
            students.push(data[i].student);
        }
    }

    return students;
}

// 9. Number of students in each course
function getCourseEnrollmentCount(
    data: typeof enrollments,
    course: string
): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].course === course) {
            count++;
        }
    }

    return count;
}

// 10. Average score for each course
function getCourseAverageScore(
    data: typeof enrollments,
    course: string
): number {
    let total = 0;
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].course === course) {
            total += data[i].score;
            count++;
        }
    }

    return total / count;
}

// 11. Total learning hours
function getTotalLearningHours(data: typeof enrollments): number {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].duration;
    }

    return total;
}

// 12. Average learning duration
function getAverageLearningDuration(data: typeof enrollments): number {
    return getTotalLearningHours(data) / getTotalEnrollments(data);
}

// Void function 1: display completion statistics
function printCompletionStatistics(data: typeof enrollments): void {
    console.log("=== COMPLETION STATISTICS ===");
    console.log("Total Enrollments:", getTotalEnrollments(data));
    console.log("Completed Enrollments:", getCompletedEnrollments(data));
    console.log("Incomplete Enrollments:", getIncompleteEnrollments(data));
    console.log(
        "Completion Percentage:",
        getCompletionPercentage(data).toFixed(2) + "%"
    );
}

// Void function 2: display academic statistics
function printAcademicStatistics(data: typeof enrollments): void {
    console.log("\n=== ACADEMIC STATISTICS ===");
    console.log("Highest Score:", getHighestScore(data));
    console.log("Lowest Score:", getLowestScore(data));
    console.log("Average Score:", getAverageScore(data).toFixed(2));
    console.log("Passing Students:", getPassingStudents(data));
}

// Void function 3: display course statistics
function printCourseStatistics(data: typeof enrollments): void {
    console.log("\n=== COURSE STATISTICS ===");

    console.log(
        "TypeScript Students:",
        getCourseEnrollmentCount(data, "TypeScript")
    );
    console.log(
        "TypeScript Average Score:",
        getCourseAverageScore(data, "TypeScript").toFixed(2)
    );

    console.log(
        "Database Students:",
        getCourseEnrollmentCount(data, "Database")
    );
    console.log(
        "Database Average Score:",
        getCourseAverageScore(data, "Database").toFixed(2)
    );

    console.log(
        "Backend Students:",
        getCourseEnrollmentCount(data, "Backend")
    );
    console.log(
        "Backend Average Score:",
        getCourseAverageScore(data, "Backend").toFixed(2)
    );
}

// Void function 4: display learning statistics
function printLearningStatistics(data: typeof enrollments): void {
    console.log("\n=== LEARNING STATISTICS ===");
    console.log("Total Learning Hours:", getTotalLearningHours(data));
    console.log(
        "Average Learning Duration:",
        getAverageLearningDuration(data).toFixed(2)
    );
}

// Main dashboard
function printDashboard(data: typeof enrollments): void {
    printCompletionStatistics(data);
    printAcademicStatistics(data);
    printCourseStatistics(data);
    printLearningStatistics(data);
}

printDashboard(enrollments);