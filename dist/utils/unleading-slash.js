'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unleadingSlash;
function unleadingSlash(file) {
  if (typeof file !== 'string') {
    return '';
  }

  while (file.indexOf('/') === 0) {
    file = file.substring(1);
  }

  return file;
}