import path from 'path';

/**
 * Returns the path to a config file.
 * @param {array} [argv=process.argv] Process arguments.
 * @return {string} The path.
 */
export const getPathToConfigFile = (argv = process.argv) => {
  if (argv[0] === 'node') {
    argv.shift();
  }

  return argv.length > 2 && argv[1] === '--config'
    ? path.resolve(process.env.PWD, argv[2])
    : path.resolve(process.env.PWD, 'composerAutoloadFiles.js');
};
