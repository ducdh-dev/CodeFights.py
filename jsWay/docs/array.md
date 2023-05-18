1. Các phương thức thêm và xóa phần tử của mảng
`arr.push(num1, num2, ...);`
Thêm một hoặc nhiều phần tử vào cuối mảng
```
let arr = [1, 2];
let num1 = 3;
let num2 = 4;
arr.push(num1, num2);
console.log(arr);
[1, 2, 3, 4]
```

`arr.unshift(num1, num2, ...);`
Thêm một hoặc nhiều phần tử vào đầu mảng
```
let arr = [1, 2];
let num1 = 3;
let num2 = 4;
arr.unshift(num1, num2);
console.log(arr);
[3, 4, 1, 2]
```

`arr.pop();`
Lấy ra phần tử cuối cùng của mảng
```
let arr = [1, 2];
arr.pop();
console.log(arr);
[1]
```

`arr.shift();`
Lấy ra phần tử đầu tiên của mảng
```
let arr = [1, 2];
arr.shift();
console.log(arr);
[2]
```

`delete arr[index]`
Xoá giá trị của 1 phần tử ở key truyền vào và không làm thay đổi chiều dài của mảng
```
let arr = [1, 2, 3];
delete arr[1];
console.log(arr)
[1, empty, 3]
```

`arr.splice(index, n, num1, num2, ...)`
Xóa n phần tử từ vị trí key truyền vào và chèn thêm num1, num2... vào vị trí đó
```
let arr = [1, 2, 3, 4];
arr.splice(1, 1, 5, 6, 7);
console.log(arr);
[1, 5, 6, 7, 3, 4]
```

index là bắt buộc
n và các num1, num2... ko bắt buộc
nếu n ko dc truyền vào thì splice sẽ xõa các phần tử từ index đến cuối mảng
```
let arr = [1, 2, 3, 4];
arr.splice(2);
console.log(arr);
[1, 2]
```

đặc điểm chung của các phương thức push, unshift, pop, shift, delete, splice là thay đổi mảng gốc.



`arr1.concat(arr2, arr3, ...)`
Tạo mảng mới bao gồm các phần tử của các mảng arr1, arr2, arr3...
```
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
arr1.concat(arr2, arr3)
[1, 2, 3, 4, 5, 6]
```

`arr.slice(start, end)`
Tảo mảng mới từ vị trí start tới end
```
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3);
[2, 3]
```

đặc điểm chung của các phương thức concat, slice là không thay đổi mảng gốc.