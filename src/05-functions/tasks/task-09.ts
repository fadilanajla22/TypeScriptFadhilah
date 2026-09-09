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
function getTotalPatient(patients: patient[]): number{
    return patients.length;
}
function getTotalAdmittedPatients(patients: patient[]):number {
    return patients.filter(patient => patient.admitted === true).length;
}
function getTotalDischargedPatients(patients: patient[]): number {
    return patients.filter(patient => patient.admitted === false).length;
}
function getDepartmentCount(patients: patient[], department:string): number {
    return patients.filter(patient => patient.department === department).length;
}
function getHighestBill(patients: patient[]): number {
    return Math.max(...patients.map(patient => patient.bill));
}
function getLowestBill(patients: patient[]): number {
    return Math.min(...patients.map(patient => patient.bill));
}
function getAverageBill(patients: patient[]): number {
    const totalBill = patients.reduce((total, patient) => total + patient.bill, 0);
    return totalBill / patients.length;
}
function getTotalRevenu(patients: patient[]): number {
    return patients.reduce(
        (total, patient) => total + patient.bill, 0);
}
function getAdmittedPatientNames(patients: patient[]): string[] {
    return patients
        .filter(patient => patient.admitted === true)
        .map(patient => patient.name);
}
function printHospitalReport(patients: patient[]): void {
    console.log("===== HOSPITAL DAILY REPORT =====");
    console.log("Total Patients:", getTotalPatient(patients));
    console.log("Total Admitted Patients:", getTotalAdmittedPatients(patients));
    console.log("Total Discharged Patients:", getTotalDischargedPatients(patients));
    console.log("Pediatrics:", getDepartmentCount(patients, "Pediatrics"));
    console.log("Cardiology:", getDepartmentCount(patients, "Cardiology"));
    console.log("Orthopedics:", getDepartmentCount(patients, "Orthopedics"));
    console.log("Highest Bill:", getHighestBill(patients));
    console.log("Lowest Bill:", getLowestBill(patients));
    console.log("Average Bill:", getAverageBill(patients));
    console.log("Total Revenue:", getTotalRevenu(patients));
    console.log("Admitted Patients:", getAdmittedPatientNames(patients).join(", "));
}
printHospitalReport(patients);