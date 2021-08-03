const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const isUpperCase = str => str == str.toUpperCase();

function replace(str,shift){
        let arg = str.toLowerCase();
        if(arg in obj){
        for(let key in obj){
            if((obj[arg] + shift) <= 26){
                if(isUpperCase(str)){
                    return (alphabet[obj[arg] + shift - 1]).toUpperCase();
                }
                return alphabet[obj[arg] + shift - 1];
            }else if((obj[arg] + shift)%26 !== 0){
                if(isUpperCase(str)){
                    return (alphabet[(obj[arg] + shift)%26 - 1]).toUpperCase();
                }
                return alphabet[(obj[arg] + shift)%26 - 1]
            }
        }
    }else{
        return arg;
    }
}

function caeser(str, shift){
    if(shift%26 === 0){
        return str;
    }
    let arr1 = str.split('');
    let arr2 =[]
    for(let i = 0; i < arr1.length; i++){
        arr2.push(replace(arr1[i],shift));
    }
    let aString = '';
    for(let i =0; i < arr2.length; i++){
        aString += arr2[i];
    }
    return aString;
}

module.exports = caeser