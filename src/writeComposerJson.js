import fs from 'fs';

/**
 * Write updated data to the composer.json file.
 * @param {string} file The composer.json file path.
 * @param {string} data The stringified JSON data.
 * @return {Promise} A promise resolving in true if the process runs correctly.
 */
export const writeComposerJson = (file, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, data, { encoding: 'utf8', flag: 'r+' }, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(true);
    });
  });
