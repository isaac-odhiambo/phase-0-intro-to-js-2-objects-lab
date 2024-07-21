// Write your solution in this file!
// index.js

// Define the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // 1. updateEmployeeWithKeyAndValue
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new employee object with the new key-value pair
    return { ...employee, [key]: value };
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original employee object with the new key-value pair
    employee[key] = value;
    return employee;
  }
  
  // 3. deleteFromEmployeeByKey
  function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object
    let newEmployee = { ...employee };
    // Delete the specified key from the clone
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object
    delete employee[key];
    return employee;
  }
  
