const sumAll = function(startNum, endNum) {

    if (!Number.isInteger(startNum) 
        || !Number.isInteger(endNum) 
        || (startNum < 0) || (endNum < 0) ) {
        return 'ERROR';
    }

    // Destructuring syntax:
    // It takes each variable on the array literal 
    // on the left-hand side and maps it to the same 
    // element at the same index in the array.
    if (startNum > endNum) [startNum, endNum] = [endNum, startNum];

    let sum = 0;
        for (let i = startNum; i <= endNum; ++i) {
            sum += i
        }
        return sum   
}

// Do not edit below this line
module.exports = sumAll;
