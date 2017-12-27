import { makeNewComposerJson } from '../src/makeNewComposerJson';

test('New composer JSON data is generated correctly.', () => {
  expect(
    makeNewComposerJson({ autoload: { files: [] } }, [
      'lib/mock.php',
      'lib/subdirectory/file.php',
    ]),
  ).toMatchObject({
    autoload: {
      files: ['lib/mock.php', 'lib/subdirectory/file.php'],
    },
  });
});

test('Data is generated when original composer.json has no autoload.files field.', () => {
  expect(
    makeNewComposerJson({ autoload: {} }, [
      'lib/mock.php',
      'lib/subdirectory/file.php',
    ]),
  ).toMatchObject({
    autoload: {
      files: ['lib/mock.php', 'lib/subdirectory/file.php'],
    },
  });
});
