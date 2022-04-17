const fibonacci = function(num) {
    var a = 1, b = 0, temp;

    if (num < 0) 
        return "OOPS";
    
    
    while (num-1 >= 0){
        // temp becomes 1
        temp = a;
        // a = 1 + 0, (first fibonacci sequence)
        a = a + b;
        // b takes the place of temp and becomes 1 for the next fibonacci sequence
        b = temp;
        // then decrement num to continue the loop, num = 2 -> temp = 1, a = 2 (1 + 1), b = 1, num = 3 -> temp = 2, a = 3 (2+1), b = 2, and so on
        num--;
    }
    return b;    

};

// Do not edit below this line
module.exports = fibonacci;
