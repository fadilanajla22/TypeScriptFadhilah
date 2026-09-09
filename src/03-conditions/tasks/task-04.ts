/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri"
const PremiumMember: boolean = true;
const RoomAvailable: boolean = false;

let reservationResult: string;
if (RoomAvailable) {
    if (PremiumMember) {
        reservationResult = '${CustomerName}: Room available. You receive a FREE room upgrade.';
    } else {
        reservationResult = '${CustomerName}: Room available. You will receive your reserved room.'
    }
} else {
    if (PremiumMember) {
        reservationResult = `${customerName}: No rooms available. You have been placed on the priority waiting list.`;
    } else {
        reservationResult = `${customerName}: Sorry, no rooms are available.`;
    }
}

// 3. Display the reservation result
console.log("=== Hotel Reservation Result ===");
console.log(`Customer Name   : ${customerName}`);
console.log(`Premium Member  : ${PremiumMember ? "Yes" : "No"}`);
console.log(`Room Available  : ${RoomAvailable ? "Yes" : "No"}`);
console.log(reservationResult);