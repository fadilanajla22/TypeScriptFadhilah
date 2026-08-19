/**
 * Module 04: Looping — Task 01
 *
 * Instructions:
 * 1. Implement each function using loops.
 * 2. Run: npm run example src/04-looping/tasks/task-01.ts
 */

// TODO: Return the sum of all numbers from 1 to n (inclusive)
function sumUpTo(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// TODO: Return an array of even numbers from 2 to n (inclusive)
function getEvensUpTo(n: number): number[] {
  const evens: number[] = [];

  for (let i = 2; i <= n; i += 2) {
    evens.push(i);
  }

  return evens;
}

// TODO: Return the factorial of n (e.g. 5! = 5 * 4 * 3 * 2 * 1 = 120)
function factorial(n: number): number {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// TODO: Return the index of target in arr, or -1 if not found (do NOT use .indexOf)
function findIndex(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// --- Tests (do not modify) ---
console.log("sumUpTo(10):", sumUpTo(10)); // expected: 55
console.log("getEvensUpTo(10):", getEvensUpTo(10)); // expected: [2, 4, 6, 8, 10]
console.log("factorial(5):", factorial(5)); // expected: 120
console.log("findIndex([10, 20, 30], 20):", findIndex([10, 20, 30], 20)); // expected: 1
console.log("findIndex([10, 20, 30], 99):", findIndex([10, 20, 30], 99)); // expected: -1
