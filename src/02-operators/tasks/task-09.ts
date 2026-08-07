/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility
 */

type Product = {
    name: string;
    price: number;
    quantity: number;
};

const products: Product[] = [
    {
        name: "Mechanical Keyboard",
        price: 850000,
        quantity: 1
    },
    {
        name: "Wireless Mouse",
        price: 275000,
        quantity: 2
    },
    {
        name: "Monitor Stand",
        price: 420000,
        quantity: 1
    }
];

const voucherValue: number = 100000;
const premiumMember: boolean = true;
const rewardPointRate: number = 50000;
const vatRate: number = 0.11;

// Product subtotal
const productSubtotal: number = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
);

// Membership discount
const membershipDiscount: number = premiumMember
    ? productSubtotal * 0.10
    : 0;

// Voucher deduction
const paymentAfterDiscount: number =
    productSubtotal - membershipDiscount;

const voucherDeduction: number =
    Math.min(voucherValue, paymentAfterDiscount);

// Payment before tax
const paymentBeforeTax: number =
    paymentAfterDiscount - voucherDeduction;

// VAT
const vat: number = paymentBeforeTax * vatRate;

// Final payment
const finalPayment: number =
    paymentBeforeTax + vat;

// Reward points
const rewardPoints: number =
    Math.floor(paymentBeforeTax / rewardPointRate);

// Free shipping eligibility
const freeShipping: boolean =
    premiumMember || paymentBeforeTax > 1500000;

console.log("Product Subtotal:", productSubtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", voucherDeduction);
console.log("Payment Before Tax:", paymentBeforeTax);
console.log("VAT:", vat);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping:", freeShipping);