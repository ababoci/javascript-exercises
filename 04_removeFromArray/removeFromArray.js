const removeFromArray = function(array, ...toRemove) {
    return array.filter((arrayElement) => {
        if (toRemove.includes(arrayElement)) return false;

        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
