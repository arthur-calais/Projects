const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
  }
  if (animal.specie && animal.sex) {
    return species.find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return species.find((specie) => specie.name === animal.specie).residents.length;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
