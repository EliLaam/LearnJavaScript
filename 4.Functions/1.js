//Khái niệm

/*
Bài toán: Tính tổng 2 số
a. 7 , 5 
b. 9, 6
c. 10, 5
*/

// a. 7 , 5
let a = 7;
let b = 5;
let tong = a + b;
console.log(tong);

// b. 9, 6
let a1 = 9;
let b1 = 6;
let tong1 = a + b;
console.log(tong1);
//==> Bị lặp code

// =-=-= 1. Khai báo function =-=-=-------
// Bước 1: Khai báo
function tenFunction() {
	// Mã lệnh thực hiện một nhiệm vụ nào đó
}
// Bước 2: Gọi hàm - khi cần sử dụng
tenFunction();

// Ví dụ đơn giản
// Bước 1: Khai báo
function xinChao() {
	console.log("Chào mừng đến với website");
}
// Bước 2: Gọi hàm
xinChao();
xinChao(); //Ngắn gọn không trùng code
// ==> Dành cho những code lặp không thay đổi nội dung

// =-=-= 2. Function với tham số (parameters) =-=-=--------
let inputName = prompt("Mời nhập vào tên của bạn:");

// Khai báo hàm
function xinChao2(name) {
	//name đang là tham số của xinChao2 (không có nội dung)
	console.log(`Chào mừng ${name} đến với website`);
}
// Gọi hàm
xinChao2(inputName); //Lúc này tham số name sẽ trở thành biến inputName (content của người dùng)
xinChao2("Phải cố gắng"); //tham số name trở thành chuỗi "Phải cố gắng"
//Dòng lệnh này cho biết GIÁ TRỊ đang trả về là kiểu gì (kết quả là undefined)
console.log(xinChao2("Phải cố gắng"));

// ==>> Chú ý :
//Thân hàm nếu không có return thì giá trị trả về là undefined

// --Trường hợp Sử dụng keyword return trong thân hàm
function tinhTong(a, b) {
	// let ketQua = a + b;
	// return ketQua;
	return a + b; //rút gọn
}

// Gọi hàm, gán tham số trực tiếp
console.log(tinhTong(5, 7));

// Gán biến cho hàm (lưu giá trị trả về vào biến)
let diemToan = 8;
let diemVan = 9.5;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(`tongDiem = ${tongDiem}`);
console.log(`DTB = ${tongDiem / 2}`);

// Truyền giá trị mặc định cho parameters
console.log(tinhTong(10));

function tinhTong2(a = 0, b = 0) {
	return a + b;
}
console.log(tinhTong2(5));
