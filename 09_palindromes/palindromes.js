const palindromes = function (string) {
    const lowerCaseStr = string.toLowerCase();
    const nonAlphNum = lowerCaseStr.replace(/\W/g, '');
    const splitString = nonAlphNum.split('');
    const palindrome = splitString.reverse().join('');

    console.log(nonAlphNum, palindrome);
    return nonAlphNum === palindrome;
};

// Do not edit below this line
module.exports = palindromes;
