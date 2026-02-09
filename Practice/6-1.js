// Bài tập 1: Thông Tin Cá Nhân
// Tạo một đối tượng để lưu trữ thông tin cơ bản về một người.

let person = {
	fistName: "Lam",
	lastName: "Eli",
	age: 18,
	isStudent: true,
};

console.log(person);
console.log(person.fistName);
console.log(person["age"]);
console.log("--------------------");

// Bài tập 2: Cập Nhật Thông Tin Sách
// Mô phỏng việc cập nhật thông tin cho một cuốn sách trong thư viện.

let book = {
	title: "100 ways to successful",
	author: "Eli",
	year: 2020,
};

console.log(book);

// Cập nhật năm xuất bản
book.year = "2025";
// Thêm một thuộc tính mới là genre (thể loại)
book.genre = "experience";
// Xóa thuộc tính year khỏi đối tượng
delete book.year;
// Kiểm tra lại
console.log(book);
console.log("--------------------");

// Bài tập 3: "Hành Động" Của Đối Tượng (Methods)
// Tạo một đối tượng car có thể tự "giới thiệu" về bản thân.

let car = {
	brand: "lamborghini",
	model: "black",
	introduce: function () {
		// dùng this để lấy thông tin đối tượng
		console.log("đây là hãng xe", this.brand, "có màu", this.model);
	},
};

// gọi phương thức
car.introduce();
