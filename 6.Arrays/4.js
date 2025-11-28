// Phương thức splice()
// splice(): là công cụ mạnh mẽ cho việc thay đổi cấu trúc của mảng
/*   Syntax: array.splice(start, deleteCount, item1, item2, ...);
start: Chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ được tính từ cuối mảng.
deleteCount: Số nguyên chỉ định số lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start. Nếu deleteCount là 0, không có phần tử nào bị loại bỏ.
item1, item2, ...: Các phần tử mới sẽ được thêm vào mảng từ vị trí start
*/

// 1. Loại bỏ phần tử từ mảng:
let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(2, 2); //xóa từ vị trí index 2 , xóa đi 2 phần tử
arr11.splice(-2, 2); //xóa từ vị trí index -2 , xóa đi 2 phần tử
console.log(arr11);

// 2. Thay thế phần tử trong mảng
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 1, 6); //xóa từ vị trí index 2, xóa đi 1 ký tự
//Thêm phần tử 6 từ vị trí index 2
console.log(arr12);

// 3. Thêm phần tử vào mảng:
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 7, 8, 9);
// Xóa 0 phần tử
// Thêm 6, 7, 8, 9 vào mảng từ vị trí index 2
console.log(arr13);
