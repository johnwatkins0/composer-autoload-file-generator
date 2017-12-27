import { getPathToConfigFile } from './getPathToConfigFile';

/**
 * Ensures options exist; throws an error otherwise.
 * @param {Object} [opts={}] An options object.
 * @return {Promise} A promise resolving in options or rejecting with an error.
 */
export const ensureOpts = (
  opts,
  pathToConfigFile = getPathToConfigFile(process.argv),
) =>
  new Promise((resolve, reject) => {
    if (typeof opts === 'object' && Object.keys(opts).length > 0) {
      resolve(opts);
    }

    try {
      const opts = require(pathToConfigFile);
      resolve(opts);
    } catch (err) {
      reject(
        `composer-autoload-file-generator looked for a config file at ${pathToConfigFile}. No such file exists.`,
      );
    }
  });
