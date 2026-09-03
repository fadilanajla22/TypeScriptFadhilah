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

function processTransactions<T>(
    arr: typeof transactions,
    callback: (transaction: typeof transactions[number]) => T
): T[] {
    return arr.map(callback);
}

console.log(processTransactions(transactions, t => t.customer));


console.log(processTransactions(transactions, t =>
    t.amount >= 2000000 ? "HIGH VALUE" :
    t.amount >= 1000000 ? "MEDIUM VALUE" :
    "LOW VALUE"
));

console.log(processTransactions(transactions, t =>
    t.status === "paid" ? t.amount * 0.02 :
    t.status === "pending" ? t.amount * 0.01 :
    0
));