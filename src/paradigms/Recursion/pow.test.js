import { expect, test } from '@jest/globals'
import power from './pow'

test('Power', () => {
  expect(power(2, 3)).toBe(8);
})

test('Power a ** b', ()=> {
  expect(power(4,5)).toBe(1024);
})