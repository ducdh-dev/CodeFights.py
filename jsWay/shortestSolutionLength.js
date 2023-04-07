function solution(source) {
    let result = source.map(item => {
        return item.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g,'')
    })
    return result.join('').replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*| /g,'').length
}

source = ["var a = 2;",
    "/*",
    "var b = 2;",
    "if (a === b) {",
    "  b = a + 1;",
    "  //b = a * 2 - 1;",
    "}",
    "*/",
    "var b = 3;",
    "return a * b;"]
//24

source2 = ["int a = 2;",
    "int b = 47;/*37;*///41;",
    "int c = 3/*4//5*/;",
    "return a / b * c/*a /* b / c*/;"]
//34

console.log(solution(source))