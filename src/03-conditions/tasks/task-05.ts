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

let studentName: string = "Fadhilah";
let academicScore: number = 85;
let achievementScore: number = 80;
let interviewScore: number = 85;

let firstScreening: boolean;
let secondScreening: boolean;
let result: string;

// First screening
firstScreening = academicScore >= 80 && achievementScore >= 75;

if (firstScreening) {
    // Second screening
    secondScreening = interviewScore >= 80;

    if (secondScreening) {
        result = "Scholarship Approved";
    } else {
        result = "Passed First Screening, but Failed Second Screening";
    }
} else {
    result = "Failed First Screening";
}

console.log(result);