const palindromes = function (str) {
    var re = /[\W_]/g;
    
    // 1. Remove all punctuation and make the string lowercase.

    let lowRegStr = str.toLowerCase().replace(re, '');
    
    // 2. Use chained methods to create a reverse string and join it together. Turns into an array, reverses order, then joins together.
    let reverseStr = lowRegStr.split('').reverse().join('');

    // 3. Check if the reverseStr equals the lowRegStr.

    return reverseStr === lowRegStr;

};

// Do not edit below this line
module.exports = palindromes;
