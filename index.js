const employee  ={};
employee.name = "Sam";

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee= employee;
    newEmployee[key] = value;
    return newEmployee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = employee;
    delete newEmployee[key];
    return newEmployee;
}

