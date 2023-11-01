// Write your solution in this file!



const employee = {
  name: 'Sam',
  address: '11 Broadway, 2nd Floor, New York, NY 10004'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee }; // create a new object and copy over all key-value pairs from the employee object
  newEmployee[key] = value; // add the new key-value pair to the newEmployee object

  return newEmployee; // return the updated employee object
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // Update the employee object with the given key and value

  return employee; // Return the updated employee object
} 

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // Create a new object and copy over all key-value pairs from the employee object
  delete newEmployee[key]; // Delete the specified key from the newEmployee object

  return newEmployee; // Return the new employee object without the deleted key
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // Delete the specified key from the employee object

  return employee; // Return the updated employee object without the deleted key
}
