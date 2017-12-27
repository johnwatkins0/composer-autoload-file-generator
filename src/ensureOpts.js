import chalk from 'chalk';

import { getPathToConfigFile } from './getPathToConfigFile';

/**
 * Ensures options exist; throws an error otherwise.
 * @param {Object} [opts={}] An options object.
 * @return {Promise} A promise resolving in options or rejecting with an error.
 */
export const ensureOpts = (
  opts,
  pathToConfigFile = getPathToConfigFile(process.argv),
) => {
  if (typeof opts === 'object' && Object.keys(opts).length > 0) {
    return opts;
  }

  try {
    const opts = require(pathToConfigFile);
    return opts;
  } catch (err) {
    throw new Error(
      chalk.red(
        `composer-autoload-file-generator looked for a config file at ${pathToConfigFile}. No such file exists.`,
      ),
    );
  }
};
