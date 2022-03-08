
// pass 2 values into the function - val1 = starting value, val2 = ending value
// for loop - let i = val1 - while i is < val2, 
const sumAll = function(val1, val2) {
    let finalSum = 0;
    if(!Number.isInteger(val1) || !Number.isInteger(val2)) return "ERROR";
    if(val1 < 0 || val2 < 0) return "ERROR";

     if (val1 < val2) {
         for (i = val1; i <= val2; i++) {
             finalSum = finalSum + i;
        }
        return finalSum;
     } else if (val1 > val2){
         for (i = val2; i <= val1; i++) {
             finalSum = finalSum + i;
        }
        return finalSum;
     } 
 };

// Do not edit below this line
module.exports = sumAll;
