const reverseString = function(string) {
    const array = string.split("")
    const reverseArray = array.reverse()
    const joinString = reverseArray.join("")
    
    return joinString
    };

// Do not edit below this line
module.exports = reverseString;
