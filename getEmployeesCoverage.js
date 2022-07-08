const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function searchName(input) {
  const result = employees.find((worker) => worker
    .firstName === input.name || worker
    .lastName === input.name || worker
    .id === input.id);
  if (!result) throw new Error('Informações inválidas');
  const { responsibleFor } = result;
  const animals = responsibleFor
    .map((i) => species.find((specie) => specie.id === i).name);
  const workerLocation = animals
    .map((nameInput) => species.find((specie) => specie.name === nameInput).location);
  const returnSearchResult = {
    id: result.id,
    fullName: `${result.firstName} ${result.lastName}`,
    species: animals,
    locations: workerLocation,
  };
  return returnSearchResult;
}

function returnAllEmployees() {
  const workers = [];
  employees
    .forEach((emp) => {
      const selectedEmp = { name: emp.firstName };
      workers.push(selectedEmp);
    });
  const inputResult = [];
  workers
    .forEach((emp) => inputResult
      .push(searchName(emp)));
  return inputResult;
}

function getEmployeesCoverage(input) {
  if (typeof input === 'object') {
    return searchName(input);
  } if (!input) {
    return returnAllEmployees();
  }
}

module.exports = getEmployeesCoverage;
