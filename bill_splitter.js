// Task 1: Calculate the tips
const bill = 175;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Task 2: Output details
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`); // Showcases the bill amount, the tip amount, and the total amount.
