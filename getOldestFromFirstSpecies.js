const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // const result = {};
  const employee = employees.find((responsible) => responsible.id === id).responsibleFor[0];
  const oldest = species.find((elder) => elder.id === employee)
    .residents.sort((animal1, animal2) => animal2.age - animal1.age)[0];
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
