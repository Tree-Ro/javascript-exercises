const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (args) {
    return args.reduce((partialSum, i) => partialSum + i, 0);
};

const multiply = function (args) {
    return args.reduce((partialSum, i) => partialSum * i, 1);
};

const power = function (base, exponent) {
    return base ** exponent;
};

const factorial = function (a) {
    let total = 1;
    for (; a > 0; --a) {
        total *= a;
    }
    return total;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
