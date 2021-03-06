const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('TEST 1', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('TEST 2', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('TEST 3', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('TEST 4', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('TEST 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('TEST 6', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('TEST 7', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});
