// Phương thức filter(): Trích lọc các phần tử thỏa mãn điều kiện của hàm
/* Dựa trên 1 hàm xử lí -> để tạo ra một mảng mới từ mảng đã cho, chỉ chứa các phần tử 
thỏa mãn một điều kiện nhất định được xác định bởi hàm */
/*  Syntax: array.filter(function)
-function(currentValue, [currentIndex] , [array])
Hàm được gọi với những đối số sau: 
currentValue: Giá trị hiện tại đang xử lý trong mảng. 
currentIndex: (Tùy chọn) Chỉ số của phần tử đang xử lý. 
array: (Tùy chọn) Mảng đang được duyệt.
*/

let numbers = [1, 2, 3, 4, 5];
// Tìm những số chẵn trong mảng
let evenNumbers = numbers.filter(
	// Function
	(value, index, array) => value % 2 === 0
);
console.log(evenNumbers); // Output: [2,4]
