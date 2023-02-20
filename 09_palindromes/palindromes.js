const palindromes = function (word) {
    word = word.toLowerCase()
    word = word.replace(/\W|_/g, '');
    for (let i = 0; i <= word.length / 2; i++) {
        if (word[i] === word[word.length - 1 - i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
