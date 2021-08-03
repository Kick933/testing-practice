function capitalize(string){
    let string0 = string.slice(0,1);
    let firstLetter = string0.toUpperCase();
    return firstLetter + string.slice(1);
}

module.exports = capitalize