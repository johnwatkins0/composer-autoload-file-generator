#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import { ensureOpts } from './ensureOpts';
import { checkCommandLineForOpts } from './checkCommandLineForOpts';
import { getComposerJson } from './getComposerJson';
import { getAutoloadedFiles } from './getAutoloadedFiles';
import { writeComposerJson } from './writeComposerJson';
import { makeNewComposerJson } from './makeNewComposerJson';

(opts => {
  const composerFile = path.resolve(process.env.PWD, 'composer.json');

  try {
    fs.access(composerFile, fs.constants.F_OK, async err => {
      if (err) {
        throw new Error(
          'composer-autoload-file-generator must run in a directory containing a composer.json file.',
        );
      }

      const composerJson = await getComposerJson(composerFile);
      const files = await getAutoloadedFiles(opts.pathToFiles, process.env.PWD);
      const newJson = makeNewComposerJson(composerJson, files);
      await writeComposerJson(
        composerFile,
        JSON.stringify(newJson, null, '\t'),
      );

      console.log(chalk.green('composer-autoload-file-generator succeeded'));
    });
  } catch (err) {
    console.log(chalk.red(err));
  }
})(ensureOpts(checkCommandLineForOpts()));
