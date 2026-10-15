const repeatString = function(str, num) {
    const result = []
    if(num < 0){
        return 'ERROR';
    }
    for(let i=0; i < num; i++){
        result.push(str);
    }
    return result.join("")

};

// Do not edit below this line
module.exports = repeatString;
