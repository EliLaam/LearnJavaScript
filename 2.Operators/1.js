// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Các phép toán cơ bản
let a = 7;
let b = 2;

let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = a / b;
let soDu = a % b;

// xuất kết quả
console.log("Tổng 2 số: " + tong);
console.log("Hiệu 2 số: " + hieu);
console.log("Tích 2 số: " + tich);
console.log("Thương 2 số: " + thuong);
console.log("Số dư của phép chia a cho b là: " + soDu);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Ưu tiên ()
let diemToan = 9.5;
let diemVan = 8.75;

let dtb = (diemToan + diemVan) / 2;
console.log(dtb);

// right to left
let l = (v = 25);
// left to right
let lr = 25 - 7 + 8 - 1;

// Nhân chia trước, cộng trừ sau
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

// Từ phải qua trái do có **
console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let c;
let d;

console.log((c = d = 5)); // same as writing c = (d = 5);
// Expected output: 5

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/* Ép kiểu dữ liệu:
    Mặc định dữ liệu nhập vào hàm prompt là kiểu string
    Đôi khi cần thực hiện tính toán với dữ liệu nhập vào => Cần ép kiểu trc khi tính toán */
// xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("Mời bạn nhập vào numberA: ");
// check thử kiểu loại biến numberA
console.log(typeof numberA);
// thử thực hiện tính toán ( nếu chưa ép kiểu )
let numberB = 5;
console.log(typeof numberB);
// cộng A với B
let kq = numberA + numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq);
// vd a = 8, kết quả 85 --> sai, js hiểu là cộng chuỗi

// Các phép tính khác
console.log(`A-B= %s`, numberA - numberB);
console.log(`A*B= %s`, numberA * numberB);
console.log(`A/B= %s`, numberA / numberB);
console.log(`A%B= %s`, numberA % numberB);
// Những phép tính này được js ép kiểu dữ liệu number vì kiểu chuỗi kh có các phép tính này

// ép kiểu dữ liệu nhập vào dùng prompt
// xuất thông báo cho người dùng nhập vào số C
let numberC = parseInt(prompt("Mời bạn nhập vào numberC: "));
console.log("kiểu dữ liệu của numberC: " + typeof numberC);
console.log(numberC + numberB);

// ép sang kiểu số thực Float
let numberD = parseFloat(prompt("Mời bạn nhập numberD: "));
console.log("kiểu dữ liệu của numberD: " + typeof numberD);
console.log(numberB + numberD);

// Hoặc đơn giản dùng hàm Number() để ép --> Kiểu dữ liệu number
let numberE = Number(prompt("Mời bạn nhập numberE: "));
// kiểm tra kiểu dữ liệu của numberE
console.log("kiểu dữ liệu của numberE: " + typeof numberE);
console.log(numberB + numberE);
