"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterUnique;
function filterUnique(oldArray = []) {
  if (!Array.isArray(oldArray)) {
    return [];
  }

  const newArray = [];

  while (oldArray.length > 0) {
    let item = oldArray.shift();

    if (newArray.includes(item) === false) {
      newArray.push(item);
    }
  }

  return newArray;
}