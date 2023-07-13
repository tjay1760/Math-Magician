import calculate from '../logic/calculate';

describe('Calculate Functionality', () => {
  test('should clear the calculator (AC)', () => {
    const obj = {
      total: '15',
      next: '5',
      operation: '+',
    };
    const received = calculate(obj, 'AC');
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(received).toEqual(result);
  });

  test('should handle entering 0 twice', () => {
    const obj = {
      total: '15',
      next: '0',
      operation: '+',
    };
    const received = calculate(obj, '0');
    const result = {};
    expect(received).toEqual(result);
  });

  test('should handle entering two numbers in a row', () => {
    const obj = {
      total: '10',
      next: '1',
      operation: 'x',
    };
    const received = calculate(obj, '2');
    const result = {
      total: null,
      next: '12',
      operation: 'x',
    };
    expect(received.next).toEqual(result.next);
  });

  test('should handle entering a number after 0', () => {
    const obj = {
      total: '10',
      next: '0',
      operation: '-',
    };
    const received = calculate(obj, '5');
    const result = {
      total: null,
      next: '5',
      operation: '-',
    };
    expect(received.next).toEqual(result.next);
  });

  test('should handle entering a decimal point', () => {
    const obj = {
      total: '10',
      next: '6',
      operation: '+',
    };
    const received = calculate(obj, '.');
    const result = {
      total: null,
      next: '6.',
      operation: '+',
    };
    expect(received.next).toEqual(result.next);
  });

  test('should handle the equal sign', () => {
    const obj = {
      total: '10',
      next: '6',
      operation: '+',
    };
    const received = calculate(obj, '=');
    const result = {
      total: '16',
      next: null,
      operation: null,
    };
    expect(received.total).toEqual(result.total);
  });

  test('should handle the +/- button', () => {
    const obj = {
      total: '20',
      next: '7',
      operation: '+',
    };
    const received = calculate(obj, '+/-');
    const result = {
      total: '20',
      next: '-7',
      operation: '+',
    };
    expect(received.next).toEqual(result.next);
  });

  test('should handle the +/- button for negative values', () => {
    const obj = {
      total: '20',
      next: '-6',
      operation: '+',
    };
    const received = calculate(obj, '+/-');
    const result = {
      total: '20',
      next: '6',
      operation: '+',
    };
    expect(received.next).toEqual(result.next);
  });

  test('should handle the +/- button for the Total', () => {
    const obj = {
      total: '-20',
      next: null,
      operation: '+',
    };
    const received = calculate(obj, '+/-');
    const result = {
      total: '20',
      next: null,
      operation: '+',
    };
    expect(received.next).toEqual(result.next);
  });
});
