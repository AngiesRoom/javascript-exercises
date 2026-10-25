const findTheOldest = function(arr) {
    function compareFunction(a, b){
        let ageA;
        let ageB;
        if(!a.hasOwnProperty('yearOfDeath')){
            a.yearOfDeath = new Date().getFullYear() 
        }else if(!b.hasOwnProperty('yearOfDeath')){
            b.yearOfDeath = new Date().getFullYear()
        }
    return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
        
    }

    const result = arr.sort(compareFunction)
    result.reverse()
    return result[0]
};
   const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    

console.log(findTheOldest(people))


// Do not edit below this line
module.exports = findTheOldest;
