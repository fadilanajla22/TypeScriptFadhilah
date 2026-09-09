/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

// 1. Extract customer's name only in array
const customerName = transactions.map(transaction => transaction.customer);
console.log("Customer Name:");
console.log(customerName);

// 2.  Determine Transaction Category with rules below: ≥ Rp2,000,000 → HIGH VALUE ≥ Rp1,000,000 → MEDIUM VALUe- < Rp1,000,000 → LOW VALUE
const transactionCategories = transactions.map(transaction => {let category;
    if (transaction.amount >= 2000000) {
        category = "High Value";
    } else if (transaction.amount >= 1000000) {
        category = "Medium Value"
    } else {
        category = "Low Value"
    }
    return category;
});
console.log("Transaction Categories:");
console.log(transactionCategories);

// 3. Calculate platform fee: Paid transactions → 2% Pending transactions → 1% Cancelled transactions → 0%
const platformFees = transactions.map(transaction => {let fee;
    if (transaction.status === "Paid"){
        fee = transaction.amount * 0.02;
    } else if (transaction.status === "Pending"){
        fee = transaction.amount * 0.01;
    } else if (transaction.status === "Cancelled"){
        fee = 0;
    }
    return fee;
});
console.log("Platform Fees:");
console.log(platformFees)