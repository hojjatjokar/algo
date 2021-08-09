import substringsDistinctCharacters from './substrings-distinct-characters';

test('', () => {
  expect(substringsDistinctCharacters('xyzzaz')).toBe(1);
});

test('', () => {
  expect(substringsDistinctCharacters('aababcabc')).toBe(3);
});
