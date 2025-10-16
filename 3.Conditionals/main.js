// Xuất thông báo cho người dùng nhập điểm
let hk1 = Number(prompt("Mời nhập điểm:"));

// kiểm tra điều kiện
if (hk1 >= 5.0) {
	console.log("Bạn đã đỗ");
} else {
	console.log("Bạn đã tạch");
}

// Luyện tập:
/*
Nhập vào điểm TB, in ra xếp loại của học sinh 
	Giỏi: dtb <= 10 và dtb >= 8
	Khá : 8 > dtb >= 6.5
	TB : 6.5 > dtb >= 5
	Yếu: 0 <= dtb < 5
*/

let dtb = Number(prompt("Mời nhập điểm:"));

// kiểm tra điều kiện
if (dtb <= 10 && dtb >= 8) {
	console.log("Học sinh giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
	console.log("Học sinh khá");
} else if (dtb < 6.5 && dtb >= 5) {
	console.log("Học sinh TB");
} else if (dtb >= 0 && dtb < 5) {
	console.log("Học sinh yếu");
} else {
	console.log("Bạn nhập điểm tào lao");
}

/*
Tìm x, y khi biết tổng và hiệu của chúng 
case test : Tong = 14 ,hieu = 4 => x=9, y = 5 
case 2     : Tong = 8 hieu = 5 => x=6.5, y = 1.5
Gợi ý :   
x + y = tong
x -  y = hieu
Phân tích toán học :
Cộng vế: 2x = tong+hieu --> x = (tong+hieu) / 2
từ phương trình 2 --> y = x - hieu
*/

// Nhập liệu từ bàn phím
let tong = Number(prompt("Mời nhập tổng 2 số:"));
let hieu = Number(prompt("Mời nhập hiệu 2 số:"));

// Tính giá trị của x
let x = (tong + hieu) / 2;

// Tính giá trị của y
let y = x - hieu;

// Xuất kết quả
console.log("x = " + x);
console.log("y = " + y);
