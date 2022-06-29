const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const zooOpen = 'The zoo is open';
  const zooClosed = 'The zoo is closed';
  it('TEST', () => {
    const actual = getOpeningHours('Monday', '09:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Tuesday', '09:23-AM');
    const expected = zooOpen;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Tuesday', '05:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Wednesday', '09:23-AM');
    const expected = zooOpen;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Wednesday', '05:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Thursday', '11:23-AM');
    const expected = zooOpen;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Thursday', '05:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Friday', '11:23-AM');
    const expected = zooOpen;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Friday', '05:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Saturday', '09:23-AM');
    const expected = zooOpen;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Saturday', '05:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Sunday', '09:23-AM');
    const expected = zooOpen;
    expect(actual).toEqual(expected);
  });
  it('TEST', () => {
    const actual = getOpeningHours('Sunday', '05:23-AM');
    const expected = zooClosed;
    expect(actual).toEqual(expected);
  });

  it('TEST A', () => {
    const actual = () => (getOpeningHours('INVALIDO', '08:45-AM'));
    const expected = 'The day must be valid. Example: Monday';
    expect(actual).toThrow(expected);
  });

  it('TEST A', () => {
    const actual = () => (getOpeningHours('Sunday', 'INVALIDO'));
    const expected = 'The hour should represent a number';
    expect(actual).toThrow(expected);
  });

  it('TEST A', () => {
    const actual = () => (getOpeningHours('Sunday', '15:00-PM'));
    const expected = 'The hour must be between 0 and 12';
    expect(actual).toThrow(expected);
  });

  it('TEST A', () => {
    const actual = () => (getOpeningHours('Sunday', '12:92-PM'));
    const expected = 'The minutes must be between 0 and 59';
    expect(actual).toThrow(expected);
  });

  it('TEST A', () => {
    const actual = () => (getOpeningHours('Sunday', '11:30-XJ'));
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(actual).toThrow(expected);
  });
});
