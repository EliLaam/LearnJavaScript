// Bài tập 3: Giải PT Bậc 2 Bằng Functions
// Sử dụng object basic + function viết chương trình giải phương trình bậc 2 : ax^2 + bx + c =0
function giaiPhuongTrinhBac2(a, b, c) {
	const delta = b ** 2 - 4 * a * c;

	if (delta > 0) {
		const x1 = (-b + Math.sqrt(delta)) / (2 * a);
		const x2 = (-b - Math.sqrt(delta)) / (2 * a);
		// Trả về một đối tượng rõ ràng
		return {
			loaiNghiem: "2 nghiệm phân biệt",
			nghiem: { x1: x1, x2: x2 },
		};
	} else if (delta === 0) {
		const x = -b / (2 * a);
		// Trả về đối tượng cho trường hợp nghiệm kép
		return {
			loaiNghiem: "Nghiệm kép",
			nghiem: x,
		};
	} else {
		// Trả về đối tượng cho trường hợp vô nghiệm
		return {
			loaiNghiem: "Vô nghiệm",
			nghiem: null,
		};
	}
}

// --- Phần xử lý hiển thị ---

function hienThiKetQua(a, b, c) {
	const ketQua = giaiPhuongTrinhBac2(a, b, c); // gán kq nhận đc từ hàm giaiPTB2

	console.log(`Kết quả của phương trình ${a}x^2 + ${b}x + ${c} = 0:`);

	if (ketQua.loaiNghiem === "2 nghiệm phân biệt") {
		console.log("Phương trình có 2 nghiệm phân biệt:");
		console.log(`x1 = ${ketQua.nghiem.x1}`);
		console.log(`x2 = ${ketQua.nghiem.x2}`);
	} else if (ketQua.loaiNghiem === "Nghiệm kép") {
		console.log(`Phương trình có nghiệm kép: x = ${ketQua.nghiem}`);
	} else {
		console.log("Phương trình vô nghiệm.");
	}
	console.log("--------------------"); // Thêm dòng ngăn cách cho dễ đọc
}

// Gọi hàm hiển thị để kiểm tra
hienThiKetQua(1, 2, -3);
hienThiKetQua(1, 2, 1);
hienThiKetQua(1, 1, 1);
