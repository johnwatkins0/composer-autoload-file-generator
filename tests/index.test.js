import ComposerAutoloadGenerator from '../src/';

const validSettings = {
  pathToFiles: `${__dirname}/mock-root/lib/`,
  composerRoot: `${__dirname}/mock-root/`
};

test('Error is thrown when no settings are passed', () => {
  expect(
    () => new ComposerAutoloadGenerator()
  ).toThrow('No settings object was passed.');
});

test('Error is thrown when an empty object is passed', () => {
  expect(() => new ComposerAutoloadGenerator({})).toThrow();
});

test('A nonexistent path is passed', () => {
  expect(
    () =>
      new ComposerAutoloadGenerator({
        pathToFiles: 'awefawef/awefwaef',
        composerRoot: `${__dirname}/mock-root/`
      })
  ).toThrow('The settings.pathToFiles value is invalid.');
});

test('A nonexistent composer root is passed', () => {
  expect(
    () =>
      new ComposerAutoloadGenerator({
        composerRoot: 'awefawef/awefwaef',
        pathToFiles: `${__dirname}/mock-root/`
      })
  ).toThrow('The settings.composerRoot value is invalid.');
});

test('The path to files is not in the composer root.', () => {
  expect(
    () =>
      new ComposerAutoloadGenerator({
        pathToFiles: `${__dirname}/mock-invalid-directory/`,
        composerRoot: `${__dirname}/mock-root/`
      })
  ).toThrow('The directory of autoloaded files must be in the Composer root.');
});

test('The path to files is in the composer root.', () => {
  expect(() => new ComposerAutoloadGenerator(validSettings)).toThrow();
});
