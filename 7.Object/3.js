// Tại sao bạn nên sử dụng 'const' thay vì 'let' cho đối tượng trong JavaScript
// 1. let cho phép tái định nghĩa, còn const thì không

let a = 5;
console.log(a);
a = 9;
console.log(a);

const doSoi = 100;
// doSoi = 50;  không thể tái định nghĩa
console.log(doSoi);

// Khai báo đối tượng sử dụng let
let person = {
	name: "John",
	age: 30,
};
console.log(person);

// Thử thay đổi giá trị của person
person = 5;
console.log(person); // bị thay đổi

// Để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
const person2 = {
	name: "John",
	age: 30,
};
console.log(person);

// Thử thay đổi giá trị của person
// person2 = 5;
console.log(person2); // không bị thay đổi

// Và tất nhiên chúng ta vẫn thêm, sửa, xóa thuộc tính bình thường,
// chỉ là 0 ghi đè được lại đối tượng đã khai báo
person2.isAdmin = true; //Thêm mới thuộc tính cho person 2
person2.name = "Tom"; //Sửa thuộc tính
delete person2.age; //xóa thuộc tính

console.log(person2);
