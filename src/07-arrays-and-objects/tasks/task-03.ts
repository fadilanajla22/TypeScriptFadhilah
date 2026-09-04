/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" }
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" }
];

// 1. Get all student's names who are present
const present = attendance
    .filter(a => a.status === "present")
    .map(a => {
        const data = students.find(x => x.id === a.studentId);
        return data ? data.name : "";
    });

console.log(present);

// 2. Get all students who are absent
const absent = attendance
    .filter(a => a.status === "absent")
    .map(a => {
        const data = students.find(x => x.id === a.studentId);
        return data ? data.name : "";
    });

console.log(absent);

// 3. Get students who are late
const late = attendance
    .filter(a => a.status === "late")
    .map(a => {
        const data = students.find(x => x.id === a.studentId);
        return data ? data.name : "";
    });

console.log(late);

// 4. Generate array containing { name, status }
const result = attendance.map(a => {
    const data = students.find(x => x.id === a.studentId);

    return {
        name: data ? data.name : "",
        status: a.status
    };
});

console.log(result);