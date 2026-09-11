/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

// 1. Total sales
function getTotalSales(sales: number[]): number {
  return sales.reduce((total, amount) => total + amount, 0);
}

// 2. Highest transaction
function getHighestTransaction(sales: number[]): number {
  return Math.max(...sales);
}

// 3. Lowest transaction
function getLowestTransaction(sales: number[]): number {
  return Math.min(...sales);
}

// 4. Average transaction
function getAverageTransaction(sales: number[]): number {
  return getTotalSales(sales) / sales.length;
}

// 5. Number of transactions above Rp500,000
function countTransactionsAbove500K(sales: number[]): number {
  return sales.filter(amount => amount > 500000).length;
}

// Display dashboard
console.log("Total Sales:", getTotalSales(sales));
console.log("Highest Transaction:", getHighestTransaction(sales));
console.log("Lowest Transaction:", getLowestTransaction(sales));
console.log("Average Transaction:", getAverageTransaction(sales));
console.log(
  "Transactions Above Rp500,000:",
  countTransactionsAbove500K(sales)
);