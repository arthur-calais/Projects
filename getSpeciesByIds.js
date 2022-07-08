const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animals) => (ids.includes(animals.id)));
}
// Referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes;
module.exports = getSpeciesByIds;
