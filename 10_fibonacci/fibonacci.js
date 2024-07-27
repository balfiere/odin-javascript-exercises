const fibonacci = function(num) {
    num = parseInt(num);

    function fibonacci(num) {
        if (num === 0) return 0;
        else if (num === 1) return 1;
        else return fibonacci(num - 1) + fibonacci(num - 2);
    }

    if (num < 0) {
        return "OOPS";
    } else {
        return fibonacci(num);
    }
};

// Do not edit below this line
module.exports = fibonacci;
