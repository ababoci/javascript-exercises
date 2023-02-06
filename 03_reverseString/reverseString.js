const reverseString = function(text) {
    let reverseText = "";
    let length = text.length;

    for (let i = 0; i<length; i++) {
        reverseText += text[length-1-i];
    }

    return reverseText;

};

// Do not edit below this line
module.exports = reverseString;
