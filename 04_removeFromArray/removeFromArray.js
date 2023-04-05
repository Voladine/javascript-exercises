const removeFromArray = function(array, num) {
    const args = Array.from(arguments);
                    args.shift()
        for (let i = 0; i < args.length; i++) {
            const index = array.indexOf(args[i]);
                if (index != -1) {
                    array.splice(index, 1);
                }
        }
    
        return array
    }

// Do not edit below this line
module.exports = removeFromArray;
