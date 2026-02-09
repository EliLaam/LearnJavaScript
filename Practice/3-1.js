// Bài tập 1: Hàm chuyển đổi tiền tệ
// Viết hàm chuyển đổi tiền tệ USD sang VN

// tạo hàm có chứa parameter
function convertUsdToVnd(usdAmount) {
	let exchangeRate = usdAmount * 25000; // tỷ giá usd sang vn xấp xỉ 25k
	// đặt tên biến kh rõ ràng, kq trả về đc gọi là finalAmount
	return exchangeRate; // return dư thừa
}

// gọi hàm
console.log(convertUsdToVnd(10));
console.log(convertUsdToVnd(25));

// lấy giá trị từ ng dùng
let usdNeedChange = Number(prompt("Nhập số tiền (USD) cần chuyển vào đây"));
console.log(
	`${usdNeedChange} USD sang VND là:`,
	convertUsdToVnd(usdNeedChange)
);

// Phải luôn cố gắng viết các hàm "thuần túy": nhận đầu vào qua tham số và cung cấp đầu ra qua return.
// HÃY TẬP CODE SẠCH VÀ RÕ RÀNG!!

// Cách 1: Tách tỷ giá ra làm hằng số
// gán giá trị bên ngoài
const USD_TO_VND_RATE = 25000; // tên hằng số phải viết hoa, rõ ràng

// Hàm này chỉ làm một việc: nhân số tiền với tỷ giá
function convertUsdToVnd2(usdAmount2) {
	return usdAmount2 * USD_TO_VND_RATE; // trả thẳng về giá trị sau khi tính toán
}

// gán prompt và gọi hàm (bonus) hoặc chỉ cần dùng console gọi là đủ
let yourAmount = prompt("Nhập số tiền USD cần đổi sang VND");
console.log("Số tiền chuyển sang VND là:", convertUsdToVnd2(yourAmount));

// Cách 2: Linh hoạt hơn (tốt nhất)
// Nhận cả tỷ giá làm tham số
function convertCurrencyV2(amount, rate) {
	return amount * rate;
}

// Sử dụng console cho nhanh hoặc dùng prompt nếu muốn
console.log("10 USD sang VND là:", convertCurrencyV2(10, 25000));
console.log("10 EUR sang VND là:", convertCurrencyV2(10, 27000)); // Cực kỳ linh hoạt
