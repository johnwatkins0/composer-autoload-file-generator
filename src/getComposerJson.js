import fs from 'fs';

/**
 * Get JSON data from a passed-in composer.json file path.
 * @param {string} path The path.
 * @return {Promise} Promise resolving in a parsed JSON object.
 */
export const getComposerJson = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, json) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(
        Object.assign(
          {},
          { autoload: { files: [] } },
          JSON.parse(json || '{}'),
        ),
      );
    });
  });
