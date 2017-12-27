import { getPathToConfigFile } from '../src/getPathToConfigFile';

test('Passing in a config file returns the config file.', () => {
  expect(
    getPathToConfigFile(['node', '', '--config', '/some/path/to/another-file']),
  ).toBe('/some/path/to/another-file');
});

test('Passing in nothing locates the config file.', () => {
  expect(getPathToConfigFile()).toBe(
    '/Users/jwatkins/composer-autoload-file-generator/composerAutoloadFiles.js',
  );
});
