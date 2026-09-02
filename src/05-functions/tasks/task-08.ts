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

// 1. Menghitung total siswa
function getTotalStudents(data: typeof submissions): number {
    return data.length;
}

// 2. Menghitung jumlah tugas yang dikumpulkan
function getSubmittedCount(data: typeof submissions): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === true) {
            count++;
        }
    }

    return count;
}

// 3. Menghitung jumlah tugas yang tidak dikumpulkan
function getMissingCount(data: typeof submissions): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === false) {
            count++;
        }
    }

    return count;
}

// 4. Menghitung jumlah siswa yang lulus
function getPassedCount(data: typeof submissions): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].score >= 75) {
            count++;
        }
    }

    return count;
}

// 5. Menghitung jumlah siswa yang perlu revisi
function getRevisionCount(data: typeof submissions): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].submitted === true && data[i].score < 75) {
            count++;
        }
    }

    return count;
}

// 6. Menghitung nilai rata-rata
function getAverageScore(data: typeof submissions): number {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].score;
    }

    return total / data.length;
}

// 7. Mencari nilai tertinggi
function getHighestScore(data: typeof submissions): number {
    let highest = data[0].score;

    for (let i = 1; i < data.length; i++) {
        if (data[i].score > highest) {
            highest = data[i].score;
        }
    }

    return highest;
}

// 8. Mencari nilai terendah
function getLowestScore(data: typeof submissions): number {
    let lowest = data[0].score;

    for (let i = 1; i < data.length; i++) {
        if (data[i].score < lowest) {
            lowest = data[i].score;
        }
    }

    return lowest;
}

// Void function untuk menampilkan report
function printReport(data: typeof submissions): void {
    console.log("=== LMS ASSIGNMENT REPORT ===");
    console.log("Total Students:", getTotalStudents(data));
    console.log("Submitted Assignments:", getSubmittedCount(data));
    console.log("Missing Assignments:", getMissingCount(data));
    console.log("Passed Students:", getPassedCount(data));
    console.log("Students Requiring Revision:", getRevisionCount(data));
    console.log("Average Score:", getAverageScore(data));
    console.log("Highest Score:", getHighestScore(data));
    console.log("Lowest Score:", getLowestScore(data));
}

printReport(submissions);