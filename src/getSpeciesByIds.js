const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) { // ...ids retorna um array de strings
  return data.species
    .filter((element) => ids.includes(element.id)); // filtrar/pegar apenas os ids inclusos no array ids
}
getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed');

module.exports = getSpeciesByIds;
