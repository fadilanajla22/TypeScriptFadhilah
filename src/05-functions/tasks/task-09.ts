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

type patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

// 1. Total patients
function getTotalPatients(patients: patient[]): number {
    return patients.length;
}

// 2. Total admitted patients
function getTotalAdmittedPatients(patients: patient[]): number {
    return patients.filter(patient => patient.admitted).length;
}

// 3. Total discharged patients
function getTotalDischargedPatients(patients: patient[]): number {
    return patients.filter(patient => !patient.admitted).length;
}

// 4. Number of patients in each department
function getPatientsByDepartment(patients: patient[]) {
    return {
        Pediatrics: patients.filter(
            patient => patient.department === "Pediatrics"
        ).length,

        Cardiology: patients.filter(
            patient => patient.department === "Cardiology"
        ).length,

        Orthopedics: patients.filter(
            patient => patient.department === "Orthopedics"
        ).length
    };
}

// 5. Highest hospital bill
function getHighestBill(patients: patient[]): number {
    return Math.max(...patients.map(patient => patient.bill));
}

// 6. Lowest hospital bill
function getLowestBill(patients: patient[]): number {
    return Math.min(...patients.map(patient => patient.bill));
}

// 7. Average hospital bill
function getAverageBill(patients: patient[]): number {
    const totalRevenue = getTotalHospitalRevenue(patients);
    return totalRevenue / patients.length;
}

// 8. Total hospital revenue
function getTotalHospitalRevenue(patients: patient[]): number {
    return patients.reduce(
        (total, patient) => total + patient.bill,
        0
    );
}

// 9. Names of admitted patients
function getAdmittedPatientNames(patients: patient[]): string[] {
    return patients
        .filter(patient => patient.admitted)
        .map(patient => patient.name);
}

// 10. Void function: display report
function printHospitalReport(patients: patient[]): void {
    console.log("Total Patients:", getTotalPatients(patients));
    console.log(
        "Total Admitted Patients:",
        getTotalAdmittedPatients(patients)
    );
    console.log(
        "Total Discharged Patients:",
        getTotalDischargedPatients(patients)
    );
    console.log(
        "Patients By Department:",
        getPatientsByDepartment(patients)
    );
    console.log("Highest Hospital Bill:", getHighestBill(patients));
    console.log("Lowest Hospital Bill:", getLowestBill(patients));
    console.log("Average Hospital Bill:", getAverageBill(patients));
    console.log(
        "Total Hospital Revenue:",
        getTotalHospitalRevenue(patients)
    );
    console.log(
        "Admitted Patient Names:",
        getAdmittedPatientNames(patients)
    );
}

// Call report
printHospitalReport(patients);