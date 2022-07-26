import { capitalize } from './index.js';
import { reverse } from './index.js';
import { calculator } from './index.js';
import { ceaser } from './index.js';
import { analyze } from './index.js';

test('capitalize', () => {
    expect(capitalize('doom')).toBe('Doom');
});

test('reverse', () => {
    expect(reverse('doom')).toBe('mood');
});

test('calculator', () => {
    expect(calculator.add(2, 4)).toBe(6);
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.divide(4, 2)).toBe(2);
});

test('ceaserCipher', () => {
    expect(ceaser('boo')).toBe('cpp');
});

test('analyze', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});