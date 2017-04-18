"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterUnique;
function filterUnique(oldArray) {
  var newArray = [];

  while (oldArray.length > 0) {
    var item = oldArray.shift();

    if (newArray.includes(item) === false) {
      newArray.push(item);
    }
  }

  return newArray;
}