const fibonacci = function (n) {
    if (Math.sign(+n) === -1) {
        return 'OOPS';
    }

    const PHI = (1 + Math.sqrt(5)) / 2;
    const nTerm = (PHI ** +n - (1 - PHI) ** +n) / Math.sqrt(5);
    return Math.floor(nTerm);
};

// Do not edit below this line
module.exports = fibonacci;
