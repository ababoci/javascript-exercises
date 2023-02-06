const repeatString = function(text, num) {
    if (num < 0) return "ERROR";skip

    returnString = "";

    for (let i = num; i>0; i--) {
        returnString += text;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
