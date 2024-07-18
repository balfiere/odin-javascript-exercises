const removeFromArray = function(array, ...toRemove) {
    toRemove.forEach((index) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === index) {
                array.splice(i, 1);
                i--;
            }
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
