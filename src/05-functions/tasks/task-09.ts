/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

// 1. Total patients
function getTotalPatients(data: typeof patients): number {
    return data.length;
}

// 2. Total admitted patients
function getAdmittedPatients(data: typeof patients): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].admitted === true) {
            count++;
        }
    }

    return count;
}

// 3. Total discharged patients
function getDischargedPatients(data: typeof patients): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].admitted === false) {
            count++;
        }
    }

    return count;
}

// 4. Count patients in a department
function getDepartmentCount(
    data: typeof patients,
    department: string
): number {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].department === department) {
            count++;
        }
    }

    return count;
}

// 5. Highest hospital bill
function getHighestBill(data: typeof patients): number {
    let highest = data[0].bill;

    for (let i = 1; i < data.length; i++) {
        if (data[i].bill > highest) {
            highest = data[i].bill;
        }
    }

    return highest;
}

// 6. Lowest hospital bill
function getLowestBill(data: typeof patients): number {
    let lowest = data[0].bill;

    for (let i = 1; i < data.length; i++) {
        if (data[i].bill < lowest) {
            lowest = data[i].bill;
        }
    }

    return lowest;
}

// 7. Average hospital bill
function getAverageBill(data: typeof patients): number {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].bill;
    }

    return total / data.length;
}

// 8. Total hospital revenue
function getTotalRevenue(data: typeof patients): number {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].bill;
    }

    return total;
}

// 9. Names of admitted patients
function getAdmittedPatientNames(data: typeof patients): string[] {
    let names: string[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].admitted === true) {
            names.push(data[i].name);
        }
    }

    return names;
}

// Void function: hanya menampilkan report
function printHospitalReport(data: typeof patients): void {
    console.log("=== HOSPITAL DAILY REPORT ===");

    console.log("Total Patients:", getTotalPatients(data));
    console.log("Total Admitted Patients:", getAdmittedPatients(data));
    console.log("Total Discharged Patients:", getDischargedPatients(data));

    console.log(
        "Pediatrics:",
        getDepartmentCount(data, "Pediatrics")
    );

    console.log(
        "Cardiology:",
        getDepartmentCount(data, "Cardiology")
    );

    console.log(
        "Orthopedics:",
        getDepartmentCount(data, "Orthopedics")
    );

    console.log("Highest Hospital Bill:", getHighestBill(data));
    console.log("Lowest Hospital Bill:", getLowestBill(data));
    console.log("Average Hospital Bill:", getAverageBill(data));
    console.log("Total Hospital Revenue:", getTotalRevenue(data));
    console.log("Admitted Patients:", getAdmittedPatientNames(data));
}

printHospitalReport(patients);