import { checkCommandLineForOpts } from '../src/checkCommandLineForOpts';

test('Command-line options are successfully found.', () => {
  expect(
    checkCommandLineForOpts([
      'node',
      '',
      '/some/path/to/file',
      '/some/path/to/another-file',
    ]),
  ).toMatchObject({
    pathToFiles: '/some/path/to/file',
    composerRoot: '/some/path/to/another-file',
  });
});

test('No command-line args used when a config path is passed.', () => {
  expect(
    checkCommandLineForOpts([
      'node',
      '',
      '--config',
      '/some/path/to/another-file',
    ]),
  ).toMatchObject({});
});

test('Not enough command line args results in empty object.', () => {
  expect(checkCommandLineForOpts(['node', '', 'aewfawef'])).toMatchObject({});
});

test('No command line args results in empty object.', () => {
  expect(checkCommandLineForOpts()).toMatchObject({});
});
