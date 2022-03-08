// 1. Given a string, make the whole string uppercase if it starts with a vowel

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