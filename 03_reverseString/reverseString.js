const reverseString = function(string) {
    let stringReversed = '';

    for (i = string.length; i > 0; --i) {
        stringReversed += string.substring(i - 1, i)
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
