const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const searchNameOlder = species.find((animals) => animals.name === animal)
    .residents.every((older) => older.age >= age);
  return searchNameOlder;
  // const ageVerify = species.map(() => `${species.name} ${species.residents.age}`);
  // return ageVerify;
}

module.exports = getAnimalsOlderThan;
