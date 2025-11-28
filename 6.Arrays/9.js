// Phương thức map()
/* map() được dùng để tạo ra một mảng mới từ mảng ban đầu bằng cách áp dụng 1 hàm
(callback) cho mỗi phần tử của mảng đó. Điều này giúp ta chuyển đổi, xử lí dữ liệu 
một cách dễ dàng mà không làm thay đổi mảng gốc
*/
/*  Syntax: map(function)
- function(currentValue,index,arr)
currentValue: Giá trị của phần tử hiện tại
index(tùy chọn): Vị trí của phần tử hiện tại
arr(tùy chọn): Mảng gốc
thisArg(tùy chọn): Giá trị dùng làm this khi gọi callback
*/

//Ví dụ 1: Nhân đôi giá trị của các phần tử trong mảng
const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

//Ví dụ 2: Chuyển đổi mảng các đối tượng thành mảng các tên
const users = [
	{ id: 1, name: "An", age: 25 },
	{ id: 2, name: "Bình", age: 30 },
	{ id: 3, name: "Châu", age: 28 },
];

const names = users.map((abc) => abc.age);
console.log(names);

//ví dụ 3: sử dụng đầy đủ tham số currentValue, index và arr
const M = [10, 20, 30, 40];

const result = M.map(function (currentValue, index, oidoioi) {
	console.log(`index: ${index}`);
	console.log(`gia tri hien tai: ${currentValue}`);
	console.log(`mang goc: ${oidoioi}`);
	return currentValue / 10;
});

console.log(result);

//ví dụ 4: Đối số thisArg: giá trị dùng làm this khi gọi callback
/* thisArg giúp bạn gán ngữ cảnh cho callback: Cho phép bên trong callback của map()
truy cập trực tiếp vào các thuộc tính, phương thức của đối tượng truyền vào*/

const config = {
	calculate(value) {
		return value * 3;
	},
};

const M2 = [1, 2, 3];
// const kq = M2.map(function (oidoioi) {
//   return this.calculate(oidoioi);
// }, config);  ////truyền config làm thisArg

const kq = M2.map((oidoioi) => {
	return this.calculate(oidoioi);
}, config);

console.log(kq);
