// Use the set method to add one more data type in 
// the above map.set(“object”, “non-primitive”)
// Create a Map of non-primitive data types in JS
let nonPrimitiveDataTypes = new Map([
    ["Array", "non-primitive"],
    ["Set", "non-primitive"],
    ["Map", "non-primitive"],
    ["Function", "non-primitive"],
    ["Date", "non-primitive"],
    ["RegExp", "non-primitive"],
    ["Error", "non-primitive"],
    
]);

// Add one more data type using the set method
nonPrimitiveDataTypes.set("object", "non-primitive");

// Log the updated Map
console.log(nonPrimitiveDataTypes);
