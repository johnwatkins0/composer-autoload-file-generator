import path from 'path';
import { getComposerJson } from '../src/getComposerJson';

test('The correct JSON is generated from an empty file.', async done => {
  const json = await getComposerJson(
    path.resolve(__dirname, 'mock-root/empty-composer.json'),
  );

  expect(json).toMatchObject({ autoload: { files: [] } });

  done();
});

test('Passing a nonexistent file path throws an error.', async done => {
  try {
    await getComposerJson('nonexistent/file/path');
  } catch (err) {
    expect(err.code).toBe('ENOENT');
    done();
  }
});
