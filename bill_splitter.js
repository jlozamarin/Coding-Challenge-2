// Task 1: Calculate the tips
const bill = 175;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Task 2: Output details
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`); // Output: The bill was $175, the tip was $26.25, and the total value is $201.25.

// Task 3: Create a function
function calculateTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Test function with bill amount of 100
const testBill = 100;
const testTip = calculateTip(testBill);

console.log(`For a bill of $${testBill}, the tip is $${testTip}, and the total value is $${testBill + testTip}`); // Output: For a bill of $100, the tip is $20, and the total value is $120.
