import { expect } from '@jest/globals';
import reverse from './reverse';

test('Reverse a string', () => {
  expect(reverse('awesome')).toBe('emosewa');
});

test('Reverse a string', () => {
  expect(reverse('rithmschool')).toBe('loohcsmhtir');
});
