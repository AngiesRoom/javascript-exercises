 const removeFromArray = function(arr, ...values){
            console.log(values)
            for(let i=0; i < arr.length; i++){
                if(values.includes(arr[i])){
                    arr.splice(i, 1)
                    i -=1;
                }
            }
            return arr
        }

// Do not edit below this line
module.exports = removeFromArray;
