const removeEveryOther = (str) => {
    return str.split("").filter((el,i) => { if(i % 2 !== 1){
        return el
    }} )

}
console.log(removeEveryOther('abcdefg'))