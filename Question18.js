// Add another key “objectDataTypes” to the same object using 
// square notation, and value should be an array of strings containing names of 
// all object data types in JS, then log the object
// Create an object with key "primitivetypes" and an array of primitive data types
let typesObject = {
    primitivetypes: ["string", "number", "boolean", "null", "undefined", "bigint", "symbol"]
};

// Add another key "objectDataTypes" using square notation
typesObject["objectDataTypes"] = ["Object", "Array", "Function", "Date" , "Map", "Set" ];

// Log the updated object
console.log("Updated object:", typesObject);
