export default function filterUnique(oldArray) {
  const newArray = [];

  while (oldArray.length > 0) {
    let item = oldArray.shift();

    if (newArray.includes(item) === false) {
      newArray.push(item);
    }
  }

  return newArray;
}
