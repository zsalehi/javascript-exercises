const leapYears = function(year) {
    let lYear;

    if (year % 4 === 0 && !(year % 100 === 0)) {
        lYear = true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        lYear = true;
    } else {
        lYear = false;
    }

    return lYear;

};


// Do not edit below this line
module.exports = leapYears;


// if (year) % 4 === 0  => true
// if year % 100 === 0 => false
// if year % 400 === 0 && year % 100 === 0 => true
// if (year) % 4 && !(year) % 100 NOT A LEAP YEAR
// if (year) % 400 