function compareFunction(a, b){
    return a - b
}

const sumAll = function(...values) {
    if(values[0] <0 || values.slice(-1) < 0){
        return 'ERROR';
    }
    else if(!Number.isInteger(values[0]) || !Number.isInteger(values[1])){
        return 'ERROR'
    }
    else if(typeof values[0] !='number' || typeof values[1] != 'number'){
        return 'ERROR'
    }

    else{
        values.sort(compareFunction);
        const length = values.slice(-1) - values[0] + 1;
        let sum = 0
        for(let i=0; i < length; i++){
           sum += values[0] + i
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
