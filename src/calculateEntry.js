const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      adult += 1;
    }
    if (element.age >= 50) {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === [] || !entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const objEntriesQuantityPeople = Object.entries(countEntrants(entrants)); // Pega o objeto com a quantidade de pessoa por cada idade
  return objEntriesQuantityPeople
    .reduce((accumulator, current) => accumulator + current[1] * data.prices[current[0]], 0);
}

module.exports = { calculateEntry, countEntrants };
