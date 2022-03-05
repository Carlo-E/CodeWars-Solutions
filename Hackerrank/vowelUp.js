function vowelUp(str){
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    if(vowels.has(str[0].toLowerCaser())){
        return str.toUpperCase()
    } else {
        return str
    }
}