import fs from 'fs';
import recursive from 'recursive-readdir';
import path from 'path';

import filterUnique from './utils/filter-unique';
import unleadingSlash from './utils/unleading-slash';

export default class ComposerAutoloadGenerator {
  constructor(settings) {
    this.settings = settings;

    if (this.shouldRun() === true) {
      this.composerJSON = require(
        path.normalize(`${this.settings.composerRoot}/composer.json`)
      );

      this.run();
    }
  }

  shouldRun() {
    validateSettings(this.settings);
    return true;
  }

  run() {
    const files = recursive(this.settings.pathToFiles, (error, files) => {
      if (error) {
        return console.error(error);
      }

      if (files.length) {
        this.files = files;
        return this.processFiles(files);
      }

      console.log('No files were found.');
    });
  }

  processFiles() {
    this.files = removeFullComposerRootPath(
      this.files,
      this.settings.composerRoot.replace('composer.json', '')
    );
    this.combineAutoloadedFiles();
    this.writeComposerJSONFile();
    console.log('The composer.json autoload list was re-generated.');
  }

  combineAutoloadedFiles() {
    if (!this.composerJSON.autoload) {
      this.composerJSON.autoload = {};
    }

    const existingFiles = this.composerJSON.autoload.files
      ? this.composerJSON.autoload.files
      : [];
    const newFiles = existingFiles.concat(this.files.map(unleadingSlash));

    this.composerJSON.autoload.files = filterUnique(newFiles);
  }

  writeComposerJSONFile() {
    fs.writeFile(
      path.normalize(`${this.settings.composerRoot}/composer.json`),
      JSON.stringify(this.composerJSON, null, 2)
    );
  }
}

function validateSettings(settings) {
  if (typeof settings === 'undefined') {
    throw new Error('No settings object was passed.');
  }

  if (!settings.pathToFiles || !fs.existsSync(settings.pathToFiles)) {
    throw new Error('The settings.pathToFiles value is invalid.');
  }

  if (!settings.composerRoot || !fs.existsSync(settings.composerRoot)) {
    throw new Error('The settings.composerRoot value is invalid.');
  }

  if (
    path.normalize(`${settings.pathToFiles}/../`) !==
      path.normalize(settings.composerRoot)
  ) {
    throw new Error(
      'The directory of autoloaded files must be in the Composer root.'
    );
  }
}

function removeFullComposerRootPath(files, composerRoot) {
  return files.map(filePath => filePath.replace(composerRoot, ''));
}
