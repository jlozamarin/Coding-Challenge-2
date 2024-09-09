// Task 1: Calculate the tips
var bill = 175;
var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Task 2: Output details
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${bill + tip}`); // Output: The bill was $175, the tip was $26.25, and the total value is $201.25.

// Task 3: Create a function
function calculateTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Test function with bill amount of 100
var testBill = 100;
var testTip = calculateTip(testBill);

console.log(`For a bill of $${testBill}, the tip is $${testTip}, and the total value is $${testBill + testTip}`); // Output: For a bill of $100, the tip is $15, and the total value is $115.

// Task 4: Utilize arrays

// Data set 1: Bill amounts of 275, 40, and 430
var bills1 = [275, 40, 430];
var tips1 = bills1.map(bill => calculateTip(bill)); // Output for tips: 41.25, 8, and 86
var totals1 = bills1.map((bill, index) => bill + tips1[index]); //Output for totals: 316.25, 48, 516

// Output:
console.log("Data set 1:");
console.log("Bills:", bills1);
console.log("Tips:", tips1);
console.log("Totals:", totals1);

// Data set 2: Bill amounts of 125, 555, and 44
var bills2 = [125,555,44];
var tips2 = bills2.map(bill=> calculateTip(bill)); //Output for tips: 18.75, 111, and 8.80
var totals2 = bills2.map((bill,index) => bill + tips2[index]); //Output for totals: 143.75, 666, and 52.80

//Output:
console.log("Data set 2:");
console.log("Bills:", bills2);
console.log("Tips:", tips2);
console.log("Totals:", totals2);