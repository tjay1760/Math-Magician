import operate from '../logic/operate';

describe('operate function', () => {
  test('should correctly add two positive numbers', () => {
    expect(operate('3', '2', '+')).toBe('5');
  });

  test('should correctly subtract two numbers', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  test('should correctly multiply two numbers', () => {
    expect(operate('4', '4', 'x')).toBe('16');
  });

  describe('division operator', () => {
    test('should correctly divide two numbers', () => {
      expect(operate('10', '2', '÷')).toBe('5');
    });
    test('should return an error message when dividing by 0', () => {
      expect(operate('8', '0', '÷')).toBe("Can't divide by 0.");
    });
  });

  describe('modulo operator', () => {
    test('should correctly calculate the modulo of two numbers', () => {
      expect(operate('7', '4', '%')).toBe('3');
    });
    test('should return an error message when dividing by 0 for modulo', () => {
      expect(operate('9', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    });
  });
});
