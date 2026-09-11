/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const studentName = "Fajar Hidayat";
const gpa = 3.86;
const familyIncome = 4200000;
const competitionCount = 4;
const hasDisciplinaryRecord = false;
const documentsComplete = true;

// First Screening
if (gpa >= 3.75 && familyIncome < 5000000) {

    // Second Screening
    if (
        competitionCount >= 3 &&
        !hasDisciplinaryRecord &&
        documentsComplete
    ) {
        console.log("Scholarship Approved");
    } else {
        console.log("Passed First Screening, but Failed Second Screening");
    }

} else {
    console.log("Failed First Screening");
}