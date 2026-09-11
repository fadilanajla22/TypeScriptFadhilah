/**
 * A company has employee salary data below.
 * The HR department wants to process the same employee data using different rules.
 * For example:
 * - Calculate final salary.
 * - Determine bonus eligibility.
 * - Generate employee performance status.
 * 
 * Bonus rules:
 * - Performance ≥ 90 → 15% of salary and status is "Exceeds Expectations"
 * - Performance ≥ 80 → 10% of salary and status is "Meets Expectations"
 * - Performance ≥ 70 → 5% of salary and status is "Needs Improvement"
 * - Below 70 → no bonus and status is "Unsatisfactory"
 * 
 * TASK:
 * Create a reusable function that accepts:
 * - employee array
 * - callback function
 * 
 * The callback should determine what operation is performed on each employee.
 * Students should create at least three callbacks below.
 * The processing function should not contain the HR business rules.
 */

type Employee = {
    name: string
    salary: number
    performance: number
}
type PERFORMANCE_STATUS = "Exceeds Expectations" | "Meets Expectations" | "Needs Improvement" | 'Unsatisfactory'
type EMPLOYEE_BONUS = Employee & { bonus: number; finalSalary: number; }
type EMPLOYEE_PERFORMANCE = Employee & { status: PERFORMANCE_STATUS }

const employees: Employee[] = [
    { name: "Alya", salary: 5000000, performance: 92 },
    { name: "Budi", salary: 6500000, performance: 78 },
    { name: "Citra", salary: 7200000, performance: 88 },
    { name: "Dimas", salary: 4500000, performance: 95 },
    { name: "Eka", salary: 8000000, performance: 69 }
];


// Reusable function
function processEmployees<T>(
    employees: Employee[],
    callback: (employee: Employee) => T
): T[] {
    return employees.map(callback);
}

// Callback 1: Calculate bonus
function calculateBonus(employee: Employee): EMPLOYEE_BONUS {
    let bonus = 0;

    if (employee.performance >= 90) {
        bonus = employee.salary * 0.15;
    } else if (employee.performance >= 80) {
        bonus = employee.salary * 0.10;
    } else if (employee.performance >= 70) {
        bonus = employee.salary * 0.05;
    }

    return {
        ...employee,
        bonus: bonus,
        finalSalary: employee.salary + bonus
    };
}

// Callback 2: Performance status
function getPerformanceStatus(
    employee: Employee
): EMPLOYEE_PERFORMANCE {
    let status: PERFORMANCE_STATUS;

    if (employee.performance >= 90) {
        status = "Exceeds Expectations";
    } else if (employee.performance >= 80) {
        status = "Meets Expectations";
    } else if (employee.performance >= 70) {
        status = "Needs Improvement";
    } else {
        status = "Unsatisfactory";
    }

    return {
        ...employee,
        status: status
    };
}

// Callback 3: Final salary
function getFinalSalary(employee: Employee): number {
    let bonus = 0;

    if (employee.performance >= 90) {
        bonus = employee.salary * 0.15;
    } else if (employee.performance >= 80) {
        bonus = employee.salary * 0.10;
    } else if (employee.performance >= 70) {
        bonus = employee.salary * 0.05;
    }

    return employee.salary + bonus;
}

// Run callbacks
console.log("Bonus:", processEmployees(employees, calculateBonus));
console.log("Performance:", processEmployees(employees, getPerformanceStatus));
console.log("Final Salary:", processEmployees(employees, getFinalSalary));