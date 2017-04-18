import unleadingSlash from '../../src/utils/unleading-slash';

test('/index.js becomes index.js', () => {
  expect(unleadingSlash('/index.js')).toBe('index.js');
});

test('//index.js becomes index.js', () => {
  expect(unleadingSlash('//index.js')).toBe('index.js');
});

test('index.js stays index.js', () => {
  expect(unleadingSlash('index.js')).toBe('index.js');
});

test('x/index.js stays x/index.js', () => {
  expect(unleadingSlash('x/index.js')).toBe('x/index.js');
});
