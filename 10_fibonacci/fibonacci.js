const fibonacci = function(val) {
    if (val < 0) return "OOPS";
    if (val < 3) return 1;

    let lastNumber = 1;
    let currentNumber = 1;

    for (let i = 3; i <= val; i++) {
        sum = lastNumber + currentNumber;
        lastNumber = currentNumber;
        currentNumber = sum;
    }

    return sum;

};

// Do not edit below this line
module.exports = fibonacci;
