const removeFromArray = function(array, ...removeList) {
    
    for (item of removeList){
        if (array.includes(item)) { // Ignores any item from removeList  not in array
            array.splice(array.indexOf(item), 1) // Removes item from array
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
