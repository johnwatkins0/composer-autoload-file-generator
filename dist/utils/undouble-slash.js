'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undoubleSlash;
function undoubleSlash(string) {
  return string.replace(/\/\//, '/');
}