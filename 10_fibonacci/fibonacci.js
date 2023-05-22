const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    let arr = [1, 1]
        for (let i = 0; i < (num - 2); i++) {
            arr.push((arr[i]) + (arr[i + 1]))
        }
    return arr[num - 1]
    }

// Do not edit below this line
module.exports = fibonacci;
