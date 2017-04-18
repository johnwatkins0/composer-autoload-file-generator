'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unleadingSlash;
function unleadingSlash(file) {
  return file.indexOf('/') === 0 ? file.substring(1) : file;
}