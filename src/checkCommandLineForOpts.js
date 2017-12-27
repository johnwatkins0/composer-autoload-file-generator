/**
 * Checks for arguments passed via the command line.
 * @return {Object}
 */
export function checkCommandLineForOpts(argv = process.argv) {
  if (argv[0].slice(-4) === 'node') {
    argv.shift();
  }

  if (argv.length < 2 || argv[1] === '--config') {
    return {};
  }

  return { pathToFiles: argv[1] };
}
