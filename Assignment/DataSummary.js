// Declare variables of different data types
let userName = "Parul";                // string
let age = 20;                          // number
let isMember = true;                   // boolean
let hobbies = ["coding", "music"];     // array
let userDetails = { city: "Delhi" };   // object
let score = null;                      // null
let level;                             // undefined

// Create a summary array for console.table
let summary = [
  { label: "userName",    value: userName,    type: typeof userName },
  { label: "age",         value: age,         type: typeof age },
  { label: "isMember",    value: isMember,    type: typeof isMember },
  { label: "hobbies",     value: hobbies,     type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "userDetails", value: userDetails, type: typeof userDetails },
  { label: "score",       value: score,       type: typeof score }, // null returns "object"
  { label: "level",       value: level,       type: typeof level }
];

// Print the full data summary using one console.table()
console.table(summary);
