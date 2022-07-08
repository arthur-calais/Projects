const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const searchFirstName = employees.find((worker) => worker.firstName === employeeName);
  const searchSurname = employees.find((worker) => worker.lastName === employeeName);
  if (searchFirstName === undefined) {
    return searchSurname;
  }
  if (searchSurname === undefined) {
    return searchFirstName;
  }
}

module.exports = getEmployeeByName;
