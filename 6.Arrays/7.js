// Phương thức reduce()
// Dựa trên một hàm xử lý -> tính toán và trả về một giá trị duy nhất sau tính toán
/*	Syntax : reduce(function, [initialValue])
Tham số 1. function: Một hàm để thực thi cho từng phần tử trong mảng
Tham số 2. initialValue : Giá trị khởi tạo
*/

// I. Bài toán khi không dùng reduce()
let M1 = [3, 2, 3];
// Thực hiện tính tổng các phần tử trong mảng
// Giá trị khởi tạo ban đầu
let sum = 0;
for (let element of M1) {
	sum += element;
}
console.log("Tổng các phần tử trong mảng: " + sum);

// II. Khi dùng reduce()
/*  Tham số thứ 1: function(accumulator,currentValue,[currentIndex],[array])
accumulator: Giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm .
currentValue: Giá trị hiện tại đang xử lý trong mảng. 
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý. 
array: (Tùy chọn) Mảng đang được reduce. */

/*
1.Tham số thứ 2: initialValue giá trị khởi tạo của accumulator ban đầu,
2. Nếu bỏ trống initialValue: 
a. accumulator: tích lũy sẽ lấy giá trị đầu tiên trong mảng làm giá trị khởi tạo, 
và sẽ bắt đầu thực hiện từ phần tử thứ 2
b. Nếu mảng trống mà 0 có giá trị initialValue --> reduce() Sẽ báo lỗi
*/

// Nên dùng debug để xem
// let M1 = [3, 2, 3];
let sum2 = M1.reduce(
	// Tham số thứ 1: function
	(accumulator, currentValue, currentIndex, array) => {
		return accumulator + currentValue;
	} //,
	// Tham số thứ 2: initialValue (giá trị khởi tạo của accumulator)
	// 0
);
console.log(sum2);

// Rút gọn lại
let sum3 = M1.reduce((a, b) => a + b, 0);

console.log(sum3);
