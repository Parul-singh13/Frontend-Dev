// Global variable
let bonus = 5000;

// Global variable to show scope difference
let isPermanent = false;

function calculateSalary() {

    let salary = 40000;        // Local variable
    let isPermanent = true;    // Local variable (different from global)

    console.log("Inside function:");
    console.log("Local isPermanent:", isPermanent);
    console.log("Global isPermanent:", window.isPermanent);  // accessing global explicitly

    // Add bonus only if LOCAL isPermanent is true
    let totalSalary;
    if (isPermanent) {
        totalSalary = salary + bonus;
    } else {
        totalSalary = salary;
    }

    console.log("Total Salary:", totalSalary);
}

// Call the function
calculateSalary();

console.log("\nOutside function:");
console.log("Global isPermanent (unchanged):", isPermanent);
