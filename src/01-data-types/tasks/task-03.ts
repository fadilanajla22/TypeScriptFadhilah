/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    studentID: string;
    fullName: string;
    age: string;
    isActive: boolean;
}

const Student1: Student = {
    studentID: "ST2026001",
    fullName: "Fadhilah Najla Zahirah",
    age: "16",
    isActive: true,
}

const Student2: Student = {
    studentID: "ST2026002",
    fullName: "Nurman Hidayat",
    age: "17",
    isActive: true,
}

const Student3: Student = {
    studentID: "ST2026003",
    fullName: "Ade Gabby",
    age: "16",
    isActive: false,
}

console.log("=== Student 1 ===");
console.log(Student1);

console.log("=== Student 2 ===");
console.log(Student2);

console.log("=== Student 3 ===");
console.log(Student3);
