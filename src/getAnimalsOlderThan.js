const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .filter((element) => element.name === animal)
    .every((element) => element.residents
      .map((elementA) => elementA.age)
      .every((elementB) => elementB >= age));
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
