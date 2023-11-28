const findTheOldest = function (arr) {
    arr.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
    });

    arr.sort((a, b) => b.age - a.age); //Sort oldest to youngest
    return arr[0]; //Return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
