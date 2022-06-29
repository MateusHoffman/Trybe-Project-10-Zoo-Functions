const data = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const listManagersId = [stephanieId, olaId, burlId];
// const listManagersName = ['stephanieId', 'olaId', 'burlId'];

// for (let value of listManagersId) {
//   console.log(value);
//   return data.employees
//   .filter((element) => element.id === id)
//   .every((element) => element.id === value || element.id === value)
// }

function isManager(id) {
  return data.employees
    .some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managers = [];
    data.employees
      .forEach((element) => {
        if (element.managers.includes(managerId)) {
          managers.push(`${element.firstName} ${element.lastName}`);
        }
      });
    return managers;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
