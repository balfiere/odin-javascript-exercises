const reverseString = function(string) {
    let returnString = "";

    for (let i = string.length; i > 0; i--) {
        returnString += string.charAt(i-1);
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
