 const reverseString = function(str) {
    const result = [];
    const split = str.split(" ")

    for(let i=0; i < split.length; i++){
        result.push(split[i].split("").reverse().join(""))
    }
    return result.reverse().join(" ")
 }

// Do not edit below this line
module.exports = reverseString;
