// Write your solution in this file!
const employee = {
    name: 'John', 
    streetAddress: '251 W 15th St.' 
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    return {
        ...employeeObject,
        [key]: value
    }
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
    employeeObject[key] = value
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const newObject = {...employeeObject}
    delete newObject[key]
    return newObject
}

const destructivelyDeleteFromEmployeeByKey = (employeeObject, key) => {
    delete employeeObject[key]
    return employeeObject
}