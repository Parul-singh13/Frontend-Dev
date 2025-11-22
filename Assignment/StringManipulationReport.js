// Original product name
let product = " wireless headphones PRO ";

// Step 1: Trim extra spaces
let cleaned = product.trim();  // "wireless headphones PRO"

// Step 2: Convert to lowercase
cleaned = cleaned.toLowerCase();  // "wireless headphones pro"

// Step 3: Capitalize first letter of each word
cleaned = cleaned
  .split(" ") // ["wireless", "headphones", "pro"]
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
  .join(" "); // "Wireless Headphones Pro"

// Step 4: Replace "Pro" with "Pro Edition"
cleaned = cleaned.replace("Pro", "Pro Edition");

// Step 5: Display final title and its length
console.log("Cleaned Title:", cleaned);
console.log("Length:", cleaned.length);
