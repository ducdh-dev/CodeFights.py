
const arr = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5]

function getDepth(length) {
    let depth = 0;
    while (length > 0) {
        depth++;
        length = Math.floor(length / 2);
    }
    return depth;
}

console.log(Math.ceil(Math.log(arr.length + 1) / Math.log(2)))

console.log(getDepth(arr.length))