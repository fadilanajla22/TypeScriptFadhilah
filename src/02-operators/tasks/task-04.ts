/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

// Product Information
const keyboardPrice = 850000;
const keyboardQty = 1;

const mousePrice = 275000;
const mouseQty = 2;

const mousePadPrice = 120000;
const mousePadQty = 1;

// Customer Information
const isPremiumMember = true;
const shippingCost = 25000;

// Calculate subtotal
const subtotal =
  (keyboardPrice * keyboardQty) +
  (mousePrice * mouseQty) +
  (mousePadPrice * mousePadQty);

// Count total items using increment operator
let totalItems = 0;

for (let i = 0; i < keyboardQty; i++) {
  totalItems++;
}

for (let i = 0; i < mouseQty; i++) {
  totalItems++;
}

for (let i = 0; i < mousePadQty; i++) {
  totalItems++;
}

// Calculate discount
const discount = subtotal > 1000000 ? subtotal * 0.1 : 0;

// Free shipping for Premium member
const shippingFee = isPremiumMember ? 0 : shippingCost;

// Calculate final payment
const finalPayment = subtotal - discount + shippingFee;

// Display result
console.log("=== Shopping Cart Summary ===");
console.log("Subtotal       : Rp", subtotal);
console.log("Total Items    :", totalItems);
console.log("Discount       : Rp", discount);
console.log("Shipping Fee   : Rp", shippingFee);
console.log("Final Payment  : Rp", finalPayment);

