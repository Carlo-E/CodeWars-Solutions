// given an array check for two same sequential values

const seqValues = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1 ] === arr[i]){
            return true 
        } 
    }
    return false

}
console.log(seqValues([1, 5, 23, 67, 2, 17, 34, 2]))