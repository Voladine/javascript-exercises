const palindromes = function (words) {
    const str = words
        .toLowerCase()
        .replaceAll(' ', '')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s{2,}/g, " ")
    let arr = []
        for (let i = 0; i < str.length; i++) {
            arr[i] = str[i]
            }
    let arrReverse = [...arr].reverse() 

    let strReverse = ""
        for (let i = 0; i < arrReverse.length; i++) {
            strReverse += arrReverse[i]
            }

    if (str === strReverse) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
