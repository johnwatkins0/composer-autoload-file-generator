'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _recursiveReaddir = require('recursive-readdir');

var _recursiveReaddir2 = _interopRequireDefault(_recursiveReaddir);

var _filterUnique = require('./utils/filter-unique');

var _filterUnique2 = _interopRequireDefault(_filterUnique);

var _unleadingSlash = require('./utils/unleading-slash');

var _unleadingSlash2 = _interopRequireDefault(_unleadingSlash);

var _undoubleSlash = require('./utils/undouble-slash');

var _undoubleSlash2 = _interopRequireDefault(_undoubleSlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComposerAutoloadGenerator = function () {
  function ComposerAutoloadGenerator(settings) {
    _classCallCheck(this, ComposerAutoloadGenerator);

    this.settings = settings;
    if (this.shouldRun() === true) {
      this.composerJSON = require((0, _undoubleSlash2.default)(this.settings.composerRoot + '/composer.json'));

      this.run();
    }
  }

  _createClass(ComposerAutoloadGenerator, [{
    key: 'shouldRun',
    value: function shouldRun() {
      try {
        validateSettings(this.settings);
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  }, {
    key: 'run',
    value: function run() {
      var _this = this;

      var files = (0, _recursiveReaddir2.default)(this.settings.pathToFiles, function (error, files) {
        if (error) {
          return console.error(error);
        }

        if (files.length) {
          _this.files = files;
          return _this.processFiles(files);
        }

        console.log('No files were found.');
      });
    }
  }, {
    key: 'processFiles',
    value: function processFiles() {
      this.files = removeFullComposerRootPath(this.files, this.settings.composerRoot.replace('composer.json', ''));
      this.combineAutoloadedFiles();
      this.writeComposerJSONFile();
      console.log('The composer.json autoload list was re-generated.');
    }
  }, {
    key: 'combineAutoloadedFiles',
    value: function combineAutoloadedFiles() {
      if (!this.composerJSON.autoload) {
        this.composerJSON.autoload = {};
      }

      var existingFiles = this.composerJSON.autoload.files ? this.composerJSON.autoload.files : [];
      var newFiles = existingFiles.concat(this.files.map(_unleadingSlash2.default));

      this.composerJSON.autoload.files = (0, _filterUnique2.default)(newFiles);
    }
  }, {
    key: 'writeComposerJSONFile',
    value: function writeComposerJSONFile() {
      _fs2.default.writeFile((0, _undoubleSlash2.default)(this.settings.composerRoot + '/composer.json'), JSON.stringify(this.composerJSON, null, 2));
    }
  }]);

  return ComposerAutoloadGenerator;
}();

exports.default = ComposerAutoloadGenerator;


function validateSettings(settings) {
  if (!settings.pathToFiles || !_fs2.default.existsSync(settings.pathToFiles)) {
    throw new Error('The settings.pathToFiles value is invalid.');
  }

  if (!settings.composerRoot || !_fs2.default.existsSync(settings.composerRoot)) {
    throw new Error('The settings.composerRoot value is invalid.');
  }
}

function removeFullComposerRootPath(files, composerRoot) {
  return files.map(function (filePath) {
    return filePath.replace(composerRoot, '');
  });
}