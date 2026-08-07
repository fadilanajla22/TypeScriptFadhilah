/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

// Student Information
const studentName: string = "Alya Putri";
const gpa: number = 3.89;
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

// Scholarship Information
const scholarshipBudget: number = 500000000;
const scholarshipAmount: number = 12000000;

// Comparison Operators
const gpaRequirement = gpa >= 3.75;
const incomeRequirement = familyIncome < 5000000;
const competitionRequirement = competitionCount >= 3;
const disciplineRequirement = !hasDisciplinaryRecord;
const documentRequirement = documentsComplete;

// Logical Operators
const isQualified =
  gpaRequirement &&
  incomeRequirement &&
  competitionRequirement &&
  disciplineRequirement &&
  documentRequirement;

// Ternary Operator
const receivedScholarship = isQualified ? scholarshipAmount : 0;

// Remaining Budget
const remainingBudget = scholarshipBudget - receivedScholarship;

// Output
console.log("=== Scholarship Selection Result ===");
console.log("Student Name          :", studentName);
console.log("GPA Requirement       :", gpaRequirement);
console.log("Income Requirement    :", incomeRequirement);
console.log("Competition Requirement:", competitionRequirement);
console.log("Discipline Requirement:", disciplineRequirement);
console.log("Document Requirement  :", documentRequirement);
console.log("Qualified             :", isQualified ? "Yes" : "No");
console.log("Scholarship Amount    : Rp" + receivedScholarship.toLocaleString("id-ID"));
console.log("Remaining Budget      : Rp" + remainingBudget.toLocaleString("id-ID"));