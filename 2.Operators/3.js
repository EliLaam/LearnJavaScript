// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Các phép so sánh
let i = 3;
let j = 3;
let k = "3";

console.log(typeof j);
console.log(typeof k);

// các phép so sánh thông thường giống toán học
console.log(i > j);
console.log(i < j);
console.log(i <= j);
console.log(i >= j);
console.log(i != j);
console.log(k != j); // lưu ý giữa số và chuỗi

// so sánh bằng == (không quan tâm đến kiểu của biến)
console.log(i == j);
console.log(k == j);

// So Sánh Tuyệt Đối (===) So sánh giá trị và kiểu dữ liệu.
console.log(i === j);
console.log(k === j);

console.log("Phần 2");
console.log(i != j);
console.log(k != j); // (không quan tâm đến kiểu của biến)

console.log(i !== j);
console.log(k !== j); //So sánh giá trị và kiểu dữ liệu.

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Toán tử logic
// &&: Cả 2 điều kiện phải đúng
// ||: Một trong điều kiện phải đúng
// ! : Phủ định đk (không được đúng với điều kiện)
let u = 7;

// kiểm tra xem u > 0 và u < 10 không?
console.log(u > 0 && u < 10); //true

// kiểm tra u<0 hoặc u<10 không?
console.log(u > 0 || u < 10); //true

// phủ định
console.log(!(u > 0 || u < 10)); //false
