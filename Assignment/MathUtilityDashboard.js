// Given number
let x = 16.75;

// Calculations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);

// Random number between 10 and 50
let randomValue = Math.floor(Math.random() * 41) + 10;

// Formatted summary using template literals
let summary = `
📌 Math Utility Dashboard
-------------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
x³ (Power): ${powerValue}
Random Number (10–50): ${randomValue}
`;

console.log(summary);
