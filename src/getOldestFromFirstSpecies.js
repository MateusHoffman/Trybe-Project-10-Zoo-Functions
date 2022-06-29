const data = require('../data/zoo_data');

// Primeira especie gerenciada
// O mais velho

function getOldestFromFirstSpecies(id) {
  const findPeople = data.employees.find((elementId) => elementId.id === id);
  const getFirstSpecie = findPeople.responsibleFor[0];
  const findSpecie = data.species.find(
    (elementIdSpecie) => elementIdSpecie.id === getFirstSpecie,
  );
  const getBiggerAge = findSpecie.residents.reduce((acc, current) => {
    if (acc > current.age) {
      return acc;
    }
    return current.age;
  }, 0);
  const residents = findSpecie.residents.find(
    (element) => element.age === getBiggerAge,
  );
  const arrayAnimalOlder = [residents.name, residents.sex, getBiggerAge];
  return arrayAnimalOlder;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// ['Maxwell', 'male', 15]

const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
console.log(getOldestFromFirstSpecies(olaId));
// ['Margherita', 'female', 10]

module.exports = getOldestFromFirstSpecies;
