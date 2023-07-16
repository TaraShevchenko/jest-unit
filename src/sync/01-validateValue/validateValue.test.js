const validateValue = require('./validateValue');

describe('ValidateValue', () => {
    test('right value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('too small value', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('too big value', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('small value on corner', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('big value on corner', () => {
        expect(validateValue(100)).toBe(true);
    })
})

