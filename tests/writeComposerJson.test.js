import fs from 'fs';
import path from 'path';
import { writeComposerJson } from '../src/writeComposerJson';

test('Passing a nonexistent file path throws.', async done => {
  try {
    await writeComposerJson('nonexistent-file-path', '{}');
  } catch (err) {
    expect(err.code).toBe('ENOENT');
    done();
  }
});

test('Composer file is written correctly.', done => {
  const file = path.resolve(__dirname, 'mock-root/composer.json');
  fs.writeFile(file, '', 'utf8', async err => {
    if (err) {
      throw err;
    }

    await writeComposerJson(
      file,
      `{
      "autoload": {
        "files": ["lib/mock.php", "lib/subdirectory/file.php"]
      }
    }

`,
    );

    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      expect(data).toBe(`{
      "autoload": {
        "files": ["lib/mock.php", "lib/subdirectory/file.php"]
      }
    }

`);
      done();
    });
  });
});
