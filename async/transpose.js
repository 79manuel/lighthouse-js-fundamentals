function transpose(array) {
  let tMatrix = [];
  for (let i = 0; i < array.length; i++) {
    tMatrix[i] = [];
    for (let j = 0; j < array[i].length; j++) {
      tMatrix[i][j] = array[j][i];
    }
  } return tMatrix;
}

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));
//
// console.log('----')
//
// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));