// Create an array of objects, where each object represents a primitive
//  data type in JS, its keys should be like Eg: {“dataTypeName”: “string”, “type”:
//      “primitive”, “isObject”: false, “isMultipleValuesAllowed”: false}
// Create an array of objects representing primitive data types in JS
let primitiveDataTypes = [
    { dataTypeName: "string", type: "primitive", isObject: false, isMultipleValuesAllowed: false },
    { dataTypeName: "number", type: "primitive", isObject: false, isMultipleValuesAllowed: false },
    { dataTypeName: "boolean", type: "primitive", isObject: false, isMultipleValuesAllowed: false },
    { dataTypeName: "null", type: "primitive", isObject: false, isMultipleValuesAllowed: false },
    { dataTypeName: "undefined", type: "primitive", isObject: false, isMultipleValuesAllowed: false },
    { dataTypeName: "bigint", type: "primitive", isObject: false, isMultipleValuesAllowed: false },
    { dataTypeName: "symbol", type: "primitive", isObject: false, isMultipleValuesAllowed: false }
];

// Log the array of objects
console.log(primitiveDataTypes);
