// Tại sao bạn nên sử dụng 'const' thay vì 'let' cho đối tượng trong JavaScript
// Với khai báo thường
var ar = 4;
console.log(ar);

var ar = 5; //     có thể tái định nghĩa => rất dễ bị trùng
console.log(ar);

let ab = 3;
console.log(ab);

// let ab = 5;      bị lỗi khi tái định nghĩa
// console.log(ab);

ab = 5; //          nhưng có thể thay đổi giá trị ==> rủi ro
console.log(ab);

// ==>> var cho phép tái định nghĩa, còn let thì không

const doSoi = 100;
// doSoi = 50;       ==>> không thể tái định nghĩa, thay đổi giá trị
console.log(doSoi);

// Áp dụng với Khai báo đối tượng (let)
let person = {
	name: "John",
	age: 30,
};
console.log(person);

// Thử thay đổi giá trị của person
person = 5;
console.log(person); //    bị thay đổi => rủi ro bị mất giá trị gốc

// ===>> Để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
const person2 = {
	name: "John",
	age: 30,
};
console.log(person);

// Thử thay đổi giá trị của person
// person2 = 5;
console.log(person2); //   không bị thay đổi (an toàn)

// Và tất nhiên chúng ta vẫn thêm, sửa, xóa thuộc tính bình thường
// Chỉ là 0 ghi đè được lại đối tượng đã khai báo
person2.isAdmin = true; // Thêm mới thuộc tính
person2.name = "Tom"; // Sửa thuộc tính
delete person2.age; // xóa thuộc tính

console.log(person2);

// ==>> Sử dụng const trong khai báo đối tượng để không bị thay đổi giá trị gốc
// Vẫn giữ nguyên được gốc là Object ban đầu thay vì bị đổi thành những giá trị khác
