const data = require('../data/zoo_data');

function countAnimals(animal) {
  const arraySpecies = data.species;
  if (!animal) { // !animal indentifica se o param é undefined
    return Object.fromEntries(arraySpecies // Object.fromEntries pega um array de arrays com pares e transforma em objetos esses pares
      .map((element) => // Cria o par de elementos por array 'key: value'
        [element.name, element.residents.length]));
  }
  const specieSelected = arraySpecies.find((element) => element.name === animal.specie).residents; // Encontra a especie e seleciona o array residents
  if (animal.sex) { // Se no parametro possuir animal.sex entra no if
    return specieSelected.filter((specie) => specie.sex === animal.sex).length; // Filtra apenas os animais de um sexo especifico
  }
  return specieSelected.length;
}
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
