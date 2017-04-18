"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterUnique;
function filterUnique() {
  var oldArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!Array.isArray(oldArray)) {
    return [];
  }

  var newArray = [];

  while (oldArray.length > 0) {
    var item = oldArray.shift();

    if (newArray.includes(item) === false) {
      newArray.push(item);
    }
  }

  return newArray;
}