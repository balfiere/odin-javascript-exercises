const repeatString = function(string, times) {
    let returnString = "";

    if (times < 0) {
        return "ERROR";
    } else if (times === 0) {
        return "";
    } else {
        for (let i = 0; i < times; i++) {
            returnString += string;
        }
        return returnString;
    }
};

// Do not edit below this line
module.exports = repeatString;
