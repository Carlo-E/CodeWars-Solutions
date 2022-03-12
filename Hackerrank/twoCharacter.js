// https://www.hackerrank.com/challenges/three-month-preparation-kit-two-characters/problem?h_r=internal-search

function alternate(s) {
    // Write your code here
    s = s.split("")
    // console.log(s)
    let arr = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i + 1]){
            arr.push(s[i])
        }

    }
    
    let arr2 = s.filter(el => el != arr[0])

    console.log(arr2)
    
    



}
console.log(alternate('beabeefeab'))