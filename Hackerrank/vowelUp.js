function vowelUp(str){
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    console.log(vowels)

    if(vowels.has(str[0].toLowerCase())){
        return str.toUpperCase()
    } else {
        return str
    }
}
console.log(vowelUp('ABacus'))