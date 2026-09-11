/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

type Student = {
  name: string;
  major: string;
  active: boolean;
};

// Total students
function getTotalStudents(students: Student[]): number {
  return students.length;
}

// Active students
function getActiveStudents(students: Student[]): number {
  return students.filter(student => student.active).length;
}

// Inactive students
function getInactiveStudents(students: Student[]): number {
  return students.filter(student => !student.active).length;
}

// Software Engineering students
function getSoftwareEngineeringStudents(students: Student[]): number {
  return students.filter(
    student => student.major === "Software Engineering"
  ).length;
}

// Networking students
function getNetworkingStudents(students: Student[]): number {
  return students.filter(
    student => student.major === "Networking"
  ).length;
}

// Multimedia students
function getMultimediaStudents(students: Student[]): number {
  return students.filter(
    student => student.major === "Multimedia"
  ).length;
}

// Display report
console.log("Total Students:", getTotalStudents(students));
console.log("Active Students:", getActiveStudents(students));
console.log("Inactive Students:", getInactiveStudents(students));
console.log(
  "Software Engineering Students:",
  getSoftwareEngineeringStudents(students)
);
console.log("Networking Students:", getNetworkingStudents(students));
console.log("Multimedia Students:", getMultimediaStudents(students));