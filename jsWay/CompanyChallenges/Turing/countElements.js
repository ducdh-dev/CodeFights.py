const countElements = function(arr) {
    return new Set(arr).size;
}

const arr = '1 1 2 2 9 8'.split(" ").map(num => parseInt(num));

console.log(countElements(arr));
