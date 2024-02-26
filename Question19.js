// Add another key in the same object
//  “version”, value should latest released version of JS (“es6”)
// Create an object with keys "primitivetypes" and "objectDataTypes"
let typesObject = {
    primitivetypes: ["string", "number", "boolean", "null", "undefined", "bigint", "symbol"],
    objectDataTypes: ["Object", "Array", "Function", "Date", "RegExp", "Error", "Map", "Set", "WeakMap", "WeakSet"]
};

// Add another key "version" to specify the latest released version of JS
typesObject.version = "ES6";

// Log the updated object
console.log("Updated object:", typesObject);
