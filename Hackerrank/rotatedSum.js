let matrix3 = [
  [1, 2, 3, 4, 0],
  [5, 6, 7, 8, 1],
  [3, 2, 4, 1, 4],
  [4, 3, 5, 1, 6],
];

function rotateMatrixMax(matrix, a, b) {
    // starting points can only exist on matrix.length - (a + (b -1)
    // 4 - 2 + 2
    // 4 - 5 - 1
    for(let i = 0; i <= matrix.length - (a + (b-1)); i++){
        for(let j = 0; j < matrix[i].length; j++){
            console.log(matrix[i][j])
        }
    }
}
console.log(rotateMatrixMax(matrix3, 2, 3))
