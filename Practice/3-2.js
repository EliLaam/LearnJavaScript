// Bài tập 2: Hàm kiểm tra độ tuổi bỏ phiếu
// Viết một hàm nhận vào một độ tuổi
// trả về true nếu người đó đủ 18 tuổi trở lên để bỏ phiếu
// false nếu ngược lại.

// kh có parameter (cứng nhắc, không linh hoạt, làm nhiều việc)
function checkAge2() {
	let yourAge = prompt("Vui lòng nhập số tuổi vào đây");
	if (yourAge >= 18) {
		console.log("Bạn đủ tuổi bỏ phiếu");
	} else {
		console.log("Bạn không đủ tuổi");
	}
}
checkAge2();

// có parameter (nhưng vẫn sai cách sử dụng return, quá rườm rà, khó đọc)
function checkAge(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}

console.log(checkAge(10));
console.log(checkAge(35));

let canVote = prompt("Vui lòng nhập số tuổi");

if (checkAge(canVote) === true) {
	console.log("Bạn đủ tuổi bỏ phiếu");
} else {
	console.log("Bạn không đủ tuổi bỏ phiếu");
}

// HÃY TẬP CODE SẠCH VÀ RÕ RÀNG!!
// Phải luôn cố gắng viết các hàm "thuần túy": nhận đầu vào qua tham số và cung cấp đầu ra qua return.

// Thiết kế hàm checkAge tốt nhất
function canVote(age) {
	return age >= 18; // Trả về trực tiếp kết quả của phép so sánh (giá trị)
} // Ví dụ age là 20 thì "20 >= 18" => true => return true

// Phần xử lý logic bên ngoài
let userAge = prompt("Vui lòng nhập số tuổi");
let isEligible = canVote(userAge); // Gọi hàm và lưu kết quả (true/false) vào biến

if (isEligible) {
	// biến đã có sẵn kq chỉ cần check
	// Dùng biến boolean trực tiếp trong if
	console.log("Bạn đủ tuổi bỏ phiếu");
} else {
	console.log("Bạn không đủ tuổi bỏ phiếu");
}

// Tóm lại: keyword return cực kì linh hoạt, nó có thể vừa TÍNH TOÁN vừa TRẢ VỀ ALL KIỂU GIÁ TRỊ
// Dòng return age >= 18; là một cách viết tắt cực kỳ hiệu quả, nó làm 2 việc cùng lúc:
// Thực hiện phép so sánh age >= 18 để có được kết quả true hoặc false.
// Sử dụng return để trả về ngay lập tức cái kết quả true hoặc false đó.
