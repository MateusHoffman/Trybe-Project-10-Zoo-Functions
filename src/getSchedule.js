const data = require('../data/zoo_data');

const arrayNameAnimals = data.species.map((element) => element.name);
const daysOfWeek = Object.keys(data.hours);
const schedule = Object.fromEntries(
  daysOfWeek.map((element) => [
    element,
    {
      officeHour:
        data.hours[element].open === 0
          ? 'CLOSED'
          : `Open from ${data.hours[element].open}am until ${data.hours[element].close}pm`,

      exhibition:
        data.hours[element].open === 0
          ? 'The zoo will be closed!'
          : data.species
            .filter((element1) => element1.availability.includes(element))
            .map((element1) => element1.name),
    },
  ]),
);

function getSchedule(scheduleTarget) {
  if (arrayNameAnimals.includes(scheduleTarget)) {
    const indexAnimal = arrayNameAnimals.indexOf(scheduleTarget);
    return data.species[indexAnimal].availability;
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return Object.fromEntries([[scheduleTarget, schedule[scheduleTarget]]]);
  }

  return schedule;
}

module.exports = getSchedule;
