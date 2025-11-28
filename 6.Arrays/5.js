// Toán tử Spread (...) - ES6
// Syntax: ...array
/* Toán tử spread(...) là một toán tử mới được thêm vào từ phiên bản ES6
Spread cho phép duyệt qua lần lượt các phần tử -> Và qua đó ta có thể thực hiện
1. Tạo bản sao(clone) của mảng
2. Truyền đối số vào hàm
3. Kết hợp mảng (nối mảng)
4. Tạo mảng mới với thêm phần tử
5. Chuyển đổi iterable (có thể duyệt qua: string,arr) thành mảng */

// 1. Tạo bản sao (clone) của mảng:
// Tạo ra mảng mới nằm trên ô nhớ mới, có phần tử giống hệt mảng gốc
let M1 = [1, 2, 3];
let M2 = [...M1];
// có thể dùng phương thức slice() tương tự
// let M2 = M1.slice();
console.log(M2);

// Mảng M2 là clone của M1 , và thay đổi giá trị của M2 không liên quan đến M1
M2[0] = 99;
console.log("Mảng M2 = " + M2);
console.log("Mảng M1 = " + M1);

// 2. Truyền đối số vào hàm:
function sum(a, b, c) {
	return a + b + c;
}

let numbers = [5, 2, 3];
let result = sum(...numbers);
console.log(result);

// 3. Kết hợp mảng:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArr = [...arr1, ...arr2];
console.log(combineArr);

// 4. Tạo mảng mới với thêm phần tử:
let M3 = [1, 2, 3];
let M4 = [...M3, 4, 5, 9];
console.log(M4);
console.log(M3);

// 5. Chuyển đổi iterable thành mảng:
let myName = "jacky";
let chars = [...myName];
console.log(chars);
