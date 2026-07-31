/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
    studentID: string;
    nameFull: string;
    lvGrade: string;
    courseID: string;
    title: string;
    nameInstructor: string;
    totalLearning: number;
    date: number;
    pay: boolean;
}

const Student1: Student = {
    studentID: "ST2026001",
    nameFull: "Andi Pratama",
    lvGrade: "XI RPL 1",
    courseID: "CS101",
    title: "Basic Programming",
    nameInstructor: "Budi Santoso",
    totalLearning: 24,
    date: 20260730,
    pay: true, 
}

const Student2: Student = {
    studentID: "ST2026002",
    nameFull: "Siti Aisyah",
    lvGrade: "XI RPL 2",
    courseID: "WD201",
    title: "Web Development",
    nameInstructor: "Dewi Lestari",
    totalLearning: 30,
    date: 20260805,
    pay: false,
}

const Student3: Student = {
    studentID: "ST2026003",
    nameFull: "Rizky Maulana",
    lvGrade: "XI RPL 3",
    courseID: "DB301",
    title: "Database Systems",
    nameInstructor: "Ahmad Fauzi",
    totalLearning: 28,
    date: 20260810,
    pay: true,
}