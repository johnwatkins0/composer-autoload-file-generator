import path from 'path';
import { ensureOpts } from '../src/ensureOpts';

test('Passed in opts are returned.', async done => {
  const defaults = {
    pathToFiles: 'some/path',
    composerRoot: 'some/path-to-file',
  };

  try {
    const opts = await ensureOpts(defaults);
    expect(opts).toMatchObject(defaults);
    done();
  } catch (e) {
    done();
  }
});

test('Opts are returned when a path is passed.', async done => {
  const opts = await ensureOpts(
    {},
    path.resolve(__dirname, 'mock-root/composerAutoloadFiles.js'),
  );
  expect(opts).toMatchObject({
    pathToFiles: path.resolve(__dirname, 'mock-root/lib'),
    composerRoot: path.resolve(__dirname, 'mock-root'),
  });
  done();
});

test('Using a nonexistent path throws.', async done => {
  try {
    await ensureOpts({}, 'nonexistent-file-path');
  } catch (e) {
    expect(e).toBe(
      'composer-autoload-file-generator looked for a config file at nonexistent-file-path. No such file exists.',
    );
    done();
  }
});
