#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _ensureOpts = require('./ensureOpts');

var _checkCommandLineForOpts = require('./checkCommandLineForOpts');

var _getComposerJson = require('./getComposerJson');

var _getAutoloadedFiles = require('./getAutoloadedFiles');

var _writeComposerJson = require('./writeComposerJson');

var _makeNewComposerJson = require('./makeNewComposerJson');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(opts => {
  const composerFile = _path2.default.resolve(process.env.PWD, 'composer.json');

  try {
    _fs2.default.access(composerFile, _fs2.default.constants.F_OK, async err => {
      if (err) {
        throw new Error('composer-autoload-file-generator must run in a directory containing a composer.json file.');
      }

      const composerJson = await (0, _getComposerJson.getComposerJson)(composerFile);
      const files = await (0, _getAutoloadedFiles.getAutoloadedFiles)(opts.pathToFiles, process.env.PWD);
      const newJson = (0, _makeNewComposerJson.makeNewComposerJson)(composerJson, files);
      await (0, _writeComposerJson.writeComposerJson)(composerFile, JSON.stringify(newJson, null, '\t'));

      console.log(_chalk2.default.green('composer-autoload-file-generator succeeded'));
    });
  } catch (err) {
    console.log(_chalk2.default.red(err));
  }
})((0, _ensureOpts.ensureOpts)((0, _checkCommandLineForOpts.checkCommandLineForOpts)()));