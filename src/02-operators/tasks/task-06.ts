/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const pricePerHour = 8000;
const hours = 7;
const minutes = 35;

// Total playing time in minutes
const totalMinutes = hours * 60 + minutes;

// Remaining minutes after full hours
const remainingMinutes = totalMinutes % 60;

// Billed hours: every started hour counts as a full hour
const billedHours = Math.ceil(totalMinutes / 60);

// Payment before discount
const paymentBeforeDiscount = billedHours * pricePerHour;

// 15% discount if playing time exceeds 5 hours
const discount =
  hours + minutes / 60 > 5 ? paymentBeforeDiscount * 0.15 : 0;

// Final payment
const finalPayment = paymentBeforeDiscount - discount;

console.log("Total playing time:", totalMinutes, "minutes");
console.log("Remaining minutes:", remainingMinutes, "minutes");
console.log("Total billed hours:", billedHours);
console.log("Payment before discount: Rp" + paymentBeforeDiscount);
console.log("Discount: Rp" + discount);
console.log("Final payment: Rp" + finalPayment);