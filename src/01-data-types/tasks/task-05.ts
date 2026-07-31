/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
<<<<<<< HEAD
 */

type employee = {
    ID: string;
    name: string;
    date: string;
    inTime: string;
    outTime: string;
    workingTotal: string;
    isPresent: boolean;
}

const employee1: employee = {
    ID: "AT001",
    name: "Fadhilah",
    date: "2026-07-30",
    inTime: "07:00",
    outTime: "15:30",
    workingTotal: "8h 30m",
    isPresent: true,
}

const employee2: employee = {
    ID: "AT002",
    name: "Nadia Putri",
    date: "2026-07-30",
    inTime: "07.10",
    outTime: "15.30",
    workingTotal: "8h 30m",
    isPresent: true,
}

const employee3: employee = {
    ID: "AT003",
    name: "Rizky Pratama",
    date: "2026-07-30",
    inTime: "-",
    outTime: "-",
    workingTotal: "0h",
    isPresent: false,
}

console.log({
    employee1,
    employee2,
    employee3
});
=======
 */
>>>>>>> assign/main
