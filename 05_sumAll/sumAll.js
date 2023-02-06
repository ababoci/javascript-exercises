const sumAll = function(a, b) {

    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
    }

    let sum = 0;
    let lower;
    let upper;

    if (a < b) {
        lower = a;
        upper = b;
    }
    else {
        lower = b;
        upper = a;
    }

    for (;lower <= upper; lower++) {
        sum += lower;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
