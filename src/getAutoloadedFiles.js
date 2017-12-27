import recursive from 'recursive-readdir';

/**
 * Gets a list of files to add to the autoload list.
 * @param {string} pathToFiles Path to the file directory.
 * @return {Promise} Promise resolving with an array of files.
 */
export const getAutoloadedFiles = (pathToFiles, composerRoot) =>
  new Promise((resolve, reject) => {
    recursive(pathToFiles, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(
        files.map(file => file.replace(composerRoot, '').replace(/^\/+/, '')),
      );
    });
  });
