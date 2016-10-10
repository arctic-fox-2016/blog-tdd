function isEven(value) {
    if (value % 2 == 0) {
        return true
    } else {
        return false
    }

}

function isOdd(value) {
    if (value % 2 != 0) {
        return true
    } else {
        return false
    }

}

module.exports = {
    isEven,
    isOdd
}
