//==============Lấy Danh Sách Người Dùng (Sử dụng Fetch và Promises)=============
// response.json() → Reads the response body and parses it as JSON, returning a Promise.
// Sử dụng vòng lặp (forEach hoặc for) để duyệt qua mảng data và console.log() ra thuộc tính name của mỗi người dùng.

// URL API ví dụ (JSON Placeholder)
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Gọi Fetch API mà không dùng async/await
fetch(apiUrl)
	.then((response) => {
		// Kiểm tra nếu HTTP status không OK
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json(); // Trả về Promise chứa dữ liệu JSON
	})
	.then((data) => {
		// Kiểm tra dữ liệu có phải mảng không
		if (!Array.isArray(data)) {
			throw new Error("Dữ liệu trả về không phải mảng");
		}

		// Duyệt qua mảng dữ liệu
		data.forEach((user, index) => {
			console.log(`${index + 1}: ${user.name}`);
		});
	})
	.catch((error) => {
		// Xử lý lỗi (mạng, parse JSON, HTTP error...)
		console.error("Lỗi khi fetch dữ liệu:", error.message);
	});

// Giải thích:
// fetch(apiUrl) trả về một Promise.
// .then(response => ...) xử lý phản hồi HTTP, kiểm tra response.ok để bắt lỗi HTTP.
// response.json() cũng trả về Promise, nên cần .then() tiếp theo.
// data.forEach(...) duyệt qua mảng dữ liệu.
// .catch(...) bắt mọi lỗi trong chuỗi Promise.
// array.forEach(function(currentValue, index, array) {
// Your code here
// }, thisArg);

// 💡 Nếu bạn muốn lặp tuần tự qua từng phần tử và thực hiện tiếp các request khác (mà vẫn không dùng async/await), bạn có thể dùng Promise chaining hoặc Array.reduce() để nối chuỗi Promise.

// Dưới đây là ví dụ hoàn chỉnh về cách fetch dữ liệu từ API và duyệt qua mảng kết quả bằng nhiều kiểu vòng lặp trong JavaScript.

// Code ví dụ:
// URL API mẫu (trả về mảng JSON)
// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Hàm fetch và duyệt mảng
async function fetchAndLoopData() {
	try {
		const response = await fetch(apiUrl);

		// Kiểm tra phản hồi hợp lệ
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		// Kiểm tra dữ liệu có phải mảng không
		if (!Array.isArray(data)) {
			throw new Error("Dữ liệu trả về không phải là mảng");
		}

		console.log("--- Duyệt bằng for ---");
		for (let i = 0; i < data.length; i++) {
			console.log(`${i + 1}. ${data[i].name}`);
		}

		console.log("--- Duyệt bằng for...of ---");
		for (const user of data) {
			console.log(user.name);
		}

		console.log("--- Duyệt bằng forEach ---");
		data.forEach((user, index) => {
			console.log(`${index + 1}: ${user.name}`);
		});

		console.log("--- Duyệt bằng map (tạo mảng mới) ---");
		const names = data.map((user) => user.name);
		console.log(names);
	} catch (error) {
		console.error("Lỗi khi fetch dữ liệu:", error.message);
	}
}

// Gọi hàm
fetchAndLoopData();

// Giải thích:
// fetch(apiUrl): Gửi yêu cầu HTTP GET đến API.
// await response.json(): Chuyển dữ liệu JSON thành object/mảng JavaScript.
// Kiểm tra Array.isArray(data): Đảm bảo dữ liệu trả về là mảng.
// Các cách duyệt mảng:

// for: Truy cập theo chỉ số.
// for...of: Lấy trực tiếp từng phần tử.
// forEach: Gọi callback cho từng phần tử.
// map: Tạo mảng mới từ dữ liệu cũ.

// ✅ Ưu điểm:
// Có xử lý lỗi khi fetch hoặc dữ liệu không đúng định dạng.
// Dễ thay đổi API hoặc phương thức duyệt mảng.
