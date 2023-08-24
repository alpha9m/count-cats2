//countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3
const backyard = [
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2],
  [0, 1, 2],
  ['^^', 1, 2],
  ['^^', '^^', 2],
];
let counter = 0;
let countCats = (backyard) => {
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === '^^') {
        counter += 1;
      }
    }
  }
  return counter;
};
console.log(countCats(backyard));
