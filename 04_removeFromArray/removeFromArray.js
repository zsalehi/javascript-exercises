
// advanced form - essentially what I should do is first understand
// that all items passed as arguments can be arrays within arrays
// therefore by pulling out the first item from the args array,
// i pull out the initial array being passed.
// to pass all the tests there are 2 options to go from
// 1. i can use a forEach on the newArray i would create, and push items that are NOT in the functions argument array
// 2. use a .filter method to filter out arguments NOT in the functions argument array 
const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(val => !args.includes(val));

    // option 1
    // const newArray = [];
    // array.forEach((items) => {
    //    if(!args.includes(item)) {
    //        newArray.push(item);
    //    }
    //}
    // return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
