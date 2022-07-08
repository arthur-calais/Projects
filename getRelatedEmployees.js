const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const hierarchy = employees.some((manager) => manager.managers.includes(id));
  return hierarchy;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const worker = employees
      .filter((employee) => employee.managers
        .includes(managerId));
    return worker
      .map((manager) => `${manager.firstName} ${manager.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
