// create a function that checks a given tic tac toe board to see if someone has one
// function returns true or false
// tic tac toc input will always be standard 3 x 3

const checkWinner = (arr) => {
    let firstEl = arr[0];
    return arr.every(el => el === firstEl)
}
const checkTicTacToe = (matrix) => {
    for(let i = 0; i < matrix.length; i++){
        if(checkWinner(matrix[i]) === true){
            return true 
        } else if (matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]){
            return true
        } else if(matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]) {
            return true
        }else {
            return false
        }
    }
};
console.log(checkTicTacToe([
  ["x", "o", "x"],
  ["x", "o", "x"],
  ["o", "x", "x"],
]));

// console.log(checkWinner(["x", "x", "x"]))

// check if every element in the arr is equal 
// check if every middle el is equal
// check if every last el is equal
// check if every first el of the arr is equal
// check if the first el of the first arr is equal to the middle middel  and the last last
// check if the last if equal to the middle and the first

