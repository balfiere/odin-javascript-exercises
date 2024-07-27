const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");

    let returnString = "";

    for (let i = str.length; i > 0; i--) {
        returnString += str.charAt(i-1);
    }

    return returnString === str;
};

// Do not edit below this line
module.exports = palindromes;
