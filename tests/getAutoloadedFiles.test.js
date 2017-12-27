import path from 'path';

import { getAutoloadedFiles } from '../src/getAutoloadedFiles';

test('Autoloaded files are found from a path.', async done => {
  const autoloadedFiles = await getAutoloadedFiles(
    path.resolve(__dirname, 'mock-root/lib'),
    path.resolve(__dirname, 'mock-root'),
  );

  expect(autoloadedFiles).toEqual([
    'lib/mock.php',
    'lib/subdirectory/file.php',
  ]);
  done();
});

test('Passing a nonexistent path throws.', async done => {
  try {
    await getAutoloadedFiles('some/nonexistent/path');
  } catch (err) {
    expect(err.code).toBe('ENOENT');
    done();
  }
});
