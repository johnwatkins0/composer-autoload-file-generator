import filterUnique from '../../src/utils/filter-unique';

test('There are three unique items out of five.', () => {
  expect(filterUnique([ 'dog', 'cat', 44, 'dog', 44 ])).toHaveLength(3);
});

test('There are five unique items out of five.', () => {
  expect(filterUnique([ 'dog', 'cat', null, {}, 44 ])).toHaveLength(5);
});

test('There are five items but only one unique.', () => {
  expect(filterUnique([ 44, 44, 44, 44, 44 ])).toHaveLength(1);
});

test('There are no unique items.', () => {
  expect(filterUnique([])).toHaveLength(0);
});

test('Nothing was passed in.', () => {
  expect(filterUnique()).toHaveLength(0);
});

test('String was passed in.', () => {
  expect(filterUnique('Hello')).toHaveLength(0);
});

test('Object was passed in.', () => {
  expect(filterUnique({})).toHaveLength(0);
});
